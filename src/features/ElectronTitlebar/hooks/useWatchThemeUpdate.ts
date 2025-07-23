import { useWatchBroadcast } from '@lobechat/electron-client-ipc';
import { useTheme } from 'antd-style';
import { rgba } from 'polished';
import { useEffect } from 'react';

import { useElectronStore } from '@/store/electron';
import { useGlobalStore } from '@/store/global';

export const useWatchThemeUpdate = () => {
  const [systemAppearance, updateElectronAppState] = useElectronStore((s) => [
    s.appState.systemAppearance,
    s.updateElectronAppState,
  ]);
  const switchThemeMode = useGlobalStore((s) => s.switchThemeMode);

  const theme = useTheme();

  useWatchBroadcast('themeChanged', ({ themeMode }) => {
    switchThemeMode(themeMode, { skipBroadcast: true });
  });

  useWatchBroadcast('systemThemeChanged', ({ themeMode }) => {
    updateElectronAppState({ systemAppearance: themeMode });
  });

  useEffect(() => {
    document.documentElement.style.background = 'none';

    // https://x.com/alanblogsooo/status/1939208908993896684
    const isNotSameTheme = !systemAppearance ? true : theme.appearance !== systemAppearance;

    document.body.style.background = rgba(theme.colorBgLayout, isNotSameTheme ? 0.95 : 0.66);
  }, [theme, systemAppearance]);
};
