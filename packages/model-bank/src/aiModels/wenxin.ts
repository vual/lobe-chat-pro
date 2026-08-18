import { AIChatModelCard, AIImageModelCard, AiFullModelCard } from '../types/aiModel';

const wenxinChatModels: AIChatModelCard[] = [
{
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true
    },
    contextWindowTokens: 131_072,
    description: 'ERNIE 5.1 is the latest model in the ERNIE series, featuring comprehensive upgrades to its foundational capabilities. It demonstrates significant improvements in areas such as agents, knowledge processing, reasoning, and deep search. This release adopts a decoupled fully asynchronous reinforcement learning architecture, specifically designed to address key challenges in the evolution of large models toward autonomous agent decision-making, including training–inference numerical discrepancies, low utilization of heterogeneous computing resources, and global issues caused by long-tail effects. In addition, large-scale agent post-training techniques are employed to further enhance the model’s capabilities and generalization performance. Through a three-stage collaborative framework involving environment, expert, and fusion processes, the approach not only ensures training efficiency but also significantly improves the model’s stability and performance on complex tasks.',
    displayName: 'ERNIE 5.1',
    enabled: true,
    id: 'ernie-5.1',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 4,
        '[0.032, 0.128]': 6
      },
        pricingParams: ['textInput']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 18,
        '[0.032, 0.128]': 22
      },
        pricingParams: ['textInput']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-05-09',
    settings: {
      searchImpl: 'params'
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      video: true,
      vision: true
    },
    contextWindowTokens: 131_072,
    description: 'ERNIE 5.0, the new-generation model in the ERNIE series, is a natively multimodal large model. It adopts a unified multimodal modeling approach, jointly modeling text, images, audio, and video to deliver comprehensive multimodal capabilities. Its foundational abilities have been significantly upgraded, achieving strong performance on benchmark evaluations. It particularly excels in multimodal understanding, instruction following, creative writing, factual accuracy, agent planning, and tool utilization.',
    displayName: 'ERNIE 5.0',
    enabled: true,
    id: 'ernie-5.0',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 6,
        '[0.032, 0.128]': 10
      },
        pricingParams: ['textInput']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 24,
        '[0.032, 0.128]': 40
      },
        pricingParams: ['textInput']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-03-05',
    settings: {
      searchImpl: 'params'
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      video: true,
      vision: true
    },
    contextWindowTokens: 131_072,
    description: 'Wenxin 5.0 Thinking is a native full-modal flagship model with unified text, image, audio, and video modeling. It delivers broad capability upgrades for complex QA, creation, and agent scenarios.',
    displayName: 'ERNIE 5.0 Thinking',
    id: 'ernie-5.0-thinking-latest',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 6,
        '[0.032, 0.128]': 10
      },
        pricingParams: ['textInput']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 24,
        '[0.032, 0.128]': 40
      },
        pricingParams: ['textInput']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2025-11-12',
    settings: {
      searchImpl: 'params'
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      video: true,
      vision: true
    },
    contextWindowTokens: 131_072,
    description: 'Wenxin 5.0 Thinking Preview is a native full-modal flagship model with unified text, image, audio, and video modeling. It delivers broad capability upgrades for complex QA, creation, and agent scenarios.',
    displayName: 'ERNIE 5.0 Thinking Preview',
    id: 'ernie-5.0-thinking-preview',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 6,
        '[0.032, 0.128]': 10
      },
        pricingParams: ['textInput']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 24,
        '[0.032, 0.128]': 40
      },
        pricingParams: ['textInput']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2025-11-12',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"],
      searchImpl: 'params'
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true
    },
    contextWindowTokens: 131_072,
    description: 'ERNIE 4.5 Turbo 20260402 is a high-performance general model with search augmentation and tool calling for QA, coding, and agent scenarios.',
    displayName: 'ERNIE 4.5 Turbo 20260402',
    enabled: true,
    id: 'ernie-4.5-turbo-20260402',
    maxOutput: 12_288,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput_cacheRead',
        rate: 0.2,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textInput',
        rate: 0.8,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 3.2,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    settings: {
      searchImpl: 'params'
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true
    },
    contextWindowTokens: 131_072,
    description: 'Latest ERNIE 4.5 Turbo with optimized overall performance, ideal as the primary production model.',
    displayName: 'ERNIE 4.5 Turbo Latest',
    id: 'ernie-4.5-turbo-latest',
    maxOutput: 12_288,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput_cacheRead',
        rate: 0.2,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textInput',
        rate: 0.8,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 3.2,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    description: 'ERNIE Character Fiction 8K Preview is a character and plot creation model preview for feature evaluation and testing.',
    displayName: 'ERNIE Character Fiction 8K Preview',
    id: 'ernie-char-fiction-8k-preview',
    maxOutput: 2048,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 0.3,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 0.6,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Qianfan 8B is a mid-size general model balancing cost and quality for text generation and QA.',
    displayName: 'Qianfan 8B',
    id: 'qianfan-8b',
    maxOutput: 16_384,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 0.5,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 1,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Qianfan 70B is a large Chinese model for high-quality generation and complex reasoning.',
    displayName: 'Qianfan 70B',
    id: 'qianfan-70b',
    maxOutput: 16_384,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 0.8,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 3.2,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Qianfan Agent Intent 32K targets intent recognition and agent orchestration with long context support.',
    displayName: 'Qianfan Agent Intent 32K',
    id: 'qianfan-agent-intent-32k',
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 0.4,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 1.2,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    description: 'Qianfan Agent Lite 8K is a lightweight agent model for low-cost multi-turn dialogue and workflows.',
    displayName: 'Qianfan Agent Lite 8K',
    id: 'qianfan-agent-lite-8k',
    maxOutput: 2048,
    type: 'chat',
  },
  {
    abilities: {
      video: true,
      vision: true
    },
    contextWindowTokens: 131_072,
    description: 'ERNIE 4.5 Turbo VL is a mature multimodal model for production image-text understanding and recognition.',
    displayName: 'ERNIE 4.5 Turbo VL',
    id: 'ernie-4.5-turbo-vl',
    maxOutput: 16_384,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput_cacheRead',
        rate: 0.75,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textInput',
        rate: 3,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 9,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      video: true,
      vision: true
    },
    contextWindowTokens: 131_072,
    description: 'ERNIE 4.5 Turbo VL Latest is the newest multimodal version with improved image-text understanding and reasoning.',
    displayName: 'ERNIE 4.5 Turbo VL Latest',
    id: 'ernie-4.5-turbo-vl-latest',
    maxOutput: 16_384,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput_cacheRead',
        rate: 0.75,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textInput',
        rate: 3,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 9,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true
    },
    contextWindowTokens: 65_536,
    description: 'ERNIE X1.1 is a thinking-model preview for evaluation and testing.',
    displayName: 'ERNIE X1.1',
    enabled: true,
    id: 'ernie-x1.1',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 1,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 4,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    settings: {
      searchImpl: 'params'
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true
    },
    contextWindowTokens: 65_536,
    description: 'ERNIE X1.1 Preview is a thinking-model preview for evaluation and testing.',
    displayName: 'ERNIE X1.1 Preview',
    id: 'ernie-x1.1-preview',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 1,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 4,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    settings: {
      searchImpl: 'params'
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true
    },
    contextWindowTokens: 32_768,
    description: 'Qianfan Composition is a multimodal creation model for mixed image-text understanding and generation.',
    displayName: 'Qianfan Composition',
    id: 'qianfan-composition',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 2.5,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 7.5,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true
    },
    contextWindowTokens: 131_072,
    description: 'Qianfan MultiPicOCR is a multi-image OCR model for text detection and recognition across images.',
    displayName: 'Qianfan MultiPicOCR',
    id: 'qianfan-multipicocr',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 2.5,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 7.5,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true
    },
    contextWindowTokens: 131_072,
    description: 'Qianfan QI VL is a multimodal QA model for accurate retrieval and QA in complex image-text scenarios.',
    displayName: 'Qianfan QI VL',
    id: 'qianfan-qi-vl',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
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
    type: 'chat',
  },
  {
    abilities: {
      vision: true
    },
    contextWindowTokens: 4096,
    description: 'Qianfan EngCard VL is a multimodal recognition model focused on English scenarios.',
    displayName: 'Qianfan EngCard VL',
    id: 'qianfan-engcard-vl',
    maxOutput: 4000,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 0.8,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 2,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true
    },
    contextWindowTokens: 4096,
    description: 'Qianfan SinglePicOCR is a single-image OCR model with high-accuracy character recognition.',
    displayName: 'Qianfan SinglePicOCR',
    id: 'qianfan-singlepicocr',
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 0.8,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 8,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true
    },
    contextWindowTokens: 32_768,
    description: 'InternVL3 38B is a large open-source multimodal model for high-accuracy image-text understanding.',
    displayName: 'InternVL3 38B',
    id: 'internvl3-38b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 8,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 24,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true
    },
    contextWindowTokens: 32_768,
    description: 'InternVL3 14B is a mid-size multimodal model balancing performance and cost.',
    displayName: 'InternVL3 14B',
    id: 'internvl3-14b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 4,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 12,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true
    },
    contextWindowTokens: 32_768,
    description: 'InternVL3 1B is a lightweight multimodal model for resource-constrained deployment.',
    displayName: 'InternVL3 1B',
    id: 'internvl3-1b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 0.4,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 1.2,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true
    },
    contextWindowTokens: 32_768,
    description: 'InternVL2.5 38B MPO is a multimodal pretrained model for complex image-text reasoning.',
    displayName: 'InternVL2.5 38B MPO',
    id: 'internvl2.5-38b-mpo',
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 8,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 24,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true
    },
    contextWindowTokens: 65_536,
    description: 'GLM-4.5V is a multimodal vision-language model for general image understanding and QA.',
    displayName: 'GLM-4.5V',
    id: 'glm-4.5v',
    maxOutput: 16_384,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 2,
        '[0.032, 0.064]': 4
      },
        pricingParams: ['textInput']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 6,
        '[0.032, 0.064]': 12
      },
        pricingParams: ['textInput']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true
    },
    contextWindowTokens: 4096,
    description: 'DeepSeek VL2 is a multimodal model for image-text understanding and fine-grained visual QA.',
    displayName: 'DeepSeek VL2',
    id: 'deepseek-vl2',
    maxOutput: 2048,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 0.99,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 0.99,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true
    },
    contextWindowTokens: 4096,
    description: 'DeepSeek VL2 Small is a lightweight multimodal version for resource-constrained and high-concurrency use.',
    displayName: 'DeepSeek VL2 Small',
    id: 'deepseek-vl2-small',
    maxOutput: 2048,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 0.5,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 0.5,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true
    },
    contextWindowTokens: 144_000,
    description: 'DeepSeek V3.2 Think is a full deep-thinking model with stronger long-chain reasoning.',
    displayName: 'DeepSeek V3.2 Think',
    id: 'deepseek-v3.2-think',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 2,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 3,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    settings: {
      searchImpl: 'params'
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true
    },
    contextWindowTokens: 32_768,
    description: 'DeepSeek R1 Distill Qianfan 70B is an R1 distill based on Qianfan-70B with strong value.',
    displayName: 'DeepSeek R1 Distill Qianfan 70B',
    id: 'deepseek-r1-distill-qianfan-70b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 2,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 8,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true
    },
    contextWindowTokens: 32_768,
    description: 'DeepSeek R1 Distill Qianfan 8B is an R1 distill based on Qianfan-8B for small and mid-sized apps.',
    displayName: 'DeepSeek R1 Distill Qianfan 8B',
    id: 'deepseek-r1-distill-qianfan-8b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 1,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 4,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true
    },
    contextWindowTokens: 131_072,
    description: 'Kimi K2 Instruct is Kimi’s official reasoning model with long context for code, QA, and more.',
    displayName: 'Kimi K2 Instruct',
    id: 'kimi-k2-instruct',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 4,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 16,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Qwen3 30B A3B is a mid-large general model balancing cost and quality.',
    displayName: 'Qwen3 30B A3B',
    id: 'qwen3-30b-a3b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 0.75,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 3,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"]
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description: '与ERNIE-X1-32K相比，模型效果和性能更好。',
    displayName: 'ERNIE X1 Turbo 32K',
    enabled: true,
    id: 'ernie-x1-turbo-32k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-24',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      '具备更强的理解、规划、反思、进化能力。作为能力更全面的深度思考模型，文心X1兼备准确、创意和文采，在中文知识问答、文学创作、文稿写作、日常对话、逻辑推理、复杂计算及工具调用等方面表现尤为出色。',
    displayName: 'ERNIE X1 32K',
    id: 'ernie-x1-32k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-15',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      '文心大模型X1具备更强的理解、规划、反思、进化能力。作为能力更全面的深度思考模型，文心X1兼备准确、创意和文采，在中文知识问答、文学创作、文稿写作、日常对话、逻辑推理、复杂计算及工具调用等方面表现尤为出色。',
    displayName: 'ERNIE X1 32K Preview',
    id: 'ernie-x1-32k-preview',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-16',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
    },
    contextWindowTokens: 131_072,
    description:
      '文心4.5 Turbo在去幻觉、逻辑推理和代码能力等方面也有着明显增强。对比文心4.5，速度更快、价格更低。模型能力全面提升，更好满足多轮长历史对话处理、长文档理解问答任务。',
    displayName: 'ERNIE 4.5 Turbo 128K',
    enabled: true,
    id: 'ernie-4.5-turbo-128k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3.2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-24',
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
    contextWindowTokens: 32_768,
    description:
      '文心4.5 Turbo在去幻觉、逻辑推理和代码能力等方面也有着明显增强。对比文心4.5，速度更快、价格更低。文本创作、知识问答等能力提升显著。输出长度及整句时延相较ERNIE 4.5有所增加。',
    displayName: 'ERNIE 4.5 Turbo 32K',
    id: 'ernie-4.5-turbo-32k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3.2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-24',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      '文心一言大模型全新版本，图片理解、创作、翻译、代码等能力显著提升，首次支持32K上下文长度，首Token时延显著降低。',
    displayName: 'ERNIE 4.5 Turbo VL 32K',
    enabled: true,
    id: 'ernie-4.5-turbo-vl-32k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 9, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-24',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 8192,
    description:
      '文心大模型4.5是百度自主研发的新一代原生多模态基础大模型，通过多个模态联合建模实现协同优化，多模态理解能力优秀；具备更精进的语言能力，理解、生成、逻辑、记忆能力全面提升，去幻觉、逻辑推理、代码能力显著提升。',
    displayName: 'ERNIE 4.5 8K Preview',
    id: 'ernie-4.5-8k-preview',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-16',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
    },
    contextWindowTokens: 8192,
    description:
      '百度自研的旗舰级超大规模⼤语⾔模型，相较ERNIE 3.5实现了模型能力全面升级，广泛适用于各领域复杂任务场景；支持自动对接百度搜索插件，保障问答信息时效。',
    displayName: 'ERNIE 4.0 8K',
    id: 'ernie-4.0-8k-latest',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 90, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 8192,
    description:
      '百度自研的旗舰级超大规模⼤语⾔模型，相较ERNIE 3.5实现了模型能力全面升级，广泛适用于各领域复杂任务场景；支持自动对接百度搜索插件，保障问答信息时效。',
    displayName: 'ERNIE 4.0 8K Preview',
    id: 'ernie-4.0-8k-preview',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 90, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 8192,
    description:
      '百度自研的旗舰级超大规模⼤语⾔模型，综合效果表现出色，广泛适用于各领域复杂任务场景；支持自动对接百度搜索插件，保障问答信息时效。相较于ERNIE 4.0在性能表现上更优秀',
    displayName: 'ERNIE 4.0 Turbo 8K',
    id: 'ernie-4.0-turbo-8k-latest',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 60, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 128_000,
    description:
      '百度自研的旗舰级超大规模⼤语⾔模型，综合效果表现出色，广泛适用于各领域复杂任务场景；支持自动对接百度搜索插件，保障问答信息时效。相较于ERNIE 4.0在性能表现上更优秀',
    displayName: 'ERNIE 4.0 Turbo 128K',
    id: 'ernie-4.0-turbo-128k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 60, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 8192,
    description:
      '百度自研的旗舰级超大规模⼤语⾔模型，综合效果表现出色，广泛适用于各领域复杂任务场景；支持自动对接百度搜索插件，保障问答信息时效。相较于ERNIE 4.0在性能表现上更优秀',
    displayName: 'ERNIE 4.0 Turbo 8K Preview',
    id: 'ernie-4.0-turbo-8k-preview',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 60, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 8192,
    description:
      '百度自研的旗舰级大规模⼤语⾔模型，覆盖海量中英文语料，具有强大的通用能力，可满足绝大部分对话问答、创作生成、插件应用场景要求；支持自动对接百度搜索插件，保障问答信息时效。',
    displayName: 'ERNIE 3.5 8K',
    id: 'ernie-3.5-8k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 8192,
    description:
      '百度自研的旗舰级大规模⼤语⾔模型，覆盖海量中英文语料，具有强大的通用能力，可满足绝大部分对话问答、创作生成、插件应用场景要求；支持自动对接百度搜索插件，保障问答信息时效。',
    displayName: 'ERNIE 3.5 8K Preview',
    id: 'ernie-3.5-8k-preview',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 128_000,
    description:
      '百度自研的旗舰级大规模⼤语⾔模型，覆盖海量中英文语料，具有强大的通用能力，可满足绝大部分对话问答、创作生成、插件应用场景要求；支持自动对接百度搜索插件，保障问答信息时效。',
    displayName: 'ERNIE 3.5 128K',
    id: 'ernie-3.5-128k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    description:
      'ERNIE Lite是百度自研的轻量级大语言模型，兼顾优异的模型效果与推理性能，适合低算力AI加速卡推理使用。',
    displayName: 'ERNIE Lite 8K',
    id: 'ernie-lite-8k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      '百度自研的轻量级大语言模型，兼顾优异的模型效果与推理性能，效果比ERNIE Lite更优，适合低算力AI加速卡推理使用。',
    displayName: 'ERNIE Lite Pro 128K',
    id: 'ernie-lite-pro-128k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    description: 'ERNIE Tiny是百度自研的超高性能大语言模型，部署与精调成本在文心系列模型中最低。',
    displayName: 'ERNIE Tiny 8K',
    id: 'ernie-tiny-8k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description:
      '百度2024年最新发布的自研高性能大语言模型，通用能力优异，适合作为基座模型进行精调，更好地处理特定场景问题，同时具备极佳的推理性能。',
    displayName: 'ERNIE Speed 128K',
    id: 'ernie-speed-128k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description:
      '百度2024年最新发布的自研高性能大语言模型，通用能力优异，效果比ERNIE Speed更优，适合作为基座模型进行精调，更好地处理特定场景问题，同时具备极佳的推理性能。',
    displayName: 'ERNIE Speed Pro 128K',
    id: 'ernie-speed-pro-128k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    description:
      '百度自研的垂直场景大语言模型，适合游戏NPC、客服对话、对话角色扮演等应用场景，人设风格更为鲜明、一致，指令遵循能力更强，推理性能更优。',
    displayName: 'ERNIE Character 8K',
    id: 'ernie-char-8k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    description:
      '百度自研的垂直场景大语言模型，适合游戏NPC、客服对话、对话角色扮演等应用场景，人设风格更为鲜明、一致，指令遵循能力更强，推理性能更优。',
    displayName: 'ERNIE Character Fiction 8K',
    id: 'ernie-char-fiction-8k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    description: '百度自研通用大语言模型，在小说续写能力上有明显优势，也可用在短剧、电影等场景。',
    displayName: 'ERNIE Novel 8K',
    id: 'ernie-novel-8k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 40, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 120, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 65_536,
    description:
      'DeepSeek-V3 为杭州深度求索人工智能基础技术研究有限公司自研的 MoE 模型，其多项评测成绩突出，在主流榜单中位列开源模型榜首。V3 相比 V2.5 模型生成速度实现 3 倍提升，为用户带来更加迅速流畅的使用体验。',
    displayName: 'DeepSeek V3',
    id: 'deepseek-v3',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 65_536,
    description:
      'DeepSeek-R1 在后训练阶段大规模使用了强化学习技术，在仅有极少标注数据的情况下，极大提升了模型推理能力。在数学、代码、自然语言推理等任务上，性能比肩 OpenAI o1 正式版。',
    displayName: 'DeepSeek R1',
    id: 'deepseek-r1',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description: 'DeepSeek-R1-Distill-Qwen-1.5B是DeepSeek-R1基于Qwen-2.5系列的蒸馏模型。',
    displayName: 'DeepSeek R1 Distill Qwen 1.5B',
    id: 'deepseek-r1-distill-qwen-1.5b',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description: 'DeepSeek-R1-Distill-Qwen-7B是DeepSeek-R1基于Qwen-2.5系列的蒸馏模型。',
    displayName: 'DeepSeek R1 Distill Qwen 7B',
    id: 'deepseek-r1-distill-qwen-7b',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description: 'DeepSeek-R1-Distill-Qwen-14B是DeepSeek-R1基于Qwen-2.5系列的蒸馏模型。',
    displayName: 'DeepSeek R1 Distill Qwen 14B',
    id: 'deepseek-r1-distill-qwen-14b',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description: 'DeepSeek-R1-Distill-Qwen-32B是DeepSeek-R1基于Qwen-2.5系列的蒸馏模型。',
    displayName: 'DeepSeek R1 Distill Qwen 32B',
    id: 'deepseek-r1-distill-qwen-32b',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description: 'DeepSeek-R1-Distill-Llama-8B是DeepSeek-R1基于Llama3.1-8B-Base的蒸馏模型。',
    displayName: 'DeepSeek R1 Distill Llama 8B',
    id: 'deepseek-r1-distill-llama-8b',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description: 'DeepSeek-R1-Distill-Llama-70B是DeepSeek-R1基于Llama3.3-70B-Instruct的蒸馏模型。',
    displayName: 'DeepSeek R1 Distill Llama 70B',
    id: 'deepseek-r1-distill-llama-70b',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      '2025年2月14日首次发布，由千帆大模型研发团队以 Llama3_8B为base模型（Built with Meta Llama）蒸馏所得，蒸馏数据中也同步添加了千帆的语料。',
    displayName: 'DeepSeek R1 Distill Qianfan Llama 8B',
    id: 'deepseek-r1-distill-qianfan-llama-8b',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      '2025年2月14日首次发布，由千帆大模型研发团队以 Llama3_70B为base模型（Built with Meta Llama）蒸馏所得，蒸馏数据中也同步添加了千帆的语料。',
    displayName: 'DeepSeek R1 Distill Qianfan Llama 70B',
    id: 'deepseek-r1-distill-qianfan-llama-70b',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      '通义千问团队推出的高效推理模型，支持消费级硬件部署，具备强大的实时推理能力和与智能体Agent集成的潜力。',
    displayName: 'QwQ 32B',
    id: 'qwq-32b',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
];

