import type { ChatModelCard } from '@/types/llm';

import { ModelProvider } from '../types';
import { createOpenAICompatibleRuntime } from '../utils/openaiCompatibleFactory';

export interface FireworksAIModelCard {
  context_length: number;
  id: string;
  supports_image_input: boolean;
  supports_tools: boolean;
}

export const LobeFireworksAI = createOpenAICompatibleRuntime({
  baseURL: 'https://api.fireworks.ai/inference/v1',
  debug: {
    chatCompletion: () => process.env.DEBUG_FIREWORKSAI_CHAT_COMPLETION === '1',
  },
  models: async ({ client }) => {
    const { LOBE_DEFAULT_MODEL_LIST } = await import('@/config/aiModels');

    const reasoningKeywords = ['deepseek-r1', 'qwq'];

    const modelsPage = (await client.models.list()) as any;
    const modelList: FireworksAIModelCard[] = modelsPage.data;

    return modelList
      .map((model) => {
        const knownModel = LOBE_DEFAULT_MODEL_LIST.find(
          (m) => model.id.toLowerCase() === m.id.toLowerCase(),
        );

        return {
          contextWindowTokens: model.context_length,
          displayName: knownModel?.displayName ?? undefined,
          enabled: knownModel?.enabled || false,
          functionCall: model.supports_tools || model.id.toLowerCase().includes('function'),
          id: model.id,
          reasoning:
            reasoningKeywords.some((keyword) => model.id.toLowerCase().includes(keyword)) ||
            knownModel?.abilities?.reasoning ||
            false,
          vision: model.supports_image_input,
        };
      })
      .filter(Boolean) as ChatModelCard[];
  },
  provider: ModelProvider.FireworksAI,
});
