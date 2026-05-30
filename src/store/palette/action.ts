import type { StateCreator } from 'zustand/vanilla';

import type { PaletteStore } from '@/store/palette/index';

import {
  DALLE_INITIAL_STATUS,
  DallEStatus,
  MJ_INITIAL_STATUS,
  MjStatus,
  VOLCENGINE_INITIAL_CONFIG,
  VolcengineConfig,
} from './initialState';

/**
 * 设置操作
 */
export interface PaletteStoreAction {
  resetStatus: (platform: string) => void;
  switchPlatform: (platform: string) => void;
  updateDallEStatus: (updater: (dallEStatus: DallEStatus) => void) => void;
  updateMjStatus: (updater: (mjStatus: MjStatus) => void) => void;
  updateVolcConfig: (updater: (volcengineConfig: VolcengineConfig) => void) => void;
}

export const createPaletteAction: StateCreator<
  PaletteStore,
  [['zustand/devtools', never]],
  [],
  PaletteStoreAction
> = (set, get) => ({
  resetStatus: (platform: string) => {
    switch (platform) {
      case 'Midjourney': {
        set({ mjStatus: { ...MJ_INITIAL_STATUS } });
        break;
      }
      case 'OpenAI': {
        set({ dallEStatus: { ...DALLE_INITIAL_STATUS } });
        break;
      }
      case 'Volcengine': {
        set({ volcengineConfig: { ...VOLCENGINE_INITIAL_CONFIG } });
        break;
      }
      // No default
    }
  },
  switchPlatform: (platform: string) => {
    set({ platform });
  },
  updateDallEStatus(updater: (dallEStatus: DallEStatus) => void) {
    let dallEStatus = { ...get().dallEStatus };
    updater(dallEStatus);
    set({ dallEStatus });
  },
  updateMjStatus(updater: (mjStatus: MjStatus) => void) {
    let mjStatus = { ...get().mjStatus };
    updater(mjStatus);
    set({ mjStatus });
  },
  updateVolcConfig(updater: (volcengineConfig: VolcengineConfig) => void) {
    let volcengineConfig = { ...get().volcengineConfig };
    updater(volcengineConfig);
    set({ volcengineConfig });
  },
});
