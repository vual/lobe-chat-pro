import debug from 'debug';
import { and, eq } from 'drizzle-orm';
import { z } from 'zod';

import { AsyncTaskModel } from '@/database/models/asyncTask';
import {
  NewGeneration,
  NewGenerationBatch,
  asyncTasks,
  generationBatches,
  generations,
} from '@/database/schemas';
import { authedProcedure, router } from '@/libs/trpc/lambda';
import { keyVaults, serverDatabase } from '@/libs/trpc/lambda/middleware';
import { createAsyncCaller } from '@/server/routers/async/caller';
import { FileService } from '@/server/services/file';
import {
  AsyncTaskError,
  AsyncTaskErrorType,
  AsyncTaskStatus,
  AsyncTaskType,
} from '@/types/asyncTask';
import { generateUniqueSeeds } from '@/utils/number';

const log = debug('lobe-image:lambda');

const imageProcedure = authedProcedure
  .use(keyVaults)
  .use(serverDatabase)
  .use(async (opts) => {
    const { ctx } = opts;

    const { apiKey } = ctx.jwtPayload;
    if (apiKey) {
      log('API key found in jwtPayload: %s', apiKey);
    } else {
      log('No API key found in jwtPayload');
    }

    return opts.next({
      ctx: {
        asyncTaskModel: new AsyncTaskModel(ctx.serverDB, ctx.userId),
        fileService: new FileService(ctx.serverDB, ctx.userId),
      },
    });
  });

const createImageInputSchema = z.object({
  generationTopicId: z.string(),
  imageNum: z.number(),
  model: z.string(),
  params: z
    .object({
      cfg: z.number().optional(),
      height: z.number().optional(),
      imageUrls: z.array(z.string()).optional(),
      prompt: z.string(),
      seed: z.number().nullable().optional(),
      steps: z.number().optional(),
      width: z.number().optional(),
    })
    .passthrough(),
  provider: z.string(),
});
export type CreateImageServicePayload = z.infer<typeof createImageInputSchema>;

