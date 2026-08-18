import { AIChatModelCard, AIImageModelCard, AiFullModelCard } from '../types/aiModel';

// price: https://bigmodel.cn/pricing
// ref: https://docs.bigmodel.cn/cn/guide/start/model-overview

const zhipuChatModels: AIChatModelCard[] = [
{
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true
    },
    contextWindowTokens: 1_048_576,
    description: 'Zhipu’s latest flagship model. Built on the same base as GLM-5.2, it scales post-training with tens of times more long-horizon task environments and substantially longer training cycles. Coding experience improves by about 50% over the previous generation, ranking first among open-source models on Terminal Bench 3.0. It also shows strong cybersecurity capability, approaching Mythos 5 on white-box code review and vulnerability discovery.',
    displayName: 'GLM-5.3',
    enabled: true,
    id: 'glm-5.3',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput_cacheRead',
        rate: 2,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textInput',
        rate: 8,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 28,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-08-14',
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
      structuredOutput: true
    },
    contextWindowTokens: 1_048_576,
    description: 'GLM-5.2 is Zhipu’s flagship model for the era of long-horizon tasks. It supports a solid 1M context window that can hold project-scale engineering context, with more stable long-horizon execution and more reliable adherence to engineering conventions. A single task can complete the full development path from requirements to multi-platform deployable artifacts.',
    displayName: 'GLM-5.2',
    id: 'glm-5.2',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput_cacheRead',
        rate: 2,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textInput',
        rate: 8,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 28,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-06-17',
    settings: {
      extendParams: ["enableReasoning"],
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
    contextWindowTokens: 200_000,
    description: 'GLM-5.1 is Zhipu’s latest flagship model, aligned with Claude Opus 4.6 on overall and coding capabilities. It excels at long-horizon tasks, able to autonomously plan, execute, and iterate for up to 8 hours in a single task, making it an ideal foundation for Autonomous Agents and long-horizon Coding Agents.',
    displayName: 'GLM-5.1',
    id: 'glm-5.1',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 1.3,
        '[0.032, infinity]': 2
      },
        pricingParams: ['textInput']
      },
        name: 'textInput_cacheRead',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 6,
        '[0.032, infinity]': 8
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
        '[0.032, infinity]': 28
      },
        pricingParams: ['textInput']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-03-27',
    settings: {
      extendParams: ["enableReasoning"],
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
    contextWindowTokens: 200_000,
    description: 'GLM-5V-Turbo is Zhipu’s multimodal Coding foundation model for visual programming tasks. It natively handles images, video, text, and files, and is optimized for long-horizon planning, complex coding, and agent execution in multimodal workflows.',
    displayName: 'GLM-5V-Turbo',
    enabled: true,
    id: 'glm-5v-turbo',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 1.2,
        '[0.032, infinity]': 1.8
      },
        pricingParams: ['textInput']
      },
        name: 'textInput_cacheRead',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 5,
        '[0.032, infinity]': 7
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
        '[0, 0.032]': 22,
        '[0.032, infinity]': 26
      },
        pricingParams: ['textInput']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    settings: {
      extendParams: ["enableReasoning"],
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
    contextWindowTokens: 200_000,
    description: 'GLM-5-Turbo is a foundation model deeply optimized for agentic scenarios. It has been specifically optimized for core requirements of agent tasks from the training phase, enhancing key capabilities such as tool invocation, command following, and long-chain execution. It is ideal for building high-performance agent assistants.',
    displayName: 'GLM-5-Turbo',
    id: 'glm-5-turbo',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 1.2,
        '[0.032, infinity]': 1.8
      },
        pricingParams: ['textInput']
      },
        name: 'textInput_cacheRead',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 5,
        '[0.032, infinity]': 7
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
        '[0, 0.032]': 22,
        '[0.032, infinity]': 26
      },
        pricingParams: ['textInput']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-03-15',
    settings: {
      extendParams: ["enableReasoning"],
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
    contextWindowTokens: 200_000,
    description: 'GLM-5 is Zhipu’s next-generation flagship foundation model, purpose-built for Agentic Engineering. It delivers reliable productivity in complex systems engineering and long-horizon agentic tasks. In coding and agent capabilities, GLM-5 achieves state-of-the-art performance among open-source models. In real-world programming scenarios, its user experience approaches that of Claude Opus 4.5. It excels at complex systems engineering and long-horizon agent tasks, making it an ideal foundation model for general-purpose agent assistants.',
    displayName: 'GLM-5',
    id: 'glm-5',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 1,
        '[0.032, infinity]': 1.5
      },
        pricingParams: ['textInput']
      },
        name: 'textInput_cacheRead',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 4,
        '[0.032, infinity]': 6
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
        '[0.032, infinity]': 22
      },
        pricingParams: ['textInput']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-02-12',
    settings: {
      extendParams: ["enableReasoning"],
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
    contextWindowTokens: 200_000,
    description: "GLM-4.7 is Zhipu's latest flagship model, enhanced for Agentic Coding scenarios with improved coding capabilities, long-term task planning, and tool collaboration. It achieves leading performance among open-source models on multiple public benchmarks. General capabilities are improved with more concise and natural responses and more immersive writing. For complex agent tasks, instruction following during tool calls is stronger, and the frontend aesthetics and long-term task completion efficiency of Artifacts and Agentic Coding are further enhanced.",
    displayName: 'GLM-4.7',
    id: 'glm-4.7',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]_[0, 0.0002]': 0.4,
        '[0, 0.032]_[0.0002, infinity]': 0.6,
        '[0.032, 0.2]': 0.8
      },
        pricingParams: ['textInput', 'textOutput']
      },
        name: 'textInput_cacheRead',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]_[0, 0.0002]': 2,
        '[0, 0.032]_[0.0002, infinity]': 3,
        '[0.032, 0.2]': 4
      },
        pricingParams: ['textInput', 'textOutput']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]_[0, 0.0002]': 8,
        '[0, 0.032]_[0.0002, infinity]': 14,
        '[0.032, 0.2]': 16
      },
        pricingParams: ['textInput', 'textOutput']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2025-12-22',
    settings: {
      extendParams: ["enableReasoning"],
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
    contextWindowTokens: 200_000,
    description: 'GLM-4.7-Flash, as a 30B-level SOTA model, offers a new choice that balances performance and efficiency. It enhances coding capabilities, long-term task planning, and tool collaboration for Agentic Coding scenarios, achieving leading performance among open-source models of the same size in multiple current benchmark leaderboards. In executing complex intelligent agent tasks, it has stronger instruction compliance during tool calls, and further improves the aesthetics of front-end and the efficiency of long-term task completion for Artifacts and Agentic Coding.',
    displayName: 'GLM-4.7-Flash',
    enabled: true,
    id: 'glm-4.7-flash',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput_cacheRead',
        rate: 0,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textInput',
        rate: 0,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 0,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-01-19',
    settings: {
      extendParams: ["enableReasoning"],
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
    contextWindowTokens: 200_000,
    description: 'GLM-4.7-Flash, as a 30B-level SOTA model, offers a new choice that balances performance and efficiency. It enhances coding capabilities, long-term task planning, and tool collaboration for Agentic Coding scenarios, achieving leading performance among open-source models of the same size in multiple current benchmark leaderboards. In executing complex intelligent agent tasks, it has stronger instruction compliance during tool calls, and further improves the aesthetics of front-end and the efficiency of long-term task completion for Artifacts and Agentic Coding.',
    displayName: 'GLM-4.7-FlashX',
    id: 'glm-4.7-flashx',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput_cacheRead',
        rate: 0.1,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textInput',
        rate: 0.5,
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
    releasedAt: '2026-01-19',
    settings: {
      extendParams: ["enableReasoning"],
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
    description: 'The GLM-4.6V series represents a major iteration of the GLM family in the multimodal direction, comprising GLM-4.6V (flagship), GLM-4.6V-FlashX (lightweight and high-speed), and GLM-4.6V-Flash (fully free). It extends the training-time context window to 128k tokens, achieves state-of-the-art visual understanding accuracy at comparable parameter scales, and, for the first time, natively integrates Function Call (tool invocation) capabilities into the visual model architecture. This unifies the pipeline from “visual perception” to “executable actions,” providing a consistent technical foundation for multimodal agents in real-world production scenarios.',
    displayName: 'GLM-4.6V',
    id: 'glm-4.6v',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 0.2,
        '[0.032, infinity]': 0.4
      },
        pricingParams: ['textInput']
      },
        name: 'textInput_cacheRead',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 1,
        '[0.032, infinity]': 2
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
        '[0, 0.032]': 3,
        '[0.032, infinity]': 6
      },
        pricingParams: ['textInput']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2025-12-08',
    settings: {
      extendParams: ["enableReasoning"],
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
    description: 'The GLM-4.6V series represents a major iteration of the GLM family in the multimodal direction, comprising GLM-4.6V (flagship), GLM-4.6V-FlashX (lightweight and high-speed), and GLM-4.6V-Flash (fully free). It extends the training-time context window to 128k tokens, achieves state-of-the-art visual understanding accuracy at comparable parameter scales, and, for the first time, natively integrates Function Call (tool invocation) capabilities into the visual model architecture. This unifies the pipeline from “visual perception” to “executable actions,” providing a consistent technical foundation for multimodal agents in real-world production scenarios.',
    displayName: 'GLM-4.6V-FlashX',
    id: 'glm-4.6v-flashx',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 0.03,
        '[0.032, infinity]': 0.03
      },
        pricingParams: ['textInput']
      },
        name: 'textInput_cacheRead',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 0.15,
        '[0.032, infinity]': 0.3
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
        '[0, 0.032]': 1.5,
        '[0.032, infinity]': 3
      },
        pricingParams: ['textInput']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2025-12-08',
    settings: {
      extendParams: ["enableReasoning"],
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
    description: 'The GLM-4.6V series represents a major iteration of the GLM family in the multimodal direction, comprising GLM-4.6V (flagship), GLM-4.6V-FlashX (lightweight and high-speed), and GLM-4.6V-Flash (fully free). It extends the training-time context window to 128k tokens, achieves state-of-the-art visual understanding accuracy at comparable parameter scales, and, for the first time, natively integrates Function Call (tool invocation) capabilities into the visual model architecture. This unifies the pipeline from “visual perception” to “executable actions,” providing a consistent technical foundation for multimodal agents in real-world production scenarios.',
    displayName: 'GLM-4.6V-Flash',
    id: 'glm-4.6v-flash',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput_cacheRead',
        rate: 0,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textInput',
        rate: 0,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 0,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2025-12-08',
    settings: {
      extendParams: ["enableReasoning"],
      searchImpl: 'params'
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 200_000,
    description:
      '智谱最新旗舰模型 GLM-4.6 (355B) 在高级编码、长文本处理、推理与智能体能力上全面超越前代，尤其在编程能力上对齐 Claude Sonnet 4，成为国内顶尖的 Coding 模型。',
    displayName: 'GLM-4.6',
    enabled: true,
    id: 'glm-4.6',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]_[0, 0.0002]': 0.4,
              '[0, 0.032]_[0.0002, infinity]': 0.6,
              '[0.032, 0.2]': 0.8,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textInput_cacheRead',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]_[0, 0.0002]': 2,
              '[0, 0.032]_[0.0002, infinity]': 3,
              '[0.032, 0.2]': 4,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]_[0, 0.0002]': 8,
              '[0, 0.032]_[0.0002, infinity]': 14,
              '[0.032, 0.2]': 16,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    settings: {
      extendParams: ['enableReasoning'],
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
    contextWindowTokens: 65_536,
    description:
      '智谱新一代基于 MOE 架构的视觉推理模型，以106B的总参数量和12B激活参数量，在各类基准测试中达到全球同级别开源多模态模型 SOTA，涵盖图像、视频、文档理解及 GUI 任务等常见任务。',
    displayName: 'GLM-4.5V',
    enabled: true,
    id: 'glm-4.5v',
    maxOutput: 16_384,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 0.4,
              '[0.032, infinity]': 0.8,
            },
            pricingParams: ['textInput'],
          },
          name: 'textInput_cacheRead',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 2,
              '[0.032, infinity]': 4,
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
              '[0.032, infinity]': 12,
            },
            pricingParams: ['textInput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    settings: {
      extendParams: ['enableReasoning'],
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
      '智谱旗舰模型，支持思考模式切换，综合能力达到开源模型的 SOTA 水平，上下文长度可达128K。',
    displayName: 'GLM-4.5',
    id: 'glm-4.5',
    maxOutput: 98_304,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]_[0, 0.0002]': 0.4,
              '[0, 0.032]_[0.0002, infinity]': 0.6,
              '[0.032, 0.128]': 0.8,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textInput_cacheRead',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]_[0, 0.0002]': 2,
              '[0, 0.032]_[0.0002, infinity]': 3,
              '[0.032, 0.128]': 4,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]_[0, 0.0002]': 8,
              '[0, 0.032]_[0.0002, infinity]': 14,
              '[0.032, 0.128]': 16,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    settings: {
      extendParams: ['enableReasoning'],
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
    description: 'GLM-4.5 的极速版，在性能强劲的同时，生成速度可达 100 tokens/秒。',
    displayName: 'GLM-4.5-X',
    id: 'glm-4.5-x',
    maxOutput: 98_304,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 1.6,
              '[0, 0.032]_[0.0002, infinity]': 2.4,
              '[0.032, 0.128]': 3.2,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textInput_cacheRead',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]_[0, 0.0002]': 8,
              '[0, 0.032]_[0.0002, infinity]': 12,
              '[0.032, 0.128]': 16,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]_[0, 0.0002]': 16,
              '[0, 0.032]_[0.0002, infinity]': 32,
              '[0.032, 0.128]': 64,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    settings: {
      extendParams: ['enableReasoning'],
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
    description: 'GLM-4.5 的轻量版，兼顾性能与性价比，可灵活切换混合思考模型。',
    displayName: 'GLM-4.5-Air',
    id: 'glm-4.5-air',
    maxOutput: 98_304,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 0.16,
              '[0.032, 0.128]': 0.24,
            },
            pricingParams: ['textInput'],
          },
          name: 'textInput_cacheRead',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 0.8,
              '[0.032, 0.128]': 1.2,
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
              '[0, 0.032]_[0, 0.0002]': 2,
              '[0, 0.032]_[0.0002, infinity]': 6,
              '[0.032, 0.128]': 8,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    settings: {
      extendParams: ['enableReasoning'],
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
    description: 'GLM-4.5-Air 的极速版，响应速度更快，专为大规模高速度需求打造。',
    displayName: 'GLM-4.5-AirX',
    id: 'glm-4.5-airx',
    maxOutput: 98_304,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 0.8,
              '[0.032, 0.128]': 1.6,
            },
            pricingParams: ['textInput'],
          },
          name: 'textInput_cacheRead',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 4,
              '[0.032, 0.128]': 8,
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
              '[0, 0.032]_[0, 0.0002]': 12,
              '[0, 0.032]_[0.0002, infinity]': 16,
              '[0.032, 0.128]': 32,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    settings: {
      extendParams: ['enableReasoning'],
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
    description: 'GLM-4.5 的免费版，推理、代码、智能体等任务表现出色。',
    displayName: 'GLM-4.5-Flash',
    enabled: true,
    id: 'glm-4.5-flash',
    maxOutput: 98_304,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['enableReasoning'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 65_536,
    description:
      'GLM-4.1V-Thinking 系列模型是目前已知10B级别的VLM模型中性能最强的视觉模型，融合了同级别SOTA的各项视觉语言任务，包括视频理解、图片问答、学科解题、OCR文字识别、文档和图表解读、GUI Agent、前端网页Coding、Grounding等，多项任务能力甚至超过8倍参数量的Qwen2.5-VL-72B。通过领先的强化学习技术，模型掌握了通过思维链推理的方式提升回答的准确性和丰富度，从最终效果和可解释性等维度都显著超过传统的非thinking模型。',
    displayName: 'GLM-4.1V-Thinking-FlashX',
    id: 'glm-4.1v-thinking-flashx',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 65_536,
    description:
      'GLM-4.1V-Thinking 系列模型是目前已知10B级别的VLM模型中性能最强的视觉模型，融合了同级别SOTA的各项视觉语言任务，包括视频理解、图片问答、学科解题、OCR文字识别、文档和图表解读、GUI Agent、前端网页Coding、Grounding等，多项任务能力甚至超过8倍参数量的Qwen2.5-VL-72B。通过领先的强化学习技术，模型掌握了通过思维链推理的方式提升回答的准确性和丰富度，从最终效果和可解释性等维度都显著超过传统的非thinking模型。',
    displayName: 'GLM-4.1V-Thinking-Flash',
    id: 'glm-4.1v-thinking-flash',
    maxOutput: 32_768,
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
      reasoning: true,
    },
    contextWindowTokens: 16_384,
    description: 'GLM-Zero-Preview具备强大的复杂推理能力，在逻辑推理、数学、编程等领域表现优异。',
    displayName: 'GLM-Zero-Preview',
    id: 'glm-zero-preview',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 131_072,
    description: '推理模型: 具备强大推理能力，适用于需要深度推理的任务。',
    displayName: 'GLM-Z1-Air',
    id: 'glm-z1-air',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
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
    contextWindowTokens: 32_768,
    description: '极速推理：具有超快的推理速度和强大的推理效果。',
    displayName: 'GLM-Z1-AirX',
    id: 'glm-z1-airx',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
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
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 131_072,
    description: '高速低价：Flash增强版本，超快推理速度，更快并发保障。',
    displayName: 'GLM-Z1-FlashX',
    id: 'glm-z1-flashx',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
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
    contextWindowTokens: 131_072,
    description: 'GLM-Z1 系列具备强大的复杂推理能力，在逻辑推理、数学、编程等领域表现优异。',
    displayName: 'GLM-Z1-Flash',
    id: 'glm-z1-flash',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 131_072,
    description: 'GLM-4-Flash 是处理简单任务的理想选择，速度最快且免费。',
    displayName: 'GLM-4-Flash-250414',
    id: 'glm-4-flash-250414',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 131_072,
    description: 'GLM-4-FlashX 是Flash的增强版本，超快推理速度。',
    displayName: 'GLM-4-FlashX-250414',
    id: 'glm-4-flashx',
    maxOutput: 4095,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 1_024_000,
    description: 'GLM-4-Long 支持超长文本输入，适合记忆型任务与大规模文档处理。',
    displayName: 'GLM-4-Long',
    id: 'glm-4-long',
    maxOutput: 4095,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 131_072,
    description: 'GLM-4-Air 是性价比高的版本，性能接近GLM-4，提供快速度和实惠的价格。',
    displayName: 'GLM-4-Air-250414',
    id: 'glm-4-air-250414',
    maxOutput: 16_384,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
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
    description: 'GLM-4-AirX 提供 GLM-4-Air 的高效版本，推理速度可达其2.6倍。',
    displayName: 'GLM-4-AirX',
    id: 'glm-4-airx',
    maxOutput: 4095,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 131_072,
    description: 'GLM-4-Plus 作为高智能旗舰，具备强大的处理长文本和复杂任务的能力，性能全面提升。',
    displayName: 'GLM-4-Plus',
    id: 'glm-4-plus',
    maxOutput: 4095,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 131_072,
    description: 'GLM-4-0520 是最新模型版本，专为高度复杂和多样化任务设计，表现卓越。',
    displayName: 'GLM-4-0520',
    id: 'glm-4-0520', // 弃用时间 2025年12月30日
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 100, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 100, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 4096,
    description:
      'GLM-4V-Flash 专注于高效的单一图像理解，适用于快速图像解析的场景，例如实时图像分析或批量图像处理。',
    displayName: 'GLM-4V-Flash',
    id: 'glm-4v-flash',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-12-09',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 16_000,
    description: 'GLM-4V-Plus 具备对视频内容及多图片的理解能力，适合多模态任务。',
    displayName: 'GLM-4V-Plus-0111',
    id: 'glm-4v-plus-0111',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 4096,
    description: 'GLM-4V 提供强大的图像理解与推理能力，支持多种视觉任务。',
    displayName: 'GLM-4V',
    id: 'glm-4v',
    maxOutput: 1024,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 50, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 50, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description:
      'CodeGeeX-4 是强大的AI编程助手，支持多种编程语言的智能问答与代码补全，提升开发效率。',
    displayName: 'CodeGeeX-4',
    id: 'codegeex-4',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    description: 'CharGLM-4 专为角色扮演与情感陪伴设计，支持超长多轮记忆与个性化对话，应用广泛。',
    displayName: 'CharGLM-4',
    id: 'charglm-4',
    maxOutput: 4000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    description: 'Emohaa 是心理模型，具备专业咨询能力，帮助用户理解情感问题。',
    displayName: 'Emohaa',
    id: 'emohaa',
    maxOutput: 4000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
];

