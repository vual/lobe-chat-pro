import useSWR, { SWRResponse } from 'swr';
import type { StateCreator } from 'zustand/vanilla';

import type { UserStore } from '@/store/user';
import { OnSyncEvent, PeerSyncStatus } from '@/types/sync';
import { browserInfo } from '@/utils/platform';
import { setNamespace } from '@/utils/storeDebug';

import { userProfileSelectors } from '../auth/selectors';
import { syncSettingsSelectors } from './selectors';

const n = setNamespace('sync');

/**
 * 设置操作
 */
export interface SyncAction {
  refreshConnection: (onEvent: OnSyncEvent) => Promise<void>;
  triggerEnableSync: (userId: string, onEvent: OnSyncEvent) => Promise<boolean>;
  useEnabledSync: (
    systemEnable: boolean | undefined,
    params: {
      onEvent: OnSyncEvent;
      userEnableSync: boolean;
      userId: string | undefined;
    },
  ) => SWRResponse;
}

export const createSyncSlice: StateCreator<
  UserStore,
  [['zustand/devtools', never]],
  [],
  SyncAction
> = (set, get) => ({
  refreshConnection: async (onEvent) => {
    const userId = userProfileSelectors.userId(get());

    if (!userId) return;

    await get().triggerEnableSync(userId, onEvent);
  },

  triggerEnableSync: async (userId: string, onEvent: OnSyncEvent) => {
    // double-check the sync ability
    // if there is no channelName, don't start sync
    const sync = syncSettingsSelectors.webrtcConfig(get());
    if (!sync.channelName || !sync.signaling) return false;

    const name = syncSettingsSelectors.deviceName(get());

    const defaultUserName = `My ${browserInfo.browser} (${browserInfo.os})`;

    set({ syncStatus: PeerSyncStatus.Connecting });
    const { syncService } = await import('@/services/sync');

    return syncService.enabledSync({
      channel: {
        name: sync.channelName,
        password: sync.channelPassword,
      },
      onAwarenessChange(state) {
        set({ syncAwareness: state });
      },
      onSyncEvent: onEvent,
      onSyncStatusChange: (status) => {
        set({ syncStatus: status });
      },
      signaling: sync.signaling,
      user: {
        id: userId,
        // if user don't set the name, use default name
        name: name || defaultUserName,
        ...browserInfo,
      },
    });
  },

  useEnabledSync: (systemEnable, { userEnableSync, userId, onEvent }) =>
    useSWR<boolean>(
      systemEnable ? ['enableSync', userEnableSync, userId] : null,
      async () => {
        // if user don't enable sync or no userId ,don't start sync
        if (!userId) return false;

        // if user don't enable sync, stop sync
        if (!userEnableSync) {
          const { syncService } = await import('@/services/sync');
          return syncService.disableSync();
        }

        return get().triggerEnableSync(userId, onEvent);
      },
      {
        onSuccess: (syncEnabled) => {
          set({ syncEnabled }, false, n('useEnabledSync'));
        },
        revalidateOnFocus: false,
      },
    ),
});
