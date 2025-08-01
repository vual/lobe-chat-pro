import debug from 'debug';
import { z } from 'zod';

import { ASYNC_TASK_TIMEOUT, AsyncTaskModel } from '@/database/models/asyncTask';
import { FileModel } from '@/database/models/file';
import { GenerationModel } from '@/database/models/generation';
import { AgentRuntimeErrorType } from '@/libs/model-runtime/error';
import { RuntimeImageGenParams } from '@/libs/standard-parameters/meta-schema';
import { asyncAuthedProcedure, asyncRouter as router } from '@/libs/trpc/async';
import { initAgentRuntimeWithUserPayload } from '@/server/modules/AgentRuntime';
import { GenerationService } from '@/server/services/generation';
import { AsyncTaskError, AsyncTaskErrorType, AsyncTaskStatus } from '@/types/asyncTask';

const log = debug('lobe-image:async');

// Constants for better maintainability
const FILENAME_MAX_LENGTH = 50;
const IMAGE_URL_PREVIEW_LENGTH = 100;

const imageProcedure = asyncAuthedProcedure.use(async (opts) => {
  const { ctx } = opts;

  return opts.next({
    ctx: {
      asyncTaskModel: new AsyncTaskModel(ctx.serverDB, ctx.userId),
      fileModel: new FileModel(ctx.serverDB, ctx.userId),
      generationModel: new GenerationModel(ctx.serverDB, ctx.userId),
      generationService: new GenerationService(ctx.serverDB, ctx.userId),
    },
  });
});

const createImageInputSchema = z.object({
  generationId: z.string(),
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
  taskId: z.string(),
});

/**
 * Checks if the abort signal has been triggered and throws an error if so
 */
const checkAbortSignal = (signal: AbortSignal) => {
  if (signal.aborted) {
    throw new Error('Operation was aborted');
  }
};

/**
 * Categorizes errors into appropriate AsyncTaskErrorType
 */
const categorizeError = (
  error: any,
  isAborted: boolean,
): { errorMessage: string; errorType: AsyncTaskErrorType } => {
  // FIXME: 401 的问题应该放到 agentRuntime 中处理会更好
  if (error.errorType === AgentRuntimeErrorType.InvalidProviderAPIKey || error?.status === 401) {
    return {
      errorMessage: 'Invalid provider API key, please check your API key',
      errorType: AsyncTaskErrorType.InvalidProviderAPIKey,
    };
  }

  if (error instanceof AsyncTaskError) {
    return {
      errorMessage: typeof error.body === 'string' ? error.body : error.body.detail,
      errorType: error.name as AsyncTaskErrorType,
    };
  }

  if (isAborted || error.message?.includes('aborted')) {
    return {
      errorMessage: 'Image generation task timed out, please try again',
      errorType: AsyncTaskErrorType.Timeout,
    };
  }

  if (error.message?.includes('timeout') || error.name === 'TimeoutError') {
    return {
      errorMessage: 'Image generation task timed out, please try again',
      errorType: AsyncTaskErrorType.Timeout,
    };
  }

  if (error.message?.includes('network') || error.name === 'NetworkError') {
    return {
      errorMessage: error.message || 'Network error occurred during image generation',
      errorType: AsyncTaskErrorType.ServerError,
    };
  }

  return {
    errorMessage: error.message || 'Unknown error occurred during image generation',
    errorType: AsyncTaskErrorType.ServerError,
  };
};

export const imageRouter = router({
  createImage: imageProcedure.input(createImageInputSchema).mutation(async ({ input, ctx }) => {
    const { taskId, generationId, provider, model, params } = input;

    log('Starting async image generation: %O', {
      generationId,
      imageParams: { height: params.height, steps: params.steps, width: params.width },
      model,
      prompt: params.prompt,
      provider,
      taskId,
    });

    log('Updating task status to Processing: %s', taskId);
    await ctx.asyncTaskModel.update(taskId, { status: AsyncTaskStatus.Processing });

    // Use AbortController to prevent resource leaks
    const abortController = new AbortController();
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    try {
      const imageGenerationPromise = async (signal: AbortSignal) => {
        log('Initializing agent runtime for provider: %s', provider);
        const agentRuntime = await initAgentRuntimeWithUserPayload(provider, ctx.jwtPayload);

        // Check if operation has been cancelled
        checkAbortSignal(signal);

        log('Agent runtime initialized, calling createImage');
        const response = await agentRuntime.createImage({
          model,
          params: params as unknown as RuntimeImageGenParams,
        });

        if (!response) {
          log('Create image response is empty');
          throw new Error('Create image response is empty');
        }

        // Check if operation has been cancelled
        checkAbortSignal(signal);

        log('Image generation successful: %O', {
          height: response.height,
          imageUrl: response.imageUrl.startsWith('data:')
            ? response.imageUrl.slice(0, IMAGE_URL_PREVIEW_LENGTH) + '...'
            : response.imageUrl,
          width: response.width,
        });

        log('Transforming image for generation');
        const { imageUrl, width, height } = response;
        const { image, thumbnailImage } =
          await ctx.generationService.transformImageForGeneration(imageUrl);

        // Check if operation has been cancelled
        checkAbortSignal(signal);

        log('Uploading image for generation');
        const { imageUrl: uploadedImageUrl, thumbnailImageUrl } =
          await ctx.generationService.uploadImageForGeneration(image, thumbnailImage);

        // Check if operation has been cancelled
        checkAbortSignal(signal);

        log('Updating generation asset and file');
        await ctx.generationModel.createAssetAndFile(
          generationId,
          {
            height: height ?? image.height,
            originalUrl: imageUrl,
            thumbnailUrl: thumbnailImageUrl,
            type: 'image',
            url: uploadedImageUrl,
            width: width ?? image.width,
          },
          {
            fileHash: image.hash,
            fileType: image.mime,
            metadata: {
              generationId,
              height: image.height,
              width: image.width,
            },
            name: `${params.prompt.slice(0, FILENAME_MAX_LENGTH)}.${image.extension}`,
            // Use first 50 characters of prompt as filename
            size: image.size,
            url: uploadedImageUrl,
          },
        );

        log('Updating task status to Success: %s', taskId);
        await ctx.asyncTaskModel.update(taskId, {
          status: AsyncTaskStatus.Success,
        });

        log('Async image generation completed successfully: %s', taskId);
        return { success: true };
      };

      // Set timeout to cancel operation and prevent resource leaks
      timeoutId = setTimeout(() => {
        log('Image generation timeout, aborting operation: %s', taskId);
        abortController.abort();
      }, ASYNC_TASK_TIMEOUT);

      const result = await imageGenerationPromise(abortController.signal);

      // Clean up timeout timer
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      return result;
    } catch (error: any) {
      // Clean up timeout timer
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      log('Async image generation failed: %O', {
        error: error.message || error,
        generationId,
        taskId,
      });

      // Improved error categorization logic
      const { errorType, errorMessage } = categorizeError(error, abortController.signal.aborted);

      await ctx.asyncTaskModel.update(taskId, {
        error: new AsyncTaskError(errorType, errorMessage),
        status: AsyncTaskStatus.Error,
      });

      log('Task status updated to Error: %s, errorType: %s', taskId, errorType);

      return {
        message: `Image generation ${taskId} failed: ${errorMessage}`,
        success: false,
      };
    }
  }),
});
