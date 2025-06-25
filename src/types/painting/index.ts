export interface PaintingExtra {
  buttons?: any[];
  fetchTimes?: number;
  groupId?: string;
  html_info?: string;
  info?: string;
  parameters?: string;
  parentId?: string;
  parentTaskId?: string;
  promptEn?: string;
}

export interface PaintingImage {
  fileId: string;
  url: string;
}

export interface Painting {
  action: string;
  config: any;
  createdAt: Date;
  description: string;
  extra: PaintingExtra;
  failReason: string;
  id: string;
  images: PaintingImage[];
  isPublic: string;
  negativePrompt: string;
  platform: string; // Midjourney Stable-Diffusion Dall-E
  progress: string;
  prompt: string;
  status: string; // INIT, SUBMITTED, IN_PROGRESS, SUCCESS, FAILURE
  taskId: string;
  updatedAt: Date;
}

export type Paintings = Painting[];
