/* eslint-disable sort-keys-fix/sort-keys-fix  */
import { relations } from 'drizzle-orm';
import { pgTable, primaryKey, text, uuid, varchar } from 'drizzle-orm/pg-core';

import { createdAt } from '@/database/schemas/_helpers';

import { agents, agentsFiles, agentsKnowledgeBases } from './agent';
import { asyncTasks } from './asyncTask';
import { documentChunks, documents } from './document';
import { files, knowledgeBases } from './file';
import { generationBatches, generationTopics, generations } from './generation';
import { messages, messagesFiles } from './message';
import { chunks, unstructuredChunks } from './rag';
import { sessionGroups, sessions } from './session';
import { threads, topicDocuments, topics } from './topic';
import { users } from './user';

export const agentsToSessions = pgTable(
  'agents_to_sessions',
  {
    agentId: text('agent_id')
      .notNull()
      .references(() => agents.id, { onDelete: 'cascade' }),
    sessionId: text('session_id')
      .notNull()
      .references(() => sessions.id, { onDelete: 'cascade' }),
    userId: text('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.agentId, t.sessionId] }),
  }),
);

export const filesToSessions = pgTable(
  'files_to_sessions',
  {
    fileId: text('file_id')
      .notNull()
      .references(() => files.id, { onDelete: 'cascade' }),
    sessionId: text('session_id')
      .notNull()
      .references(() => sessions.id, { onDelete: 'cascade' }),
    userId: text('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.fileId, t.sessionId] }),
  }),
);

export const fileChunks = pgTable(
  'file_chunks',
  {
    fileId: varchar('file_id').references(() => files.id, { onDelete: 'cascade' }),
    chunkId: uuid('chunk_id').references(() => chunks.id, { onDelete: 'cascade' }),
    createdAt: createdAt(),
    userId: text('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.fileId, t.chunkId] }),
  }),
);
export type NewFileChunkItem = typeof fileChunks.$inferInsert;

export const topicRelations = relations(topics, ({ one, many }) => ({
  session: one(sessions, {
    fields: [topics.sessionId],
    references: [sessions.id],
  }),
  documents: many(topicDocuments),
}));

export const threadsRelations = relations(threads, ({ one }) => ({
  sourceMessage: one(messages, {
    fields: [threads.sourceMessageId],
    references: [messages.id],
  }),
}));

export const messagesRelations = relations(messages, ({ many, one }) => ({
  filesToMessages: many(messagesFiles),

  session: one(sessions, {
    fields: [messages.sessionId],
    references: [sessions.id],
  }),

  parent: one(messages, {
    fields: [messages.parentId],
    references: [messages.id],
  }),

  topic: one(topics, {
    fields: [messages.topicId],
    references: [topics.id],
  }),

  thread: one(threads, {
    fields: [messages.threadId],
    references: [threads.id],
  }),
}));

export const agentsRelations = relations(agents, ({ many }) => ({
  agentsToSessions: many(agentsToSessions),
  knowledgeBases: many(agentsKnowledgeBases),
  files: many(agentsFiles),
}));

export const agentsToSessionsRelations = relations(agentsToSessions, ({ one }) => ({
  session: one(sessions, {
    fields: [agentsToSessions.sessionId],
    references: [sessions.id],
  }),
  agent: one(agents, {
    fields: [agentsToSessions.agentId],
    references: [agents.id],
  }),
}));

export const filesToSessionsRelations = relations(filesToSessions, ({ one }) => ({
  file: one(files, {
    fields: [filesToSessions.fileId],
    references: [files.id],
  }),
  session: one(sessions, {
    fields: [filesToSessions.sessionId],
    references: [sessions.id],
  }),
}));

export const agentsKnowledgeBasesRelations = relations(agentsKnowledgeBases, ({ one }) => ({
  knowledgeBase: one(knowledgeBases, {
    fields: [agentsKnowledgeBases.knowledgeBaseId],
    references: [knowledgeBases.id],
  }),
  agent: one(agents, {
    fields: [agentsKnowledgeBases.agentId],
    references: [agents.id],
  }),
}));

