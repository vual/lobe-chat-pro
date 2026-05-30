import { AIChatModelCard, AIImageModelCard } from '../types/aiModel';

// https://docs.x.ai/docs/models
const xaiChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 1_000_000,
    description: 'The most truth-seeking large language model in the world',
    displayName: 'Grok 4.3',
    enabled: true,
    id: 'grok-4.3',
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
            { rate: 1.25, upTo: 200_000 },
            { rate: 2.5, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textOutput',
          strategy: 'tiered',
          tiers: [
            { rate: 2.5, upTo: 200_000 },
            { rate: 5, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-05-01',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 2_000_000,
    description: 'A non-reasoning variant for simple use cases',
    displayName: 'Grok 4.20 (Non-Reasoning)',
    enabled: true,
    id: 'grok-4.20-0309-non-reasoning',
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
            { rate: 6, upTo: 200_000 },
            { rate: 12, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-03-09',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 2_000_000,
    description: 'Intelligent, blazing-fast model that reasons before responding',
    displayName: 'Grok 4.20',
    enabled: true,
    id: 'grok-4.20-0309-reasoning',
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
            { rate: 6, upTo: 200_000 },
            { rate: 12, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-03-09',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 2_000_000,
    description:
      'A team of 4 or 16 agents, Excels at research use cases, Does not currently support client-side tools. Only supports xAI server side tools (eg X Search, Web Search tools) and remote MCP tools.',
    displayName: 'Grok 4.20 Multi-Agent',
    enabled: true,
    id: 'grok-4.20-multi-agent-0309',
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
            { rate: 6, upTo: 200_000 },
            { rate: 12, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-03-09',
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
    contextWindowTokens: 2_000_000,
    description:
      '我们很高兴发布 Grok 4 Fast，这是我们在成本效益推理模型方面的最新进展。',
    displayName: 'Grok 4 Fast (Non-Reasoning)',
    enabled: true,
    id: 'grok-4-fast-non-reasoning',
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.05, strategy: 'fixed', unit: 'millionTokens' },
        {
          name: 'textInput',
          strategy: 'tiered',
          tiers: [
            { rate: 0.2, upTo: 0.128 },
            { rate: 0.4, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textOutput',
          strategy: 'tiered',
          tiers: [
            { rate: 0.5, upTo: 0.128 },
            { rate: 1, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-09-09',
    settings: {
      searchImpl: 'params',
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
    contextWindowTokens: 2_000_000,
    description:
      '我们很高兴发布 Grok 4 Fast，这是我们在成本效益推理模型方面的最新进展。',
    displayName: 'Grok 4 Fast',
    enabled: true,
    id: 'grok-4-fast-reasoning',
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.05, strategy: 'fixed', unit: 'millionTokens' },
        {
          name: 'textInput',
          strategy: 'tiered',
          tiers: [
            { rate: 0.2, upTo: 0.128 },
            { rate: 0.4, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textOutput',
          strategy: 'tiered',
          tiers: [
            { rate: 0.5, upTo: 0.128 },
            { rate: 1, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-09-09',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 256_000,
    description:
      '我们很高兴推出 grok-code-fast-1，这是一款快速且经济高效的推理模型，在代理编码方面表现出色。',
    displayName: 'Grok Code Fast 1',
    id: 'grok-code-fast-1',
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.02, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-27',
    // settings: {
    // reasoning_effort is not supported by grok-code. Specifying reasoning_effort parameter will get an error response.
    // extendParams: ['reasoningEffort'],
    // },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 256_000,
    description:
      '我们最新最强大的旗舰模型，在自然语言处理、数学计算和推理方面表现卓越 —— 是一款完美的全能型选手。',
    displayName: 'Grok 4 0709',
    enabled: true,
    id: 'grok-4',
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.75, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-09',
    settings: {
      // reasoning_effort is not supported by grok-4. Specifying reasoning_effort parameter will get an error response.
      // extendParams: ['reasoningEffort'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
    },
    contextWindowTokens: 131_072,
    description:
      '旗舰级模型，擅长数据提取、编程和文本摘要等企业级应用，拥有金融、医疗、法律和科学等领域的深厚知识。',
    displayName: 'Grok 3',
    id: 'grok-3',
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.75, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-03',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 131_072,
    description:
      '轻量级模型，回话前会先思考。运行快速、智能，适用于不需要深层领域知识的逻辑任务，并能获取原始的思维轨迹。',
    displayName: 'Grok 3 Mini',
    id: 'grok-3-mini',
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.075, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-03',
    settings: {
      extendParams: ['reasoningEffort'],
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
    contextWindowTokens: 32_768,
    description: '该模型在准确性、指令遵循和多语言能力方面有所改进。',
    displayName: 'Grok 2 Vision 1212',
    id: 'grok-2-vision-1212', // legacy
    pricing: {
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-12-12',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
];

const xaiImageModels: AIImageModelCard[] = [
  {
    description:
      '我们最新的图像生成模型可以根据文本提示生成生动逼真的图像。它在营销、社交媒体和娱乐等领域的图像生成方面表现出色。',
    displayName: 'Grok 2 Image 1212',
    enabled: true,
    id: 'grok-2-image-1212',
    parameters: {
      prompt: {
        default: '',
      },
    },
    releasedAt: '2024-12-12',
    type: 'image',
  },
];

export const allModels = [...xaiChatModels, ...xaiImageModels];

export default allModels;
