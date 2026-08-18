import { AIChatModelCard } from '../types/aiModel';

const klingModels: AIChatModelCard[] = [
  {
    description: 'kling-v1.6',
    displayName: 'kling-v1.6',
    enabled: true,
    id: 'kling-v1.6',
    type: 'chat',
  },
  {
    description: 'kling-v1.5',
    displayName: 'kling-v1.5',
    enabled: true,
    id: 'kling-v1.5',
    type: 'chat',
  },
  {
    description: 'kling-v1',
    displayName: 'kling-v1',
    enabled: true,
    id: 'kling-v1',
    type: 'chat',
  },
];

export const allModels = [...klingModels];

export default allModels;
