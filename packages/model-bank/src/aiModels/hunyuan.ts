import { AIChatModelCard } from '../types/aiModel';

// https://cloud.tencent.com/document/product/1729/104753
const hunyuanChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      structuredOutput: true,
    },
    contextWindowTokens: 256_000,
    description:
      'Hunyuan Hy3 Preview is designed for agent workloads, adopting a Mixture-of-Experts (MoE) architecture with 295B total parameters and 21B activated parameters. It offers three modes within a single model—**no_think** (ultra-fast response), **think_low** (quick reasoning), and **think_high** (deep reasoning)—to accommodate varying latency and depth requirements, from high-frequency interactions to complex engineering tasks. It achieves near state-of-the-art performance on coding benchmarks such as SWE-bench Verified, and supports a 256K context window for cross-file code refactoring and long-document analysis. This model is well-suited for developers who require reliable task completion while remaining sensitive to inference cost.',
    displayName: 'Hy3 preview',
    enabled: true,
    id: 'hy3-preview',
    maxOutput: 128_000,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.016]': 0.4,
              '[0.016, 0.032]': 0.6,
              '[0.032, infinity]': 0.8,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput_cacheRead',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.016]': 1.2,
              '[0.016, 0.032]': 1.6,
              '[0.032, infinity]': 2,
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
              '[0, 0.016]': 4,
              '[0.016, 0.032]': 6.4,
              '[0.032, infinity]': 8,
            },
            pricingParams: ['textInput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-04-23',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 192_000,
    description:
      'Specialized in creative content, multi-turn interactions, and practical instruction-following scenarios. Significantly enhanced capabilities in mathematics, coding, and agent-based tasks.',
    displayName: 'HY 2.0 Think',
    enabled: true,
    id: 'hunyuan-2.0-thinking-20251109',
    maxOutput: 64_000,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 3.975,
              '[0.032, infinity]': 5.3,
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
              '[0, 0.032]': 15.9,
              '[0.032, infinity]': 21.2,
            },
            pricingParams: ['textInput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-11-09',
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
      'The model foundation has been comprehensively upgraded, with more robust core capabilities. It achieves top-tier performance in knowledge, mathematics, writing, and reasoning. It also demonstrates excellent performance in instruction following, multi-turn interactions, and long-context comprehension.',
    displayName: 'HY 2.0 Instruct',
    enabled: true,
    id: 'hunyuan-2.0-instruct-20251111',
    maxOutput: 32_000,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 3.18,
              '[0.032, infinity]': 4.505,
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
              '[0, 0.032]': 7.95,
              '[0.032, infinity]': 11.13,
            },
            pricingParams: ['textInput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-11-11',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description:
      'For role-playing scenarios, it delivers highly consistent character alignment and exceptionally natural, human-like conversational style. It offers engaging narrative development and progression, along with emotional companionship and fulfillment.',
    displayName: 'Hunyuan-role',
    id: 'hunyuan-role-latest',
    maxOutput: 32_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2.4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 9.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-03-04',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      structuredOutput: true,
    },
    contextWindowTokens: 200_000,
    description:
      'GLM-5.1 is Zhipu\'s latest flagship model, with significantly enhanced coding capabilities and substantial improvements in long-horizon tasks. It can operate continuously and autonomously for up to 8 hours within a single task, completing a full closed loop from planning and execution to iterative optimization, delivering engineering-grade results. In terms of overall capabilities and coding performance, GLM-5.1 is aligned with Claude Opus 4.6. It demonstrates stronger sustained execution in long-running tasks, complex engineering optimization, and real-world development scenarios, making it an ideal foundation for building autonomous agents and long-horizon coding agents.',
    displayName: 'GLM-5.1',
    id: 'glm-5.1',
    maxOutput: 128_000,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 1.3,
              '[0.032, infinity]': 2,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput_cacheRead',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 6,
              '[0.032, infinity]': 8,
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
              '[0.032, infinity]': 28,
            },
            pricingParams: ['textInput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-04-08',
    settings: {
      extendParams: ['enableReasoning'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      structuredOutput: true,
    },
    contextWindowTokens: 200_000,
    description:
      'A model deeply optimized for real-world, long-chain agent tasks, with a focus on improving complex instruction decomposition, tool usage, scheduled continuous execution, and long-task stability.',
    displayName: 'GLM-5-Turbo',
    id: 'glm-5-turbo',
    maxOutput: 128_000,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 1.2,
              '[0.032, infinity]': 1.8,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput_cacheRead',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 5,
              '[0.032, infinity]': 7,
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
              '[0, 0.032]': 22,
              '[0.032, infinity]': 26,
            },
            pricingParams: ['textInput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-03-16',
    settings: {
      extendParams: ['enableReasoning'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 200_000,
    description:
      'GLM-5 is Zhipu\'s new-generation flagship foundation model, designed for agentic engineering. It excels at complex systems engineering, long-horizon agent tasks, and programming, achieving state-of-the-art (SOTA) performance among open-source models in both coding and agent capabilities.',
    displayName: 'GLM-5',
    id: 'glm-5',
    maxOutput: 128_000,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 1,
              '[0.032, infinity]': 1.5,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput_cacheRead',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 4,
              '[0.032, infinity]': 6,
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
              '[0.032, infinity]': 22,
            },
            pricingParams: ['textInput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-02-11',
    settings: {
      extendParams: ['enableReasoning'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      structuredOutput: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'GLM-5V-Turbo is Zhipu\'s first multimodal coding foundation model, designed for vision-based programming tasks. It natively handles multimodal inputs such as images, videos, and text, while excelling in long-horizon planning, complex programming, and action execution. Deeply optimized for agent workflows, it can collaborate seamlessly with agents like Claude Code and OpenClaw.',
    displayName: 'GLM-5V-Turbo',
    id: 'glm-5v-turbo',
    maxOutput: 128_000,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 1.2,
              '[0.032, infinity]': 1.8,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput_cacheRead',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 5,
              '[0.032, infinity]': 7,
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
              '[0, 0.032]': 22,
              '[0.032, infinity]': 26,
            },
            pricingParams: ['textInput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-04-02',
    settings: {
      extendParams: ['enableReasoning'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      structuredOutput: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 256_000,
    description:
      'Kimi K2.6, as Kimi\'s latest open-source model, delivers industry-leading (state-of-the-art) capabilities in coding, long-horizon task execution, and agent orchestration. K2.6 achieves breakthroughs in long-range coding tasks, demonstrating more reliable generalization across different programming languages (such as Rust, Go, and Python) and diverse task scenarios (including frontend development, DevOps, and performance optimization).',
    displayName: 'Kimi K2.6',
    id: 'kimi-k2.6',
    maxOutput: 256_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 1.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 6.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 27, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-04-20',
    settings: {
      extendParams: ['enableReasoning'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      structuredOutput: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 256_000,
    description:
      'Kimi K2.5 is Kimi\'s most versatile model to date, featuring a natively multimodal architecture. It supports both visual and text inputs, thinking and non-thinking modes, as well as conversational and agent-based tasks.',
    displayName: 'Kimi K2.5',
    id: 'kimi-k2.5',
    maxOutput: 256_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 0.7, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 21, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-01-27',
    settings: {
      extendParams: ['enableReasoning'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 200_000,
    description:
      'A self-evolving large language model developed by MiniMax, featuring strong software engineering capabilities and professional office productivity skills. It supports complex agent interactions and end-to-end project delivery.',
    displayName: 'MiniMax-M2.7',
    id: 'minimax-m2.7',
    maxOutput: 128_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 0.42, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 2.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-03-18',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 200_000,
    description:
      'MiniMax-M2.5 achieves or sets new state-of-the-art performance across productivity scenarios such as programming, tool use and search, and office-related tasks.',
    displayName: 'MiniMax-M2.5',
    id: 'minimax-m2.5',
    maxOutput: 128_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 0.21, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 2.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-02-12',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      structuredOutput: true,
    },
    contextWindowTokens: 1_000_000,
    description:
      'DeepSeek-V4-Flash is a production-grade model purpose-built for high concurrency and low latency. It features a standard 1M context window across the lineup, delivering near-flagship reasoning performance and outstanding agent response efficiency at extremely low cost.',
    displayName: 'DeepSeek-V4-Flash',
    id: 'deepseek-v4-flash',
    maxOutput: 384_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 0.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-04-24',
    settings: {
      extendParams: ['enableReasoning'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      structuredOutput: true,
    },
    contextWindowTokens: 1_000_000,
    description:
      'DeepSeek-V4-Pro is a native multimodal flagship model with 1.6 trillion parameters. Powered by a novel CSA+HCA hybrid attention architecture, it represents the industry\'s cutting edge in complex mathematical reasoning, long-horizon code engineering, and advanced agent collaboration.',
    displayName: 'DeepSeek-V4-Pro',
    id: 'deepseek-v4-pro',
    maxOutput: 384_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 24, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-04-24',
    settings: {
      extendParams: ['enableReasoning'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      structuredOutput: true,
    },
    contextWindowTokens: 128_000,
    description:
      'DeepSeek-V3.2 is a 685B-parameter MoE (Mixture-of-Experts) model. It introduces a sparse attention architecture that improves efficiency in long-context processing and achieves GPT-5-level performance on reasoning benchmarks.',
    displayName: 'Deepseek-v3.2',
    id: 'deepseek-v3.2',
    maxOutput: 32_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-12-02',
    settings: {
      extendParams: ['enableReasoning'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      structuredOutput: true,
    },
    contextWindowTokens: 128_000,
    description:
      'DeepSeek-V3.1-Terminus is a 685B-parameter MoE (Mixture-of-Experts) model. While retaining the core capabilities of its predecessor, it improves language consistency and agent-related performance, delivering more stable outputs compared to the previous version.',
    displayName: 'Deepseek-v3.1',
    id: 'deepseek-v3.1',
    maxOutput: 32_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-09-23',
    settings: {
      extendParams: ['enableReasoning'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      structuredOutput: true,
    },
    contextWindowTokens: 128_000,
    description:
      'DeepSeek-R1-0528 is a 671B-parameter model. With architectural optimizations and upgraded training strategies, it delivers significant improvements over the previous version in code generation, long-context processing, and complex reasoning tasks.',
    displayName: 'Deepseek-r1-0528',
    id: 'deepseek-r1-0528',
    maxOutput: 16_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-05-28',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      'DeepSeek-V3-0324 is a 671B-parameter MoE (Mixture-of-Experts) model. It demonstrates strong advantages in programming and technical capabilities, as well as in contextual understanding and long-form text processing.',
    displayName: 'Deepseek-v3-0324',
    id: 'deepseek-v3-0324',
    maxOutput: 16_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-25',
    type: 'chat',
  },
  {
    abilities: {
      video: true,
      vision: true,
    },
    contextWindowTokens: 256_000,
    description:
      'VITA is a multimodal understanding model that supports analysis of video and image content. It can be used for tasks such as video structure parsing and image object detection.',
    displayName: 'YT-VITA',
    id: 'youtu-vita',
    maxOutput: 256_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-01-10',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 256_000,
    description:
      '混元第一个混合推理模型，hunyuan-standard-256K 的升级版本，总参数80B，激活13B，默认是慢思考模式，支持通过参数或者指令进行快慢思考模式切换，慢快思考切换方式为 query 前加/ no_think；整体能力相对上一代全面提升，特别数学、科学、长文理解和 Agent 能力提升显著。',
    displayName: 'Hunyuan A13B',
    enabled: true,
    id: 'hunyuan-a13b',
    maxOutput: 32_000,
    releasedAt: '2025-06-25',
    settings: {
      extendParams: ['enableReasoning'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 96_000,
    description:
      '大幅提升主模型慢思考模型的高难数学、复杂推理、高难代码、指令遵循、文本创作质量等能力。',
    displayName: 'Hunyuan T1',
    enabled: true,
    id: 'hunyuan-t1-latest',
    maxOutput: 64_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-22',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 92_000,
    description: '大幅提升高难度数学、逻辑和代码能力，优化模型输出稳定性，提升模型长文能力。',
    displayName: 'Hunyuan T1 20250711',
    id: 'hunyuan-t1-20250711',
    maxOutput: 64_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-11',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 92_000,
    description:
      '优化文本创作、作文写作，优化代码前端、数学、逻辑推理等理科能力，提升指令遵循能力。',
    displayName: 'Hunyuan T1 20250529',
    id: 'hunyuan-t1-20250529',
    maxOutput: 64_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-05-29',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 92_000,
    description:
      '提升项目级别代码生成能力；提升文本生成写作质量；提升文本理解 topic 的多轮、tob 指令遵循和字词理解能力；优化繁简混杂和中英混杂输出问题。',
    displayName: 'Hunyuan T1 20250403',
    id: 'hunyuan-t1-20250403',
    maxOutput: 64_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
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
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 92_000,
    description:
      '全面搭建模型文理科能力，长文本信息捕捉能力强。支持推理解答各种难度的数学/逻辑推理/科学/代码等科学问题。',
    displayName: 'Hunyuan T1 20250321',
    id: 'hunyuan-t1-20250321',
    maxOutput: 64_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-21',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 256_000,
    description:
      '升级为 MOE 结构，上下文窗口为 256k ，在 NLP，代码，数学，行业等多项评测集上领先众多开源模型。',
    displayName: 'Hunyuan Lite',
    enabled: true,
    id: 'hunyuan-lite',
    maxOutput: 6000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-10-30',
    type: 'chat',
  },
  {
    abilities: {
      search: true,
    },
    contextWindowTokens: 32_000,
    description:
      '采用更优的路由策略，同时缓解了负载均衡和专家趋同的问题。长文方面，大海捞针指标达到99.9%。MOE-32K 性价比相对更高，在平衡效果、价格的同时，可对实现对长文本输入的处理。',
    displayName: 'Hunyuan Standard',
    id: 'hunyuan-standard',
    maxOutput: 2000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-02-10',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      search: true,
    },
    contextWindowTokens: 256_000,
    description:
      '采用更优的路由策略，同时缓解了负载均衡和专家趋同的问题。长文方面，大海捞针指标达到99.9%。MOE-256K 在长度和效果上进一步突破，极大的扩展了可输入长度。',
    displayName: 'Hunyuan Standard 256K',
    id: 'hunyuan-standard-256K',
    maxOutput: 6000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-02-10',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      search: true,
    },
    contextWindowTokens: 32_000,
    description:
      'Hunyuan-large 模型总参数量约 389B，激活参数量约 52B，是当前业界参数规模最大、效果最好的 Transformer 架构的开源 MoE 模型。',
    displayName: 'Hunyuan Large',
    enabled: true,
    id: 'hunyuan-large',
    maxOutput: 4000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-02-10',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      search: true,
    },
    contextWindowTokens: 134_000,
    description:
      '擅长处理长文任务如文档摘要和文档问答等，同时也具备处理通用文本生成任务的能力。在长文本的分析和生成上表现优异，能有效应对复杂和详尽的长文内容处理需求。',
    displayName: 'Hunyuan Large Longcontext',
    id: 'hunyuan-large-longcontext',
    maxOutput: 6000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 18, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-12-18',
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
    contextWindowTokens: 32_000,
    description:
      '通用体验优化，包括NLP理解、文本创作、闲聊、知识问答、翻译、领域等；提升拟人性，优化模型情商；提升意图模糊时模型主动澄清能力；提升字词解析类问题的处理能力；提升创作的质量和可互动性；提升多轮体验。',
    displayName: 'Hunyuan Turbo',
    id: 'hunyuan-turbo-latest',
    maxOutput: 4000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2.4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 9.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-10',
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
    contextWindowTokens: 32_000,
    description:
      '本版本优化：数据指令scaling，大幅提升模型通用泛化能力；大幅提升数学、代码、逻辑推理能力；优化文本理解字词理解相关能力；优化文本创作内容生成质量',
    displayName: 'Hunyuan Turbo 20241223',
    id: 'hunyuan-turbo-20241223',
    maxOutput: 4000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2.4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 9.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-10',
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
    contextWindowTokens: 134_000,
    description:
      '擅长处理长文任务如文档摘要和文档问答等，同时也具备处理通用文本生成任务的能力。在长文本的分析和生成上表现优异，能有效应对复杂和详尽的长文内容处理需求。',
    displayName: 'Hunyuan TurboS LongText 128K',
    id: 'hunyuan-turbos-longtext-128k-20250325',
    maxOutput: 6000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-25',
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
    contextWindowTokens: 44_000,
    description: 'hunyuan-TurboS 混元旗舰大模型最新版本，具备更强的思考能力，更优的体验效果。',
    displayName: 'Hunyuan TurboS',
    enabled: true,
    id: 'hunyuan-turbos-latest',
    maxOutput: 16_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-16',
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
    contextWindowTokens: 44_000,
    description:
      '预训练底座数据质量升级。优化 posttrain 阶段训练策略，持续提升 Agent、英语小语种、指令遵循、代码和理科能力。',
    displayName: 'Hunyuan TurboS 20250926',
    id: 'hunyuan-turbos-20250926',
    maxOutput: 16_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-09-26',
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
    contextWindowTokens: 44_000,
    description:
      '预训练底座升级，写作、阅读理解能力提升，较大幅度提升代码和理科能力，复杂指令遵循等持续提升。',
    displayName: 'Hunyuan TurboS 20250604',
    id: 'hunyuan-turbos-20250604',
    maxOutput: 16_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-04',
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
    contextWindowTokens: 32_000,
    description:
      '预训练底座升级，增强底座的指令理解及遵循能力；对齐阶段增强数学、代码、逻辑、科学等理科能力；提升文创写作质量、文本理解、翻译准确率、知识问答等文科能力；增强各领域 Agent 能力，重点加强多轮对话理解能力等。',
    displayName: 'Hunyuan TurboS 20250416',
    id: 'hunyuan-turbos-20250416',
    maxOutput: 8000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-16',
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
    contextWindowTokens: 32_000,
    description:
      '统一数学解题步骤的风格，加强数学多轮问答。文本创作优化回答风格，去除AI味，增加文采。',
    displayName: 'Hunyuan TurboS 20250313',
    id: 'hunyuan-turbos-20250313',
    maxOutput: 8000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-13',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 36_000,
    description:
      '混元最新7B多模态模型，上下文窗口32K，支持中英文场景的多模态对话、图像物体识别、文档表格理解、多模态数学等，在多个维度上评测指标优于7B竞品模型。',
    displayName: 'Hunyuan Lite Vision',
    id: 'hunyuan-lite-vision',
    maxOutput: 4000,
    releasedAt: '2024-12-12',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 8000,
    description: '混元最新多模态模型，支持多语种作答，中英文能力均衡。',
    displayName: 'Hunyuan Standard Vision',
    id: 'hunyuan-standard-vision',
    maxOutput: 2000,
    releasedAt: '2024-12-31',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 8000,
    description:
      '混元新一代视觉语言旗舰大模型，采用全新的混合专家模型（MoE）结构，在图文理解相关的基础识别、内容创作、知识问答、分析推理等能力上相比前一代模型全面提升。',
    displayName: 'Hunyuan Turbo Vision',
    id: 'hunyuan-turbo-vision',
    maxOutput: 2000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 80, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 80, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-11-26',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 16_000,
    description:
      '此模型适用于图文理解场景，是基于混元Large训练的视觉语言大模型，支持任意分辨率多张图片+文本输入，生成文本内容，聚焦图文理解相关任务，在多语言图文理解能力上有显著提升。',
    displayName: 'Hunyuan Large Vision',
    id: 'hunyuan-large-vision',
    maxOutput: 8000,
    releasedAt: '2025-05-26',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 40_000,
    description:
      '混元最新版 t1-vision 视觉深度思考模型，相比上一版模型在通用图文问答、视觉定位、OCR、图表、拍题解题、看图创作等任务上全面提升，显著优化了英文和小语种能力。',
    displayName: 'Hunyuan T1 Vision 20250916',
    id: 'hunyuan-t1-vision-20250916',
    maxOutput: 16_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 9, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-09-16',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 40_000,
    description:
      '混元最新版t1-vision多模态理解深度思考模型，支持多模态原生长思维链，相比上一代默认版本模型全面提升。',
    displayName: 'Hunyuan T1 Vision 20250619',
    id: 'hunyuan-t1-vision-20250619',
    maxOutput: 16_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 9, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-19',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_000,
    description:
      '混元最新版turbos-vision视觉语言旗舰大模型，在图文理解相关的任务上，包括基于图片的实体识别、知识问答、文案创作、拍照解题等上面相比上一代默认版本模型全面提升。',
    displayName: 'Hunyuan TurboS Vision 20250619',
    id: 'hunyuan-turbos-vision-20250619',
    maxOutput: 16_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 9, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-19',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_000,
    description:
      '此模型适用于图文理解场景，是基于混元最新 turbos 的新一代视觉语言旗舰大模型，聚焦图文理解相关任务，包括基于图片的实体识别、知识问答、文案创作、拍照解题等方面，相比前一代模型全面提升。',
    displayName: 'Hunyuan TurboS Vision',
    id: 'hunyuan-turbos-vision',
    maxOutput: 24_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 9, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-05-23',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_000,
    description: '混元最新多模态模型，支持图片+文本输入生成文本内容。',
    displayName: 'Hunyuan Vision',
    id: 'hunyuan-vision',
    maxOutput: 16_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 18, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 18, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-03',
    type: 'chat',
  },
  {
    contextWindowTokens: 8000,
    description:
      '混元最新代码生成模型，经过 200B 高质量代码数据增训基座模型，迭代半年高质量 SFT 数据训练，上下文长窗口长度增大到 8K，五大语言代码生成自动评测指标上位居前列；五大语言10项考量各方面综合代码任务人工高质量评测上，性能处于第一梯队',
    displayName: 'Hunyuan Code',
    id: 'hunyuan-code',
    maxOutput: 4000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 3.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 7, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-11-12',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_000,
    description:
      '混元最新 MOE 架构 FunctionCall 模型，经过高质量的 FunctionCall 数据训练，上下文窗口达 32K，在多个维度的评测指标上处于领先。',
    displayName: 'Hunyuan FunctionCall',
    id: 'hunyuan-functioncall',
    maxOutput: 4000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-22',
    type: 'chat',
  },
  {
    contextWindowTokens: 32_000,
    description:
      '混元最新版角色扮演模型，混元官方精调训练推出的角色扮演模型，基于混元模型结合角色扮演场景数据集进行增训，在角色扮演场景具有更好的基础效果。',
    displayName: 'Hunyuan Role',
    id: 'hunyuan-role',
    maxOutput: 4000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-07-04',
    type: 'chat',
  },
  {
    contextWindowTokens: 32_000,
    description:
      '混元最新版角色扮演模型，混元官方精调训练推出的角色扮演模型，基于混元模型结合角色扮演场景数据集进行增训，在角色扮演场景具有更好的基础效果。',
    displayName: 'Hunyuan TurboS Role Plus',
    id: 'hunyuan-turbos-role-plus',
    maxOutput: 4000,
    type: 'chat',
  },
  // {
  //   contextWindowTokens: 8000,
  //   description:
  //     '混元翻译模型支持自然语言对话式翻译；支持中文和英语、日语、法语、葡萄牙语、西班牙语、土耳其语、俄语、阿拉伯语、韩语、意大利语、德语、越南语、马来语、印尼语15种语言互译。',
  //   displayName: 'Hunyuan Translation Lite',
  //   id: 'hunyuan-translation-lite',
  //   maxOutput: 4000,
  //   pricing: {
  //     currency: 'CNY',
  //     input: 1,
  //     output: 3,
  //   },
  //   releasedAt: '2024-11-25',
  //   type: 'chat',
  // },
  // {
  //   contextWindowTokens: 8000,
  //   description:
  //     '支持中文和英语、日语、法语、葡萄牙语、西班牙语、土耳其语、俄语、阿拉伯语、韩语、意大利语、德语、越南语、马来语、印尼语15种语言互译，基于多场景翻译评测集自动化评估COMET评分，在十余种常用语种中外互译能力上整体优于市场同规模模型。',
  //   displayName: 'Hunyuan Translation',
  //   id: 'hunyuan-translation',
  //   maxOutput: 4000,
  //   pricing: {
  //     currency: 'CNY',
  //     input: 15,
  //     output: 45,
  //   },
  //   releasedAt: '2024-10-25',
  //   type: 'chat',
  // },
];

export const allModels = [...hunyuanChatModels];

export default allModels;
