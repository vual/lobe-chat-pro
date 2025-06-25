import { electronAPI } from '@electron-toolkit/preload';
import { contextBridge } from 'electron';

import { invoke } from './invoke';

export const setupElectronApi = () => {
  // Use `contextBridge` APIs to expose Electron APIs to
  // renderer only if context isolation is enabled, otherwise
  // just add to the DOM global.

  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
  } catch (error) {
    console.error(error);
  }

  contextBridge.exposeInMainWorld('electronAPI', { invoke });
};
