import { Hotkey, Icon } from '@lobehub/ui';
import { DiscordIcon } from '@lobehub/ui/icons';
import { Badge } from 'antd';
import { ItemType } from 'antd/es/menu/interface';
import {
  Book,
  CircleUserRound,
  Cloudy,
  Download,
  Feather,
  FileClockIcon,
  HardDriveDownload,
  LifeBuoy,
  LogOut,
  Mail,
  Settings2,
} from 'lucide-react';
import Link from 'next/link';
import { PropsWithChildren, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import type { MenuProps } from '@/components/Menu';
import { enableAuth } from '@/const/auth';
import { BRANDING_EMAIL, LOBE_CHAT_CLOUD, SOCIAL_URL } from '@/const/branding';
import { DEFAULT_HOTKEY_CONFIG } from '@/const/settings';
import {
  CHANGELOG,
  DOCUMENTS_REFER_URL,
  GITHUB_ISSUES,
  OFFICIAL_URL,
  UTM_SOURCE,
  mailTo,
} from '@/const/url';
import { isDesktop } from '@/const/version';
import DataImporter from '@/features/DataImporter';
import { usePWAInstall } from '@/hooks/usePWAInstall';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';
import { useUserStore } from '@/store/user';
import { authSelectors } from '@/store/user/selectors';

import { useNewVersion } from './useNewVersion';

const NewVersionBadge = memo(
  ({
    children,
    showBadge,
    onClick,
  }: PropsWithChildren & { onClick?: () => void; showBadge?: boolean }) => {
    const { t } = useTranslation('common');
    if (!showBadge)
      return (
        <Flexbox flex={1} onClick={onClick}>
          {children}
        </Flexbox>
      );
    return (
      <Flexbox align={'center'} flex={1} gap={8} horizontal onClick={onClick} width={'100%'}>
        <span>{children}</span>
        <Badge count={t('upgradeVersion.hasNew')} />
      </Flexbox>
    );
  },
);

export const useMenu = () => {
  const { canInstall, install } = usePWAInstall();
  const hasNewVersion = useNewVersion();
  const { t } = useTranslation(['common', 'setting', 'auth']);
  const { showCloudPromotion, hideDocs } = useServerConfigStore(featureFlagsSelectors);
  const [isLogin, isLoginWithAuth] = useUserStore((s) => [
    authSelectors.isLogin(s),
    authSelectors.isLoginWithAuth(s),
  ]);

  const profile: MenuProps['items'] = [
    {
      icon: <Icon icon={CircleUserRound} />,
      key: 'profile',
      label: <Link href={'/profile'}>{t('userPanel.profile')}</Link>,
    },
  ];

  const settings: MenuProps['items'] = [
    {
      extra: isDesktop ? (
        <div>
          <Hotkey keys={DEFAULT_HOTKEY_CONFIG.openSettings} />
        </div>
      ) : undefined,
      icon: <Icon icon={Settings2} />,
      key: 'setting',
      label: (
        <Link href={'/settings/common'}>
          <NewVersionBadge showBadge={hasNewVersion}>{t('userPanel.setting')}</NewVersionBadge>
        </Link>
      ),
    },
    {
      type: 'divider',
    },
  ];

  /* ↓ cloud slot ↓ */

  /* ↑ cloud slot ↑ */

  const pwa: MenuProps['items'] = [
    {
      icon: <Icon icon={Download} />,
      key: 'pwa',
      label: t('installPWA'),
      onClick: () => install(),
    },
    {
      type: 'divider',
    },
  ];

  const data = !isLogin
    ? []
    : ([
        {
          icon: <Icon icon={HardDriveDownload} />,
          key: 'import',
          label: <DataImporter>{t('importData')}</DataImporter>,
        },
        {
          type: 'divider',
        },
      ].filter(Boolean) as ItemType[]);

  const helps: MenuProps['items'] = [
    showCloudPromotion && {
      icon: <Icon icon={Cloudy} />,
      key: 'cloud',
      label: (
        <Link href={`${OFFICIAL_URL}?utm_source=${UTM_SOURCE}`} target={'_blank'}>
          {t('userPanel.cloud', { name: LOBE_CHAT_CLOUD })}
        </Link>
      ),
    },
    {
      icon: <Icon icon={FileClockIcon} />,
      key: 'changelog',
      label: <Link href={isDesktop ? CHANGELOG : '/changelog/modal'}>{t('changelog')}</Link>,
    },
    {
      children: [
        {
          icon: <Icon icon={Book} />,
          key: 'docs',
          label: (
            <Link href={DOCUMENTS_REFER_URL} target={'_blank'}>
              {t('userPanel.docs')}
            </Link>
          ),
        },
        {
          icon: <Icon icon={Feather} />,
          key: 'feedback',
          label: (
            <Link href={GITHUB_ISSUES} target={'_blank'}>
              {t('userPanel.feedback')}
            </Link>
          ),
        },
        {
          icon: <Icon icon={DiscordIcon} />,
          key: 'discord',
          label: (
            <Link href={SOCIAL_URL.discord} target={'_blank'}>
              {t('userPanel.discord')}
            </Link>
          ),
        },
        {
          icon: <Icon icon={Mail} />,
          key: 'email',
          label: (
            <Link href={mailTo(BRANDING_EMAIL.support)} target={'_blank'}>
              {t('userPanel.email')}
            </Link>
          ),
        },
      ],
      icon: <Icon icon={LifeBuoy} />,
      key: 'help',
      label: t('userPanel.help'),
    },
    {
      type: 'divider',
    },
  ].filter(Boolean) as ItemType[];

  const mainItems = [
    {
      type: 'divider',
    },
    ...(!enableAuth || (enableAuth && isLoginWithAuth) ? profile : []),
    ...(isLogin ? settings : []),
    /* ↓ cloud slot ↓ */

    /* ↑ cloud slot ↑ */
    ...(canInstall ? pwa : []),
    ...data,
    ...(!hideDocs ? helps : []),
  ].filter(Boolean) as MenuProps['items'];

  const logoutItems: MenuProps['items'] = isLoginWithAuth
    ? [
        {
          icon: <Icon icon={LogOut} />,
          key: 'logout',
          label: <span>{t('signout', { ns: 'auth' })}</span>,
        },
      ]
    : [];

  return { logoutItems, mainItems };
};
