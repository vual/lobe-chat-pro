import { AIChatModelCard, AIImageModelCard } from '../types/aiModel';

const wenxinChatModels: AIChatModelCard[] = [
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
      search: true,
    },
    contextWindowTokens: 32_768,
    description:
      'ERNIE X1 Turbo 32K Preview is a fast thinking model with 32K context for complex reasoning and multi-turn chat.',
    displayName: 'ERNIE X1 Turbo 32K Preview',
    id: 'ernie-x1-turbo-32k-preview',
    maxOutput: 28_160,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
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
      'Qianfan Composition is a multimodal creation model for mixed image-text understanding and generation.',
    displayName: 'Qianfan Composition',
    id: 'qianfan-composition',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 7.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qianfan Check VL is a multimodal content review model for image-text compliance and recognition tasks.',
    displayName: 'Qianfan Check VL',
    id: 'qianfan-check-vl',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3.75, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qianfan MultiPicOCR is a multi-image OCR model for text detection and recognition across images.',
    displayName: 'Qianfan MultiPicOCR',
    id: 'qianfan-multipicocr',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 7.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_768,
    description: 'Qianfan VL 70B is a large VLM for complex image-text understanding.',
    displayName: 'Qianfan VL 70B',
    id: 'qianfan-vl-70b',
    maxOutput: 28_672,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 24, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_768,
    description: 'Qianfan VL 8B is a lightweight VLM for daily image-text QA and analysis.',
    displayName: 'Qianfan VL 8B',
    id: 'qianfan-vl-8b',
    maxOutput: 28_672,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qianfan QI VL is a multimodal QA model for accurate retrieval and QA in complex image-text scenarios.',
    displayName: 'Qianfan QI VL',
    id: 'qianfan-qi-vl',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 4096,
    description:
      'Qianfan EngCard VL is a multimodal recognition model focused on English scenarios.',
    displayName: 'Qianfan EngCard VL',
    id: 'qianfan-engcard-vl',
    maxOutput: 4000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 4096,
    description:
      'Qianfan SinglePicOCR is a single-image OCR model with high-accuracy character recognition.',
    displayName: 'Qianfan SinglePicOCR',
    id: 'qianfan-singlepicocr',
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'InternVL3 38B is a large open-source multimodal model for high-accuracy image-text understanding.',
    displayName: 'InternVL3 38B',
    id: 'internvl3-38b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 24, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_768,
    description: 'InternVL3 14B is a mid-size multimodal model balancing performance and cost.',
    displayName: 'InternVL3 14B',
    id: 'internvl3-14b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'InternVL3 1B is a lightweight multimodal model for resource-constrained deployment.',
    displayName: 'InternVL3 1B',
    id: 'internvl3-1b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'InternVL2.5 38B MPO is a multimodal pretrained model for complex image-text reasoning.',
    displayName: 'InternVL2.5 38B MPO',
    id: 'internvl2.5-38b-mpo',
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 24, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3 VL 32B Instruct is a multimodal instruction-tuned model for high-quality image-text QA and creation.',
    displayName: 'Qwen3 VL 32B Instruct',
    id: 'qwen3-vl-32b-instruct',
    maxOutput: 32_768,
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
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3 VL 32B Thinking is a deep-thinking multimodal version for complex reasoning and long-chain analysis.',
    displayName: 'Qwen3 VL 32B Thinking',
    id: 'qwen3-vl-32b-thinking',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3 VL 8B Instruct is a lightweight multimodal model for daily visual QA and app integration.',
    displayName: 'Qwen3 VL 8B Instruct',
    id: 'qwen3-vl-8b-instruct',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3 VL 8B Thinking is a multimodal chain-of-thought model for detailed visual reasoning.',
    displayName: 'Qwen3 VL 8B Thinking',
    id: 'qwen3-vl-8b-thinking',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3 VL 30B A3B Instruct is a large multimodal model balancing accuracy and reasoning performance.',
    displayName: 'Qwen3 VL 30B A3B Instruct',
    id: 'qwen3-vl-30b-a3b-instruct',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.75, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3 VL 30B A3B Thinking is a deep-thinking version for complex multimodal tasks.',
    displayName: 'Qwen3 VL 30B A3B Thinking',
    id: 'qwen3-vl-30b-a3b-thinking',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.75, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 7.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3 VL 235B A22B Instruct is a flagship multimodal model for demanding understanding and creation.',
    displayName: 'Qwen3 VL 235B A22B Instruct',
    id: 'qwen3-vl-235b-a22b-instruct',
    maxOutput: 32_768,
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
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3 VL 235B A22B Thinking is the flagship thinking version for complex multimodal reasoning and planning.',
    displayName: 'Qwen3 VL 235B A22B Thinking',
    id: 'qwen3-vl-235b-a22b-thinking',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      video: true,
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen2.5 VL 32B Instruct is an open-source multimodal model suitable for private deployment and multi-scenario use.',
    displayName: 'Qwen2.5 VL 32B Instruct',
    id: 'qwen2.5-vl-32b-instruct',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 24, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 65_536,
    description:
      'GLM-4.5V is a multimodal vision-language model for general image understanding and QA.',
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
              '[0.032, 0.064]': 4,
            },
            pricingParams: ['textInput'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 6,
              '[0.032, 0.064]': 12,
            },
            pricingParams: ['textInput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 4096,
    description:
      'DeepSeek VL2 is a multimodal model for image-text understanding and fine-grained visual QA.',
    displayName: 'DeepSeek VL2',
    id: 'deepseek-vl2',
    maxOutput: 2048,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.99, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.99, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 4096,
    description:
      'DeepSeek VL2 Small is a lightweight multimodal version for resource-constrained and high-concurrency use.',
    displayName: 'DeepSeek VL2 Small',
    id: 'deepseek-vl2-small',
    maxOutput: 2048,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 144_000,
    description:
      'DeepSeek V3.2 Think is a full deep-thinking model with stronger long-chain reasoning.',
    displayName: 'DeepSeek V3.2 Think',
    id: 'deepseek-v3.2-think',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
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
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 144_000,
    description:
      'DeepSeek V3.1 Think 250821 is the deep-thinking model corresponding to the Terminus version, built for high-performance reasoning.',
    displayName: 'DeepSeek V3.1 Think 250821',
    id: 'deepseek-v3.1-think-250821',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
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
      reasoning: true,
    },
    contextWindowTokens: 144_000,
    description:
      'DeepSeek R1 250528 is the full DeepSeek-R1 reasoning model for hard math and logic tasks.',
    displayName: 'DeepSeek R1 250528',
    id: 'deepseek-r1-250528',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek R1 Distill Qianfan 70B is an R1 distill based on Qianfan-70B with strong value.',
    displayName: 'DeepSeek R1 Distill Qianfan 70B',
    id: 'deepseek-r1-distill-qianfan-70b',
    maxOutput: 8192,
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
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek R1 Distill Qianfan 8B is an R1 distill based on Qianfan-8B for small and mid-sized apps.',
    displayName: 'DeepSeek R1 Distill Qianfan 8B',
    id: 'deepseek-r1-distill-qianfan-8b',
    maxOutput: 8192,
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
      reasoning: true,
      search: true,
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
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
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
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 65_536,
    description: 'ERNIE X1.1 Preview is a thinking-model preview for evaluation and testing.',
    displayName: 'ERNIE X1.1 Preview',
    id: 'ernie-x1.1-preview',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
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
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 131_072,
    description:
      'ERNIE 5.1 is the latest model in the ERNIE series, featuring comprehensive upgrades to its foundational capabilities. It demonstrates significant improvements in areas such as agents, knowledge processing, reasoning, and deep search.',
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
              '[0.032, 0.128]': 6,
            },
            pricingParams: ['textInput'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 18,
              '[0.032, 0.128]': 22,
            },
            pricingParams: ['textInput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-05-09',
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
      video: true,
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'ERNIE 5.0, the new-generation model in the ERNIE series, is a natively multimodal large model. It adopts a unified multimodal modeling approach, jointly modeling text, images, audio, and video to deliver comprehensive multimodal capabilities.',
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
              '[0.032, 0.128]': 10,
            },
            pricingParams: ['textInput'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 24,
              '[0.032, 0.128]': 40,
            },
            pricingParams: ['textInput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-03-05',
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
      video: true,
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Wenxin 5.0 Thinking is a native full-modal flagship model with unified text, image, audio, and video modeling. It delivers broad capability upgrades for complex QA, creation, and agent scenarios.',
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
              '[0.032, 0.128]': 10,
            },
            pricingParams: ['textInput'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 24,
              '[0.032, 0.128]': 40,
            },
            pricingParams: ['textInput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-11-12',
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
      video: true,
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Wenxin 5.0 Thinking Preview is a native full-modal flagship model with unified text, image, audio, and video modeling. It delivers broad capability upgrades for complex QA, creation, and agent scenarios.',
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
              '[0.032, 0.128]': 10,
            },
            pricingParams: ['textInput'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 24,
              '[0.032, 0.128]': 40,
            },
            pricingParams: ['textInput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-11-12',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
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
    contextWindowTokens: 131_072,
    description:
      'ERNIE 4.5 0.3B is an open-source lightweight model for local and customized deployment.',
    displayName: 'ERNIE 4.5 0.3B',
    id: 'ernie-4.5-0.3b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description:
      'Qianfan 8B is a mid-size general model balancing cost and quality for text generation and QA.',
    displayName: 'Qianfan 8B',
    id: 'qianfan-8b',
    maxOutput: 16_384,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description:
      'Qianfan 70B is a large Chinese model for high-quality generation and complex reasoning.',
    displayName: 'Qianfan 70B',
    id: 'qianfan-70b',
    maxOutput: 16_384,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3.2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description:
      'Qianfan Agent Intent 32K targets intent recognition and agent orchestration with long context support.',
    displayName: 'Qianfan Agent Intent 32K',
    id: 'qianfan-agent-intent-32k',
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    description:
      'Qianfan Agent Lite 8K is a lightweight agent model for low-cost multi-turn dialogue and workflows.',
    displayName: 'Qianfan Agent Lite 8K',
    id: 'qianfan-agent-lite-8k',
    maxOutput: 2048,
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    description:
      'ERNIE Character Fiction 8K Preview is a character and plot creation model preview for feature evaluation and testing.',
    displayName: 'ERNIE Character Fiction 8K Preview',
    id: 'ernie-char-fiction-8k-preview',
    maxOutput: 2048,
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
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3 Next 80B A3B Thinking is a flagship reasoning model version for complex tasks.',
    displayName: 'Qwen3 Next 80B A3B Thinking',
    id: 'qwen3-next-80b-a3b-thinking',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
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
    description:
      'Qwen3 235B A22B Thinking 2507 is an ultra-large thinking model for hard reasoning.',
    displayName: 'Qwen3 235B A22B Thinking 2507',
    id: 'qwen3-235b-a22b-thinking-2507',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3 30B A3B Thinking 2507 is a mid-large thinking model balancing accuracy and cost.',
    displayName: 'Qwen3 30B A3B Thinking 2507',
    id: 'qwen3-30b-a3b-thinking-2507',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.75, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 7.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description:
      "Kimi K2 Instruct is Kimi's official reasoning model with long context for code, QA, and more.",
    displayName: 'Kimi K2 Instruct',
    id: 'kimi-k2-instruct',
    maxOutput: 32_768,
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
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3 Coder 480B A35B Instruct is a flagship code model for multilingual programming and complex code understanding.',
    displayName: 'Qwen3 Coder 480B A35B Instruct',
    id: 'qwen3-coder-480b-a35b-instruct',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 6,
              '[0.032, 0.128]': 9,
            },
            pricingParams: ['textInput'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 24,
              '[0.032, 0.128]': 36,
            },
            pricingParams: ['textInput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3 235B A22B Instruct 2507 is a flagship instruct model for a wide range of generation and reasoning tasks.',
    displayName: 'Qwen3 235B A22B Instruct 2507',
    id: 'qwen3-235b-a22b-instruct-2507',
    maxOutput: 32_768,
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
      functionCall: true,
      search: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3 30B A3B Instruct 2507 is a mid-large instruct model for high-quality generation and QA.',
    displayName: 'Qwen3 30B A3B Instruct 2507',
    id: 'qwen3-30b-a3b-instruct-2507',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.75, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      searchImpl: 'params',
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
        { name: 'textInput', rate: 0.75, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Qwen3 32B is suited for general tasks requiring stronger understanding.',
    displayName: 'Qwen3 32B',
    id: 'qwen3-32b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Qwen3 14B is a mid-size model for multilingual QA and text generation.',
    displayName: 'Qwen3 14B',
    id: 'qwen3-14b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description:
      'Qwen3 8B is a lightweight model with flexible deployment for high-concurrency workloads.',
    displayName: 'Qwen3 8B',
    id: 'qwen3-8b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Qwen3 4B is suitable for small-to-mid apps and local inference.',
    displayName: 'Qwen3 4B',
    id: 'qwen3-4b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description: 'Qwen3 1.7B is an ultra-light model for edge and device deployment.',
    displayName: 'Qwen3 1.7B',
    id: 'qwen3-1.7b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description:
      'Qwen3 0.6B is an entry-level model for simple reasoning and very constrained environments.',
    displayName: 'Qwen3 0.6B',
    id: 'qwen3-0.6b',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
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

export const allModels = [...wenxinChatModels, ...wenxinImageModels];

export default allModels;