export const agentsFilesRelations = relations(agentsFiles, ({ one }) => ({
  file: one(files, {
    fields: [agentsFiles.fileId],
    references: [files.id],
  }),
  agent: one(agents, {
    fields: [agentsFiles.agentId],
    references: [agents.id],
  }),
}));

export const messagesFilesRelations = relations(messagesFiles, ({ one }) => ({
  file: one(files, {
    fields: [messagesFiles.fileId],
    references: [files.id],
  }),
  message: one(messages, {
    fields: [messagesFiles.messageId],
    references: [messages.id],
  }),
}));

export const fileChunksRelations = relations(fileChunks, ({ one }) => ({
  file: one(files, {
    fields: [fileChunks.fileId],
    references: [files.id],
  }),
  chunk: one(chunks, {
    fields: [fileChunks.chunkId],
    references: [chunks.id],
  }),
}));

export const sessionsRelations = relations(sessions, ({ many, one }) => ({
  filesToSessions: many(filesToSessions),
  agentsToSessions: many(agentsToSessions),
  group: one(sessionGroups, {
    fields: [sessions.groupId],
    references: [sessionGroups.id],
  }),
}));

export const chunksRelations = relations(unstructuredChunks, ({ one }) => ({
  file: one(files, {
    fields: [unstructuredChunks.fileId],
    references: [files.id],
  }),
}));

export const filesRelations = relations(files, ({ many, one }) => ({
  messages: many(messagesFiles),
  sessions: many(filesToSessions),
  agents: many(agentsFiles),
  documents: many(documents, { relationName: 'fileDocuments' }),
  generation: one(generations, {
    fields: [files.id],
    references: [generations.fileId],
  }),
  chunkingTask: one(asyncTasks, {
    fields: [files.chunkTaskId],
    references: [asyncTasks.id],
  }),
  embeddingTask: one(asyncTasks, {
    fields: [files.embeddingTaskId],
    references: [asyncTasks.id],
  }),
}));

// Document 相关关系定义
export const documentsRelations = relations(documents, ({ one, many }) => ({
  file: one(files, {
    fields: [documents.fileId],
    references: [files.id],
    relationName: 'fileDocuments',
  }),
  topics: many(topicDocuments),
  chunks: many(documentChunks),
}));

export const topicDocumentsRelations = relations(topicDocuments, ({ one }) => ({
  document: one(documents, {
    fields: [topicDocuments.documentId],
    references: [documents.id],
  }),
  topic: one(topics, {
    fields: [topicDocuments.topicId],
    references: [topics.id],
  }),
}));

export const documentChunksRelations = relations(documentChunks, ({ one }) => ({
  document: one(documents, {
    fields: [documentChunks.documentId],
    references: [documents.id],
  }),
}));

// Generation 相关关系定义
export const generationTopicsRelations = relations(generationTopics, ({ one, many }) => ({
  user: one(users, {
    fields: [generationTopics.userId],
    references: [users.id],
  }),
  batches: many(generationBatches),
}));

export const generationBatchesRelations = relations(generationBatches, ({ one, many }) => ({
  user: one(users, {
    fields: [generationBatches.userId],
    references: [users.id],
  }),
  topic: one(generationTopics, {
    fields: [generationBatches.generationTopicId],
    references: [generationTopics.id],
  }),
  generations: many(generations),
}));

export const generationsRelations = relations(generations, ({ one }) => ({
  user: one(users, {
    fields: [generations.userId],
    references: [users.id],
  }),
  batch: one(generationBatches, {
    fields: [generations.generationBatchId],
    references: [generationBatches.id],
  }),
  asyncTask: one(asyncTasks, {
    fields: [generations.asyncTaskId],
    references: [asyncTasks.id],
  }),
  file: one(files, {
    fields: [generations.fileId],
    references: [files.id],
  }),
}));
