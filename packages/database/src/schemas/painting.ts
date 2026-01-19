/* eslint-disable sort-keys-fix/sort-keys-fix  */
import { jsonb, pgTable, text } from 'drizzle-orm/pg-core';

import { createdAt, updatedAt } from './_helpers';

export const paintings = pgTable('paintings', {
  id: text('id').primaryKey().notNull(),
  userId: text('user_id'),
  clientId: text('client_id'),
  platform: text('platform'),
  action: text('action'),
  prompt: text('prompt'),
  negativePrompt: text('negative_prompt'),
  taskId: text('task_id'),
  images: jsonb('images'),
  status: text('status'), // SUBMITTED,IN_PROGRESS,SUCCESS,FAILURE
  progress: text('progress'), //
  failReason: text('fail_reason'),
  description: text('description'),
  config: jsonb('config'),
  extra: jsonb('extra'),
  isPublic: text('is_public'),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
});

export type NewPainting = typeof paintings.$inferInsert;
export type PaintingItem = typeof paintings.$inferSelect;
