import { ModelProviderCard } from '@/types/llm';

const Midjourney: ModelProviderCard = {
  chatModels: [
    {
      description: '7',
      displayName: '7',
      enabled: true,
      functionCall: false,
      id: '7',
    },
    {
      description: '6.1',
      displayName: '6.1',
      enabled: true,
      functionCall: false,
      id: '6.1',
    },
    {
      description: '6',
      displayName: '6',
      enabled: true,
      functionCall: false,
      id: '6',
    },
    {
      description: '5.2',
      displayName: '5.2',
      enabled: true,
      functionCall: false,
      id: '5.2',
    },
    {
      description: '5.1',
      displayName: '5.1',
      enabled: true,
      functionCall: false,
      id: '5.1',
    },
    {
      description: '5',
      displayName: '5',
      enabled: true,
      functionCall: false,
      id: '5',
    },
  ],
  description: 'Midjourney 是当前最出色的图片生成模型。',
  enabled: true,
  extraAdd: true,
  id: 'midjourney',
  name: 'Midjourney',
  settings: {
    proxyUrl: {
      placeholder: 'https://ai.aiiai.top/mj',
    },
    showChecker: false,
  },
  url: 'https://ai.aiiai.top',
};

export default Midjourney;