const wenxinImageModels: AIImageModelCard[] = [
{
    description: 'musesteamer-air-image is an image-generation model developed by Baidu’s search team to deliver exceptional cost-performance. It can quickly generate clear, action-coherent images based on user prompts, turning user descriptions effortlessly into visuals.',
    displayName: 'MuseSteamer Air Image',
    enabled: true,
    id: 'musesteamer-air-image',
    parameters: {
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        size: {
        default: '1024x1024',
        enum: ['1024x1024', '1280x720', '720x1280', '1152x864', '864x1152', '1328x1328', '1664x928', '928x1664', '1472x1104', '1104x1472']
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.05,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    type: 'image',
  },
  {
    description: 'Qwen-Image is a general image generation model supporting multiple art styles and strong complex text rendering, especially Chinese and English. It supports multi-line layouts, paragraph-level text, and fine detail for complex text-image layouts.',
    displayName: 'Qwen Image',
    enabled: true,
    id: 'qwen-image',
    parameters: {
        height: {
        default: 1024,
        max: 2048,
        min: 512,
        step: 1
      },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        steps: {
        default: 25,
        max: 50,
        min: 1
      },
        width: {
        default: 1024,
        max: 2048,
        min: 512,
        step: 1
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.25,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    type: 'image',
  },
  {
    description: 'Qwen Image Edit is an image-to-image model that edits images based on input images and text prompts, enabling precise adjustments and creative transformations.',
    displayName: 'Qwen Image Edit',
    enabled: true,
    id: 'qwen-image-edit',
    parameters: {
        height: {
        default: 1024,
        max: 2048,
        min: 512,
        step: 1
      },
        imageUrls: {
          default: []
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        width: {
        default: 1024,
        max: 2048,
        min: 512,
        step: 1
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.3,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    type: 'image',
  },
  {
    description:
      '百度自研的iRAG（image based RAG），检索增强的文生图技术，将百度搜索的亿级图片资源跟强大的基础模型能力相结合，就可以生成各种超真实的图片，整体效果远远超过文生图原生系统，去掉了AI味儿，而且成本很低。iRAG具备无幻觉、超真实、立等可取等特点。',
    displayName: 'ERNIE iRAG',
    enabled: true,
    id: 'irag-1.0',
    parameters: {
      prompt: {
        default: '',
      },
      size: {
        default: '1024x1024',
        enum: [
          '768x768',
          '1024x1024',
          '1536x1536',
          '2048x2048',
          '1024x768',
          '2048x1536',
          '768x1024',
          '1536x2048',
          '1024x576',
          '2048x1152',
          '576x1024',
          '1152x2048',
        ],
      },
    },
    releasedAt: '2025-02-05',
    type: 'image',
  },
  {
    description:
      '百度自研的ERNIE iRAG Edit图像编辑模型支持基于图片进行erase（消除对象）、repaint（重绘对象）、variation（生成变体）等操作。',
    displayName: 'ERNIE iRAG Edit',
    enabled: true,
    id: 'ernie-irag-edit',
    parameters: {
      imageUrl: { default: null },
      prompt: {
        default: '',
      },
      size: {
        default: '1024x1024',
        enum: [
          '768x768',
          '1024x1024',
          '1536x1536',
          '2048x2048',
          '1024x768',
          '2048x1536',
          '768x1024',
          '1536x2048',
          '1024x576',
          '2048x1152',
          '576x1024',
          '1152x2048',
        ],
      },
    },
    releasedAt: '2025-04-17',
    type: 'image',
  },
  {
    description: '具有120亿参数的修正流变换器，能够根据文本描述生成图像。',
    displayName: 'FLUX.1-schnell',
    enabled: true,
    id: 'flux.1-schnell',
    parameters: {
      prompt: {
        default: '',
      },
      seed: { default: null },
      size: {
        default: '1024x1024',
        enum: [
          '768x768',
          '1024x1024',
          '1536x1536',
          '2048x2048',
          '1024x768',
          '2048x1536',
          '768x1024',
          '1536x2048',
          '1024x576',
          '2048x1152',
          '576x1024',
          '1152x2048',
        ],
      },
      steps: { default: 25, max: 50, min: 1 },
    },
    releasedAt: '2025-03-27',
    type: 'image',
  },
];

const wenxinVideoModels: AiFullModelCard[] = [
{
    description: 'Supports 5s and 10s 720P dynamic video generation with sound. Enables multi-person conversational audio-visual creation, with synchronized sound and visuals, cinematic-quality imagery, and master-level camera movements.',
    displayName: 'MuseSteamer 2.0 Turbo I2V Audio',
    enabled: true,
    id: 'musesteamer-2.0-turbo-i2v-audio',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      }
      },
    type: 'text2video',
  },
  {
    description: 'Supports 5-second 720P silent dynamic video generation, featuring cinematic-quality visuals, complex camera movements, and realistic character emotions and actions.',
    displayName: 'MuseSteamer 2.0 Turbo I2V',
    enabled: true,
    id: 'musesteamer-2.0-turbo-i2v',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      }
      },
    type: 'text2video',
  },
  {
    description: 'Based on Turbo, supports 1080P dynamic video generation, offering higher visual quality and enhanced video expressiveness.',
    displayName: 'MuseSteamer 2.0 Pro I2V',
    enabled: true,
    id: 'musesteamer-2.0-pro-i2v',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      }
      },
    type: 'text2video',
  },
  {
    description: 'Compared to Turbo, it offers superior performance with excellent cost-effectiveness.',
    displayName: 'MuseSteamer 2.0 Lite I2V',
    enabled: true,
    id: 'musesteamer-2.0-lite-i2v',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      }
      },
    type: 'text2video',
  },
  {
    description: 'The Baidu MuseSteamer Air video generation model performs well in subject consistency, physical realism, camera movement effects, and generation speed. It supports 5-second 720P silent dynamic video generation, delivering cinematic-quality visuals, fast generation, and excellent cost-effectiveness.',
    displayName: 'MuseSteamer Air I2V',
    id: 'musesteamer-air-i2v',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      }
      },
    type: 'text2video',
  },
];

export const allModels = [...wenxinChatModels, ...wenxinImageModels, ...wenxinVideoModels];

export default allModels;
