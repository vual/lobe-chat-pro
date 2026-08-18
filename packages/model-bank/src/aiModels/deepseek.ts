import { AIChatModelCard } from '../types/aiModel';

// https://api-docs.deepseek.com/zh-cn/quick_start/pricing
const deepseekChatModels: AIChatModelCard[] = [
{
    abilities: {
      functionCall: true,
      reasoning: true,
      structuredOutput: true
    },
    contextWindowTokens: 1_048_576,
    description: 'DeepSeek V4 Flash is the fast, cost-efficient member of the V4 family with a 1M context window and hybrid thinking — one of the cheapest capable models available.',
    displayName: 'DeepSeek V4 Flash',
    enabled: true,
    id: 'deepseek-v4-flash',
    maxOutput: 393_216,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput_cacheRead',
        rate: 0.05,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textInput',
        rate: 1.5,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 4.5,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-07-31',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      structuredOutput: true
    },
    contextWindowTokens: 1_048_576,
    description: 'DeepSeek V4 Pro is the flagship of the V4 family, built for high-intensity reasoning and agentic workflows with a 1M context window — excellent Chinese writing and outstanding value for money.',
    displayName: 'DeepSeek V4 Pro',
    enabled: true,
    id: 'deepseek-v4-pro',
    maxOutput: 393_216,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput_cacheRead',
        rate: 0.15,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textInput',
        rate: 4.5,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 13.5,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-08-13',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      structuredOutput: true,
    },
    contextWindowTokens: 131_072,
    description:
      'DeepSeek V3.2 是 DeepSeek 最新发布的通用大模型，支持混合推理架构，具备更强的 Agent 能力。',
    displayName: 'DeepSeek V3.2 Exp',
    enabled: true,
    id: 'deepseek-chat',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 0.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-09-29',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'DeepSeek V3.2 思考模式。在输出最终回答之前，模型会先输出一段思维链内容，以提升最终答案的准确性。',
    displayName: 'DeepSeek V3.2 Exp Thinking',
    enabled: true,
    id: 'deepseek-reasoner',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 0.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-09-29',
    type: 'chat',
  },
];

export const allModels = [...deepseekChatModels];

export default allModels;
