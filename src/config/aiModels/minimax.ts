import { AIChatModelCard } from '@/types/aiModel';

const minimaxChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 1_000_192,
    description:
      '全新自研推理模型。全球领先：80K思维链 x 1M输入，效果比肩海外顶尖模型。',
    displayName: 'MiniMax-M1',
    enabled: true,
    id: 'MiniMax-M1',
    maxOutput: 40_000,
    pricing: {
      currency: 'CNY',
      input: 1.2, // 输入长度 32-128k
      output: 16,
    },
    releasedAt: '2025-06-16',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 1_000_192,
    description:
      '在 MiniMax-01系列模型中，我们做了大胆创新：首次大规模实现线性注意力机制，传统 Transformer架构不再是唯一的选择。这个模型的参数量高达4560亿，其中单次激活459亿。模型综合性能比肩海外顶尖模型，同时能够高效处理全球最长400万token的上下文，是GPT-4o的32倍，Claude-3.5-Sonnet的20倍。',
    displayName: 'MiniMax-Text-01',
    enabled: true,
    id: 'MiniMax-Text-01',
    maxOutput: 40_000,
    pricing: {
      currency: 'CNY',
      input: 1,
      output: 8,
    },
    releasedAt: '2025-01-15',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
];

export const allModels = [...minimaxChatModels];

export default allModels;
