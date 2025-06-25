/**
 * This file contains the root router of Lobe Chat tRPC-backend
 */
import { publicProcedure, router } from '@/libs/trpc/lambda';

import { agentRouter } from './agent';
import { aiModelRouter } from './aiModel';
import { aiProviderRouter } from './aiProvider';
import { chunkRouter } from './chunk';
import { documentRouter } from './document';
import { exporterRouter } from './exporter';
import { fileRouter } from './file';
import { importerRouter } from './importer';
import { knowledgeBaseRouter } from './knowledgeBase';
import { messageRouter } from './message';
import { paintingRouter } from './painting';
import { pluginRouter } from './plugin';
import { ragEvalRouter } from './ragEval';
import { sessionRouter } from './session';
import { sessionGroupRouter } from './sessionGroup';
import { threadRouter } from './thread';
import { topicRouter } from './topic';
import { userRouter } from './user';

export const lambdaRouter = router({
  agent: agentRouter,
  aiModel: aiModelRouter,
  aiProvider: aiProviderRouter,
  chunk: chunkRouter,
  document: documentRouter,
  exporter: exporterRouter,
  file: fileRouter,
  healthcheck: publicProcedure.query(() => "i'm live!"),
  importer: importerRouter,
  knowledgeBase: knowledgeBaseRouter,
  message: messageRouter,
  painting: paintingRouter,
  plugin: pluginRouter,
  ragEval: ragEvalRouter,
  session: sessionRouter,
  sessionGroup: sessionGroupRouter,
  thread: threadRouter,
  topic: topicRouter,
  user: userRouter,
});

export type LambdaRouter = typeof lambdaRouter;
