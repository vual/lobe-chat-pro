import { filesSelectors as imageFilesSelectors } from './slices/chat';
import { ttsFilesSelectors } from './slices/tts';

export const filesSelectors = {
  ...imageFilesSelectors,
  ...ttsFilesSelectors,
};

export { fileChatSelectors } from './slices/chat/selectors';
export * from './slices/fileManager/selectors';
