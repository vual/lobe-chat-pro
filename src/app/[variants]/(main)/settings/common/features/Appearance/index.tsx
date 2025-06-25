'use client';

import { Form, type FormGroupItemType, Icon } from '@lobehub/ui';
import { Skeleton } from 'antd';
import isEqual from 'fast-deep-equal';
import { Loader2Icon } from 'lucide-react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FORM_STYLE } from '@/const/layoutTokens';
import { useUserStore } from '@/store/user';
import { settingsSelectors } from '@/store/user/slices/settings/selectors';

import Preview from './Preview';
import { ThemeSwatchesNeutral, ThemeSwatchesPrimary } from './ThemeSwatches';

const Appearance = memo(() => {
  const { t } = useTranslation('setting');
  const { general } = useUserStore(settingsSelectors.currentSettings, isEqual);
  const [setSettings, isUserStateInit] = useUserStore((s) => [s.setSettings, s.isUserStateInit]);
  const [loading, setLoading] = useState(false);

  if (!isUserStateInit) return <Skeleton active paragraph={{ rows: 5 }} title={false} />;

  const theme: FormGroupItemType = {
    children: [
      {
        children: <Preview />,
        label: t('settingAppearance.preview.title'),
        minWidth: undefined,
      },
      {
        children: <ThemeSwatchesPrimary />,
        desc: t('settingAppearance.primaryColor.desc'),
        label: t('settingAppearance.primaryColor.title'),
        minWidth: undefined,
        name: 'primaryColor',
      },
      {
        children: <ThemeSwatchesNeutral />,
        desc: t('settingAppearance.neutralColor.desc'),
        label: t('settingAppearance.neutralColor.title'),
        minWidth: undefined,
        name: 'neutralColor',
      },
    ],
    extra: loading && <Icon icon={Loader2Icon} size={16} spin style={{ opacity: 0.5 }} />,
    title: t('settingAppearance.title'),
  };

  return (
    <Form
      initialValues={general}
      items={[theme]}
      itemsType={'group'}
      onValuesChange={async (value) => {
        setLoading(true);
        await setSettings({ general: value });
        setLoading(false);
      }}
      variant={'borderless'}
      {...FORM_STYLE}
    />
  );
});

export default Appearance;
