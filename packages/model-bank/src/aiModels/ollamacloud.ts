import { AIChatModelCard } from '../types/aiModel';

const ollamaCloudModels: AIChatModelCard[] = [
{
    abilities: {
      functionCall: true,
      reasoning: true
    },
    contextWindowTokens: 1_000_000,
    description: 'GLM-5.2 is Z.ai’s flagship model for the era of long-horizon tasks.',
    displayName: 'GLM-5.2',
    enabled: true,
    id: 'glm-5.2',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true
    },
    contextWindowTokens: 262_144,
    description: "Kimi K2.7 Code is Moonshot AI's coding-focused agentic model built upon Kimi K2.6, with substantial improvements on real-world long-horizon coding tasks and roughly 30% lower thinking-token usage.",
    displayName: 'Kimi K2.7 Code',
    enabled: true,
    id: 'kimi-k2.7-code',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true
    },
    contextWindowTokens: 512_000,
    description: 'MiniMax M3: Coding & Agentic Frontier. 1M context window. Native Multimodality.',
    displayName: 'MiniMax M3',
    id: 'minimax-m3',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true
    },
    contextWindowTokens: 262_144,
    description: 'Kimi K2.6 is an open-source, native multimodal agentic model that advances practical capabilities in long-horizon coding, coding-driven design, proactive autonomous execution, and swarm-based task orchestration.',
    displayName: 'Kimi K2.6',
    id: 'kimi-k2.6',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true
    },
    contextWindowTokens: 200_000,
    description: 'GLM-5.1 is our next-generation flagship model for agentic engineering, with significantly stronger coding capabilities than its predecessor. It achieves state-of-the-art performance on SWE-Bench Pro and leads GLM-5 by a wide margin.',
    displayName: 'GLM-5.1',
    id: 'glm-5.1',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true
    },
    contextWindowTokens: 262_144,
    displayName: 'Gemma 4 31B',
    id: 'gemma4:31b',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true
    },
    contextWindowTokens: 204_800,
    description: 'MiniMax M2.7 is an efficient large language model built specifically for coding and agent workflows.',
    displayName: 'MiniMax M2.7',
    id: 'minimax-m2.7',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true
    },
    contextWindowTokens: 262_144,
    description: 'Qwen3.5 is a unified vision–language foundation model with a hybrid architecture (Mixture-of-Experts + linear attention), offering strong multimodal reasoning, coding, and long-context capabilities with a 256K context window.',
    displayName: 'Qwen3.5 397B A17B',
    id: 'qwen3.5:397b',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true
    },
    contextWindowTokens: 204_800,
    description: 'MiniMax-M2.5 is a state-of-the-art large language model designed for real-world productivity and coding tasks.',
    displayName: 'MiniMax M2.5',
    id: 'minimax-m2.5',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true
    },
    contextWindowTokens: 262_144,
    description: 'Kimi K2.5 is an open-source, native multimodal agentic model that seamlessly integrates vision and language understanding with advanced agentic capabilities, instant and thinking modes, as well as conversational and agentic paradigms.',
    displayName: 'Kimi K2.5',
    id: 'kimi-k2.5',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true
    },
    contextWindowTokens: 262_144,
    description: 'Mistral Large 3 is a state-of-the-art open-weight general-purpose multimodal model with a refined Mixture of Experts architecture. It has 41B active parameters and 675B total parameters.',
    displayName: 'Mistral Large 3',
    id: 'mistral-large-3:675b',
    releasedAt: '2025-12-02',
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
];

export const allModels = [...ollamaCloudModels];

export default allModels;
