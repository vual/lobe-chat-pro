import { ModelProviderCard } from '@/types/llm';

const Kling: ModelProviderCard = {
  chatModels: [
    {
      description: 'kling-v1.5',
      displayName: 'kling-v1.5',
      enabled: true,
      functionCall: false,
      id: 'kling-v1.5',
    },
    {
      description: 'kling-v1',
      displayName: 'kling-v1',
      enabled: true,
      functionCall: false,
      id: 'kling-v1',
    },
  ],
  description: 'Kling 是快手的新一代 AI 创意生产力平台，可实现图片生成、AI 试衣等功能。',
  enabled: true,
  extraAdd: true,
  id: 'kling',
  name: 'Kling',
  proxyUrl: {
    placeholder: 'https://api.klingai.com/v1',
  },
  settings: {
    proxyUrl: {
      placeholder: 'https://api.klingai.com/v1',
    },
    showChecker: false,
  },
  url: 'https://klingai.kuaishou.com',
};

export default Kling;