export const imageRouter = router({
  createImage: imageProcedure.input(createImageInputSchema).mutation(async ({ input, ctx }) => {
    const { userId, serverDB, asyncTaskModel, fileService } = ctx;
    const { generationTopicId, provider, model, imageNum, params } = input;

    log('Starting image creation process, input: %O', input);

    // 如果 params 中包含 imageUrls，将它们转换为 S3 keys 用于数据库存储
    let configForDatabase = { ...params };
    if (Array.isArray(params.imageUrls) && params.imageUrls.length > 0) {
      log('Converting imageUrls to S3 keys for database storage: %O', params.imageUrls);
      try {
        const imageKeys = params.imageUrls.map((url) => {
          const key = fileService.getKeyFromFullUrl(url);
          log('Converted URL %s to key %s', url, key);
          return key;
        });

        // 将转换后的 keys 存储为数据库配置
        configForDatabase = {
          ...params,
          imageUrls: imageKeys,
        };
        log('Successfully converted imageUrls to keys for database: %O', imageKeys);
      } catch (error) {
        log('Error converting imageUrls to keys: %O', error);
        // 如果转换失败，保持原始 URLs（可能是本地文件或其他格式）
        log('Keeping original imageUrls due to conversion error');
      }
    }

    // 步骤 1: 在事务中原子性地创建所有数据库记录
    const { batch: createdBatch, generationsWithTasks } = await serverDB.transaction(async (tx) => {
      log('Starting database transaction for image generation');

      // 1. 创建 generationBatch
      const newBatch: NewGenerationBatch = {
        config: configForDatabase,
        generationTopicId,
        height: params.height,
        model,
        prompt: params.prompt,
        provider,
        userId,
        width: params.width, // 使用转换后的配置存储到数据库
      };
      log('Creating generation batch: %O', newBatch);
      const [batch] = await tx.insert(generationBatches).values(newBatch).returning();
      log('Generation batch created successfully: %s', batch.id);

      // 2. 创建 4 个 generation（一期固定生成 4 张）
      const seeds =
        'seed' in params
          ? generateUniqueSeeds(imageNum)
          : Array.from({ length: imageNum }, () => null);
      const newGenerations: NewGeneration[] = Array.from({ length: imageNum }, (_, index) => {
        return {
          generationBatchId: batch.id,
          seed: seeds[index],
          userId,
        };
      });

      log('Creating %d generations for batch: %s', newGenerations.length, batch.id);
      const createdGenerations = await tx.insert(generations).values(newGenerations).returning();
      log(
        'Generations created successfully: %O',
        createdGenerations.map((g) => g.id),
      );

      // 3. 并发为每个 generation 创建 asyncTask（在事务中）
      log('Creating async tasks for generations');
      const generationsWithTasks = await Promise.all(
        createdGenerations.map(async (generation) => {
          // 在事务中直接创建 asyncTask
          const [createdAsyncTask] = await tx
            .insert(asyncTasks)
            .values({
              status: AsyncTaskStatus.Pending,
              type: AsyncTaskType.ImageGeneration,
              userId,
            })
            .returning();

          const asyncTaskId = createdAsyncTask.id;
          log('Created async task %s for generation %s', asyncTaskId, generation.id);

          // 更新 generation 的 asyncTaskId
          await tx
            .update(generations)
            .set({ asyncTaskId })
            .where(and(eq(generations.id, generation.id), eq(generations.userId, userId)));

          return { asyncTaskId, generation };
        }),
      );
      log('All async tasks created in transaction');

      return {
        batch,
        generationsWithTasks,
      };
    });

    log('Database transaction completed successfully. Starting async task triggers directly.');

    // 步骤 2: 直接执行所有生图任务（去掉 after 包装）
    log('Starting async image generation tasks directly');

    try {
      log('Creating unified async caller for userId: %s', userId);
      log(
        'Lambda context - userId: %s, jwtPayload keys: %O',
        ctx.userId,
        Object.keys(ctx.jwtPayload || {}),
      );

      // 使用统一的 caller 工厂创建 caller
      const asyncCaller = await createAsyncCaller({
        jwtPayload: ctx.jwtPayload,
        userId: ctx.userId,
      });

      log('Unified async caller created successfully for userId: %s', ctx.userId);
      log('Processing %d async image generation tasks', generationsWithTasks.length);

      // 启动所有图像生成任务（不等待完成，真正的后台任务）
      generationsWithTasks.forEach(({ generation, asyncTaskId }) => {
        log('Starting background async task %s for generation %s', asyncTaskId, generation.id);

        // 不使用 await，让任务在后台异步执行
        // 这里不应该 await 也不应该 .then.catch，让 runtime 早点释放计算资源
        asyncCaller.image.createImage({
          generationId: generation.id,
          model,
          params,
          provider,
          taskId: asyncTaskId, // 使用原始参数
        });
      });

      log('All %d background async image generation tasks started', generationsWithTasks.length);
    } catch (e) {
      console.error('[createImage] Failed to process async tasks:', e);
      log('Failed to process async tasks: %O', e);

      // 如果整体失败，更新所有任务状态为失败
      try {
        await Promise.allSettled(
          generationsWithTasks.map(({ asyncTaskId }) =>
            asyncTaskModel.update(asyncTaskId, {
              error: new AsyncTaskError(
                AsyncTaskErrorType.ServerError,
                'start async task error: ' + (e instanceof Error ? e.message : 'Unknown error'),
              ),
              status: AsyncTaskStatus.Error,
            }),
          ),
        );
      } catch (batchUpdateError) {
        console.error('Failed to update batch task statuses:', batchUpdateError);
      }
    }

    const createdGenerations = generationsWithTasks.map((item) => item.generation);
    log('Image creation process completed successfully: %O', {
      batchId: createdBatch.id,
      generationCount: createdGenerations.length,
      generationIds: createdGenerations.map((g) => g.id),
    });

    return {
      data: {
        batch: createdBatch,
        generations: createdGenerations,
      },
      success: true,
    };
  }),
});

export type ImageRouter = typeof imageRouter;
