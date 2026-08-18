import { AIChatModelCard, AIImageModelCard, AiFullModelCard } from '../types/aiModel';

// https://help.aliyun.com/zh/model-studio/models?spm=a2c4g.11186623

const qwenChatModels: AIChatModelCard[] = [
{
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true
    },
    contextWindowTokens: 262_144,
    description: 'Kimi-K2.6 is a large language model launched by Moonshot AI, with excellent coding and tool calling capabilities. Service deployment is only supported in mainland China.',
    displayName: 'Kimi K2.6',
    id: 'kimi-k2.6',
    maxOutput: 98_304,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 6.5,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 27,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textInput_cacheRead',
        rate: 6.5 * 0.2,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-04-21',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"]
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true
    },
    contextWindowTokens: 262_144,
    description: 'Kimi K2.5 is the most capable Kimi model, delivering open-source SOTA in agent tasks, coding, and vision understanding. It supports multimodal inputs and both thinking and non-thinking modes.',
    displayName: 'Kimi K2.5',
    id: 'kimi-k2.5',
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
        rate: 21,
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
      functionCall: true,
      reasoning: true,
      search: true
    },
    contextWindowTokens: 196_608,
    description: 'MiniMax-M2.5 is a flagship open-source large model from MiniMax, focusing on solving complex real-world tasks. Its core strengths are multi-language programming capabilities and the ability to solve complex tasks as an Agent.',
    displayName: 'MiniMax-M2.5',
    id: 'MiniMax-M2.5',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 2.1,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 8.4,
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
    contextWindowTokens: 204_800,
    description: 'MiniMax-M2.1 is a flagship open-source large model from MiniMax, focusing on solving complex real-world tasks. Its core strengths are multi-language programming capabilities and the ability to solve complex tasks as an Agent.',
    displayName: 'MiniMax-M2.1',
    id: 'MiniMax-M2.1',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 2.1,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 8.4,
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
    contextWindowTokens: 1_000_000,
    description: 'DeepSeek V4 Flash is the fast, cost-efficient member of the V4 family with a 1M context window and hybrid thinking — one of the cheapest capable models available.',
    displayName: 'DeepSeek V4 Flash',
    id: 'deepseek-v4-flash',
    maxOutput: 393_216,
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
        rate: 2,
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
    contextWindowTokens: 1_000_000,
    description: 'DeepSeek V4 Pro is the flagship of the V4 family, built for high-intensity reasoning and agentic workflows with a 1M context window — excellent Chinese writing and outstanding value for money.',
    displayName: 'DeepSeek V4 Pro',
    id: 'deepseek-v4-pro',
    maxOutput: 393_216,
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 12,
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
    contextWindowTokens: 131_072,
    description: 'deepseek-v3.2 introduces sparse attention mechanism, aiming to improve training and inference efficiency when processing long texts, priced lower than deepseek-v3.1.',
    displayName: 'DeepSeek V3.2',
    id: 'deepseek-v3.2',
    maxOutput: 65_536,
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
      extendParams: ["enableReasoning", "reasoningBudgetToken"],
      searchImpl: 'params'
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true
    },
    contextWindowTokens: 262_144,
    description: 'kimi-k2-thinking is a Moonshot AI thinking model with general agentic and reasoning abilities. It excels at deep reasoning and can solve hard problems via multi-step tool use.',
    displayName: 'Kimi K2 Thinking',
    id: 'kimi-k2-thinking',
    maxOutput: 16_384,
    organization: 'Qwen',
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
    releasedAt: '2025-11-10',
    settings: {
      extendParams: ["reasoningBudgetToken"]
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true
    },
    contextWindowTokens: 1_000_000,
    description: 'The GLM series is a hybrid reasoning model from Zhipu AI built for agents, with thinking and non-thinking modes. GLM-5.2 is Zhipu’s flagship model for the era of long-horizon tasks, supporting 1M tokens context and optimized for long-horizon planning, complex coding, and agent execution.',
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
      extendParams: ["enableReasoning", "reasoningBudgetToken"]
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true
    },
    contextWindowTokens: 202_745,
    description: 'The GLM series is a hybrid reasoning model from Zhipu AI built for agents, with thinking and non-thinking modes. GLM-5.1 is the latest flagship variant for long-horizon agentic engineering and complex development workflows.',
    displayName: 'GLM-5.1',
    id: 'glm-5.1',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 6,
        '[0.032, infinity]': 8
      },
        pricingParams: ['textInputRange']
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
        pricingParams: ['textInputRange']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-04-14',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"]
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true
    },
    contextWindowTokens: 202_752,
    description: 'The GLM series is a hybrid reasoning model from Zhipu AI built for agents, with thinking and non-thinking modes.',
    displayName: 'GLM-5',
    id: 'glm-5',
    maxOutput: 16_384,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 4,
        '[0.032, infinity]': 6
      },
        pricingParams: ['textInputRange']
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
        pricingParams: ['textInputRange']
      },
        name: 'textOutput',
        strategy: 'lookup',
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
      functionCall: true,
      reasoning: true
    },
    contextWindowTokens: 202_752,
    description: 'The GLM series is a hybrid reasoning model from Zhipu AI built for agents, with thinking and non-thinking modes.',
    displayName: 'GLM-4.7',
    id: 'glm-4.7',
    maxOutput: 16_384,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 3,
        '[0.032, infinity]': 4
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 14,
        '[0.032, infinity]': 16
      },
        pricingParams: ['textInputRange']
      },
        name: 'textOutput',
        strategy: 'lookup',
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
      functionCall: true,
      reasoning: true
    },
    contextWindowTokens: 202_752,
    description: 'The GLM series is a hybrid reasoning model from Zhipu AI built for agents, with thinking and non-thinking modes.',
    displayName: 'GLM-4.6',
    id: 'glm-4.6',
    maxOutput: 16_384,
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 3,
        '[0.032, infinity]': 4
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 14,
        '[0.032, infinity]': 16
      },
        pricingParams: ['textInputRange']
      },
        name: 'textOutput',
        strategy: 'lookup',
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
      functionCall: true
    },
    config: {
        deploymentName: 'qwen3-coder-next'
      },
    contextWindowTokens: 262_144,
    description: 'Next‑gen Qwen coder optimized for complex multi-file code generation, debugging, and high‑throughput agent workflows. Designed for strong tool integration and improved reasoning performance.',
    displayName: 'Qwen3 Coder Next',
    id: 'qwen3-coder-next',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 1,
        '[0.032, 0.128]': 1.5,
        '[0.128, infinity]': 2.5
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 4,
        '[0.032, 0.128]': 6,
        '[0.128, infinity]': 10
      },
        pricingParams: ['textInputRange']
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
      functionCall: true,
      reasoning: true,
      video: true,
      vision: true
    },
    contextWindowTokens: 262_144,
    description: 'Qwen3.6 27B is an open-source dense model with strong performance in reasoning, coding, and general capabilities. It supports thinking mode by default, offering balanced performance and efficiency.',
    displayName: 'Qwen3.6-27B',
    id: 'qwen3.6-27b',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 3,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 18,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-04-23',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"]
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      video: true,
      vision: true
    },
    contextWindowTokens: 262_144,
    description: 'The Qwen3.6 35B-A3B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse Mixture-of-Experts (MoE) design, achieving higher inference efficiency. Compared to the 3.5-35B-A3B model, it delivers significant improvements in agentic coding capabilities, mathematical reasoning, code reasoning, spatial intelligence, as well as object localization and target detection.',
    displayName: 'Qwen3.6-35B-A3B',
    id: 'qwen3.6-35b-a3b',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 1.8,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 10.8,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-04-16',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"]
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      video: true,
      vision: true
    },
    contextWindowTokens: 262_144,
    description: 'Supports text, image, and video inputs. For text-only tasks, its performance is comparable to Qwen3 Max, offering higher efficiency and lower cost. In multimodal capabilities, it delivers significant improvements over the Qwen3 VL series.',
    displayName: 'Qwen3.5-397B-A17B',
    id: 'qwen3.5-397b-a17b',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.128]': 1.5,
        '[0.128, infinity]': 3
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.128]': 7.2,
        '[0.128, infinity]': 18
      },
        pricingParams: ['textInputRange']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-02-16',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"]
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      video: true,
      vision: true
    },
    contextWindowTokens: 262_144,
    description: 'Supports text, image, and video inputs. For text-only tasks, its performance is comparable to Qwen3 Max, offering higher efficiency and lower cost. In multimodal capabilities, it delivers significant improvements over the Qwen3 VL series.',
    displayName: 'Qwen3.5-122B-A10B',
    id: 'qwen3.5-122b-a10b',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.128]': 0.8,
        '[0.128, infinity]': 2
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.128]': 6.4,
        '[0.128, infinity]': 16
      },
        pricingParams: ['textInputRange']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-02-24',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"]
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      video: true,
      vision: true
    },
    contextWindowTokens: 262_144,
    description: 'Supports text, image, and video inputs. For text-only tasks, its performance is comparable to Qwen3 Max, offering higher efficiency and lower cost. In multimodal capabilities, it delivers significant improvements over the Qwen3 VL series.',
    displayName: 'Qwen3.5-27B',
    id: 'qwen3.5-27b',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.128]': 0.6,
        '[0.128, infinity]': 1.8
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.128]': 4.8,
        '[0.128, infinity]': 14.4
      },
        pricingParams: ['textInputRange']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-02-24',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"]
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      video: true,
      vision: true
    },
    contextWindowTokens: 262_144,
    description: 'Supports text, image, and video inputs. For text-only tasks, its performance is comparable to Qwen3 Max, offering higher efficiency and lower cost. In multimodal capabilities, it delivers significant improvements over the Qwen3 VL series.',
    displayName: 'Qwen3.5-35B-A3B',
    id: 'qwen3.5-35b-a3b',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.128]': 0.4,
        '[0.128, infinity]': 1.6
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.128]': 3.2,
        '[0.128, infinity]': 12.8
      },
        pricingParams: ['textInputRange']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-02-24',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"]
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
    config: {
        deploymentName: 'qwen3.7-flash'
      },
    contextWindowTokens: 1_000_000,
    description: 'Qwen3.7 native vision-language Flash model, with comprehensive improvements in multimodal understanding and Agent execution capabilities compared to Qwen3.6-Flash. Key enhancements include strengthened multimodal foundational capabilities, stronger universal object recognition, further improved real-world perception and spatial intelligence, significantly upgraded capabilities in multimodal Agent scenarios such as Search Agent and CI Agent, more stable end-to-end task execution, optimized multimodal Coding capabilities, and a smoother vibe coding experience.',
    displayName: 'Qwen3.7 Flash',
    enabled: true,
    id: 'qwen3.7-flash',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        strategy: 'tiered',
        tiers: [{
        rate: 0.2,
        upTo: 32_000
      }, {
        rate: 0.6,
        upTo: 256_000
      }, {
        rate: 1.2,
        upTo: 'infinity'
      }],
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        strategy: 'tiered',
        tiers: [{
        rate: 0.8,
        upTo: 32_000
      }, {
        rate: 2.4,
        upTo: 256_000
      }, {
        rate: 4.8,
        upTo: 'infinity'
      }],
        unit: 'millionTokens'
      },
        {
        name: 'textInput_cacheRead',
        strategy: 'tiered',
        tiers: [{
        rate: 0.2 * 0.2,
        upTo: 32_000
      }, {
        rate: 0.6 * 0.2,
        upTo: 256_000
      }, {
        rate: 1.2 * 0.2,
        upTo: 'infinity'
      }],
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-07-21',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"],
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
    config: {
        deploymentName: 'qwen3.6-flash'
      },
    contextWindowTokens: 1_000_000,
    description: 'Qwen3.6 native vision-language Flash model delivers significantly improved performance compared to the 3.5-Flash version. This model focuses on enhancing agentic coding capabilities (substantially outperforming its predecessor across multiple code-agent benchmarks), as well as improving mathematical reasoning and code reasoning abilities. On the vision side, it shows notable gains in spatial intelligence, with particularly strong improvements in object localization and target detection.',
    displayName: 'Qwen3.6 Flash',
    id: 'qwen3.6-flash',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        strategy: 'tiered',
        tiers: [{
        rate: 1.2,
        upTo: 256_000
      }, {
        rate: 4.8,
        upTo: 'infinity'
      }],
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        strategy: 'tiered',
        tiers: [{
        rate: 7.2,
        upTo: 256_000
      }, {
        rate: 28.8,
        upTo: 'infinity'
      }],
        unit: 'millionTokens'
      },
        {
        name: 'textInput_cacheRead',
        strategy: 'tiered',
        tiers: [{
        rate: 1.2 * 0.2,
        upTo: 256_000
      }, {
        rate: 4.8 * 0.2,
        upTo: 'infinity'
      }],
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-04-16',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"],
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
    config: {
        deploymentName: 'qwen3.5-flash'
      },
    contextWindowTokens: 1_000_000,
    description: 'The Qwen3.5 native vision-language Flash model is built on a hybrid architecture that combines a linear attention mechanism with a sparse Mixture-of-Experts (MoE) design, achieving higher inference efficiency. Compared to the 3 series, it delivers substantial improvements in both pure text and multimodal performance. It also offers fast response times, balancing inference speed and overall capability.',
    displayName: 'Qwen3.5 Flash',
    id: 'qwen3.5-flash',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        strategy: 'tiered',
        tiers: [{
        rate: 0.2,
        upTo: 128_000
      }, {
        rate: 0.8,
        upTo: 256_000
      }, {
        rate: 1.2,
        upTo: 'infinity'
      }],
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        strategy: 'tiered',
        tiers: [{
        rate: 2,
        upTo: 128_000
      }, {
        rate: 8,
        upTo: 256_000
      }, {
        rate: 12,
        upTo: 'infinity'
      }],
        unit: 'millionTokens'
      },
        {
        name: 'textInput_cacheRead',
        strategy: 'tiered',
        tiers: [{
        rate: 0.2 * 0.2,
        upTo: 128_000
      }, {
        rate: 0.8 * 0.2,
        upTo: 256_000
      }, {
        rate: 1.2 * 0.2,
        upTo: 'infinity'
      }],
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-02-24',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"],
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
    config: {
        deploymentName: 'qwen3.7-plus'
      },
    contextWindowTokens: 1_000_000,
    description: 'Qwen3.7 Plus is a multimodal interactive hybrid agent model, building upon the Qwen3.7 series text capabilities to unify vision and language. It excels at GUI operation, visual coding, and complex agentic workflows.',
    displayName: 'Qwen3.7 Plus',
    enabled: true,
    id: 'qwen3.7-plus',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput_cacheRead',
        rate: 2 * 0.2,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
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
    releasedAt: '2026-06-01',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"],
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
    config: {
        deploymentName: 'qwen3.6-plus'
      },
    contextWindowTokens: 1_000_000,
    description: 'Qwen3.6 Plus supports text, image, and video input. It delivers a balanced performance across quality, speed, and cost. Its multimodal capabilities are significantly improved compared to the Qwen3 VL series.',
    displayName: 'Qwen3.6 Plus',
    id: 'qwen3.6-plus',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.256]': 2,
        '[0.256, 1]': 8
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.256]': 12,
        '[0.256, 1]': 48
      },
        pricingParams: ['textInputRange']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.256]': 2 * 0.2,
        '[0.256, 1]': 8 * 0.2
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput_cacheRead',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-04-02',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"],
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
    config: {
        deploymentName: 'qwen3.5-plus-2026-04-20'
      },
    contextWindowTokens: 1_000_000,
    description: 'Qwen 3.5 is a native vision-language Plus model. Compared to the February 15 snapshot, this version delivers substantial improvements in agentic coding capabilities and significantly faster inference speed. Its knowledge, reasoning, and long-context abilities remain at a high level, meeting the demands of complex agent tasks. It is well-suited for coding agents, production workflows, and high-throughput scenarios. This version corresponds to the April 20, 2026 snapshot.',
    displayName: 'Qwen3.5 Plus 2026-04-20',
    id: 'qwen3.5-plus-2026-04-20',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.128]': 0.8 * 0.1,
        '[0.128, 0.256]': 2 * 0.1,
        '[0.256, infinity]': 4 * 0.1
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput_cacheRead',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.128]': 0.8 * 1.25,
        '[0.128, 0.256]': 2 * 1.25,
        '[0.256, infinity]': 4 * 1.25
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput_cacheWrite',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.128]': 0.8,
        '[0.128, 0.256]': 2,
        '[0.256, infinity]': 4
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.128]': 4.8,
        '[0.128, 0.256]': 12,
        '[0.256, infinity]': 24
      },
        pricingParams: ['textInputRange']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-04-22',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"],
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
    config: {
        deploymentName: 'qwen3.5-plus'
      },
    contextWindowTokens: 1_000_000,
    description: 'Qwen3.5 Plus supports text, image, and video input. Its performance on pure text tasks is comparable to Qwen3 Max, with better performance and lower cost. Its multimodal capabilities are significantly improved compared to the Qwen3 VL series.',
    displayName: 'Qwen3.5 Plus',
    id: 'qwen3.5-plus',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.128]': 0.8 * 0.1,
        '[0.128, 0.256]': 2 * 0.1,
        '[0.256, infinity]': 4 * 0.1
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput_cacheRead',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.128]': 0.8 * 1.25,
        '[0.128, 0.256]': 2 * 1.25,
        '[0.256, infinity]': 4 * 1.25
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput_cacheWrite',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.128]': 0.8,
        '[0.128, 0.256]': 2,
        '[0.256, infinity]': 4
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.128]': 4.8,
        '[0.128, 0.256]': 12,
        '[0.256, infinity]': 24
      },
        pricingParams: ['textInputRange']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-02-15',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"],
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
    config: {
        deploymentName: 'qwen3.7-max'
      },
    contextWindowTokens: 1_000_000,
    description: 'Qwen3.7 Max is the flagship omnipotent model of the AI agent era, offering comprehensive capabilities across text, image, and video understanding. It provides superior reasoning, function calling, and agent task execution performance.',
    displayName: 'Qwen3.7 Max',
    enabled: true,
    id: 'qwen3.7-max',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput_cacheRead',
        rate: 12 * 0.2,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textInput',
        rate: 12,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 36,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-05-20',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"],
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
    config: {
        deploymentName: 'qwen3.6-max-preview'
      },
    contextWindowTokens: 262_144,
    description: 'The largest closed-source model in the Qwen3.6 series. It delivers stronger world knowledge, instruction following, and agentic coding performance for complex tasks. It is text-only, supports thinking mode by default, explicit caching, and function calling.',
    displayName: 'Qwen3.6 Max Preview',
    id: 'qwen3.6-max-preview',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.128]': 9 * 0.2,
        '[0.128, infinity]': 15 * 0.2
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput_cacheRead',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.128]': 9,
        '[0.128, infinity]': 15
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.128]': 54,
        '[0.128, infinity]': 90
      },
        pricingParams: ['textInputRange']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-04-18',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"],
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
    config: {
        deploymentName: 'qwen3-max-preview'
      },
    contextWindowTokens: 262_144,
    description: 'Best-performing Qwen model for complex, multi-step tasks. The preview supports thinking.',
    displayName: 'Qwen3 Max Preview',
    id: 'qwen3-max-preview',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        lookup: {
        prices: {
        '[0, 0.032]': 6 * 0.2,
        '[0.032, 0.128]': 10 * 0.2,
        '[0.128, infinity]': 15 * 0.2
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput_cacheRead',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 6,
        '[0.032, 0.128]': 10,
        '[0.128, infinity]': 15
      },
        pricingParams: ['textInputRange']
      },
        name: 'textInput',
        strategy: 'lookup',
        unit: 'millionTokens'
      },
        {
        lookup: {
        prices: {
        '[0, 0.032]': 24,
        '[0.032, 0.128]': 40,
        '[0.128, infinity]': 60
      },
        pricingParams: ['textInputRange']
      },
        name: 'textOutput',
        strategy: 'lookup',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2025-10-30',
    settings: {
      extendParams: ["enableReasoning", "reasoningBudgetToken"],
      searchImpl: 'params'
    },
    type: 'chat',
  },
  {
    abilities: {
      search: true,
      video: true,
      vision: true
    },
    config: {
        deploymentName: 'qwen3.5-omni-plus'
      },
    contextWindowTokens: 262_144,
    description: 'Qwen3.5 Omni Plus supports text, image, and video input. It is the latest full-modal Qwen model for high-quality multimodal understanding and generation.',
    displayName: 'Qwen3.5 Omni Plus',
    id: 'qwen3.5-omni-plus',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 7,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'audioInput',
        rate: 53,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'imageInput',
        rate: 7,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 40,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'audioOutput',
        rate: 213,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-03-30',
    settings: {
      searchImpl: 'params'
    },
    type: 'chat',
  },
  {
    abilities: {
      search: true,
      video: true,
      vision: true
    },
    config: {
        deploymentName: 'qwen3.5-omni-flash'
      },
    contextWindowTokens: 262_144,
    description: 'Qwen3.5 Omni Flash is a fast, cost-effective full-modal Qwen model that supports text, image, and video input.',
    displayName: 'Qwen3.5 Omni Flash',
    id: 'qwen3.5-omni-flash',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'textInput',
        rate: 2.2,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'audioInput',
        rate: 18,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'imageInput',
        rate: 2.2,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'textOutput',
        rate: 13.3,
        strategy: 'fixed',
        unit: 'millionTokens'
      },
        {
        name: 'audioOutput',
        rate: 72,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    releasedAt: '2026-03-30',
    settings: {
      searchImpl: 'params'
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true
    },
    contextWindowTokens: 131_072,
    description: 'Qwen3 VL 32B thinking mode (open-source) targets hard reasoning and long-video understanding with top-tier vision+text reasoning.',
    displayName: 'Qwen3 VL 32B Thinking',
    id: 'qwen3-vl-32b-thinking',
    maxOutput: 32_768,
    organization: 'Qwen',
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
        rate: 20,
        strategy: 'fixed',
        unit: 'millionTokens'
      }
      ],
    },
    settings: {
      extendParams: ["reasoningBudgetToken"]
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true
    },
    contextWindowTokens: 131_072,
    description: 'Qwen3 VL 32B non-thinking (Instruct) is for non-thinking instruction scenarios while retaining strong visual understanding.',
    displayName: 'Qwen3 VL 32B Instruct',
    id: 'qwen3-vl-32b-instruct',
    maxOutput: 32_768,
    organization: 'Qwen',
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
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Kimi-K2.6 is a large language model launched by Moonshot AI, with excellent coding and tool calling capabilities. Service deployment is only supported in mainland China.',
    displayName: 'Kimi K2.6',
    id: 'kimi-k2.6',
    maxOutput: 98_304,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 6.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 27, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 6.5 * 0.2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-04-21',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Kimi K2.5 is the most capable Kimi model, delivering open-source SOTA in agent tasks, coding, and vision understanding. It supports multimodal inputs and both thinking and non-thinking modes.',
    displayName: 'Kimi K2.5',
    id: 'kimi-k2.5',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 21, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 196_608,
    description:
      'MiniMax-M2.5 is a flagship open-source large model from MiniMax, focusing on solving complex real-world tasks. Its core strengths are multi-language programming capabilities and the ability to solve complex tasks as an Agent.',
    displayName: 'MiniMax-M2.5',
    id: 'MiniMax-M2.5',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8.4, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 204_800,
    description:
      'MiniMax-M2.1 is a flagship open-source large model from MiniMax, focusing on solving complex real-world tasks. Its core strengths are multi-language programming capabilities and the ability to solve complex tasks as an Agent.',
    displayName: 'MiniMax-M2.1',
    id: 'MiniMax-M2.1',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8.4, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 1_000_000,
    description:
      'DeepSeek V4 Flash is the cost-efficient member of the V4 family with a 1M context window and hybrid thinking. Thinking mode is on by default and can be toggled via the `thinking` parameter; non-thinking mode is optimized for latency-sensitive workflows.',
    displayName: 'DeepSeek V4 Flash',
    id: 'deepseek-v4-flash',
    maxOutput: 393_216,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
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
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 1_000_000,
    description:
      'DeepSeek V4 Pro is the flagship of the V4 family, optimized for high-intensity reasoning, agentic workflows, and long-horizon planning. Thinking mode is on by default and can be toggled via the `thinking` parameter.',
    displayName: 'DeepSeek V4 Pro',
    id: 'deepseek-v4-pro',
    maxOutput: 393_216,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 24, strategy: 'fixed', unit: 'millionTokens' },
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
      'deepseek-v3.2 introduces sparse attention mechanism, aiming to improve training and inference efficiency when processing long texts, priced lower than deepseek-v3.1.',
    displayName: 'DeepSeek V3.2',
    id: 'deepseek-v3.2',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
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
    },
    contextWindowTokens: 262_144,
    description:
      'kimi-k2-thinking is a Moonshot AI thinking model with general agentic and reasoning abilities. It excels at deep reasoning and can solve hard problems via multi-step tool use.',
    displayName: 'Kimi K2 Thinking',
    id: 'kimi-k2-thinking',
    maxOutput: 16_384,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-11-10',
    settings: {
      extendParams: ['reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    config: {
      deploymentName: 'qwen3-coder-next',
    },
    contextWindowTokens: 262_144,
    description:
      'Next-gen Qwen coder optimized for complex multi-file code generation, debugging, and high-throughput agent workflows. Designed for strong tool integration and improved reasoning performance.',
    displayName: 'Qwen3 Coder Next',
    id: 'qwen3-coder-next',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 1,
              '[0.032, 0.128]': 1.5,
              '[0.128, infinity]': 2.5,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 4,
              '[0.032, 0.128]': 6,
              '[0.128, infinity]': 10,
            },
            pricingParams: ['textInputRange'],
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
      reasoning: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Qwen3.6 27B is an open-source dense model with strong performance in reasoning, coding, and general capabilities. It supports thinking mode by default, offering balanced performance and efficiency.',
    displayName: 'Qwen3.6-27B',
    id: 'qwen3.6-27b',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 18, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-04-23',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    description:
      'The Qwen3.6 35B-A3B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse Mixture-of-Experts (MoE) design, achieving higher inference efficiency. Compared to the 3.5-35B-A3B model, it delivers significant improvements in agentic coding capabilities, mathematical reasoning, code reasoning, spatial intelligence, as well as object localization and target detection.',
    displayName: 'Qwen3.6-35B-A3B',
    id: 'qwen3.6-35b-a3b',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10.8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-04-16',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Supports text, image, and video inputs. For text-only tasks, its performance is comparable to Qwen3 Max, offering higher efficiency and lower cost. In multimodal capabilities, it delivers significant improvements over the Qwen3 VL series.',
    displayName: 'Qwen3.5-397B-A17B',
    id: 'qwen3.5-397b-a17b',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.128]': 1.5,
              '[0.128, infinity]': 3,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.128]': 7.2,
              '[0.128, infinity]': 18,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-02-16',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Supports text, image, and video inputs. For text-only tasks, its performance is comparable to Qwen3 Max, offering higher efficiency and lower cost. In multimodal capabilities, it delivers significant improvements over the Qwen3 VL series.',
    displayName: 'Qwen3.5-122B-A10B',
    id: 'qwen3.5-122b-a10b',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.128]': 0.8,
              '[0.128, infinity]': 2,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.128]': 6.4,
              '[0.128, infinity]': 16,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-02-24',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Supports text, image, and video inputs. For text-only tasks, its performance is comparable to Qwen3 Max, offering higher efficiency and lower cost. In multimodal capabilities, it delivers significant improvements over the Qwen3 VL series.',
    displayName: 'Qwen3.5-27B',
    id: 'qwen3.5-27b',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.128]': 0.6,
              '[0.128, infinity]': 1.8,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.128]': 4.8,
              '[0.128, infinity]': 14.4,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-02-24',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Supports text, image, and video inputs. For text-only tasks, its performance is comparable to Qwen3 Max, offering higher efficiency and lower cost. In multimodal capabilities, it delivers significant improvements over the Qwen3 VL series.',
    displayName: 'Qwen3.5-35B-A3B',
    id: 'qwen3.5-35b-a3b',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.128]': 0.4,
              '[0.128, infinity]': 1.6,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.128]': 3.2,
              '[0.128, infinity]': 12.8,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-02-24',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    config: {
      deploymentName: 'qwen3-vl-plus',
    },
    contextWindowTokens: 262_144,
    description:
      '通义千问VL是具有视觉（图像）理解能力的文本生成模型，不仅能进行OCR（图片文字识别），还能进一步总结和推理，例如从商品照片中提取属性，根据习题图进行解题等。',
    displayName: 'Qwen3 VL Plus',
    id: 'qwen3-vl-plus',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 1,
              '[0.032, 0.128]': 1.5,
              '[0.128, infinity]': 3,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 10,
              '[0.032, 0.128]': 15,
              '[0.128, infinity]': 30,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-09-23',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    config: {
      deploymentName: 'qwen3-vl-flash-2025-10-15',
    },
    contextWindowTokens: 262_144,
    description: 'Qwen3 VL Flash：轻量化高速推理版本，适合对延迟敏感或大批量请求场景。',
    displayName: 'Qwen3 VL Flash',
    id: 'qwen3-vl-flash',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 0.15,
              '[0.032, 0.128]': 0.3,
              '[0.128, 0.256]': 0.6,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 1.5,
              '[0.032, 0.128]': 3,
              '[0.128, 0.256]': 6,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-10-15',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'deepseek-v3.2-exp 引入稀疏注意力机制，旨在提升处理长文本时的训练与推理效率，价格低于 deepseek-v3.1。',
    displayName: 'DeepSeek V3.2 Exp',
    id: 'deepseek-v3.2-exp',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 131_072,
    description: 'DeepSeek V3.1 模型为混合推理架构模型，同时支持思考模式与非思考模式。',
    displayName: 'DeepSeek V3.1',
    id: 'deepseek-v3.1',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      search: true,
    },
    contextWindowTokens: 131_072,
    description:
      '总参数 1T，激活参数 32B。 非思维模型中，在前沿知识、数学和编码方面达到了顶尖水平，更擅长通用 Agent 任务。 针对代理任务进行了精心优化，不仅能回答问题，还能采取行动。 最适用于即兴、通用聊天和代理体验，是一款无需长时间思考的反射级模型。',
    displayName: 'Kimi K2 Instruct',
    id: 'Moonshot-Kimi-K2-Instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-17',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description: 'GLM-4.5系列模型是智谱AI专为智能体设计的混合推理模型，提供思考与非思考两种模式。',
    displayName: 'GLM-4.5',
    id: 'glm-4.5',
    maxOutput: 16_384,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 3,
              '[0.032, infinity]': 4,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 14,
              '[0.032, infinity]': 16,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
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
    contextWindowTokens: 131_072,
    description: 'GLM-4.5系列模型是智谱AI专为智能体设计的混合推理模型，提供思考与非思考两种模式。',
    displayName: 'GLM-4.5-Air',
    id: 'glm-4.5-air',
    maxOutput: 16_384,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 0.8,
              '[0.032, infinity]': 1.2,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 6,
              '[0.032, infinity]': 8,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    config: {
      deploymentName: 'qwen3-coder-plus', // 支持上下文缓存
    },
    contextWindowTokens: 1_000_000,
    description:
      '通义千问代码模型。最新的 Qwen3-Coder 系列模型是基于 Qwen3 的代码生成模型，具有强大的Coding Agent能力，擅长工具调用和环境交互，能够实现自主编程，代码能力卓越的同时兼具通用能力。',
    displayName: 'Qwen3 Coder Plus',
    id: 'qwen3-coder-plus',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 4 * 0.2,
              '[0.032, 0.128]': 6 * 0.2,
              '[0.128, 0.256]': 10 * 0.2,
              '[0.256, infinity]': 20 * 0.2,
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
              '[0.032, 0.128]': 6,
              '[0.128, 0.256]': 10,
              '[0.256, infinity]': 20,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 16,
              '[0.032, 0.128]': 24,
              '[0.128, 0.256]': 40,
              '[0.256, infinity]': 200,
            },
            pricingParams: ['textInputRange'],
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
    config: {
      deploymentName: 'qwen3-coder-flash', // 支持上下文缓存
    },
    contextWindowTokens: 1_000_000,
    description:
      '通义千问代码模型。最新的 Qwen3-Coder 系列模型是基于 Qwen3 的代码生成模型，具有强大的Coding Agent能力，擅长工具调用和环境交互，能够实现自主编程，代码能力卓越的同时兼具通用能力。',
    displayName: 'Qwen3 Coder Flash',
    id: 'qwen3-coder-flash',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 0.2,
              '[0.032, 0.128]': 0.3,
              '[0.128, 0.256]': 0.5,
              '[0.256, 1]': 1,
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
              '[0, 0.032]': 1,
              '[0.032, 0.128]': 1.5,
              '[0.128, 0.256]': 2.5,
              '[0.256, 1]': 5,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 4,
              '[0.032, 0.128]': 6,
              '[0.128, 0.256]': 10,
              '[0.256, 1]': 25,
            },
            pricingParams: ['textInputRange'],
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
    contextWindowTokens: 262_144,
    description:
      '通义千问代码模型开源版。最新的 qwen3-coder-480b-a35b-instruct 是基于 Qwen3 的代码生成模型，具有强大的Coding Agent能力，擅长工具调用和环境交互，能够实现自主编程、代码能力卓越的同时兼具通用能力。',
    displayName: 'Qwen3 Coder 480B A35B',
    id: 'qwen3-coder-480b-a35b-instruct',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 6,
              '[0.032, 0.128]': 9,
              '[0.128, 0.2]': 15,
            },
            pricingParams: ['textInputRange'],
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
              '[0.128, 0.2]': 60,
            },
            pricingParams: ['textInputRange'],
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
    contextWindowTokens: 262_144,
    description:
      '通义千问代码模型开源版。最新的 qwen3-coder-30b-a3b-instruct 是基于 Qwen3 的代码生成模型，具有强大的Coding Agent能力，擅长工具调用和环境交互，能够实现自主编程、代码能力卓越的同时兼具通用能力。',
    displayName: 'Qwen3 Coder 30B A3B',
    id: 'qwen3-coder-30b-a3b-instruct',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 1.5,
              '[0.032, 0.128]': 2.25,
              '[0.128, 0.2]': 3.75,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]': 6,
              '[0.032, 0.128]': 9,
              '[0.128, 0.2]': 15,
            },
            pricingParams: ['textInputRange'],
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
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      '基于Qwen3的思考模式开源模型，相较上一版本（通义千问3-235B-A22B）逻辑能力、通用能力、知识增强及创作能力均有大幅提升，适用于高难度强推理场景。',
    displayName: 'Qwen3 235B A22B Thinking 2507',
    enabled: true,
    id: 'qwen3-235b-a22b-thinking-2507',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-25',
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
      '基于Qwen3的非思考模式开源模型，相较上一版本（通义千问3-235B-A22B）主观创作能力与模型安全性均有小幅度提升。',
    displayName: 'Qwen3 235B A22B Instruct 2507',
    enabled: true,
    id: 'qwen3-235b-a22b-instruct-2507',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-22',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      '基于Qwen3的思考模式开源模型，相较上一版本（通义千问3-30B-A3B）逻辑能力、通用能力、知识增强及创作能力均有大幅提升，适用于高难度强推理场景。',
    displayName: 'Qwen3 30B A3B Thinking 2507',
    id: 'qwen3-30b-a3b-thinking-2507',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.75, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 7.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-30',
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
      '相较上一版本（Qwen3-30B-A3B）中英文和多语言整体通用能力有大幅提升。主观开放类任务专项优化，显著更加符合用户偏好，能够提供更有帮助性的回复。',
    displayName: 'Qwen3 30B A3B Instruct 2507',
    id: 'qwen3-30b-a3b-instruct-2507',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.75, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-29',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      '基于 Qwen3 的新一代思考模式开源模型，相较上一版本（通义千问3-235B-A22B-Thinking-2507）指令遵循能力有提升、模型总结回复更加精简。',
    displayName: 'Qwen3 Next 80B A3B Thinking',
    id: 'qwen3-next-80b-a3b-thinking',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-09-12',
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
      '基于 Qwen3 的新一代非思考模式开源模型，相较上一版本（通义千问3-235B-A22B-Instruct-2507）中文文本理解能力更佳、逻辑推理能力有增强、文本生成类任务表现更好。',
    displayName: 'Qwen3 Next 80B A3B Instruct',
    id: 'qwen3-next-80b-a3b-instruct',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-09-12',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 235B A22B',
    id: 'qwen3-235b-a22b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
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
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 32B',
    id: 'qwen3-32b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
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
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 30B A3B',
    id: 'qwen3-30b-a3b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.75, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 7.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
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
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 14B',
    id: 'qwen3-14b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
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
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 8B',
    id: 'qwen3-8b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
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
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 4B',
    id: 'qwen3-4b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
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
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 1.7B',
    id: 'qwen3-1.7b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
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
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 0.6B',
    id: 'qwen3-0.6b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    config: {
      deploymentName: 'qwq-plus-2025-03-05',
    },
    contextWindowTokens: 131_072,
    description:
      '基于 Qwen2.5 模型训练的 QwQ 推理模型，通过强化学习大幅度提升了模型推理能力。模型数学代码等核心指标（AIME 24/25、LiveCodeBench）以及部分通用指标（IFEval、LiveBench等）达到DeepSeek-R1 满血版水平。',
    displayName: 'QwQ Plus',
    id: 'qwq-plus',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.6, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-05',
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
    config: {
      deploymentName: 'qwen-flash',
    },
    contextWindowTokens: 1_000_000,
    description: '通义千问系列速度最快、成本极低的模型，适合简单任务。',
    displayName: 'Qwen Flash',
    enabled: true,
    id: 'qwen-flash',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          name: 'textInput',
          strategy: 'tiered',
          tiers: [
            { rate: 0.15, upTo: 0.128 },
            { rate: 0.6, upTo: 0.256 },
            { rate: 1.2, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textOutput',
          strategy: 'tiered',
          tiers: [
            { rate: 1.5, upTo: 0.128 },
            { rate: 6, upTo: 0.256 },
            { rate: 12, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textInput_cacheRead',
          strategy: 'tiered',
          tiers: [
            { rate: 0.15 * 0.2, upTo: 0.128 },
            { rate: 0.6 * 0.2, upTo: 0.256 },
            { rate: 1.2 * 0.2, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-07-28',
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
    config: {
      deploymentName: 'qwen-turbo-2025-07-15',
    },
    contextWindowTokens: 1_000_000, // Non-thinking mode
    description:
      '通义千问 Turbo 后续不再更新，建议替换为通义千问 Flash 。通义千问超大规模语言模型，支持中文、英文等不同语言输入。',
    displayName: 'Qwen Turbo',
    id: 'qwen-turbo',
    maxOutput: 16_384,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 0.3 * 0.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-15',
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
      video: true,
      vision: true,
    },
    config: {
      deploymentName: 'qwen3.6-flash',
    },
    contextWindowTokens: 1_000_000,
    description:
      'Qwen3.6 native vision-language Flash model delivers significantly improved performance compared to the 3.5-Flash version. This model focuses on enhancing agentic coding capabilities (substantially outperforming its predecessor across multiple code-agent benchmarks), as well as improving mathematical reasoning and code reasoning abilities. On the vision side, it shows notable gains in spatial intelligence, with particularly strong improvements in object localization and target detection.',
    displayName: 'Qwen3.6 Flash',
    enabled: true,
    id: 'qwen3.6-flash',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          name: 'textInput',
          strategy: 'tiered',
          tiers: [
            { rate: 1.2, upTo: 0.256 },
            { rate: 4.8, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textOutput',
          strategy: 'tiered',
          tiers: [
            { rate: 7.2, upTo: 0.256 },
            { rate: 28.8, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textInput_cacheRead',
          strategy: 'tiered',
          tiers: [
            { rate: 1.2 * 0.2, upTo: 0.256 },
            { rate: 4.8 * 0.2, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-04-16',
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
      video: true,
      vision: true,
    },
    config: {
      deploymentName: 'qwen3.5-flash',
    },
    contextWindowTokens: 1_000_000,
    description:
      'The Qwen3.5 native vision-language Flash model is built on a hybrid architecture that combines a linear attention mechanism with a sparse Mixture-of-Experts (MoE) design, achieving higher inference efficiency. Compared to the 3 series, it delivers substantial improvements in both pure text and multimodal performance. It also offers fast response times, balancing inference speed and overall capability.',
    displayName: 'Qwen3.5 Flash',
    id: 'qwen3.5-flash',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          name: 'textInput',
          strategy: 'tiered',
          tiers: [
            { rate: 0.2, upTo: 0.128 },
            { rate: 0.8, upTo: 0.256 },
            { rate: 1.2, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textOutput',
          strategy: 'tiered',
          tiers: [
            { rate: 2, upTo: 0.128 },
            { rate: 8, upTo: 0.256 },
            { rate: 12, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textInput_cacheRead',
          strategy: 'tiered',
          tiers: [
            { rate: 0.2 * 0.2, upTo: 0.128 },
            { rate: 0.8 * 0.2, upTo: 0.256 },
            { rate: 1.2 * 0.2, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-02-24',
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
      video: true,
      vision: true,
    },
    config: {
      deploymentName: 'qwen3.6-plus',
    },
    contextWindowTokens: 1_000_000,
    description:
      'Qwen 3.6-Plus introduces major upgrades in coding capabilities, with a focus on Agentic Coding and front-end development, significantly enhancing the Vibe Coding experience. Its reasoning ability across general scenarios has been further improved. In terms of multimodality, capabilities such as universal recognition, OCR, and object localization have been substantially enhanced. It also fixes known issues from the Qwen 3.5-Plus release. Usage remains the same as Qwen 3.5-Plus.',
    displayName: 'Qwen3.6 Plus',
    enabled: true,
    id: 'qwen3.6-plus',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.256]': 2 * 0.1,
              '[0.256, infinity]': 8 * 0.1,
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
              '[0, 0.256]': 2 * 1.25,
              '[0.256, infinity]': 8 * 1.25,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.256]': 2,
              '[0.256, infinity]': 8,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.256]': 12,
              '[0.256, infinity]': 48,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-04-02',
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
      video: true,
      vision: true,
    },
    config: {
      deploymentName: 'qwen3.5-plus-2026-04-20',
    },
    contextWindowTokens: 1_000_000,
    description:
      'Qwen 3.5 is a native vision-language Plus model. Compared to the February 15 snapshot, this version delivers substantial improvements in agentic coding capabilities and significantly faster inference speed. Its knowledge, reasoning, and long-context abilities remain at a high level, meeting the demands of complex agent tasks. It is well-suited for coding agents, production workflows, and high-throughput scenarios. This version corresponds to the April 20, 2026 snapshot.',
    displayName: 'Qwen3.5 Plus 2026-04-20',
    id: 'qwen3.5-plus-2026-04-20',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.128]': 0.8 * 0.1,
              '[0.128, 0.256]': 2 * 0.1,
              '[0.256, infinity]': 4 * 0.1,
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
              '[0, 0.128]': 0.8 * 1.25,
              '[0.128, 0.256]': 2 * 1.25,
              '[0.256, infinity]': 4 * 1.25,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.128]': 0.8,
              '[0.128, 0.256]': 2,
              '[0.256, infinity]': 4,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.128]': 4.8,
              '[0.128, 0.256]': 12,
              '[0.256, infinity]': 24,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-04-22',
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
      video: true,
      vision: true,
    },
    config: {
      deploymentName: 'qwen3.5-plus',
    },
    contextWindowTokens: 1_000_000,
    description:
      'Qwen3.5 Plus supports text, image, and video input. Its performance on pure text tasks is comparable to Qwen3 Max, with better performance and lower cost. Its multimodal capabilities are significantly improved compared to the Qwen3 VL series.',
    displayName: 'Qwen3.5 Plus',
    id: 'qwen3.5-plus',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.128]': 0.8 * 0.1,
              '[0.128, 0.256]': 2 * 0.1,
              '[0.256, infinity]': 4 * 0.1,
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
              '[0, 0.128]': 0.8 * 1.25,
              '[0.128, 0.256]': 2 * 1.25,
              '[0.256, infinity]': 4 * 1.25,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.128]': 0.8,
              '[0.128, 0.256]': 2,
              '[0.256, infinity]': 4,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.128]': 4.8,
              '[0.128, 0.256]': 12,
              '[0.256, infinity]': 24,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-02-15',
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
    config: {
      deploymentName: 'qwen-plus-2025-09-11',
    },
    contextWindowTokens: 1_000_000,
    description: '通义千问超大规模语言模型增强版，支持中文、英文等不同语言输入。',
    displayName: 'Qwen Plus',
    enabled: true,
    id: 'qwen-plus',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.128]': 0.8 * 0.2,
              '[0.128, 0.256]': 2.4 * 0.2,
              '[0.256, infinity]': 4.8 * 0.2,
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
              '[0, 0.128]': 0.8,
              '[0.128, 0.256]': 2.4,
              '[0.256, infinity]': 4.8,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.128]_[false]': 2,
              '[0, 0.128]_[true]': 8,
              '[0.128, 0.256]_[false]': 20,
              '[0.128, 0.256]_[true]': 24,
              '[0.256, infinity]_[false]': 48,
              '[0.256, infinity]_[true]': 64,
            },
            pricingParams: ['textInputRange', 'thinkingMode'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
    },
    config: {
      deploymentName: 'qwen3-max', // 其支持上下文缓存
    },
    contextWindowTokens: 262_144,
    description:
      '通义千问3系列Max模型，相较2.5系列整体通用能力有大幅度提升，中英文通用文本理解能力、复杂指令遵循能力、主观开放任务能力、多语言能力、工具调用能力均显著增强；模型知识幻觉更少。最新的qwen3-max模型：相较qwen3-max-preview版本，在智能体编程与工具调用方向进行了专项升级。本次发布的正式版模型达到领域SOTA水平，适配场景更加复杂的智能体需求。',
    displayName: 'Qwen3 Max',
    enabled: true,
    id: 'qwen3-max',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 6 * 0.2,
              '[0.032, 0.128]': 10 * 0.2,
              '[0.128, infinity]': 15 * 0.2,
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
              '[0.032, 0.128]': 10,
              '[0.128, infinity]': 15,
            },
            pricingParams: ['textInputRange'],
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
              '[0.128, infinity]': 60,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-09-23',
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
    config: {
      deploymentName: 'qwen3.6-max-preview',
    },
    contextWindowTokens: 262_144,
    description:
      'The largest closed-source model in the Qwen3.6 series. It delivers stronger world knowledge, instruction following, and agentic coding performance for complex tasks. It is text-only, supports thinking mode by default, explicit caching, and function calling.',
    displayName: 'Qwen3.6 Max Preview',
    enabled: true,
    id: 'qwen3.6-max-preview',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.128]': 9 * 0.2,
              '[0.128, infinity]': 15 * 0.2,
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
              '[0, 0.128]': 9,
              '[0.128, infinity]': 15,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.128]': 54,
              '[0.128, infinity]': 90,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2026-04-18',
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
    config: {
      deploymentName: 'qwen3-max-preview',
    },
    contextWindowTokens: 262_144,
    description:
      'Best-performing Qwen model for complex, multi-step tasks. The preview supports thinking.',
    displayName: 'Qwen3 Max Preview',
    id: 'qwen3-max-preview',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]': 6 * 0.2,
              '[0.032, 0.128]': 10 * 0.2,
              '[0.128, infinity]': 15 * 0.2,
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
              '[0.032, 0.128]': 10,
              '[0.128, infinity]': 15,
            },
            pricingParams: ['textInputRange'],
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
              '[0.128, infinity]': 60,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-10-30',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
    },
    config: {
      deploymentName: 'qwen-max-2025-01-25',
    },
    contextWindowTokens: 131_072,
    description:
      '通义千问千亿级别超大规模语言模型，支持中文、英文等不同语言输入，当前通义千问2.5产品版本背后的API模型。',
    displayName: 'Qwen Max',
    id: 'qwen-max',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 2.4 * 0.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 2.4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 9.6, strategy: 'fixed', unit: 'millionTokens' },
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
    },
    config: {
      deploymentName: 'qwen-long-latest',
    },
    contextWindowTokens: 10_000_000,
    description:
      '通义千问超大规模语言模型，支持长文本上下文，以及基于长文档、多文档等多个场景的对话功能。',
    displayName: 'Qwen Long',
    id: 'qwen-long',
    maxOutput: 8192,
    organization: 'Qwen',
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
    config: {
      deploymentName: 'qwen3-omni-flash-2025-09-15',
    },
    contextWindowTokens: 65_536,
    description:
      'Qwen-Omni 模型能够接收文本、图片、音频、视频等多种模态的组合输入，并生成文本或语音形式的回复， 提供多种拟人音色，支持多语言和方言的语音输出，可应用于文本创作、视觉识别、语音助手等场景。',
    displayName: 'Qwen Omni Turbo',
    id: 'qwen3-omni-flash',
    maxOutput: 16_384,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6.9, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-09-15',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      search: true,
      video: true,
      vision: true,
    },
    config: {
      deploymentName: 'qwen3.5-omni-plus',
    },
    contextWindowTokens: 262_144,
    description:
      'Qwen3.5 Omni Plus supports text, image, and video input. It is the latest full-modal Qwen model for high-quality multimodal understanding and generation.',
    displayName: 'Qwen3.5 Omni Plus',
    id: 'qwen3.5-omni-plus',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 7, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioInput', rate: 53, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageInput', rate: 7, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 40, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioOutput', rate: 213, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-03-30',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      search: true,
      video: true,
      vision: true,
    },
    config: {
      deploymentName: 'qwen3.5-omni-flash',
    },
    contextWindowTokens: 262_144,
    description:
      'Qwen3.5 Omni Flash is a fast, cost-effective full-modal Qwen model that supports text, image, and video input.',
    displayName: 'Qwen3.5 Omni Flash',
    id: 'qwen3.5-omni-flash',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioInput', rate: 18, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageInput', rate: 2.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 13.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioOutput', rate: 72, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-03-30',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    config: {
      deploymentName: 'qwen-omni-turbo-2025-03-26',
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen-Omni 系列模型支持输入多种模态的数据，包括视频、音频、图片、文本，并输出音频与文本。',
    displayName: 'Qwen Omni Turbo',
    id: 'qwen-omni-turbo',
    maxOutput: 2048,
    organization: 'Qwen',
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
    contextWindowTokens: 32_768,
    description:
      'Qwen-Omni 系列模型支持输入多种模态的数据，包括视频、音频、图片、文本，并输出音频与文本。',
    displayName: 'Qwen2.5 Omni 7B',
    id: 'qwen2.5-omni-7b',
    maxOutput: 2048,
    organization: 'Qwen',
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
    config: {
      deploymentName: 'qwen-vl-plus-2025-08-15',
    },
    contextWindowTokens: 131_072,
    description:
      '通义千问大规模视觉语言模型增强版。大幅提升细节识别能力和文字识别能力，支持超百万像素分辨率和任意长宽比规格的图像。',
    displayName: 'Qwen VL Plus',
    id: 'qwen-vl-plus',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 0.8 * 0.2, strategy: 'fixed', unit: 'millionTokens' },
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
    config: {
      deploymentName: 'qwen-vl-max-2025-08-13',
    },
    contextWindowTokens: 131_072,
    description:
      '通义千问超大规模视觉语言模型。相比增强版，再次提升视觉推理能力和指令遵循能力，提供更高的视觉感知和认知水平。',
    displayName: 'Qwen VL Max',
    id: 'qwen-vl-max',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 1.6 * 0.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 1.6, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    config: {
      deploymentName: 'qwen-vl-ocr-2025-04-13',
    },
    contextWindowTokens: 34_096,
    description:
      '通义千问OCR是文字提取专有模型，专注于文档、表格、试题、手写体文字等类型图像的文字提取能力。它能够识别多种文字，目前支持的语言有：汉语、英语、法语、日语、韩语、德语、俄语、意大利语、越南语、阿拉伯语。',
    displayName: 'Qwen VL OCR',
    id: 'qwen-vl-ocr',
    maxOutput: 4096,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen-VL（开源版）提供视觉理解与文本生成能力，支持智能体交互、视觉编码、空间感知、长视频理解与深度思考，并在复杂场景下具备更强的文字识别与多语言支持。',
    displayName: 'Qwen3 VL 30B A3B Thinking',
    id: 'qwen3-vl-30b-a3b-thinking',
    maxOutput: 32_768,
    organization: 'Qwen',
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
      vision: true,
    },
    contextWindowTokens: 131_072,
    description: 'Qwen3 VL 30B 非思考模式（Instruct），面向普通指令跟随场景，保持较高的多模态理解与生成能力。',
    displayName: 'Qwen3 VL 30B A3B Instruct',
    id: 'qwen3-vl-30b-a3b-instruct',
    maxOutput: 32_768,
    organization: 'Qwen',
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
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description: 'Qwen3 VL 8B 思考模式，面向轻量级多模态推理与交互场景，保留长上下文理解能力。',
    displayName: 'Qwen3 VL 8B Thinking',
    id: 'qwen3-vl-8b-thinking',
    maxOutput: 32_768,
    organization: 'Qwen',
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
    description: 'Qwen3 VL 8B 非思考模式（Instruct），适合常规多模态生成与识别任务。',
    displayName: 'Qwen3 VL 8B Instruct',
    id: 'qwen3-vl-8b-instruct',
    maxOutput: 32_768,
    organization: 'Qwen',
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
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description: 'Qwen3 VL 235B A22B 思考模式（开源版），针对高难度强推理与长视频理解场景，提供顶尖的视觉+文本推理能力。',
    displayName: 'Qwen3 VL 235B A22B Thinking',
    id: 'qwen3-vl-235b-a22b-thinking',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description: 'Qwen3 VL 235B A22B 非思考模式（Instruct），适用于非思考指令场景，保持强大的视觉理解能力。',
    displayName: 'Qwen3 VL 235B A22B Instruct',
    id: 'qwen3-vl-235b-a22b-instruct',
    maxOutput: 32_768,
    organization: 'Qwen',
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
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3 VL 32B thinking mode (open-source) targets hard reasoning and long-video understanding with top-tier vision+text reasoning.',
    displayName: 'Qwen3 VL 32B Thinking',
    id: 'qwen3-vl-32b-thinking',
    maxOutput: 32_768,
    organization: 'Qwen',
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
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3 VL 32B non-thinking (Instruct) is for non-thinking instruction scenarios while retaining strong visual understanding.',
    displayName: 'Qwen3 VL 32B Instruct',
    id: 'qwen3-vl-32b-instruct',
    maxOutput: 32_768,
    organization: 'Qwen',
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
    config: {
      deploymentName: 'qwen-math-turbo-latest',
    },
    contextWindowTokens: 4096,
    description: '通义千问数学模型是专门用于数学解题的语言模型。',
    displayName: 'Qwen Math Turbo',
    id: 'qwen-math-turbo',
    maxOutput: 3072,
    organization: 'Qwen',
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
    config: {
      deploymentName: 'qwen-math-plus-latest',
    },
    contextWindowTokens: 4096,
    description: '通义千问数学模型是专门用于数学解题的语言模型。',
    displayName: 'Qwen Math Plus',
    id: 'qwen-math-plus',
    maxOutput: 3072,
    organization: 'Qwen',
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
    config: {
      deploymentName: 'qwen-coder-turbo-latest',
    },
    contextWindowTokens: 131_072,
    description: '通义千问代码模型。',
    displayName: 'Qwen Coder Turbo',
    id: 'qwen-coder-turbo',
    maxOutput: 8192,
    organization: 'Qwen',
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
    config: {
      deploymentName: 'qwen-coder-plus-latest',
    },
    contextWindowTokens: 131_072,
    description: '通义千问代码模型。',
    displayName: 'Qwen Coder Plus',
    id: 'qwen-coder-plus',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 3.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 7, strategy: 'fixed', unit: 'millionTokens' },
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
    description:
      '基于 Qwen2.5-32B 模型训练的 QwQ 推理模型，通过强化学习大幅度提升了模型推理能力。模型数学代码等核心指标（AIME 24/25、LiveCodeBench）以及部分通用指标（IFEval、LiveBench等）达到DeepSeek-R1 满血版水平，各指标均显著超过同样基于 Qwen2.5-32B 的 DeepSeek-R1-Distill-Qwen-32B。',
    displayName: 'QwQ 32B',
    id: 'qwq-32b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-06',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description: 'QwQ模型是由 Qwen 团队开发的实验性研究模型，专注于增强 AI 推理能力。',
    displayName: 'QwQ 32B Preview',
    id: 'qwq-32b-preview',
    maxOutput: 16_384,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-11-28',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    config: {
      deploymentName: 'qvq-max-2025-05-15',
    },
    contextWindowTokens: 131_072,
    description:
      '通义千问QVQ视觉推理模型，支持视觉输入及思维链输出，在数学、编程、视觉分析、创作以及通用任务上都表现了更强的能力。',
    displayName: 'QVQ Max',
    id: 'qvq-max',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 32, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-05-15',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    config: {
      deploymentName: 'qvq-plus-2025-05-15',
    },
    contextWindowTokens: 131_072,
    description:
      '视觉推理模型。支持视觉输入及思维链输出，继qvq-max模型后推出的plus版本，相较于qvq-max模型，qvq-plus系列模型推理速度更快，效果和成本更均衡。',
    displayName: 'QVQ Plus',
    id: 'qvq-plus',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-05-15',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'QVQ模型是由 Qwen 团队开发的实验性研究模型，专注于提升视觉推理能力，尤其在数学推理领域。',
    displayName: 'QVQ 72B Preview',
    id: 'qvq-72b-preview',
    maxOutput: 16_384,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 36, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-12-25',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: '通义千问2.5对外开源的7B规模的模型。',
    displayName: 'Qwen2.5 7B',
    id: 'qwen2.5-7b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
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
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: '通义千问2.5对外开源的14B规模的模型。',
    displayName: 'Qwen2.5 14B',
    id: 'qwen2.5-14b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: '通义千问2.5对外开源的32B规模的模型。',
    displayName: 'Qwen2.5 32B',
    id: 'qwen2.5-32b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
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
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: '通义千问2.5对外开源的72B规模的模型。',
    displayName: 'Qwen2.5 72B',
    id: 'qwen2.5-72b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
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
      functionCall: true,
    },
    contextWindowTokens: 1_000_000,
    description: '通义千问2.5对外开源的72B规模的模型。',
    displayName: 'Qwen2.5 14B 1M',
    id: 'qwen2.5-14b-instruct-1m',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-27',
    type: 'chat',
  },
  {
    contextWindowTokens: 4096,
    description: 'Qwen-Math 模型具有强大的数学解题能力。',
    displayName: 'Qwen2.5 Math 7B',
    id: 'qwen2.5-math-7b-instruct',
    maxOutput: 3072,
    organization: 'Qwen',
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
    contextWindowTokens: 4096,
    description: 'Qwen-Math 模型具有强大的数学解题能力。',
    displayName: 'Qwen2.5 Math 72B',
    id: 'qwen2.5-math-72b-instruct',
    maxOutput: 3072,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-23',
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description: '通义千问代码模型开源版。',
    displayName: 'Qwen2.5 Coder 7B',
    id: 'qwen2.5-coder-7b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
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
    contextWindowTokens: 131_072,
    description: '通义千问代码模型开源版。',
    displayName: 'Qwen2.5 Coder 14B',
    id: 'qwen2.5-coder-14b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
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
    contextWindowTokens: 131_072,
    description: '通义千问代码模型开源版。',
    displayName: 'Qwen2.5 Coder 32B',
    id: 'qwen2.5-coder-32b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
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
      '指令跟随、数学、解题、代码整体提升，万物识别能力提升，支持多样格式直接精准定位视觉元素，支持对长视频文件（最长10分钟）进行理解和秒级别的事件时刻定位，能理解时间先后和快慢，基于解析和定位能力支持操控OS或Mobile的Agent，关键信息抽取能力和Json格式输出能力强，此版本为72B版本，本系列能力最强的版本。',
    displayName: 'Qwen2.5 VL 72B',
    id: 'qwen2.5-vl-72b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 48, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-27',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen2.5VL系列模型，在math和学科问题解答达到了接近Qwen2.5VL-72B的水平，回复风格面向人类偏好进行大幅调整，尤其是数学、逻辑推理、知识问答等客观类query，模型回复详实程度和格式清晰度明显改善。此版本为32B版本。',
    displayName: 'Qwen2.5 VL 32B',
    id: 'qwen2.5-vl-32b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 24, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-24',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      '指令跟随、数学、解题、代码整体提升，万物识别能力提升，支持多样格式直接精准定位视觉元素，支持对长视频文件（最长10分钟）进行理解和秒级别的事件时刻定位，能理解时间先后和快慢，基于解析和定位能力支持操控OS或Mobile的Agent，关键信息抽取能力和Json格式输出能力强，此版本为72B版本，本系列能力最强的版本。',
    displayName: 'Qwen2.5 VL 7B',
    id: 'qwen2.5-vl-7b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-27',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      '685B 满血版模型，2025年5月28日发布。DeepSeek-R1 在后训练阶段大规模使用了强化学习技术，在仅有极少标注数据的情况下，极大提升了模型推理能力。在数学、代码、自然语言推理等任务上，性能较高，能力较强。',
    displayName: 'DeepSeek R1 0528',
    id: 'deepseek-r1-0528',
    maxOutput: 16_384,
    organization: 'DeepSeek',
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
    contextWindowTokens: 65_536,
    description:
      'DeepSeek-V3 为自研 MoE 模型，671B 参数，激活 37B，在 14.8T token 上进行了预训练，在长文本、代码、数学、百科、中文能力上表现优秀。',
    displayName: 'DeepSeek V3',
    id: 'deepseek-v3',
    maxOutput: 8192,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-27',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Qwen-1.5B 是一个基于 Qwen2.5-Math-1.5B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Qwen 1.5B',
    id: 'deepseek-r1-distill-qwen-1.5b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
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
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Qwen-7B 是一个基于 Qwen2.5-Math-7B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Qwen 7B',
    id: 'deepseek-r1-distill-qwen-7b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
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
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Qwen-14B 是一个基于 Qwen2.5-14B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Qwen 14B',
    id: 'deepseek-r1-distill-qwen-14b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
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
      'DeepSeek-R1-Distill-Qwen-32B 是一个基于 Qwen2.5-32B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Qwen 32B',
    id: 'deepseek-r1-distill-qwen-32b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
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
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Llama-8B 是一个基于 Llama-3.1-8B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Llama 8B',
    id: 'deepseek-r1-distill-llama-8b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
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
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Llama-70B 是一个基于 Llama-3.3-70B-Instruct 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Llama 70B',
    id: 'deepseek-r1-distill-llama-70b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
];

