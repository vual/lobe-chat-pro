import { KnowledgeBaseStoreState } from '@/store/knowledgeBase/initialState';

const activeKnowledgeBaseId = (s: KnowledgeBaseStoreState) => s.activeKnowledgeBaseId;

const getKnowledgeBaseById = (id: string) => (s: KnowledgeBaseStoreState) =>
  s.activeKnowledgeBaseItems[id];

const getKnowledgeBaseNameById = (id: string) => (s: KnowledgeBaseStoreState) =>
  getKnowledgeBaseById(id)(s)?.name;

export const knowledgeBaseSelectors = {
  activeKnowledgeBaseId,
  getKnowledgeBaseNameById,
};