const zhipuImageModels: AIImageModelCard[] = [
{
    description: 'GLM-Image is Zhipu’s new flagship image generation model. The model was trained end-to-end on domestically produced chips and adopts an original hybrid architecture that combines autoregressive modeling with a diffusion decoder. This design enables strong global instruction understanding alongside fine-grained local detail rendering, overcoming long-standing challenges in generating knowledge-dense content such as posters, presentations, and educational diagrams. It represents an important exploration toward a new generation of “cognitive generative” technology paradigms, exemplified by Nano Banana Pro.',
    displayName: 'GLM-Image',
    enabled: true,
    id: 'glm-image',
    parameters: {
        prompt: {
        default: ''
      },
        size: {
        default: '1280x1280',
        enum: ['1280x1280', '1568x1056', '1056x1568', '1472x1088', '1088x1472', '1728x960', '960x1728']
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.1,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2026-01-14',
    type: 'image',
  },
  {
    description: 'CogView-3-Flash is a free image generation model launched by Zhipu. It generates images that align with user instructions while achieving higher aesthetic quality scores. CogView-3-Flash is primarily used in fields such as artistic creation, design reference, game development, and virtual reality, helping users rapidly convert text descriptions into images.',
    displayName: 'CogView-3-Flash',
    enabled: true,
    id: 'cogview-3-flash',
    parameters: {
        prompt: {
        default: ''
      },
        size: {
        default: '1024x1024',
        enum: ['1024x1024', '768x1344', '864x1152', '1344x768', '1152x864', '1440x720', '720x1440']
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    type: 'image',
  },
  // https://bigmodel.cn/dev/api/image-model/cogview
  {
    description:
      'CogView-4 是智谱首个支持生成汉字的开源文生图模型，在语义理解、图像生成质量、中英文字生成能力等方面全面提升，支持任意长度的中英双语输入，能够生成在给定范围内的任意分辨率图像。',
    displayName: 'CogView-4',
    enabled: true,
    id: 'cogview-4',
    parameters: {
      prompt: {
        default: '',
      },
      size: {
        default: '1024x1024',
        enum: ['1024x1024', '768x1344', '864x1152', '1344x768', '1152x864', '1440x720', '720x1440'],
      },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0.06, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2025-03-04',
    type: 'image',
  },
];

const zhipuVideoModels: AiFullModelCard[] = [
{
    description: 'Vidu 2 is a video generation foundation model designed to balance speed and quality. It focuses on image-to-video generation and start–end frame control, supporting 4-second videos at 720P resolution. The generation speed is significantly improved while costs are substantially reduced. Image-to-video generation fixes previous color shift issues, delivering stable and controllable visuals suitable for e-commerce and similar applications. In addition, semantic understanding of start and end frames and consistency across multiple reference images have been enhanced, making it an efficient tool for large-scale content production in general entertainment, internet media, animated short dramas, and advertising.',
    displayName: 'Vidu 2 Reference',
    enabled: true,
    id: 'vidu2-reference',
    parameters: {
        aspectRatio: {
        default: '16:9',
        enum: ['16:9', '9:16', '1:1']
      },
        imageUrls: {
          default: [],
          maxCount: 3
        },
        prompt: {
        default: ''
      },
        size: {
        default: '1280x720',
        enum: ['1280x720']
      }
      },
    releasedAt: '2025-06-18',
    type: 'text2video',
  },
  {
    description: 'Vidu 2 is a video generation foundation model designed to balance speed and quality. It focuses on image-to-video generation and start–end frame control, supporting 4-second videos at 720P resolution. The generation speed is significantly improved while costs are substantially reduced. Image-to-video generation fixes previous color shift issues, delivering stable and controllable visuals suitable for e-commerce and similar applications. In addition, semantic understanding of start and end frames and consistency across multiple reference images have been enhanced, making it an efficient tool for large-scale content production in general entertainment, internet media, animated short dramas, and advertising.',
    displayName: 'Vidu 2 Start End',
    enabled: true,
    id: 'vidu2-start-end',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        size: {
        default: '1920x1080',
        enum: ['1920x1080']
      }
      },
    releasedAt: '2025-06-18',
    type: 'text2video',
  },
  {
    description: 'Vidu Q1 is Vidu’s next-generation video generation foundation model, focused on high-quality video creation. It produces content with fixed specifications of 5 seconds, 24 FPS, and 1080P resolution. Through deep optimization of visual clarity, the overall image quality and texture are significantly improved, while issues such as hand deformation and frame jitter are greatly reduced. The realistic style closely approaches real-world scenes, and 2D animation styles are preserved with high fidelity. Transitions between start and end frames are smoother, making it well suited for high-demand creative scenarios such as film production, advertising, and animated short dramas.',
    displayName: 'Vidu Q1 Start End',
    id: 'viduq1-start-end',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        size: {
        default: '1920x1080',
        enum: ['1920x1080']
      }
      },
    releasedAt: '2025-06-18',
    type: 'text2video',
  },
  {
    description: 'Vidu 2 is a video generation foundation model designed to balance speed and quality. It focuses on image-to-video generation and start–end frame control, supporting 4-second videos at 720P resolution. The generation speed is significantly improved while costs are substantially reduced. Image-to-video generation fixes previous color shift issues, delivering stable and controllable visuals suitable for e-commerce and similar applications. In addition, semantic understanding of start and end frames and consistency across multiple reference images have been enhanced, making it an efficient tool for large-scale content production in general entertainment, internet media, animated short dramas, and advertising.',
    displayName: 'Vidu 2 Image',
    enabled: true,
    id: 'vidu2-image',
    parameters: {
        aspectRatio: {
        default: '16:9',
        enum: ['21:9', '16:9', '4:3', '1:1', '3:4', '9:16']
      },
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        size: {
        default: '1920x1080',
        enum: ['1920x1080']
      }
      },
    releasedAt: '2025-06-18',
    type: 'text2video',
  },
  {
    description: 'Vidu Q1 is Vidu’s next-generation video generation foundation model, focused on high-quality video creation. It produces content with fixed specifications of 5 seconds, 24 FPS, and 1080P resolution. Through deep optimization of visual clarity, the overall image quality and texture are significantly improved, while issues such as hand deformation and frame jitter are greatly reduced. The realistic style closely approaches real-world scenes, and 2D animation styles are preserved with high fidelity. Transitions between start and end frames are smoother, making it well suited for high-demand creative scenarios such as film production, advertising, and animated short dramas.',
    displayName: 'Vidu Q1 Image',
    id: 'viduq1-image',
    parameters: {
        aspectRatio: {
        default: '16:9',
        enum: ['21:9', '16:9', '4:3', '1:1', '3:4', '9:16']
      },
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        size: {
        default: '1920x1080',
        enum: ['1920x1080']
      }
      },
    releasedAt: '2025-06-18',
    type: 'text2video',
  },
  {
    description: 'Vidu Q1 is Vidu’s next-generation video generation foundation model, focused on high-quality video creation. It produces content with fixed specifications of 5 seconds, 24 FPS, and 1080P resolution. Through deep optimization of visual clarity, the overall image quality and texture are significantly improved, while issues such as hand deformation and frame jitter are greatly reduced. The realistic style closely approaches real-world scenes, and 2D animation styles are preserved with high fidelity. Transitions between start and end frames are smoother, making it well suited for high-demand creative scenarios such as film production, advertising, and animated short dramas.',
    displayName: 'Vidu Q1 Text',
    enabled: true,
    id: 'viduq1-text',
    parameters: {
        aspectRatio: {
        default: '16:9',
        enum: ['16:9', '9:16', '1:1']
      },
        prompt: {
        default: ''
      },
        size: {
        default: '1920x1080',
        enum: ['1920x1080']
      }
      },
    releasedAt: '2025-06-18',
    type: 'text2video',
  },
  {
    description: 'CogVideoX-3 adds a start-and-end frame generation feature, significantly improving visual stability and clarity. It enables smooth and natural large-scale subject motion, offers better instruction adherence and more realistic physical simulation, and further enhances performance in high-definition realistic and 3D-style scenes.',
    displayName: 'CogVideoX-3',
    enabled: true,
    id: 'cogvideox-3',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        size: {
        default: '1920x1080',
        enum: ['1280x720', '720x1280', '1024x1024', '1920x1080', '1080x1920', '2048x1080', '3840x2160']
      }
      },
    releasedAt: '2025-07-15',
    type: 'text2video',
  },
  {
    description: 'CogVideoX-2 is Zhipu’s new-generation video generation foundation model, with image-to-video capabilities improved by 38%. It delivers significant enhancements in large-scale motion handling, visual stability, instruction adherence, artistic style, and overall visual aesthetics.',
    displayName: 'CogVideoX-2',
    id: 'cogvideox-2',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        size: {
        default: '1920x1080',
        enum: ['720x480', '1024x1024', '1280x960', '960x1280', '1920x1080', '1080x1920', '2048x1080', '3840x2160']
      }
      },
    type: 'text2video',
  },
  {
    description: 'CogVideoX-Flash is a free video generation model released by Zhipu, capable of generating videos that follow user instructions while achieving higher aesthetic quality scores.',
    displayName: 'CogVideoX-Flash',
    enabled: true,
    id: 'cogvideox-flash',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        size: {
        default: '1920x1080',
        enum: ['720x480', '1024x1024', '1280x960', '960x1280', '1920x1080', '1080x1920', '2048x1080', '3840x2160']
      }
      },
    type: 'text2video',
  },
];

export const allModels = [...zhipuChatModels, ...zhipuImageModels, ...zhipuVideoModels];

export default allModels;
