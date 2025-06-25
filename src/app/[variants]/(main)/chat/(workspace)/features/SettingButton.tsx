'use client';

import { ActionIcon, Tooltip } from '@lobehub/ui';
import { AlignJustify } from 'lucide-react';
import dynamic from 'next/dynamic';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { DESKTOP_HEADER_ICON_SIZE, MOBILE_HEADER_ICON_SIZE } from '@/const/layoutTokens';
import { useOpenChatSettings } from '@/hooks/useInterceptingRoutes';
import { useSessionStore } from '@/store/session';
import { useUserStore } from '@/store/user';
import { settingsSelectors } from '@/store/user/selectors';
import { HotkeyEnum } from '@/types/hotkey';

const AgentSettings = dynamic(() => import('./AgentSettings'), {
  ssr: false,
});

const SettingButton = memo<{ mobile?: boolean }>(({ mobile }) => {
  const hotkey = useUserStore(settingsSelectors.getHotkeyById(HotkeyEnum.OpenChatSettings));
  const { t } = useTranslation('common');
  const openChatSettings = useOpenChatSettings();
  const id = useSessionStore((s) => s.activeId);

  return (
    <>
      <Tooltip hotkey={hotkey} title={t('openChatSettings.title', { ns: 'hotkey' })}>
        <ActionIcon
          icon={AlignJustify}
          onClick={() => openChatSettings()}
          size={mobile ? MOBILE_HEADER_ICON_SIZE : DESKTOP_HEADER_ICON_SIZE}
        />
      </Tooltip>
      <AgentSettings key={id} />
    </>
  );
});

export default SettingButton;
