import OpenAI from 'openai';

import type { ChatModelCard } from '@/types/llm';

import { ChatStreamPayload, ModelProvider } from '../types';
import { createOpenAICompatibleRuntime } from '../utils/openaiCompatibleFactory';

export interface Search1APIModelCard {
  id: string;
}

export const LobeSearch1API = createOpenAICompatibleRuntime({
  baseURL: 'https://api.search1api.com/v1',
  chatCompletion: {
    handlePayload: (payload: ChatStreamPayload) => {
      const { presence_penalty, frequency_penalty, stream = true, temperature, ...res } = payload;

      let param;

      if (presence_penalty !== 0) {
        param = { presence_penalty };
      } else {
        const defaultFrequencyPenalty = 1;

        param = { frequency_penalty: frequency_penalty || defaultFrequencyPenalty };
      }

      return {
        ...res,
        ...param,
        stream,
        temperature: temperature >= 2 ? undefined : temperature,
      } as OpenAI.ChatCompletionCreateParamsStreaming;
    },
  },
  debug: {
    chatCompletion: () => process.env.DEBUG_SEARCH1API_CHAT_COMPLETION === '1',
  },
  models: async ({ client }) => {
    const { LOBE_DEFAULT_MODEL_LIST } = await import('@/config/aiModels');

    const modelsPage = (await client.models.list()) as any;
    const modelList: Search1APIModelCard[] = modelsPage.data;

    return modelList
      .map((model) => {
        const knownModel = LOBE_DEFAULT_MODEL_LIST.find(
          (m) => model.id.toLowerCase() === m.id.toLowerCase(),
        );

        return {
          contextWindowTokens: knownModel?.contextWindowTokens ?? undefined,
          displayName: knownModel?.displayName ?? undefined,
          enabled: knownModel?.enabled || false,
          functionCall: knownModel?.abilities?.functionCall || false,
          id: model.id,
          reasoning: knownModel?.abilities?.reasoning || false,
          vision: knownModel?.abilities?.vision || false,
        };
      })
      .filter(Boolean) as ChatModelCard[];
  },
  provider: ModelProvider.Search1API,
});
