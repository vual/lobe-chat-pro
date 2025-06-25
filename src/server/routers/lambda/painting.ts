import { z } from 'zod';

import { PaintingModel } from '@/database/models/painting';
import { serverDB } from '@/database/server';
import { authedProcedure, router } from '@/libs/trpc/lambda';

const paintingProcedure = authedProcedure.use(async (opts) => {
  const { ctx } = opts;

  return opts.next({
    ctx: { paintingModel: new PaintingModel(serverDB, ctx.userId) },
  });
});

export const paintingRouter = router({
  create: paintingProcedure.input(z.any()).mutation(async ({ input, ctx }) => {
    const data = await ctx.paintingModel.create(input as any);
    return data.id;
  }),

  delete: paintingProcedure.input(z.string()).mutation(async ({ input, ctx }) => {
    return ctx.paintingModel.delete(input);
  }),

  query: paintingProcedure.input(z.any()).query(async ({ input, ctx }) => {
    const datas = await ctx.paintingModel.query(input);
    return datas;
  }),

  update: paintingProcedure.input(z.any()).mutation(async ({ input, ctx }) => {
    return ctx.paintingModel.update(input.id, { ...input } as any);
  }),
});