const qwenImageModels: AIImageModelCard[] = [
{
    description: 'Z-Image is a lightweight text-to-image generation model that can rapidly produce images, supports both Chinese and English text rendering, and flexibly adapts to multiple resolutions and aspect ratios.',
    displayName: 'Z-Image Turbo',
    enabled: true,
    id: 'z-image-turbo',
    organization: 'Qwen',
    parameters: {
        height: {
        default: 1536,
        max: 4096,
        min: 256,
        step: 1
      },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        width: {
        default: 1024,
        max: 4096,
        min: 256,
        step: 1
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
    releasedAt: '2025-12-19',
    type: 'image',
  },
  {
    description: 'The Qwen-Image-2.0 series full-version model integrates image generation and image editing into a unified capability. It supports more professional text rendering with up to 1k token instruction capacity, delivers more delicate and realistic visual textures, enables fine-grained depiction of realistic scenes, and demonstrates stronger semantic alignment with prompts. The full-version model provides the strongest text rendering capability and the highest level of realism within the 2.0 series.',
    displayName: 'Qwen Image 2.0 Pro 2026-04-22',
    id: 'qwen-image-2.0-pro-2026-04-22',
    enabled: true,
    organization: 'Qwen',
    parameters: {
        height: {
        default: 1024,
        max: 4096,
        min: 256,
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
        max: 4096,
        min: 256,
        step: 1
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.5,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2026-04-22',
    type: 'image',
  },
  {
    description: 'The Qwen-Image-2.0 series full-version model integrates image generation and image editing into a unified capability. It supports more professional text rendering with up to 1k token instruction capacity, delivers more delicate and realistic visual textures, enables fine-grained depiction of realistic scenes, and demonstrates stronger semantic alignment with prompts. The full-version model provides the strongest text rendering capability and the highest level of realism within the 2.0 series.',
    displayName: 'Qwen Image 2.0 Pro',
    id: 'qwen-image-2.0-pro',
    organization: 'Qwen',
    parameters: {
        height: {
        default: 1024,
        max: 4096,
        min: 256,
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
        max: 4096,
        min: 256,
        step: 1
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.5,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2026-03-03',
    type: 'image',
  },
  {
    description: 'The Qwen-Image-2.0 series accelerated version model integrates image generation and image editing into a unified capability. It supports more professional text rendering with up to 1k token instruction capacity, provides more refined and realistic visual textures, enables fine-grained depiction of realistic scenes, and demonstrates stronger semantic adherence to prompts. The accelerated version effectively achieves the optimal balance between model quality and performance.',
    displayName: 'Qwen Image 2.0',
    id: 'qwen-image-2.0',
    enabled: true,
    organization: 'Qwen',
    parameters: {
        height: {
        default: 1024,
        max: 4096,
        min: 256,
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
        max: 4096,
        min: 256,
        step: 1
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.2,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2026-03-03',
    type: 'image',
  },
  {
    description: 'Qwen Image Editing Model supports multi-image input and multi-image output, enabling precise in-image text editing, object addition, removal, or relocation, subject action modification, image style transfer, and enhanced visual detail.',
    displayName: 'Qwen Image Edit Max',
    id: 'qwen-image-edit-max',
    organization: 'Qwen',
    parameters: {
        height: {
        default: 1536,
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
        rate: 0.5,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2026-01-17',
    type: 'image',
  },
  {
    description: 'Qwen Image Editing Model supports multi-image input and multi-image output, enabling precise in-image text editing, object addition, removal, or relocation, subject action modification, image style transfer, and enhanced visual detail.',
    displayName: 'Qwen Image Edit Plus',
    id: 'qwen-image-edit-plus',
    organization: 'Qwen',
    parameters: {
        height: {
        default: 1536,
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
        rate: 0.2,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2025-12-23',
    type: 'image',
  },
  {
    description: 'Qwen Image Generation Model (Max series) delivers enhanced realism and visual naturalness compared with the Plus series, effectively reducing AI-generated artifacts, and demonstrating outstanding performance in human appearance, texture details, and text rendering.',
    displayName: 'Qwen Image Max',
    id: 'qwen-image-max',
    organization: 'Qwen',
    parameters: {
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        size: {
        default: '1664x928',
        enum: ['1664x928', '1472x1140', '1328x1328', '1140x1472', '928x1664']
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.5,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2025-12-31',
    type: 'image',
  },
  {
    description: 'It supports a wide range of artistic styles and is particularly proficient at rendering complex text within images, enabling integrated image–text layout design.',
    displayName: 'Qwen Image Plus',
    id: 'qwen-image-plus',
    organization: 'Qwen',
    parameters: {
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        size: {
        default: '1664x928',
        enum: ['1664x928', '1472x1140', '1328x1328', '1140x1472', '928x1664']
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.2,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2026-01-12',
    type: 'image',
  },
  {
    description: 'Wanxiang 2.7 Image Professional Edition, supports 4K high-definition output.',
    displayName: 'Wanxiang2.7 Image Pro',
    enabled: true,
    id: 'wan2.7-image-pro',
    organization: 'Qwen',
    parameters: {
        height: {
        default: 2048,
        max: 11_585,
        min: 271,
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
        default: 2048,
        max: 11_585,
        min: 271,
        step: 1
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.5,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2026-04-01',
    type: 'image',
  },
  {
    description: 'Wanxiang 2.7 Image, faster image generation speed.',
    displayName: 'Wanxiang2.7 Image',
    enabled: true,
    id: 'wan2.7-image',
    organization: 'Qwen',
    parameters: {
        height: {
        default: 2048,
        max: 5792,
        min: 271,
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
        default: 2048,
        max: 5792,
        min: 271,
        step: 1
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.2,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2026-04-01',
    type: 'image',
  },
  {
    description: 'Wanxiang 2.6 Image supports image editing and mixed image–text layout output.',
    displayName: 'Wanxiang2.6 Image',
    enabled: true,
    id: 'wan2.6-image',
    organization: 'Qwen',
    parameters: {
        height: {
        default: 1280,
        max: 2880,
        min: 640,
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
        default: 1280,
        max: 2880,
        min: 640,
        step: 1
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.2,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2025-07-28',
    type: 'image',
  },
  {
    description: 'Wanxiang 2.6 T2I supports flexible selection of image dimensions within total pixel area and aspect ratio constraints (same as Wanxiang 2.5).',
    displayName: 'Wanxiang2.6 T2I',
    enabled: true,
    id: 'wan2.6-t2i',
    organization: 'Qwen',
    parameters: {
        height: {
        default: 1280,
        max: 2880,
        min: 640,
        step: 1
      },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        width: {
        default: 1280,
        max: 2880,
        min: 640,
        step: 1
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.2,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2025-12-16',
    type: 'image',
  },
  {
    description: 'Wanxiang 2.5 I2I Preview supports single-image editing and multi-image fusion.',
    displayName: 'Wanxiang2.5 I2I Preview',
    id: 'wan2.5-i2i-preview',
    organization: 'Qwen',
    parameters: {
        height: {
        default: 1280,
        max: 2560,
        min: 384,
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
        default: 1280,
        max: 2560,
        min: 384,
        step: 1
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.2,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2025-09-23',
    type: 'image',
  },
  {
    description: 'Wanxiang 2.5 T2I supports flexible selection of image dimensions within total pixel area and aspect ratio constraints.',
    displayName: 'Wanxiang2.5 T2I Preview',
    id: 'wan2.5-t2i-preview',
    organization: 'Qwen',
    parameters: {
        height: {
        default: 1280,
        max: 2880,
        min: 640,
        step: 1
      },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        width: {
        default: 1280,
        max: 2880,
        min: 640,
        step: 1
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.2,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2025-09-23',
    type: 'image',
  },
  {
    description: 'Supports up to 10 reference images, allowing you to lock subjects, elements, and color tones to ensure consistent style. Combines style transfer, portrait/character referencing, multi-image fusion, and localized inpainting for flexible control. Delivers realistic portrait details, with overall visuals that are delicate and richly layered, featuring cinematic color and atmosphere.',
    displayName: 'Kling V3 Image Generation',
    enabled: true,
    id: 'kling/kling-v3-image-generation',
    organization: 'Qwen',
    parameters: {
        aspectRatio: {
        default: '16:9',
        enum: ['16:9', '9:16', '1:1']
      },
        imageUrl: {
          default: ''
        },
        prompt: {
        default: ''
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.2,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2026-03-26',
    type: 'image',
  },
  {
    description: 'Unlock cinematic storytelling visuals with new series image generation and direct 2K/4K output. Deeply analyzes audiovisual elements in prompts to precisely execute creative instructions. Supports flexible multi-reference inputs and comprehensive quality upgrades, ideal for storyboards, narrative concept art, and scene design.',
    displayName: 'Kling V3 Omni Image Generation',
    enabled: true,
    id: 'kling/kling-v3-omni-image-generation',
    organization: 'Qwen',
    parameters: {
        aspectRatio: {
        default: '16:9',
        enum: ['16:9', '9:16', '1:1']
      },
        imageUrls: {
          default: []
        },
        prompt: {
        default: ''
      }
      },
    pricing: {
      currency: 'CNY',
      units: [
        {
        name: 'imageGeneration',
        rate: 0.2,
        strategy: 'fixed',
        unit: 'image'
      }
      ],
    },
    releasedAt: '2026-03-26',
    type: 'image',
  },
  {
    description:
      'Qwen Image Edit 是一款图生图模型，支持基于输入图像和文本提示进行图像编辑和修改，能够根据用户需求对原图进行精准调整和创意改造。',
    displayName: 'Qwen Image Edit',
    enabled: true,
    id: 'qwen-image-edit',
    organization: 'Qwen',
    parameters: {
      imageUrl: {
        default: '',
      },
      prompt: {
        default: '',
      },
      seed: { default: null },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0.3, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2025-09-18',
    type: 'image',
  },
  {
    description:
      'Qwen-Image 是一款通用图像生成模型，支持多种艺术风格，尤其擅长复杂文本渲染，特别是中英文文本渲染。模型支持多行布局、段落级文本生成以及细粒度细节刻画，可实现复杂的图文混合布局设计。',
    displayName: 'Qwen Image',
    enabled: true,
    id: 'qwen-image',
    organization: 'Qwen',
    parameters: {
      prompt: {
        default: '',
      },
      seed: { default: null },
      size: {
        default: '1328x1328',
        enum: ['1664x928', '1472x1140', '1328x1328', '1140x1472', '928x1664'],
      },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0.25, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2025-08-13',
    type: 'image',
  },
  {
    description:
      '万相2.2极速版，当前最新模型。在创意性、稳定性、写实质感上全面升级，生成速度快，性价比高。',
    displayName: 'Wanxiang2.2 T2I Flash',
    enabled: true,
    id: 'wan2.2-t2i-flash',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1440, min: 512, step: 1 },
      prompt: {
        default: '',
      },
      seed: { default: null },
      width: { default: 1024, max: 1440, min: 512, step: 1 },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0.14, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2025-07-28',
    type: 'image',
  },
  {
    description:
      '万相2.2专业版，当前最新模型。在创意性、稳定性、写实质感上全面升级，生成细节丰富。',
    displayName: 'Wanxiang2.2 T2I Plus',
    enabled: true,
    id: 'wan2.2-t2i-plus',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1440, min: 512, step: 1 },
      prompt: {
        default: '',
      },
      seed: { default: null },
      width: { default: 1024, max: 1440, min: 512, step: 1 },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0.2, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2025-07-28',
    type: 'image',
  },
  {
    description: '全面升级版本。生成速度快、效果全面、综合性价比高。对应通义万相官网2.1极速模型。',
    displayName: 'Wanxiang2.1 T2I Turbo',
    id: 'wanx2.1-t2i-turbo',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1440, min: 512, step: 1 },
      prompt: {
        default: '',
      },
      seed: { default: null },
      width: { default: 1024, max: 1440, min: 512, step: 1 },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0.14, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2025-01-08',
    type: 'image',
  },
  {
    description: '全面升级版本。生成图像细节更丰富，速度稍慢。对应通义万相官网2.1专业模型。',
    displayName: 'Wanxiang2.1 T2I Plus',
    id: 'wanx2.1-t2i-plus',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1440, min: 512, step: 1 },
      prompt: {
        default: '',
      },
      seed: { default: null },
      width: { default: 1024, max: 1440, min: 512, step: 1 },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0.2, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2025-01-08',
    type: 'image',
  },
  {
    description: '擅长质感人像，速度中等、成本较低。对应通义万相官网2.0极速模型。',
    displayName: 'Wanxiang2.0 T2I Turbo',
    id: 'wanx2.0-t2i-turbo',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1440, min: 512, step: 1 },
      prompt: {
        default: '',
      },
      seed: { default: null },
      width: { default: 1024, max: 1440, min: 512, step: 1 },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0.04, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2025-01-17',
    type: 'image',
  },
  {
    description: '基础文生图模型。对应通义万相官网1.0通用模型。',
    displayName: 'Wanxiang v1',
    id: 'wanx-v1',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1440, min: 512, step: 1 },
      prompt: {
        default: '',
      },
      seed: { default: null },
      width: { default: 1024, max: 1440, min: 512, step: 1 },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0.16, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2024-05-22',
    type: 'image',
  },
  {
    description:
      'FLUX.1 [schnell] 作为目前开源最先进的少步模型，不仅超越了同类竞争者，甚至还优于诸如 Midjourney v6.0 和 DALL·E 3 (HD) 等强大的非精馏模型。该模型经过专门微调，以保留预训练阶段的全部输出多样性，相较于当前市场上的最先进模型，FLUX.1 [schnell] 显著提升了在视觉质量、指令遵从、尺寸/比例变化、字体处理及输出多样性等方面的可能，为用户带来更为丰富多样的创意图像生成体验。',
    displayName: 'FLUX.1 [schnell]',
    enabled: true,
    id: 'flux-schnell',
    organization: 'Qwen',
    parameters: {
      prompt: {
        default: '',
      },
      seed: { default: null },
      size: {
        default: '1024x1024',
        enum: ['512x1024', '768x512', '768x1024', '1024x576', '576x1024', '1024x1024'],
      },
      steps: { default: 4, max: 12, min: 1 },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2024-08-07',
    type: 'image',
  },
  {
    description:
      'FLUX.1 [dev] 是一款面向非商业应用的开源权重、精炼模型。FLUX.1 [dev] 在保持了与FLUX专业版相近的图像质量和指令遵循能力的同时，具备更高的运行效率。相较于同尺寸的标准模型，它在资源利用上更为高效。',
    displayName: 'FLUX.1 [dev]',
    enabled: true,
    id: 'flux-dev',
    organization: 'Qwen',
    parameters: {
      prompt: {
        default: '',
      },
      seed: { default: null },
      size: {
        default: '1024x1024',
        enum: ['512x1024', '768x512', '768x1024', '1024x576', '576x1024', '1024x1024'],
      },
      steps: { default: 50, max: 50, min: 1 },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2024-08-07',
    type: 'image',
  },
  {
    description:
      'FLUX.1-merged 模型结合了 "DEV" 在开发阶段探索的深度特性和 "Schnell" 所代表的高速执行优势。通过这一举措，FLUX.1-merged 不仅提升了模型的性能界限，还拓宽了其应用范围。',
    displayName: 'FLUX.1-merged',
    enabled: true,
    id: 'flux-merged',
    organization: 'Qwen',
    parameters: {
      prompt: {
        default: '',
      },
      seed: { default: null },
      size: {
        default: '1024x1024',
        enum: ['512x1024', '768x512', '768x1024', '1024x576', '576x1024', '1024x1024'],
      },
      steps: { default: 30, max: 30, min: 1 },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2024-08-22',
    type: 'image',
  },
  {
    description:
      'stable-diffusion-3.5-large 是一个具有8亿参数的多模态扩散变压器（MMDiT）文本到图像生成模型，具备卓越的图像质量和提示词匹配度，支持生成 100 万像素的高分辨率图像，且能够在普通消费级硬件上高效运行。',
    displayName: 'StableDiffusion 3.5 Large',
    id: 'stable-diffusion-3.5-large',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1024, min: 512, step: 128 },
      prompt: {
        default: '',
      },
      steps: { default: 40, max: 500, min: 1 },
      width: { default: 1024, max: 1024, min: 512, step: 128 },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2024-10-25',
    type: 'image',
  },
  {
    description:
      'stable-diffusion-3.5-large-turbo 是在 stable-diffusion-3.5-large 的基础上采用对抗性扩散蒸馏（ADD）技术的模型，具备更快的速度。',
    displayName: 'StableDiffusion 3.5 Large Turbo',
    id: 'stable-diffusion-3.5-large-turbo',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1024, min: 512, step: 128 },
      prompt: {
        default: '',
      },
      steps: { default: 40, max: 500, min: 1 },
      width: { default: 1024, max: 1024, min: 512, step: 128 },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2024-10-25',
    type: 'image',
  },
  {
    description:
      'stable-diffusion-xl 相比于 v1.5 做了重大的改进，并且与当前开源的文生图 SOTA 模型 midjourney 效果相当。具体改进之处包括： 更大的 unet backbone，是之前的 3 倍； 增加了 refinement 模块用于改善生成图片的质量；更高效的训练技巧等。',
    displayName: 'StableDiffusion xl',
    id: 'stable-diffusion-xl',
    organization: 'Qwen',
    parameters: {
      height: { default: 1024, max: 1024, min: 512, step: 128 },
      prompt: {
        default: '',
      },
      steps: { default: 50, max: 500, min: 1 },
      width: { default: 1024, max: 1024, min: 512, step: 128 },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2024-04-09',
    type: 'image',
  },
  {
    description:
      'stable-diffusion-v1.5 是以 stable-diffusion-v1.2 检查点的权重进行初始化，并在 "laion-aesthetics v2 5+" 上以 512x512 的分辨率进行了595k步的微调，减少了 10% 的文本条件化，以提高无分类器的引导采样。',
    displayName: 'StableDiffusion v1.5',
    id: 'stable-diffusion-v1.5',
    organization: 'Qwen',
    parameters: {
      height: { default: 512, max: 1024, min: 512, step: 128 },
      prompt: {
        default: '',
      },
      steps: { default: 50, max: 500, min: 1 },
      width: { default: 512, max: 1024, min: 512, step: 128 },
    },
    pricing: {
      currency: 'CNY',
      units: [{ name: 'imageGeneration', rate: 0, strategy: 'fixed', unit: 'image' }],
    },
    releasedAt: '2024-04-09',
    type: 'image',
  },
];

const qwenVideoModels: AiFullModelCard[] = [
{
    description: 'HappyHorse-1.0-I2V supports text-to-video generation, delivering highly faithful dynamic visuals. It can accurately understand textual semantics and produce high-quality videos that are smooth, natural, and rich in detail.',
    displayName: 'HappyHorse-1.0-I2V',
    enabled: true,
    id: 'happyhorse-1.0-i2v',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2026-04-22',
    type: 'text2video',
  },
  {
    description: 'HappyHorse-1.0-R2V supports reference-based video generation, offering more stable subject and scene consistency. It supports up to 9 reference images, accurately preserves creative intent, and delivers enhanced expressive capability.',
    displayName: 'HappyHorse-1.0-R2V',
    enabled: true,
    id: 'happyhorse-1.0-r2v',
    parameters: {
        aspectRatio: {
        default: '16:9',
        enum: ['16:9', '9:16', '1:1', '4:3', '3:4']
      },
        imageUrls: {
          default: [],
          maxCount: 9
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2026-04-26',
    type: 'text2video',
  },
  {
    description: 'HappyHorse-1.0-T2V supports text-to-video generation, delivering highly faithful dynamic visuals. It can accurately understand textual semantics and produce high-quality videos that are smooth, natural, and rich in detail.',
    displayName: 'HappyHorse-1.0-T2V',
    enabled: true,
    id: 'happyhorse-1.0-t2v',
    parameters: {
        aspectRatio: {
        default: '16:9',
        enum: ['16:9', '9:16', '1:1', '4:3', '3:4']
      },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2026-04-21',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.7 Image-to-Video delivers a comprehensive upgrade in performance capabilities. Dramatic scenes feature delicate and natural emotional expression, while action sequences are intense and impactful. Combined with more dynamic and rhythmically driven shot transitions, it achieves stronger overall performance and storytelling.',
    displayName: 'Wan2.7 I2V 2026-04-25',
    enabled: true,
    id: 'wan2.7-i2v-2026-04-25',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2026-04-26',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.7 Image-to-Video delivers a comprehensive upgrade in performance capabilities. Dramatic scenes feature delicate and natural emotional expression, while action sequences are intense and impactful. Combined with more dynamic and rhythmically driven shot transitions, it achieves stronger overall performance and storytelling.',
    displayName: 'Wan2.7 I2V',
    id: 'wan2.7-i2v',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2026-04-03',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.7 Reference-to-Video offers more stable references for characters, props, and scenes. It supports up to 5 mixed reference images or videos, along with audio tone referencing. Combined with upgraded core capabilities, it delivers stronger performance and expressive power.',
    displayName: 'Wan2.7 R2V',
    enabled: true,
    id: 'wan2.7-r2v',
    parameters: {
        aspectRatio: {
        default: '16:9',
        enum: ['16:9', '9:16', '1:1', '4:3', '3:4']
      },
        imageUrls: {
          default: [],
          maxCount: 5
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2026-04-03',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.7 Text-to-Video delivers a comprehensive upgrade in performance capabilities. Dramatic scenes feature delicate and natural emotional expression, while action sequences are intense and impactful. Enhanced with more dynamic and rhythmically driven shot transitions, it achieves stronger overall acting and storytelling performance.',
    displayName: 'Wan2.7 T2V 2026-04-25',
    enabled: true,
    id: 'wan2.7-t2v-2026-04-25',
    parameters: {
        aspectRatio: {
        default: '16:9',
        enum: ['16:9', '9:16', '1:1', '4:3', '3:4']
      },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2026-04-26',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.7 Text-to-Video delivers a comprehensive upgrade in performance capabilities. Dramatic scenes feature delicate and natural emotional expression, while action sequences are intense and impactful. Enhanced with more dynamic and rhythmically driven shot transitions, it achieves stronger overall acting and storytelling performance.',
    displayName: 'Wan2.7 T2V',
    id: 'wan2.7-t2v',
    parameters: {
        aspectRatio: {
        default: '16:9',
        enum: ['16:9', '9:16', '1:1', '4:3', '3:4']
      },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2026-04-03',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.6 introduces multi-shot narrative capabilities, while also supporting automatic voiceover generation and the ability to incorporate custom audio files.',
    displayName: 'Wan2.6 I2V Flash',
    id: 'wan2.6-i2v-flash',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2026-01-17',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.6 introduces multi-shot narrative capabilities, while also supporting automatic voiceover generation and the ability to incorporate custom audio files.',
    displayName: 'Wan2.6 I2V',
    id: 'wan2.6-i2v',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2025-12-16',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.6 Reference-to-Video – Flash offers faster generation and better cost performance. It supports referencing specific characters or any objects, accurately maintaining consistency in appearance and voice, and enables multi-character reference for co-performance.',
    displayName: 'Wan2.6 R2V Flash',
    id: 'wan2.6-r2v-flash',
    parameters: {
        imageUrls: {
          default: [],
          maxCount: 5
        },
        prompt: {
        default: ''
      },
        size: {
        default: '1920x1080',
        enum: ['1280x720', '720x1280', '960x960', '1088x832', '832x1088', '1920x1080', '1080x1920', '1440x1440', '1632x1248', '1248x1632']
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2025-12-16',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.6 Reference-to-Video supports referencing specific characters or any objects, accurately maintaining consistency in appearance and voice, and enabling multi-character reference for co-performance. Note: When using videos as references, the input video will also be counted toward the cost. Please refer to the model pricing documentation for details.',
    displayName: 'Wan2.6 R2V',
    id: 'wan2.6-r2v',
    parameters: {
        imageUrls: {
          default: [],
          maxCount: 5
        },
        prompt: {
        default: ''
      },
        size: {
        default: '1920x1080',
        enum: ['1280x720', '720x1280', '960x960', '1088x832', '832x1088', '1920x1080', '1080x1920', '1440x1440', '1632x1248', '1248x1632']
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2025-12-16',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.6 introduces multi-shot narrative capabilities, while also supporting automatic voiceover generation and the ability to incorporate custom audio files.',
    displayName: 'Wan2.6 T2V',
    id: 'wan2.6-t2v',
    parameters: {
        prompt: {
        default: ''
      },
        size: {
        default: '1920x1080',
        enum: ['1280x720', '720x1280', '960x960', '1088x832', '832x1088', '1920x1080', '1080x1920', '1440x1440', '1632x1248', '1248x1632']
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2025-12-16',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.5 Preview supports automatic voiceover generation and the ability to incorporate custom audio files.',
    displayName: 'Wan2.5 I2V Preview',
    id: 'wan2.5-i2v-preview',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      }
      },
    releasedAt: '2025-09-23',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.5 Preview supports automatic voiceover generation and the ability to incorporate custom audio files.',
    displayName: 'Wan2.5 T2V Preview',
    id: 'wan2.5-t2v-preview',
    parameters: {
        prompt: {
        default: ''
      },
        size: {
        default: '1920x1080',
        enum: ['848x480', '480x832', '624x624', '1280x720', '720x1280', '960x960', '1088x832', '832x1088', '1920x1080', '1080x1920', '1440x1440', '1632x1248', '1248x1632']
      }
      },
    releasedAt: '2025-09-23',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.2 Speed Edition',
    displayName: 'Wan2.2 KF2V Flash',
    id: 'wan2.2-kf2v-flash',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      }
      },
    releasedAt: '2025-09-12',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.2 Plus Edition',
    displayName: 'Wan2.2 KF2V Plus',
    id: 'wan2.2-kf2v-plus',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      }
      },
    releasedAt: '2025-09-12',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.2 Speed Edition delivers ultra-fast generation, with more accurate prompt understanding and camera control. It maintains consistency of visual elements while significantly improving overall stability and success rate.',
    displayName: 'Wan2.2 I2V Flash',
    id: 'wan2.2-i2v-flash',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      }
      },
    releasedAt: '2025-08-11',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.2 Pro Edition offers more accurate prompt understanding and controllable camera movements. It maintains consistency of visual elements while significantly improving stability and success rate, and generates richer, more detailed content.',
    displayName: 'Wan2.2 I2V Plus',
    id: 'wan2.2-i2v-plus',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      }
      },
    releasedAt: '2025-07-28',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.2 Pro Edition provides more accurate prompt understanding, delivers stable and smooth motion generation, and produces richer, more detailed visuals.',
    displayName: 'Wan2.2 T2V Plus',
    id: 'wan2.2-t2v-plus',
    parameters: {
        prompt: {
        default: ''
      },
        size: {
        default: '1920x1080',
        enum: ['848x480', '480x832', '624x624', '1920x1080', '1080x1920', '1440x1440', '1632x1248', '1248x1632']
      }
      },
    releasedAt: '2025-07-28',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.1 Speed Edition offers high cost-performance.',
    displayName: 'Wanxiang2.1 I2V Turbo',
    id: 'wanx2.1-i2v-turbo',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      }
      },
    releasedAt: '2025-02-25',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.1 Pro Edition delivers more visually refined and higher-quality imagery.',
    displayName: 'Wanxiang2.1 I2V Plus',
    id: 'wanx2.1-i2v-plus',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      }
      },
    releasedAt: '2025-01-17',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.1 Speed Edition offers excellent cost-performance.',
    displayName: 'Wanxiang2.1 T2V Turbo',
    id: 'wanx2.1-t2v-turbo',
    parameters: {
        prompt: {
        default: ''
      },
        size: {
        default: '1280x720',
        enum: ['848x480', '480x832', '624x624', '1280x720', '720x1280', '960x960', '1088x832', '832x1088']
      }
      },
    releasedAt: '2025-01-08',
    type: 'text2video',
  },
  {
    description: 'Wanxiang 2.1 Pro Edition delivers richer visual texture and higher-quality imagery.',
    displayName: 'Wanxiang2.1 T2V Plus',
    id: 'wanx2.1-t2v-plus',
    parameters: {
        prompt: {
        default: ''
      },
        size: {
        default: '1280x720',
        enum: ['1280x720', '720x1280', '960x960', '1088x832', '832x1088']
      }
      },
    releasedAt: '2025-01-08',
    type: 'text2video',
  },
  {
    description: 'Intelligent storyboarding understands scene transitions within scripts, automatically arranging camera positions and shot types. A native multimodal framework ensures audiovisual consistency. Removes duration constraints, enabling more flexible multi-shot storytelling.',
    displayName: 'Kling V3 Video Generation',
    enabled: true,
    id: 'kling/kling-v3-video-generation',
    parameters: {
        aspectRatio: {
        default: '16:9',
        enum: ['16:9', '9:16', '1:1']
      },
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
    description: 'New “All-in-One Reference” feature supports 3–8 second videos or multiple images to anchor character elements. Can match original audio and lip movements for authentic character representation. Enhances video consistency and dynamic expression. Supports audiovisual synchronization and intelligent storyboarding.',
    displayName: 'Kling V3 Omni Video Generation',
    enabled: true,
    id: 'kling/kling-v3-omni-video-generation',
    parameters: {
        aspectRatio: {
        default: '16:9',
        enum: ['16:9', '9:16', '1:1']
      },
        imageUrls: {
          default: [],
          maxCount: 7
        },
        prompt: {
        default: ''
      }
      },
    type: 'text2video',
  },
  {
    description: 'Enter a text prompt to generate video. ViduQ3-Pro text-to-video is a flagship-level audio-visual native model. Supports up to 16 seconds of synchronized audio-visual generation, allowing free multi-shot switching while precisely controlling pacing, emotion, and narrative continuity. With a leading parameter scale, it delivers exceptional image quality, character consistency, and emotional expression, meeting cinematic standards. Ideal for professional production scenarios such as advertising (e-commerce, TVC, performance campaigns), animated series, live-action drama, and games.',
    displayName: 'Vidu Q3 Pro Text-to-Video',
    enabled: true,
    id: 'vidu/viduq3-pro_text2video',
    parameters: {
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        size: {
        default: '1280x720',
        enum: ['960x528', '528x960', '720x720', '816x608', '608x816', '1280x720', '720x1280', '960x960', '1104x816', '816x1104', '1920x1080', '1080x1920', '1440x1440', '1674x1238', '1238x1674']
      }
      },
    type: 'text2video',
  },
  {
    description: 'Enter a text prompt to generate video. ViduQ3-Turbo text-to-video is a high-performance accelerated model. It offers extremely fast generation while maintaining high-quality visuals and dynamic expression, excelling in action scenes, emotional rendering, and semantic understanding. Cost-effective and well-suited for casual entertainment scenarios such as social media images, AI companions, and special effects assets.',
    displayName: 'Vidu Q3 Turbo Text-to-Video',
    id: 'vidu/viduq3-turbo_text2video',
    parameters: {
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        size: {
        default: '1280x720',
        enum: ['960x528', '528x960', '720x720', '816x608', '608x816', '1280x720', '720x1280', '960x960', '1104x816', '816x1104', '1920x1080', '1080x1920', '1440x1440', '1674x1238', '1238x1674']
      }
      },
    type: 'text2video',
  },
  {
    description: 'Enter a text prompt to generate video. ViduQ2 text-to-video is a model designed for precise instruction adherence and nuanced emotion capture. It offers outstanding narrative control, accurately interpreting and expressing micro-expression changes; features rich cinematic language, smooth camera movements, and strong visual tension. Widely applicable to film and animation, advertising and e-commerce, short dramas, and cultural tourism industries.',
    displayName: 'Vidu Q2 Turbo Text-to-Video',
    id: 'vidu/viduq2_text2video',
    parameters: {
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        size: {
        default: '1280x720',
        enum: ['960x528', '528x960', '720x720', '816x608', '608x816', '1280x720', '720x1280', '960x960', '1104x816', '816x1104', '1920x1080', '1080x1920', '1440x1440', '1674x1238', '1238x1674']
      }
      },
    type: 'text2video',
  },
  {
    description: 'Input an image and a text description to generate video. ViduQ3-Pro image-to-video is a flagship-level audio-visual native model. It supports up to 16 seconds of synchronized audio-visual generation, enabling free multi-shot switching while precisely controlling pacing, emotion, and narrative continuity. With a leading parameter scale, it delivers exceptional image quality, character consistency, and emotional expression, meeting cinematic standards. Ideal for professional production scenarios such as advertising (e-commerce, TVC, performance campaigns), animated series, live-action drama, and games.',
    displayName: 'Vidu Q3 Pro Image-to-Video',
    enabled: true,
    id: 'vidu/viduq3-pro_img2video',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    type: 'text2video',
  },
  {
    description: 'Input an image and a text description to generate video. ViduQ3-Turbo image-to-video is a high-performance accelerated model. It offers extremely fast generation while maintaining high-quality visuals and dynamic expression, excelling in action scenes, emotional rendering, and semantic understanding. Cost-effective and ideal for casual entertainment scenarios such as social media images, AI companions, and special effects assets.',
    displayName: 'Vidu Q3 Turbo Image-to-Video',
    id: 'vidu/viduq3-turbo_img2video',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    type: 'text2video',
  },
  {
    description: 'Input an image and a text description to generate video. ViduQ2-Pro image-to-video is the world’s first “Everything Can Be Referenced” video model. It supports six reference dimensions—effects, expressions, textures, actions, characters, and scenes—enabling fully evolved video editing. Through controllable addition, deletion, and modification, it achieves fine-grained video editing, designed as a production-grade creation engine for animated series, short dramas, and film production.',
    displayName: 'Vidu Q2 Pro Image-to-Video',
    id: 'vidu/viduq2-pro_img2video',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    type: 'text2video',
  },
  {
    description: 'Input an image and a text description to generate video. ViduQ2-Turbo image-to-video is an ultra-fast generation engine. A 5-second 720P video can be generated in as little as 19 seconds, and a 5-second 1080P video in about 27 seconds. Character actions and expressions are natural and realistic, delivering strong authenticity and excellent performance in high-dynamic scenes such as action sequences, with wide-ranging motion.',
    displayName: 'Vidu Q2 Turbo Image-to-Video',
    id: 'vidu/viduq2-turbo_img2video',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    type: 'text2video',
  },
  {
    description: 'Input the first and last frame images along with a text description to generate video. ViduQ3-Pro keyframe-to-video is a flagship-level audio-visual native model. It supports up to 16 seconds of synchronized audio-visual generation, enabling free multi-shot switching while precisely controlling pacing, emotion, and narrative continuity. With a leading parameter scale, it delivers exceptional image quality, character consistency, and emotional expression, meeting cinematic standards. Ideal for professional production scenarios such as advertising (e-commerce, TVC, performance campaigns), animated series, live-action drama, and games.',
    displayName: 'Vidu Q3 Pro Start-to-End Video',
    enabled: true,
    id: 'vidu/viduq3-pro_start-end2video',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    type: 'text2video',
  },
  {
    description: 'Input the first and last frame images along with a text description to generate video. ViduQ3-Turbo keyframe-to-video is a high-performance accelerated model. It delivers extremely fast generation while maintaining high-quality visuals and dynamic expression, excelling in action scenes, emotional rendering, and semantic understanding. Cost-effective and ideal for casual entertainment scenarios such as social media images, AI companions, and special effects assets.',
    displayName: 'Vidu Q3 Turbo Start-to-End Video',
    id: 'vidu/viduq3-turbo_start-end2video',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    type: 'text2video',
  },
  {
    description: 'Input the first and last frame images along with a text description to generate video. ViduQ2-Pro keyframe-to-video is the world’s first “Everything Can Be Referenced” video model. It supports six reference dimensions—effects, expressions, textures, actions, characters, and scenes—enabling fully evolved video editing. Through controllable addition, deletion, and modification, it achieves fine-grained video editing, designed as a production-grade creation engine for animated series, short dramas, and film production.',
    displayName: 'Vidu Q2 Pro Start-to-End Video',
    id: 'vidu/viduq2-pro_start-end2video',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    type: 'text2video',
  },
  {
    description: 'Input the first and last frame images along with a text description to generate video. ViduQ2-Turbo keyframe-to-video is an ultra-fast generation engine. A 5-second 720P video can be produced in as little as 19 seconds, and a 5-second 1080P video in about 27 seconds. Character actions and expressions are natural and realistic, with strong authenticity, excelling in high-dynamic scenes such as action sequences, and supporting wide-ranging motion.',
    displayName: 'Vidu Q2 Turbo Start-to-End Video',
    id: 'vidu/viduq2-turbo_start-end2video',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    type: 'text2video',
  },
  {
    description: 'Input reference videos, images, and a text description to generate video. ViduQ2-Pro reference-to-video is the world’s first “Everything Can Be Referenced” video model. It supports six reference dimensions—effects, expressions, textures, actions, characters, and scenes—enabling fully evolved video editing. Through controllable addition, deletion, and modification, it achieves fine-grained video editing, designed as a production-grade creation engine for animated series, short dramas, and film production.',
    displayName: 'Vidu Q2 Pro Reference-to-Video',
    id: 'vidu/viduq2-pro_reference2video',
    parameters: {
        imageUrls: {
          default: [],
          maxCount: 7
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        size: {
        default: '1280x720',
        enum: ['960x540', '720x540', '540x540', '540x720', '540x960', '1280x720', '960x720', '720x720', '720x960', '720x1280', '1920x1080', '1440x1080', '1080x1080', '1080x1440', '1080x1920']
      }
      },
    type: 'text2video',
  },
  {
    description: 'Input reference images along with a text description to generate video. ViduQ2 reference-to-video is a model designed for precise instruction adherence and nuanced emotion capture. It offers outstanding narrative control, accurately interpreting and expressing micro-expression changes; features rich cinematic language, smooth camera movements, and strong visual tension. Widely applicable to film and animation, advertising and e-commerce, short dramas, and cultural tourism industries.',
    displayName: 'Vidu Q2 Reference-to-Video',
    id: 'vidu/viduq2_reference2video',
    parameters: {
        imageUrls: {
          default: [],
          maxCount: 7
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        size: {
        default: '1280x720',
        enum: ['960x540', '720x540', '540x540', '540x720', '540x960', '1280x720', '960x720', '720x720', '720x960', '720x1280', '1920x1080', '1440x1080', '1080x1080', '1080x1440', '1080x1920']
      }
      },
    type: 'text2video',
  },
  {
    description: 'C1 is a large-scale model for the film and television industry launched by PixVerse in late March 2026. Its t2v (text-to-video) capability enables precise control over video generation through prompts, accurately reproducing various cinematic language techniques such as push, pull, pan, tilt, and tracking shots, with smooth camera movements and well-controlled perspective transitions. The model supports up to 15-second video generation, includes music with direct video output, and supports multiple languages.',
    displayName: 'PixVerse C1 T2V',
    enabled: true,
    id: 'pixverse/pixverse-c1-t2v',
    parameters: {
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        size: {
        default: '1280x720',
        enum: ['640x360', '640x480', '640x640', '480x640', '360x640', '640x432', '432x640', '640x288', '1024x576', '1024x768', '1024x1024', '768x1024', '576x1024', '1024x688', '688x1024', '1024x448', '1280x720', '1280x960', '1280x1280', '960x1280', '720x1280', '1200x800', '800x1200', '1280x560', '1920x1080', '1920x1440', '1808x1808', '1440x1920', '1080x1920', '1776x1184', '1184x1776', '1920x832']
      }
      },
    releasedAt: '2026-04-07',
    type: 'text2video',
  },
  {
    description: 'V6 is PixVerse’s new model launched at the end of March 2026. Its t2v (text-to-video) model allows precise control of video visuals through prompts, accurately reproducing various cinematic techniques. Camera movements such as push, pull, pan, tilt, tracking, and follow are smooth and natural, with precise and controllable perspective switching. It supports up to 15-second videos, direct output of music and video, and multiple languages.',
    displayName: 'PixVerse V6 T2V',
    enabled: true,
    id: 'pixverse/pixverse-v6-t2v',
    parameters: {
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        size: {
        default: '1280x720',
        enum: ['640x360', '640x480', '640x640', '480x640', '360x640', '640x432', '432x640', '640x288', '1024x576', '1024x768', '1024x1024', '768x1024', '576x1024', '1024x688', '688x1024', '1024x448', '1280x720', '1280x960', '1280x1280', '960x1280', '720x1280', '1200x800', '800x1200', '1280x560', '1920x1080', '1920x1440', '1808x1808', '1440x1920', '1080x1920', '1776x1184', '1184x1776', '1920x832']
      }
      },
    releasedAt: '2026-03-30',
    type: 'text2video',
  },
  {
    description: 'Input a text description to generate high-quality videos with second-level speed and precise semantic alignment, supporting multiple styles. PixVerse V5.6 is a self-developed video generation large model by Aishi Technology, offering comprehensive upgrades in both text-to-video and image-to-video capabilities. The model significantly improves image clarity, stability in complex motion, and audio-visual synchronization. Lip-sync accuracy and natural emotional expression are enhanced in multi-character dialogue scenes. Composition, lighting, and texture consistency are also optimized, further raising overall generation quality. PixVerse V5.6 ranks in the top global tier on the Artificial Analysis text-to-video and image-to-video leaderboard.',
    displayName: 'PixVerse V5.6 T2V',
    id: 'pixverse/pixverse-v5.6-t2v',
    parameters: {
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        size: {
        default: '1280x720',
        enum: ['640x360', '640x480', '640x640', '480x640', '360x640', '1024x576', '1024x768', '1024x1024', '768x1024', '576x1024', '1280x720', '1280x960', '1280x1280', '960x1280', '720x1280', '1920x1080', '1920x1440', '1808x1808', '1440x1920', '1080x1920']
      }
      },
    type: 'text2video',
  },
  {
    description: 'C1 is a large-scale model for the film and television industry launched by PixVerse in late March 2026. Its it2v (image-to-video) capability not only provides prompt controllability similar to t2v (text-to-video), but also preserves the color, saturation, scenes, and character features of reference images with high fidelity. Compared to V6, it offers enhanced prompt interpretation, stronger creativity, and delivers fight choreography and visual effects (such as spells) closer to professional cinematic standards. The model supports up to 15-second video generation, includes music with direct video output, and supports multiple languages. It is particularly well-suited for short-duration shots such as single-person close-ups, monologues, freeze-frame or slow-motion sequences, and transitional establishing shots.',
    displayName: 'PixVerse C1 IT2V',
    enabled: true,
    id: 'pixverse/pixverse-c1-it2v',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2026-04-07',
    type: 'text2video',
  },
  {
    description: 'V6 is PixVerse’s new model launched at the end of March 2026. Its it2v (image-to-video) model ranks second globally. In addition to the prompt-control capabilities of t2v (text-to-video), it2v can accurately reproduce the colors, saturation, scenes, and character features of reference images, delivering stronger character emotions and high-speed motion performance. It supports up to 15-second videos, direct output of music and video, and multiple languages. Ideal for scenarios such as e-commerce product close-ups, advertising promos, and simulated C4D modeling to showcase product structures, with one-click direct output.',
    displayName: 'PixVerse V6 IT2V',
    enabled: true,
    id: 'pixverse/pixverse-v6-it2v',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2026-03-30',
    type: 'text2video',
  },
  {
    description: 'Upload any image to freely customize the story, pacing, and style, generating vivid and coherent videos. PixVerse V5.6 is a self-developed video generation large model by Aishi Technology, offering comprehensive upgrades in both text-to-video and image-to-video capabilities. The model significantly enhances image clarity, stability in complex motion, and audio-visual synchronization. Lip-sync accuracy and natural emotional expression are improved in multi-character dialogue scenes. Composition, lighting, and texture consistency are also optimized, further elevating overall generation quality. PixVerse V5.6 ranks in the top global tier on the Artificial Analysis text-to-video and image-to-video leaderboard.',
    displayName: 'PixVerse V5.6 IT2V',
    id: 'pixverse/pixverse-v5.6-it2v',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    type: 'text2video',
  },
  {
    description: 'C1 is a large-scale model for the film and television industry launched by PixVerse in late March 2026. Its kf2v (keyframe-to-video) capability enables smooth and natural transitions between any two input images. The model supports up to 15-second video generation, includes music with direct video output, and supports multiple languages.',
    displayName: 'PixVerse C1 KF2V',
    enabled: true,
    id: 'pixverse/pixverse-c1-kf2v',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2026-04-07',
    type: 'text2video',
  },
  {
    description: 'V6 is PixVerse’s new model launched at the end of March 2026. Its kf2v (keyframe-to-video) model can seamlessly connect any two images, producing smoother and more natural video transitions. It supports up to 15-second videos, direct output of music and video, and multiple languages.',
    displayName: 'PixVerse V6 KF2V',
    enabled: true,
    id: 'pixverse/pixverse-v6-kf2v',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    releasedAt: '2026-03-30',
    type: 'text2video',
  },
  {
    description: 'Achieve seamless transitions between any two images, creating smoother and more natural scene changes with visually striking effects. PixVerse V5.6 is a self-developed video generation large model by Aishi Technology, offering comprehensive upgrades in both text-to-video and image-to-video capabilities. The model significantly improves image clarity, stability in complex motion, and audio-visual synchronization. Lip-sync accuracy and natural emotional expression are enhanced in multi-character dialogue scenes. Composition, lighting, and texture consistency are also optimized, further elevating overall generation quality. PixVerse V5.6 ranks in the top global tier on the Artificial Analysis text-to-video and image-to-video leaderboard.',
    displayName: 'PixVerse V5.6 KF2V',
    id: 'pixverse/pixverse-v5.6-kf2v',
    parameters: {
        imageUrl: {
          default: null
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      }
      },
    type: 'text2video',
  },
  {
    description: 'C1 is a large-scale model for the film and television industry launched by PixVerse in late March 2026. Its r2v (reference-to-video) capability supports inputting 2–7 images, intelligently blending multiple subjects while retaining prompt controllability similar to t2v (text-to-video), as well as the consistency and creativity of it2v (image-to-video). It delivers fight choreography and visual effects (e.g., spells and action sequences) closer to professional cinematic standards. The model supports up to 15-second video generation, includes music with direct video output, and handles multiple languages. It is well-suited for complex scenes such as multi-character group shots, dialogues, and interactions, particularly in medium and wide shots. If a single multi-panel storyboard image is provided (supporting up to a 9-panel grid), it can generate a continuous multi-shot video sequence in one click.',
    displayName: 'PixVerse C1 R2V',
    id: 'pixverse/pixverse-c1-r2v',
    parameters: {
        imageUrls: {
          default: [],
          maxCount: 7
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        size: {
        default: '1280x720',
        enum: ['640x360', '640x480', '640x640', '480x640', '360x640', '640x432', '432x640', '640x288', '1024x576', '1024x768', '1024x1024', '768x1024', '576x1024', '1024x688', '688x1024', '1024x448', '1280x720', '1280x960', '1280x1280', '960x1280', '720x1280', '1200x800', '800x1200', '1280x560', '1920x1080', '1920x1440', '1808x1808', '1440x1920', '1080x1920', '1776x1184', '1184x1776', '1920x832']
      }
      },
    releasedAt: '2026-04-07',
    type: 'text2video',
  },
  {
    description: 'Input 2–7 images to intelligently merge different subjects while maintaining unified style and coordinated motion, easily building rich narrative scenes and enhancing content controllability and creative freedom. PixVerse V5.6 is a self-developed video generation large model by Aishi Technology, offering comprehensive upgrades in both text-to-video and image-to-video capabilities. The model significantly improves image clarity, stability in complex motion, and audio-visual synchronization. Lip-sync accuracy and natural emotional expression are enhanced in multi-character dialogue scenes. Composition, lighting, and texture consistency are also optimized, further elevating overall generation quality. PixVerse V5.6 ranks in the top global tier on the Artificial Analysis text-to-video and image-to-video leaderboard.',
    displayName: 'PixVerse V5.6 R2V',
    id: 'pixverse/pixverse-v5.6-r2v',
    parameters: {
        imageUrls: {
          default: [],
          maxCount: 7
        },
        prompt: {
        default: ''
      },
        seed: {
        default: null
      },
        size: {
        default: '1280x720',
        enum: ['640x360', '640x480', '640x640', '480x640', '360x640', '1024x576', '1024x768', '1024x1024', '768x1024', '576x1024', '1280x720', '1280x960', '1280x1280', '960x1280', '720x1280', '1920x1080', '1920x1440', '1808x1808', '1440x1920', '1080x1920']
      }
      },
    type: 'text2video',
  },
];

export const allModels = [...qwenChatModels, ...qwenImageModels, ...qwenVideoModels];

export default allModels;
