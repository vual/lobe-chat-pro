import { AIChatModelCard } from '../types/aiModel';

const ai360ChatModels: AIChatModelCard[] = [
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 8000,
    description:
      '360zhinao2-o1 使用树搜索构建思维链，并引入了反思机制，使用强化学习训练，模型具备自我反思与纠错的能力。',
    displayName: '360Zhinao2 o1',
    enabled: true,
    id: '360zhinao2-o1',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 8000,
    description:
      '360gpt2-o1 使用树搜索构建思维链，并引入了反思机制，使用强化学习训练，模型具备自我反思与纠错的能力。',
    displayName: '360GPT2 o1',
    id: '360gpt2-o1',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
    },
    contextWindowTokens: 8000,
    description: '360智脑系列效果最好的主力千亿级大模型，广泛适用于各领域复杂任务场景。',
    displayName: '360GPT2 Pro',
    enabled: true,
    id: '360gpt2-pro',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
    },
    contextWindowTokens: 8000,
    description: '360智脑系列效果最好的主力千亿级大模型，广泛适用于各领域复杂任务场景。',
    displayName: '360GPT Pro',
    id: '360gpt-pro',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 16_000,
    description: '翻译专用模型，深度微调优化，翻译效果领先。',
    displayName: '360GPT Pro Trans',
    id: '360gpt-pro-trans',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 7000,
    description: '兼顾性能和效果的百亿级大模型，适合对性能/成本要求较高 的场景。',
    displayName: '360GPT Turbo',
    enabled: true,
    id: '360gpt-turbo',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 64_000,
    description:
      '【360部署版】DeepSeek-R1在后训练阶段大规模使用了强化学习技术，在仅有极少标注数据的情况下，极大提升了模型推理能力。在数学、代码、自然语言推理等任务上，性能比肩 OpenAI o1 正式版。',
    displayName: 'DeepSeek R1',
    id: '360/deepseek-r1',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 128_000,
    description: '360 Zhinao Next-Generation Reasoning Model.',
    displayName: '360Zhinao3 o1.5',
    enabled: true,
    id: '360zhinao3-o1.5',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 128_000,
    description:
      '360 Zhinao most powerful reasoning model, featuring the strongest capabilities and supporting both tool calling and advanced reasoning.',
    displayName: '360Zhinao2 o1.5',
    id: '360zhinao2-o1.5',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_000,
    description: '',
    displayName: '360Zhinao Pro 32K Thinking Vision',
    enabled: true,
    id: '360zhinao-pro-32k-thinking-vision',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_000,
    description: '',
    displayName: '360Zhinao Turbo',
    enabled: true,
    id: '360zhinao-turbo',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_000,
    description: '',
    displayName: '360Zhinao Turbo Qwen Plus',
    id: '360zhinao-turbo-qwen-plus',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 65_536,
    description:
      'The goal of DeepSeek-V3.2 is to balance reasoning capability with output length, making it suitable for everyday use, such as Q&A scenarios and general-purpose agent tasks. In public reasoning benchmarks, DeepSeek-V3.2 achieves performance on par with GPT-5, just slightly below Gemini-3.0-Pro. Compared to Kimi-K2-Thinking, V3.2 offers significantly shorter outputs, greatly reducing computational cost and user wait times.',
    displayName: 'DeepSeek V3.2',
    id: 'deepseek-v3.2',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 4096,
    description:
      'DeepSeek V3.2 is a model that strikes a balance between high computational efficiency and excellent reasoning and agent performance.',
    displayName: 'DeepSeek V3.2 (Paratera)',
    id: 'paratera/deepseek-v3.2',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 4096,
    description:
      'DeepSeek V3.2 is a model that strikes a balance between high computational efficiency and excellent reasoning and agent performance.',
    displayName: 'DeepSeek V3.2 (SophNet)',
    id: 'sophnet/deepseek-v3.2',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 65_536,
    description:
      'On highly complex tasks, the Speciale model significantly outperforms the standard version, but it consumes considerably more tokens and incurs higher costs. Currently, DeepSeek-V3.2-Speciale is intended for research use only, does not support tool calls, and has not been specifically optimized for everyday conversation or writing tasks.',
    displayName: 'DeepSeek V3.2 Speciale',
    id: 'deepseek-v3.2-speciale',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 32_000,
    description:
      'Balances generation quality and response speed, suitable as a general-purpose production-grade model',
    displayName: 'Doubao Seed 2.0 Lite',
    id: 'volcengine/doubao-seed-2-0-lite',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 32_000,
    description: 'Points to the latest version of doubao-seed-2-0-mini',
    displayName: 'Doubao Seed 2.0 Mini',
    id: 'volcengine/doubao-seed-2-0-mini',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 32_000,
    description: 'Points to the latest version of doubao-seed-2-0-pro',
    displayName: 'Doubao Seed 2.0 Pro',
    id: 'volcengine/doubao-seed-2-0-pro',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 3.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 32_000,
    description:
      'Doubao-Seed-2.0-Code is optimized for enterprise-level programming needs. Built on the excellent Agent and VLM capabilities of Seed 2.0, it specially enhances coding abilities with outstanding frontend performance and targeted optimization for common enterprise multi-language coding requirements, making it ideal for integration with various AI programming tools.',
    displayName: 'Doubao Seed 2.0 Code',
    id: 'volcengine/doubao-seed-2-0-code',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 3.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
];

export const allModels = [...ai360ChatModels];

export default allModels;
