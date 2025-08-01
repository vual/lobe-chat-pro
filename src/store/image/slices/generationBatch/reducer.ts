import { produce } from 'immer';

import { Generation, GenerationBatch } from '@/types/generation';

interface UpdateGenerationInBatchAction {
  batchId: string;
  generationId: string;
  type: 'updateGenerationInBatch';
  value: Partial<Generation>;
}

interface UpdateGenerationBatchAction {
  id: string;
  type: 'updateBatch';
  value: Partial<GenerationBatch>;
}

interface DeleteGenerationBatchAction {
  id: string;
  type: 'deleteBatch';
}

interface DeleteGenerationInBatchAction {
  batchId: string;
  generationId: string;
  type: 'deleteGenerationInBatch';
}

interface AddGenerationBatchAction {
  type: 'addBatch';
  value: GenerationBatch;
}

export type GenerationBatchDispatch =
  | UpdateGenerationInBatchAction
  | UpdateGenerationBatchAction
  | DeleteGenerationBatchAction
  | DeleteGenerationInBatchAction
  | AddGenerationBatchAction;

export const generationBatchReducer = (
  state: GenerationBatch[] = [],
  payload: GenerationBatchDispatch,
): GenerationBatch[] => {
  switch (payload.type) {
    case 'updateGenerationInBatch': {
      return produce(state, (draftState) => {
        const batchIndex = draftState.findIndex((batch) => batch.id === payload.batchId);
        if (batchIndex === -1) return;

        const generationIndex = draftState[batchIndex].generations.findIndex(
          (gen) => gen.id === payload.generationId,
        );
        if (generationIndex === -1) return;

        draftState[batchIndex].generations[generationIndex] = {
          ...draftState[batchIndex].generations[generationIndex],
          ...payload.value,
        };
      });
    }

    case 'updateBatch': {
      return produce(state, (draftState) => {
        const batchIndex = draftState.findIndex((batch) => batch.id === payload.id);
        if (batchIndex === -1) return;

        draftState[batchIndex] = {
          ...draftState[batchIndex],
          ...payload.value,
        };
      });
    }

    case 'deleteBatch': {
      return state.filter((batch) => batch.id !== payload.id);
    }

    case 'deleteGenerationInBatch': {
      return produce(state, (draftState) => {
        const batchIndex = draftState.findIndex((batch) => batch.id === payload.batchId);
        if (batchIndex === -1) return;

        draftState[batchIndex].generations = draftState[batchIndex].generations.filter(
          (gen) => gen.id !== payload.generationId,
        );
      });
    }

    case 'addBatch': {
      return produce(state, (draftState) => {
        // Add new batch at the beginning of the array (newest first)
        draftState.unshift(payload.value);
      });
    }

    default: {
      return state;
    }
  }
};
