import { AIChatModelCard } from '../types/aiModel';

// https://internlm.intern-ai.org.cn/api/document

const internlmChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,
    description:
      '我们最新的模型系列，有着卓越的推理性能，领跑同量级开源模型。默认指向我们最新发布的 InternLM3 系列模型，当前指向 internlm3-8b-instruct。',
    displayName: 'InternLM3',
    enabled: true,
    id: 'internlm3-latest',
    pricing: {
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
    contextWindowTokens: 32_768,
    description:
      '我们仍在维护的老版本模型，经过多轮迭代有着极其优异且稳定的性能，包含 7B、20B 多种模型参数量可选，支持 1M 的上下文长度以及更强的指令跟随和工具调用能力。默认指向我们最新发布的 InternLM2.5 系列模型，当前指向 internlm2.5-20b-chat。',
    displayName: 'InternLM2.5',
    id: 'internlm2.5-latest',
    pricing: {
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
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
      '我们最新发布多模态大模型，具备更强的图文理解能力、长时序图片理解能力，性能比肩顶尖闭源模型。默认指向我们最新发布的 InternVL 系列模型，当前指向 internvl3-78b。',
    displayName: 'InternVL3',
    enabled: true,
    id: 'internvl3-latest',
    pricing: {
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
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
      '我们仍在维护的 InternVL2.5 版本，具备优异且稳定的性能。默认指向我们最新发布的 InternVL2.5 系列模型，当前指向 internvl2.5-78b。',
    displayName: 'InternVL2.5',
    id: 'internvl2.5-latest',
    pricing: {
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
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 262_144,
    description:
      'By default, it points to our latest released Intern series model, currently set to intern-s1-pro.',
    displayName: 'Intern',
    id: 'intern-latest',
    pricing: {
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-02-04',
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
      'We have launched our most advanced open-source multimodal reasoning model, currently the top-performing open-source multimodal large language model in terms of overall performance.',
    displayName: 'Intern-S1-Pro',
    enabled: true,
    id: 'intern-s1-pro',
    pricing: {
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2026-02-04',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'The open-source multimodal reasoning model not only demonstrates strong general-purpose capabilities but also achieves state-of-the-art performance across a wide range of scientific tasks.',
    displayName: 'Intern-S1',
    enabled: true,
    id: 'intern-s1',
    pricing: {
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-26',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'A lightweight multimodal large model with strong scientific reasoning capabilities.',
    displayName: 'Intern-S1-Mini',
    enabled: true,
    id: 'intern-s1-mini',
    pricing: {
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-20',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'By default, it points to the latest model in the InternVL3.5 series, currently set to internvl3.5-241b-a28b.',
    displayName: 'InternVL3.5',
    id: 'internvl3.5-latest',
    pricing: {
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-28',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Our newly released multimodal large model features enhanced image-and-text understanding and long-sequence image comprehension capabilities, achieving performance comparable to leading closed-source models.',
    displayName: 'InternVL3.5-241B-A28B',
    enabled: true,
    id: 'internvl3.5-241b-a28b',
    pricing: {
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-28',
    type: 'chat',
  },
];

export const allModels = [...internlmChatModels];

export default allModels;
