import { UploadFileItem } from '@/types/files';

export * from './base';
export * from './chat';
export * from './image';
export * from './tools';

export interface SendMessageParams {
  /**
   * create a thread
   */
  createThread?: boolean;
  files?: UploadFileItem[];
  /**
   *
   * https://github.com/lobehub/lobe-chat/pull/2086
   */
  isWelcomeQuestion?: boolean;
  message: string;
  onlyAddUserMessage?: boolean;
}

export interface SendThreadMessageParams {
  /**
   * create a thread
   */
  createNewThread?: boolean;
  // files?: UploadFileItem[];
  message: string;
  onlyAddUserMessage?: boolean;
}

export interface ModelRankItem {
  count: number;
  id: string | null;
}
