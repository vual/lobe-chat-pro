import { AIChatModelCard } from '../types/aiModel';

const baichuanChatModels: AIChatModelCard[] = [
  {
    abilities: {
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 32_768,
    description:
      'We introduce Baichuan-M3, a new-generation medical-enhanced large language model designed to support clinical-grade medical assistance. In contrast to prior approaches that primarily focus on static question answering or superficial role-playing, Baichuan-M3 is trained to explicitly model the clinical decision-making process, aiming to improve usability and reliability in real-world medical practice. Rather than merely producing plausible-sounding answers, fluent doctor-like questioning, or high-frequency but vague recommendations such as "you should seek medical attention as soon as possible," Baichuan-M3 is explicitly trained to proactively acquire critical clinical information, construct coherent medical reasoning pathways, and systematically constrain hallucination-prone behaviors throughout the decision process. This design endows the model with intrinsic medical-enhanced capabilities aligned with real clinical workflows. Across evaluations of clinical inquiry, medical hallucination robustness, HealthBench, and HealthBench-Hard, Baichuan-M3 surpasses the latest flagship model released by OpenAI, GPT-5.2, establishing a new state of the art in medical-enhanced language models.',
    displayName: 'Baichuan M3 Plus',
    id: 'Baichuan-M3-Plus',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 9, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      searchImpl: 'internal',
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'We introduce Baichuan-M3, a new-generation medical-enhanced large language model designed to support clinical-grade medical assistance. In contrast to prior approaches that primarily focus on static question answering or superficial role-playing, Baichuan-M3 is trained to explicitly model the clinical decision-making process, aiming to improve usability and reliability in real-world medical practice. Rather than merely producing plausible-sounding answers, fluent doctor-like questioning, or high-frequency but vague recommendations such as "you should seek medical attention as soon as possible," Baichuan-M3 is explicitly trained to proactively acquire critical clinical information, construct coherent medical reasoning pathways, and systematically constrain hallucination-prone behaviors throughout the decision process. This design endows the model with intrinsic medical-enhanced capabilities aligned with real clinical workflows. Across evaluations of clinical inquiry, medical hallucination robustness, HealthBench, and HealthBench-Hard, Baichuan-M3 surpasses the latest flagship model released by OpenAI, GPT-5.2, establishing a new state of the art in medical-enhanced language models.',
    displayName: 'Baichuan M3',
    enabled: true,
    id: 'Baichuan-M3',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 32_768,
    description:
      "We introduce Baichuan-M2, a medically-enhanced reasoning model, designed for real-world medical reasoning tasks. We start from real-world medical questions and conduct reinforcement learning training based on a large-scale verifier system. While maintaining the model's general capabilities, the medical effectiveness of the Baichuan-M2 model has achieved a breakthrough improvement. Baichuan-M2 is the best open-source medical model in the world to date. It surpasses all open-source models, including gpt-oss-120b, as well as many cutting-edge closed-source models on the HealthBench Benchmark. It is the open-source model closest to GPT-5 in medical capabilities. Our practice demonstrates that a robust verifier is crucial for linking model capabilities to the real world and an end-to-end reinforcement learning approach fundamentally enhances the model's medical reasoning abilities. The release of Baichuan-M2 advances the cutting edge of technology in the field of medical artificial intelligence.",
    displayName: 'Baichuan M2 Plus',
    id: 'Baichuan-M2-Plus',
    maxOutput: 32_768,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      searchImpl: 'internal',
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      "We introduce Baichuan-M2, a medically-enhanced reasoning model, designed for real-world medical reasoning tasks. We start from real-world medical questions and conduct reinforcement learning training based on a large-scale verifier system. While maintaining the model's general capabilities, the medical effectiveness of the Baichuan-M2 model has achieved a breakthrough improvement. Baichuan-M2 is the best open-source medical model in the world to date. It surpasses all open-source models, including gpt-oss-120b, as well as many cutting-edge closed-source models on the HealthBench Benchmark. It is the open-source model closest to GPT-5 in medical capabilities. Our practice demonstrates that a robust verifier is crucial for linking model capabilities to the real world and an end-to-end reinforcement learning approach fundamentally enhances the model's medical reasoning abilities. The release of Baichuan-M2 advances the cutting edge of technology in the field of medical artificial intelligence.",
    displayName: 'Baichuan M2',
    id: 'Baichuan-M2',
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
      search: true,
    },
    contextWindowTokens: 32_768,
    description:
      '模型能力国内第一，在知识百科、长文本、生成创作等中文任务上超越国外主流模型。还具备行业领先的多模态能力，多项权威评测基准表现优异。',
    displayName: 'Baichuan 4',
    enabled: true,
    id: 'Baichuan4',
    maxOutput: 4096,
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
      functionCall: true,
      search: true,
    },
    contextWindowTokens: 32_768,
    description:
      '模型能力国内第一，在知识百科、长文本、生成创作等中文任务上超越国外主流模型。还具备行业领先的多模态能力，多项权威评测基准表现优异。',
    displayName: 'Baichuan 4 Turbo',
    enabled: true,
    id: 'Baichuan4-Turbo',
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 32_768,
    description:
      '模型能力国内第一，在知识百科、长文本、生成创作等中文任务上超越国外主流模型。还具备行业领先的多模态能力，多项权威评测基准表现优异。',
    displayName: 'Baichuan 4 Air',
    enabled: true,
    id: 'Baichuan4-Air',
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.98, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.98, strategy: 'fixed', unit: 'millionTokens' },
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
    contextWindowTokens: 32_768,
    description:
      '针对企业高频场景优化，效果大幅提升，高性价比。相对于Baichuan2模型，内容创作提升20%，知识问答提升17%， 角色扮演能力提升40%。整体效果比GPT3.5更优。',
    displayName: 'Baichuan 3 Turbo',
    id: 'Baichuan3-Turbo',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description:
      '具备 128K 超长上下文窗口，针对企业高频场景优化，效果大幅提升，高性价比。相对于Baichuan2模型，内容创作提升20%，知识问答提升17%， 角色扮演能力提升40%。整体效果比GPT3.5更优。',
    displayName: 'Baichuan 3 Turbo 128k',
    id: 'Baichuan3-Turbo-128k',
    maxOutput: 4096,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 24, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 24, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description:
      '采用搜索增强技术实现大模型与领域知识、全网知识的全面链接。支持PDF、Word等多种文档上传及网址输入，信息获取及时、全面，输出结果准确、专业。',
    displayName: 'Baichuan 2 Turbo',
    id: 'Baichuan2-Turbo',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
];

export const allModels = [...baichuanChatModels];

export default allModels;
