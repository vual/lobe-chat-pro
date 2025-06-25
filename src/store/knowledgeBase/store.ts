import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { StateCreator } from 'zustand/vanilla';

import { createDevtools } from '../middleware/createDevtools';
import { KnowledgeBaseStoreState, initialState } from './initialState';
import { KnowledgeBaseContentAction, createContentSlice } from './slices/content';
import { KnowledgeBaseCrudAction, createCrudSlice } from './slices/crud';
import { RAGEvalAction, createRagEvalSlice } from './slices/ragEval';

//  ===============  聚合 createStoreFn ============ //

export interface KnowledgeBaseStore
  extends KnowledgeBaseStoreState,
    KnowledgeBaseCrudAction,
    KnowledgeBaseContentAction,
    RAGEvalAction {
  // empty
}

const createStore: StateCreator<KnowledgeBaseStore, [['zustand/devtools', never]]> = (
  ...parameters
) => ({
  ...initialState,
  ...createCrudSlice(...parameters),
  ...createContentSlice(...parameters),
  ...createRagEvalSlice(...parameters),
});

//  ===============  实装 useStore ============ //
const devtools = createDevtools('knowledgeBase');

export const useKnowledgeBaseStore = createWithEqualityFn<KnowledgeBaseStore>()(
  devtools(createStore),
  shallow,
);
