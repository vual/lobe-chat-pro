import type { StateCreator } from 'zustand/vanilla';

import type { PaletteStore } from '@/store/palette/index';

import { MJ_INITIAL_STATUS, MjStatus } from './initialState';

/**
 * 设置操作
 */
export interface PaletteStoreAction {
  resetStatus: (platform: string) => void;
  switchPlatform: (platform: string) => void;
  updateMjStatus: (updater: (mjStatus: MjStatus) => void) => void;
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
      // No default
    }
  },
  switchPlatform: (platform: string) => {
    set({ platform });
  },
  updateMjStatus(updater: (mjStatus: MjStatus) => void) {
    let mjStatus = { ...get().mjStatus };
    updater(mjStatus);
    set({ mjStatus });
  },
});
