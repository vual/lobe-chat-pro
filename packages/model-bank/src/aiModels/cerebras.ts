import { AIChatModelCard } from '../types/aiModel';

const cerebrasModels: AIChatModelCard[] = [
{
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true
    },
    contextWindowTokens: 131_072,
    description: 'This model excels at multimodal reasoning across screenshots, documents, diagrams, and design assets. Ideal for visual agentic workflows, image-aware copilots, and teams migrating from closed multimodal APIs to an open model.',
    displayName: 'Gemma 4 31B',
    enabled: true,
    id: 'gemma-4-31b',
    maxOutput: 40_960,
    pricing: {
      units: [
        {
        name: 'textInput',
        rate: 0.99,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 1.49,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    settings: {
      extendParams: ["enableReasoning"]
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true
    },
    contextWindowTokens: 131_072,
    description: "GLM-4.7 is Zhipu's new generation flagship model with 355B total parameters and 32B active parameters, fully upgraded in general dialogue, reasoning, and agent capabilities. GLM-4.7 enhances Interleaved Thinking and introduces Preserved Thinking and Turn-level Thinking.",
    displayName: 'GLM-4.7',
    id: 'zai-glm-4.7',
    maxOutput: 40_960,
    pricing: {
      currency: 'USD',
      units: [
        {
        name: 'textInput',
        rate: 2.25,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 2.75,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2025-12-22',
    settings: {
      extendParams: ["enableReasoning"]
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,
    description: 'Llama 4 Scout：高性能的 Llama 系列模型，适合需高吞吐与低延迟的场景。',
    displayName: 'Llama 4 Scout',
    id: 'llama-4-scout-17b-16e-instruct',
    pricing: {
      units: [
        { name: 'textInput', rate: 0.65, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.85, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,
    description: 'Llama 3.1 8B：小体量、低延迟的 Llama 变体，适合轻量在线推理与交互场景。',
    displayName: 'Llama 3.1 8B',
    id: 'llama3.1-8b',
    pricing: {
      units: [
        { name: 'textInput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: 'Llama 3.3 70B：中大型 Llama 模型，兼顾推理能力与吞吐。',
    displayName: 'Llama 3.3 70B',
    id: 'llama-3.3-70b',
    pricing: {
      units: [
        { name: 'textInput', rate: 0.85, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    displayName: 'GPT OSS 120B',
    enabled: true,
    id: 'gpt-oss-120b',
    pricing: {
      units: [
        { name: 'textInput', rate: 0.35, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.75, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['reasoningEffort'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description: 'Qwen 3 32B：Qwen 系列在多语言与编码任务上表现优良，适合中等规模生产化使用。',
    displayName: 'Qwen 3 32B',
    id: 'qwen-3-32b',
    pricing: {
      units: [
        { name: 'textInput', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    displayName: 'Qwen 3 235B Instruct',
    id: 'qwen-3-235b-a22b-instruct-2507',
    pricing: {
      units: [
        { name: 'textInput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    displayName: 'Qwen 3 235B Thinking',
    id: 'qwen-3-235b-a22b-thinking-2507',
    pricing: {
      units: [
        { name: 'textInput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.9, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: 'Qwen 3 Coder 480B：面向代码生成与复杂编程任务的长上下文模型。',
    displayName: 'Qwen 3 Coder 480B',
    id: 'qwen-3-coder-480b',
    pricing: {
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
];

export const allModels = [...cerebrasModels];

export default allModels;
