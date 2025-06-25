import { SWRResponse, mutate } from 'swr';
import { StateCreator } from 'zustand/vanilla';

import { useClientDataSWR } from '@/libs/swr';
import { knowledgeBaseService } from '@/services/knowledgeBase';
import { KnowledgeBaseStore } from '@/store/knowledgeBase/store';
import { CreateKnowledgeBaseParams, KnowledgeBaseItem } from '@/types/knowledgeBase';

const FETCH_KNOWLEDGE_BASE_LIST_KEY = 'FETCH_KNOWLEDGE_BASE';
const FETCH_KNOWLEDGE_BASE_ITEM_KEY = 'FETCH_KNOWLEDGE_BASE_ITEM';

export interface KnowledgeBaseCrudAction {
  createNewKnowledgeBase: (params: CreateKnowledgeBaseParams) => Promise<void>;
  internal_toggleKnowledgeBaseLoading: (id: string, loading: boolean) => void;
  refreshKnowledgeBaseList: () => Promise<void>;

  removeKnowledgeBase: (id: string) => Promise<void>;
  updateKnowledgeBase: (id: string, value: CreateKnowledgeBaseParams) => Promise<void>;

  useFetchKnowledgeBaseItem: (id: string) => SWRResponse<KnowledgeBaseItem | undefined>;
  useFetchKnowledgeBaseList: (params?: { suspense?: boolean }) => SWRResponse<KnowledgeBaseItem[]>;
}

export const createCrudSlice: StateCreator<
  KnowledgeBaseStore,
  [['zustand/devtools', never]],
  [],
  KnowledgeBaseCrudAction
> = (set, get) => ({
  createNewKnowledgeBase: async (params) => {
    await knowledgeBaseService.createKnowledgeBase(params);
    await get().refreshKnowledgeBaseList();
  },
  internal_toggleKnowledgeBaseLoading: (id, loading) => {
    set(
      (state) => {
        if (loading) return { knowledgeBaseLoadingIds: [...state.knowledgeBaseLoadingIds, id] };

        return { knowledgeBaseLoadingIds: state.knowledgeBaseLoadingIds.filter((i) => i !== id) };
      },
      false,
      'toggleKnowledgeBaseLoading',
    );
  },
  refreshKnowledgeBaseList: async () => {
    await mutate(FETCH_KNOWLEDGE_BASE_LIST_KEY);
  },
  removeKnowledgeBase: async (id) => {
    await knowledgeBaseService.deleteKnowledgeBase(id);
    await get().refreshKnowledgeBaseList();
  },
  updateKnowledgeBase: async (id, value) => {
    get().internal_toggleKnowledgeBaseLoading(id, true);
    await knowledgeBaseService.updateKnowledgeBaseList(id, value);
    await get().refreshKnowledgeBaseList();

    get().internal_toggleKnowledgeBaseLoading(id, false);
  },

  useFetchKnowledgeBaseItem: (id) =>
    useClientDataSWR<KnowledgeBaseItem | undefined>([FETCH_KNOWLEDGE_BASE_ITEM_KEY, id], () =>
      knowledgeBaseService.getKnowledgeBaseById(id),
    ),

  useFetchKnowledgeBaseList: (params = {}) =>
    useClientDataSWR<KnowledgeBaseItem[]>(
      FETCH_KNOWLEDGE_BASE_LIST_KEY,
      () => knowledgeBaseService.getKnowledgeBaseList(),
      {
        fallbackData: [],
        onSuccess: () => {
          if (!get().initKnowledgeBaseList)
            set({ initKnowledgeBaseList: true }, false, 'useFetchKnowledgeBaseList/init');
        },
        suspense: params.suspense,
      },
    ),
});
