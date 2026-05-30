import { AIChatModelCard } from '../types/aiModel';

const ollamaCloudModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Kimi K2.6 is an open-source, native multimodal agentic model that advances practical capabilities in long-horizon coding, coding-driven design, proactive autonomous execution, and swarm-based task orchestration.',
    displayName: 'Kimi K2.6',
    enabled: true,
    id: 'kimi-k2.6',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 200_000,
    description:
      'GLM-5.1 is our next-generation flagship model for agentic engineering, with significantly stronger coding capabilities than its predecessor. It achieves state-of-the-art performance on SWE-Bench Pro and leads GLM-5 by a wide margin.',
    displayName: 'GLM-5.1',
    enabled: true,
    id: 'glm-5.1',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    displayName: 'Gemma 4 31B',
    id: 'gemma4:31b',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 204_800,
    description:
      'MiniMax M2.7 is an efficient large language model built specifically for coding and agent workflows.',
    displayName: 'MiniMax M2.7',
    enabled: true,
    id: 'minimax-m2.7',
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
      'Qwen3.5 is a unified vision-language foundation model with a hybrid architecture (Mixture-of-Experts + linear attention), offering strong multimodal reasoning, coding, and long-context capabilities with a 256K context window.',
    displayName: 'Qwen3.5 397B A17B',
    id: 'qwen3.5:397b',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 262_144,
    description:
      "Qwen3-Coder-Next is a coding-focused language model from Alibaba's Qwen team, optimized for agentic coding workflows and local development. Built on top of Qwen3-Next-80B-A3B-Base with hybrid attention and MoE architecture, trained on large-scale executable tasks with environment interaction and reinforcement learning.",
    displayName: 'Qwen3 Coder Next',
    id: 'qwen3-coder-next',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 204_800,
    description:
      'MiniMax-M2.5 is a state-of-the-art large language model designed for real-world productivity and coding tasks.',
    displayName: 'MiniMax M2.5',
    id: 'minimax-m2.5',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 262_144,
    description:
      'K2 long thinking model supports 256k contexts, supports multi-step tool calling and thinking, and is good at solving more complex problems.',
    displayName: 'Kimi K2 Thinking',
    id: 'kimi-k2-thinking',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 200_000,
    description:
      'A strong reasoning and agentic model from Z.ai with 744B total parameters (40B active), built for complex systems engineering and long-horizon tasks.',
    displayName: 'GLM-5',
    id: 'glm-5',
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
      'Kimi K2.5 is an open-source, native multimodal agentic model that seamlessly integrates vision and language understanding with advanced agentic capabilities, instant and thinking modes, as well as conversational and agentic paradigms.',
    displayName: 'Kimi K2.5',
    id: 'kimi-k2.5',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Devstral 2 123B excels at using tools to explore codebases, edit multiple files, and support software engineering agents.',
    displayName: 'Devstral 2',
    id: 'devstral-2:123b',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 163_840,
    description:
      'Cogito v2.1 671B is a US open-source LLM free for commercial use, with performance rivaling top models, higher token reasoning efficiency, a 128k long context, and strong overall capability.',
    displayName: 'Cogito v2.1 671B',
    id: 'cogito-2.1:671b',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576,
    description:
      'Gemini 3 Flash is the smartest model built for speed, combining cutting-edge intelligence with excellent search grounding.',
    displayName: 'Gemini 3 Flash Preview',
    id: 'gemini-3-flash-preview',
    releasedAt: '2025-12-17',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 204_800,
    displayName: 'MiniMax M2.1',
    id: 'minimax-m2.1',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 204_800,
    description:
      'MiniMax M2 is an efficient large language model built specifically for coding and agent workflows.',
    displayName: 'MiniMax M2',
    id: 'minimax-m2',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 200_000,
    description:
      "GLM-4.7 is Zhipu's latest flagship model, enhanced for Agentic Coding scenarios with improved coding capabilities, long-term task planning, and tool collaboration. It achieves leading performance among open-source models on multiple public benchmarks. General capabilities are improved with more concise and natural responses and more immersive writing. For complex agent tasks, instruction following during tool calls is stronger, and the frontend aesthetics and long-term task completion efficiency of Artifacts and Agentic Coding are further enhanced.",
    displayName: 'GLM-4.7',
    id: 'glm-4.7',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 200_000,
    description:
      '智谱最新旗舰模型 GLM-4.6 (355B) 在高级编码、长文本处理、推理与智能体能力上全面超越前代，尤其在编程能力上对齐 Claude Sonnet 4，成为国内顶尖的 Coding 模型。',
    displayName: 'GLM-4.6',
    enabled: true,
    id: 'glm-4.6',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 163_840,
    description:
      'DeepSeek V3.1：下一代推理模型，提升了复杂推理与链路思考能力，适合需要深入分析的任务。',
    displayName: 'DeepSeek V3.1',
    enabled: true,
    id: 'deepseek-v3.1:671b',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'GPT-OSS 20B 是 OpenAI 发布的开源大语言模型，采用 MXFP4 量化技术，适合在高端消费级GPU或Apple Silicon Mac上运行。该模型在对话生成、代码编写和推理任务方面表现出色，支持函数调用和工具使用。',
    displayName: 'GPT-OSS 20B',
    id: 'gpt-oss:20b',
    releasedAt: '2025-08-05',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'GPT-OSS 120B 是 OpenAI 发布的大型开源语言模型，采用 MXFP4 量化技术，为旗舰级模型。需要多GPU或高性能工作站环境运行，在复杂推理、代码生成和多语言处理方面具备卓越性能，支持高级函数调用和工具集成。',
    displayName: 'GPT-OSS 120B',
    id: 'gpt-oss:120b',
    releasedAt: '2025-08-05',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Kimi K2 是由月之暗面 AI 开发的大规模混合专家 (MoE) 语言模型，具有 1 万亿总参数和每次前向传递 320 亿激活参数。它针对代理能力进行了优化，包括高级工具使用、推理和代码合成。',
    displayName: 'Kimi K2',
    id: 'kimi-k2:1t',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 262_144,
    description: '阿里巴巴针对代理和编码任务的高性能长上下文模型。',
    displayName: 'Qwen3 Coder 480B',
    id: 'qwen3-coder:480b',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    displayName: 'Qwen3 VL 235B',
    id: 'qwen3-vl:235b',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    displayName: 'Qwen3 VL 235B Instruct',
    id: 'qwen3-vl:235b-instruct',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Ministral 3 3B is the smallest and most efficient model in the Ministral 3 series, offering strong language and vision capabilities in a compact package. Designed for edge deployment, it delivers high performance on various hardware including local setups.',
    displayName: 'Ministral 3 3B',
    id: 'ministral-3:3b',
    releasedAt: '2025-12-02',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Ministral 3 8B is a powerful and efficient model in the Ministral 3 series, delivering top-tier text and vision capabilities. Built for edge deployment, it delivers high performance on various hardware including local setups.',
    displayName: 'Ministral 3 8B',
    id: 'ministral-3:8b',
    releasedAt: '2025-12-02',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Ministral 3 14B is the largest model in the Ministral 3 series, delivering state-of-the-art performance comparable to the larger Mistral Small 3.2 24B counterpart. Optimized for local deployment, it delivers high performance on various hardware including local setups.',
    displayName: 'Ministral 3 14B',
    id: 'ministral-3:14b',
    releasedAt: '2025-12-02',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Mistral Large 3 is a state-of-the-art open-weight general-purpose multimodal model with a refined Mixture of Experts architecture. It has 41B active parameters and 675B total parameters.',
    displayName: 'Mistral Large 3',
    id: 'mistral-large-3:675b',
    releasedAt: '2025-12-02',
    type: 'chat',
  },
];

export const allModels = [...ollamaCloudModels];

export default allModels;
