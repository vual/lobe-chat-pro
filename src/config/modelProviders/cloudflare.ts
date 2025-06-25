import { ModelProviderCard } from '@/types/llm';

// ref https://developers.cloudflare.com/workers-ai/models/#text-generation
// api https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility
const Cloudflare: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 16_384,
      displayName: 'DeepSeek R1 (Distill Qwen 32B)',
      enabled: true,
      id: '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
    },
    {
      contextWindowTokens: 2048,
      displayName: 'gemma-7b-it',
      id: '@hf/google/gemma-7b-it',
    },
    {
      contextWindowTokens: 4096,
      displayName: 'hermes-2-pro-mistral-7b',
      // functionCall: true,
      id: '@hf/nousresearch/hermes-2-pro-mistral-7b',
    },
    {
      contextWindowTokens: 131_072,
      displayName: 'llama 3.3 70b',
      id: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
    },
    {
      contextWindowTokens: 4096,
      displayName: 'mistral-7b-instruct-v0.2',
      id: '@hf/mistral/mistral-7b-instruct-v0.2',
    },
    {
      contextWindowTokens: 32_768,
      displayName: 'neural-chat-7b-v3-1-awq',
      id: '@hf/thebloke/neural-chat-7b-v3-1-awq',
    },
    {
      contextWindowTokens: 8192,
      displayName: 'openchat-3.5-0106',
      id: '@cf/openchat/openchat-3.5-0106',
    },
    {
      contextWindowTokens: 32_768,
      displayName: 'openhermes-2.5-mistral-7b-awq',
      id: '@hf/thebloke/openhermes-2.5-mistral-7b-awq',
    },
    {
      contextWindowTokens: 32_768,
      displayName: 'qwen1.5-14b-chat-awq',
      enabled: true,
      id: '@cf/qwen/qwen1.5-14b-chat-awq',
    },
    {
      contextWindowTokens: 4096,
      displayName: 'starling-lm-7b-beta',
      id: '@hf/nexusflow/starling-lm-7b-beta',
    },
    {
      contextWindowTokens: 32_768,
      displayName: 'zephyr-7b-beta-awq',
      id: '@hf/thebloke/zephyr-7b-beta-awq',
    },
    {
      displayName: 'meta-llama-3-8b-instruct',
      id: '@hf/meta-llama/meta-llama-3-8b-instruct',
    },
  ],
  checkModel: '@hf/meta-llama/meta-llama-3-8b-instruct',
  description: '在 Cloudflare 的全球网络上运行由无服务器 GPU 驱动的机器学习模型。',
  disableBrowserRequest: true,
  id: 'cloudflare',
  modelList: {
    showModelFetcher: true,
  },
  name: 'Cloudflare Workers AI',
  settings: {
    disableBrowserRequest: true,
    sdkType: 'cloudflare',
    showModelFetcher: true,
  },
  url: 'https://developers.cloudflare.com/workers-ai/models',
};

export default Cloudflare;
