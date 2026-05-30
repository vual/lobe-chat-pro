import { AIChatModelCard, AIImageModelCard } from '../types/aiModel';
import { imagenGenParameters, nanoBananaParameters } from './google';

// ref: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models
const vertexaiChatModels: AIChatModelCard[] = [
  {
    abilities: {
      imageOutput: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 131_072 + 32_768,
    description:
      "Gemini 3.1 Flash Image (Nano Banana 2) is Google's fastest native image generation model with thinking support, conversational image generation and editing.",
    displayName: 'Nano Banana 2',
    enabled: true,
    id: 'gemini-3.1-flash-image-preview',
    maxOutput: 32_768,
    pricing: {
      units: [
        { name: 'imageOutput', rate: 60, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-02-26',
    settings: {
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description:
      'Gemini 3.1 Pro Preview improves on Gemini 3 Pro with enhanced reasoning capabilities and adds medium thinking level support.',
    displayName: 'Gemini 3.1 Pro Preview',
    enabled: true,
    id: 'gemini-3.1-pro-preview',
    maxOutput: 65_536,
    pricing: {
      units: [
        {
          name: 'textInput_cacheRead',
          strategy: 'tiered',
          tiers: [
            { rate: 0.2, upTo: 200_000 },
            { rate: 0.4, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textInput',
          strategy: 'tiered',
          tiers: [
            { rate: 2, upTo: 200_000 },
            { rate: 4, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'imageInput',
          strategy: 'tiered',
          tiers: [
            { rate: 2, upTo: 200_000 },
            { rate: 4, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'audioInput',
          strategy: 'tiered',
          tiers: [
            { rate: 2, upTo: 200_000 },
            { rate: 4, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textOutput',
          strategy: 'tiered',
          tiers: [
            { rate: 12, upTo: 200_000 },
            { rate: 18, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          lookup: { prices: { '1h': 4.5 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-02-19',
    settings: {
      extendParams: ['urlContext'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description:
      "Gemini 3.1 Flash-Lite is Google's most cost-efficient multimodal model, optimized for high-volume agentic tasks, translation, and data processing.",
    displayName: 'Gemini 3.1 Flash-Lite',
    enabled: true,
    id: 'gemini-3.1-flash-lite',
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.025, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioInput_cacheRead', rate: 0.05, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageInput', rate: 0.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheWrite', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-05-07',
    settings: {
      extendParams: ['urlContext'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description:
      "Gemini 3.1 Flash-Lite Preview is Google's most cost-efficient multimodal model, optimized for high-volume agentic tasks, translation, and data processing.",
    displayName: 'Gemini 3.1 Flash-Lite Preview',
    id: 'gemini-3.1-flash-lite-preview',
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.025, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageInput', rate: 0.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-03-04',
    settings: {
      extendParams: ['urlContext'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description:
      'Gemini 3 Pro is Google\'s most powerful agent and vibe-coding model, delivering richer visuals and deeper interaction on top of state-of-the-art reasoning.',
    displayName: 'Gemini 3 Pro Preview',
    id: 'gemini-3-pro-preview', // deprecated on 2026-03-26
    maxOutput: 65_536,
    pricing: {
      units: [
        {
          name: 'textInput_cacheRead',
          strategy: 'tiered',
          tiers: [
            { rate: 0.2, upTo: 200_000 },
            { rate: 0.4, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textInput',
          strategy: 'tiered',
          tiers: [
            { rate: 2, upTo: 200_000 },
            { rate: 4, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textOutput',
          strategy: 'tiered',
          tiers: [
            { rate: 12, upTo: 200_000 },
            { rate: 18, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          lookup: { prices: { '1h': 4.5 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-11-18',
    settings: {
      extendParams: ['urlContext'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description:
      'Gemini 3 Flash is the smartest model built for speed, combining cutting-edge intelligence with excellent search grounding.',
    displayName: 'Gemini 3 Flash Preview',
    enabled: true,
    id: 'gemini-3-flash-preview',
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.05, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 1 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-12-17',
    settings: {
      extendParams: ['urlContext'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      imageOutput: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 131_072 + 32_768,
    description:
      "Gemini 3 Pro Image (Nano Banana Pro) is Google's image generation model that also supports multimodal dialogue.",
    displayName: 'Nano Banana Pro',
    enabled: true,
    id: 'gemini-3-pro-image-preview',
    maxOutput: 32_768,
    pricing: {
      units: [
        { name: 'imageOutput', rate: 120, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-11-20',
    settings: {
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description:
      'Gemini 2.5 Pro 是 Google 最先进的思维模型，能够对代码、数学和STEM领域的复杂问题进行推理，以及使用长上下文分析大型数据集、代码库和文档。',
    displayName: 'Gemini 2.5 Pro',
    enabled: true,
    id: 'gemini-2.5-pro',
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.31, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-17',
    settings: {
      extendParams: ['thinkingBudget'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description:
      'Gemini 2.5 Pro Preview 是 Google 最先进的思维模型，能够对代码、数学和STEM领域的复杂问题进行推理，以及使用长上下文分析大型数据集、代码库和文档。',
    displayName: 'Gemini 2.5 Pro Preview 05-06',
    id: 'gemini-2.5-pro-preview-05-06',
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-05-06',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description:
      'Gemini 2.5 Pro Preview 是 Google 最先进的思维模型，能够对代码、数学和STEM领域的复杂问题进行推理，以及使用长上下文分析大型数据集、代码库和文档。',
    displayName: 'Gemini 2.5 Pro Preview 03-25',
    id: 'gemini-2.5-pro-preview-03-25',
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-09',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description: 'Gemini 2.5 Flash 是 Google 性价比最高的模型，提供全面的功能。',
    displayName: 'Gemini 2.5 Flash',
    enabled: true,
    id: 'gemini-2.5-flash',
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.075, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-17',
    settings: {
      extendParams: ['thinkingBudget'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description: 'Gemini 2.5 Flash Preview 是 Google 性价比最高的模型，提供全面的功能。',
    displayName: 'Gemini 2.5 Flash Preview 04-17',
    id: 'gemini-2.5-flash-preview-04-17',
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-17',
    type: 'chat',
  },
  {
    abilities: {
      imageOutput: true,
      vision: true,
    },
    contextWindowTokens: 32_768 + 8192,
    description:
      'Nano Banana 是 Google 最新、最快、最高效的原生多模态模型，它允许您通过对话生成和编辑图像。',
    displayName: 'Nano Banana',
    enabled: true,
    id: 'gemini-2.5-flash-image-preview',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageOutput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-26',
    type: 'chat',
  },
  {
    abilities: {
      imageOutput: true,
      vision: true,
    },
    contextWindowTokens: 32_768 + 8192,
    description:
      'Nano Banana 是 Google 最新、最快、最高效的原生多模态模型，它允许您通过对话生成和编辑图像。',
    displayName: 'Nano Banana',
    enabled: true,
    id: 'gemini-2.5-flash-image',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageOutput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-26',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 1_000_000 + 64_000,
    description: 'Gemini 2.5 Flash-Lite 是 Google 最小、性价比最高的模型，专为大规模使用而设计。',
    displayName: 'Gemini 2.5 Flash-Lite',
    id: 'gemini-2.5-flash-lite',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.025, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-22',
    settings: {
      extendParams: ['thinkingBudget'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 1_000_000 + 64_000,
    description:
      'Gemini 2.5 Flash-Lite Preview 是 Google 最小、性价比最高的模型，专为大规模使用而设计。',
    displayName: 'Gemini 2.5 Flash-Lite Preview 06-17',
    id: 'gemini-2.5-flash-lite-preview-06-17',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-17',
    settings: {
      extendParams: ['thinkingBudget'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 8192,
    description:
      'Gemini 2.0 Flash 提供下一代功能和改进，包括卓越的速度、原生工具使用、多模态生成和1M令牌上下文窗口。',
    displayName: 'Gemini 2.0 Flash',
    id: 'gemini-2.0-flash',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.0375, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-02-05',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 8192,
    description: 'Gemini 2.0 Flash 模型变体，针对成本效益和低延迟等目标进行了优化。',
    displayName: 'Gemini 2.0 Flash-Lite',
    id: 'gemini-2.0-flash-lite',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.018, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.075, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-02-05',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 1_000_000 + 8192,
    description: 'Gemini 1.5 Flash 002 是一款高效的多模态模型，支持广泛应用的扩展。',
    displayName: 'Gemini 1.5 Flash 002',
    id: 'gemini-1.5-flash-002',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.075, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-09-25',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 2_000_000 + 8192,
    description:
      'Gemini 1.5 Pro 002 是最新的生产就绪模型，提供更高质量的输出，特别在数学、长上下文和视觉任务方面有显著提升。',
    displayName: 'Gemini 1.5 Pro 002',
    id: 'gemini-1.5-pro-002',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-09-24',
    type: 'chat',
  },
];

/* eslint-disable sort-keys-fix/sort-keys-fix */
const vertexaiImageModels: AIImageModelCard[] = [
  {
    displayName: 'Nano Banana',
    id: 'gemini-2.5-flash-image:image',
    enabled: true,
    type: 'image',
    description:
      'Nano Banana 是 Google 最新、最快、最高效的原生多模态模型，它允许您通过对话生成和编辑图像。',
    releasedAt: '2025-08-26',
    parameters: nanoBananaParameters,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageOutput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
  },
  {
    displayName: 'Imagen 4',
    id: 'imagen-4.0-generate-001',
    enabled: true,
    type: 'image',
    description: 'Imagen 4th generation text-to-image model series',
    organization: 'Deepmind',
    releasedAt: '2025-08-15',
    parameters: imagenGenParameters,
    pricing: {
      units: [{ name: 'imageGeneration', rate: 0.04, strategy: 'fixed', unit: 'image' }],
    },
  },
  {
    displayName: 'Imagen 4 Ultra',
    id: 'imagen-4.0-ultra-generate-001',
    enabled: true,
    type: 'image',
    description: 'Imagen 4th generation text-to-image model series Ultra version',
    organization: 'Deepmind',
    releasedAt: '2025-08-15',
    parameters: imagenGenParameters,
    pricing: {
      units: [{ name: 'imageGeneration', rate: 0.06, strategy: 'fixed', unit: 'image' }],
    },
  },
  {
    displayName: 'Imagen 4 Fast',
    id: 'imagen-4.0-fast-generate-001',
    enabled: true,
    type: 'image',
    description: 'Imagen 4th generation text-to-image model series Fast version',
    organization: 'Deepmind',
    releasedAt: '2025-08-15',
    parameters: imagenGenParameters,
    pricing: {
      units: [{ name: 'imageGeneration', rate: 0.02, strategy: 'fixed', unit: 'image' }],
    },
  },
];

export const allModels = [...vertexaiChatModels, ...vertexaiImageModels];

export default allModels;
