import { ModelProviderCard } from '@/types/llm';

// ref: https://platform.stepfun.com/docs/llm/text
// 根据文档，阶级星辰大模型的上下文长度，其 k 的含义均为 1000
const Stepfun: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 8000,
      description: '高速模型，适合实时对话。',
      displayName: 'Step 1 Flash',
      enabled: true,
      functionCall: true,
      id: 'step-1-flash',
      pricing: {
        currency: 'CNY',
        input: 1,
        output: 4,
      },
    },
    {
      contextWindowTokens: 8000,
      description: '小型模型，适合轻量级任务。',
      displayName: 'Step 1 8K',
      enabled: true,
      functionCall: true,
      id: 'step-1-8k',
      pricing: {
        currency: 'CNY',
        input: 5,
        output: 20,
      },
    },
    {
      contextWindowTokens: 32_000,
      description: '支持中等长度的对话，适用于多种应用场景。',
      displayName: 'Step 1 32K',
      enabled: true,
      functionCall: true,
      id: 'step-1-32k',
      pricing: {
        currency: 'CNY',
        input: 15,
        output: 70,
      },
    },
    {
      contextWindowTokens: 128_000,
      description: '平衡性能与成本，适合一般场景。',
      displayName: 'Step 1 128K',
      enabled: true,
      functionCall: true,
      id: 'step-1-128k',
      pricing: {
        currency: 'CNY',
        input: 40,
        output: 200,
      },
    },
    {
      contextWindowTokens: 256_000,
      description: '具备超长上下文处理能力，尤其适合长文档分析。',
      displayName: 'Step 1 256K',
      functionCall: true,
      id: 'step-1-256k',
      pricing: {
        currency: 'CNY',
        input: 95,
        output: 300,
      },
    },
    {
      contextWindowTokens: 16_000,
      description: '支持大规模上下文交互，适合复杂对话场景。',
      displayName: 'Step 2 16K',
      enabled: true,
      functionCall: true,
      id: 'step-2-16k',
      pricing: {
        currency: 'CNY',
        input: 38,
        output: 120,
      },
    },
    {
      contextWindowTokens: 8000,
      description:
        '基于新一代自研Attention架构MFA的极速大模型，用极低成本达到和step1类似的效果，同时保持了更高的吞吐和更快响应时延。能够处理通用任务，在代码能力上具备特长。',
      displayName: 'Step 2 Mini',
      enabled: true,
      functionCall: true,
      id: 'step-2-mini',
      pricing: {
        currency: 'CNY',
        input: 1,
        output: 2,
      },
    },
    {
      contextWindowTokens: 16_000,
      description: 'step-2模型的实验版本，包含最新的特性，滚动更新中。不推荐在正式生产环境使用。',
      displayName: 'Step 2 16K Exp',
      functionCall: true,
      id: 'step-2-16k-exp',
      pricing: {
        currency: 'CNY',
        input: 38,
        output: 120,
      },
    },
    {
      contextWindowTokens: 8000,
      description: '小型视觉模型，适合基本的图文任务。',
      displayName: 'Step 1V 8K',
      enabled: true,
      functionCall: true,
      id: 'step-1v-8k',
      pricing: {
        currency: 'CNY',
        input: 5,
        output: 20,
      },
      vision: true,
    },
    {
      contextWindowTokens: 32_000,
      description: '支持视觉输入，增强多模态交互体验。',
      displayName: 'Step 1V 32K',
      functionCall: true,
      id: 'step-1v-32k',
      pricing: {
        currency: 'CNY',
        input: 15,
        output: 70,
      },
      vision: true,
    },
    {
      contextWindowTokens: 32_000,
      description: '该模型拥有强大的图像理解能力。相比于 step-1v 系列模型，拥有更强的视觉性能。',
      displayName: 'Step 1o Vision 32K',
      enabled: true,
      id: 'step-1o-vision-32k',
      pricing: {
        currency: 'CNY',
        input: 15,
        output: 70,
      },
      vision: true,
    },
    {
      contextWindowTokens: 32_000,
      description: '该模型拥有强大的视频理解能力。',
      displayName: 'Step 1.5V Mini',
      enabled: true,
      id: 'step-1.5v-mini',
      pricing: {
        currency: 'CNY',
        input: 8,
        output: 35,
      },
      vision: true,
    },
  ],
  checkModel: 'step-2-mini',
  description:
    '阶级星辰大模型具备行业领先的多模态及复杂推理能力，支持超长文本理解和强大的自主调度搜索引擎功能。',
  // after test, currently https://api.stepfun.com/v1/chat/completions has the CORS issue
  // So we should close the browser request mode
  disableBrowserRequest: true,
  id: 'stepfun',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://platform.stepfun.com/docs/llm/text',
  name: 'Stepfun',
  settings: {
    disableBrowserRequest: true,
    proxyUrl: {
      placeholder: 'https://api.stepfun.com/v1',
    },
    responseAnimation: {
      speed: 2,
      text: 'smooth',
    },
    sdkType: 'openai',
    showModelFetcher: true,
  },
  url: 'https://stepfun.com',
};

export default Stepfun;
