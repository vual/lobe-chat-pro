/* eslint-disable sort-keys-fix/sort-keys-fix  */
import { integer, jsonb, pgTable, text, uuid } from 'drizzle-orm/pg-core';

import { DEFAULT_MODEL } from '@/const/settings';
import { EvalEvaluationStatus } from '@/types/eval';

import { timestamps } from './_helpers';
import { knowledgeBases } from './file';
import { embeddings } from './rag';
import { users } from './user';

export const evalDatasets = pgTable('rag_eval_datasets', {
  id: integer('id').generatedAlwaysAsIdentity({ startWith: 30_000 }).primaryKey(),

  description: text('description'),
  name: text('name').notNull(),

  knowledgeBaseId: text('knowledge_base_id').references(() => knowledgeBases.id, {
    onDelete: 'cascade',
  }),
  userId: text('user_id').references(() => users.id, { onDelete: 'cascade' }),

  ...timestamps,
});

export type NewEvalDatasetsItem = typeof evalDatasets.$inferInsert;
export type EvalDatasetsSelectItem = typeof evalDatasets.$inferSelect;

export const evalDatasetRecords = pgTable('rag_eval_dataset_records', {
  id: integer('id').generatedAlwaysAsIdentity().primaryKey(),
  datasetId: integer('dataset_id')
    .references(() => evalDatasets.id, { onDelete: 'cascade' })
    .notNull(),

  ideal: text('ideal'),
  question: text('question'),
  referenceFiles: text('reference_files').array(),
  metadata: jsonb('metadata'),

  userId: text('user_id').references(() => users.id, { onDelete: 'cascade' }),
  ...timestamps,
});

export type NewEvalDatasetRecordsItem = typeof evalDatasetRecords.$inferInsert;
export type EvalDatasetRecordsSelectItem = typeof evalDatasetRecords.$inferSelect;

export const evalEvaluation = pgTable('rag_eval_evaluations', {
  id: integer('id').generatedAlwaysAsIdentity().primaryKey(),
  name: text('name').notNull(),
  description: text('description'),

  evalRecordsUrl: text('eval_records_url'),
  status: text('status').$defaultFn(() => EvalEvaluationStatus.Pending),
  error: jsonb('error'),

  datasetId: integer('dataset_id')
    .references(() => evalDatasets.id, { onDelete: 'cascade' })
    .notNull(),
  knowledgeBaseId: text('knowledge_base_id').references(() => knowledgeBases.id, {
    onDelete: 'cascade',
  }),
  languageModel: text('language_model').$defaultFn(() => DEFAULT_MODEL),
  embeddingModel: text('embedding_model'),

  userId: text('user_id').references(() => users.id, { onDelete: 'cascade' }),
  ...timestamps,
});

export type NewEvalEvaluationItem = typeof evalEvaluation.$inferInsert;
export type EvalEvaluationSelectItem = typeof evalEvaluation.$inferSelect;

export const evaluationRecords = pgTable('rag_eval_evaluation_records', {
  id: integer('id').generatedAlwaysAsIdentity().primaryKey(),

  question: text('question').notNull(),
  answer: text('answer'),
  context: text('context').array(),
  ideal: text('ideal'),

  status: text('status').$defaultFn(() => EvalEvaluationStatus.Pending),
  error: jsonb('error'),

  languageModel: text('language_model'),
  embeddingModel: text('embedding_model'),

  questionEmbeddingId: uuid('question_embedding_id').references(() => embeddings.id, {
    onDelete: 'set null',
  }),

  duration: integer('duration'),
  datasetRecordId: integer('dataset_record_id')
    .references(() => evalDatasetRecords.id, { onDelete: 'cascade' })
    .notNull(),
  evaluationId: integer('evaluation_id')
    .references(() => evalEvaluation.id, { onDelete: 'cascade' })
    .notNull(),

  userId: text('user_id').references(() => users.id, { onDelete: 'cascade' }),
  ...timestamps,
});

export type NewEvaluationRecordsItem = typeof evaluationRecords.$inferInsert;
export type EvaluationRecordsSelectItem = typeof evaluationRecords.$inferSelect;
