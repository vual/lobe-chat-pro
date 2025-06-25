import { Hotkey } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { HOTKEYS_REGISTRATION } from '@/const/hotkeys';
import hotkeyMeta from '@/locales/default/hotkey';
import { useUserStore } from '@/store/user';
import { settingsSelectors } from '@/store/user/slices/settings/selectors';
import { HotkeyGroupId } from '@/types/hotkey';

const useStyle = createStyles(({ css, token }) => ({
  desc: css`
    font-size: 12px;
    line-height: 1.3;
    color: ${token.colorTextDescription};
  `,
  hotkey: css`
    gap: 4px;

    kbd {
      min-width: 26px;
      height: 26px;
      border: 1px solid ${token.colorBorder};
    }
  `,
}));

interface HotkeyContentProps {
  groupId: HotkeyGroupId;
}

const HotkeyContent = memo<HotkeyContentProps>(({ groupId }) => {
  const settings = useUserStore(settingsSelectors.currentSettings, isEqual);
  const { t } = useTranslation('hotkey');
  const { styles } = useStyle();
  return (
    <>
      {HOTKEYS_REGISTRATION.filter((item) => item.group === groupId).map((item) => (
        <Flexbox align={'flex-start'} gap={16} horizontal key={item.id} width={'100%'}>
          <Flexbox flex={1} gap={4} justify={'space-between'}>
            <span>{t(`${item.id}.title`)}</span>
            {hotkeyMeta[item.id].desc ? (
              <span className={styles.desc}>{t(`${item.id}.desc`)}</span>
            ) : null}
          </Flexbox>
          <Hotkey
            className={styles.hotkey}
            keys={settings.hotkey[item.id]}
            style={{
              zoom: 1.1,
            }}
          />
        </Flexbox>
      ))}
    </>
  );
});

export default HotkeyContent;
