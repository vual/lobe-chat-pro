'use client';

import { Button, Form, type FormGroupItemType, type FormItemProps, Icon } from '@lobehub/ui';
import { Form as AntForm, Skeleton, Switch } from 'antd';
import isEqual from 'fast-deep-equal';
import { Loader2Icon, PencilIcon } from 'lucide-react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import TextArea from '@/components/TextArea';
import { FORM_STYLE } from '@/const/layoutTokens';
import ModelSelect from '@/features/ModelSelect';
import { useUserStore } from '@/store/user';
import { settingsSelectors } from '@/store/user/selectors';
import { type UserSystemAgentConfigKey } from '@/types/user/settings';

interface SystemAgentFormProps {
  allowCustomPrompt?: boolean;
  allowDisable?: boolean;
  defaultPrompt?: string;
  systemAgentKey: UserSystemAgentConfigKey;
}

const SystemAgentForm = memo(
  ({ systemAgentKey, allowDisable, allowCustomPrompt, defaultPrompt }: SystemAgentFormProps) => {
    const { t } = useTranslation('setting');
    const [form] = AntForm.useForm();
    const settings = useUserStore(settingsSelectors.currentSystemAgent, isEqual);
    const [updateSystemAgent, isUserStateInit] = useUserStore((s) => [
      s.updateSystemAgent,
      s.isUserStateInit,
    ]);
    const [loading, setLoading] = useState(false);

    if (!isUserStateInit) return <Skeleton active paragraph={{ rows: 5 }} title={false} />;

    const value = settings[systemAgentKey];

    const systemAgentSettings: FormGroupItemType = {
      children: [
        {
          children: (
            <ModelSelect
              onChange={async (props) => {
                setLoading(true);
                await updateSystemAgent(systemAgentKey, props);
                setLoading(false);
              }}
              showAbility={false}
              // value={value}
            />
          ),
          desc: t(`systemAgent.${systemAgentKey}.modelDesc`),
          label: t(`systemAgent.${systemAgentKey}.label`),
          name: systemAgentKey,
        },
        (!!allowCustomPrompt && {
          children: !!value.customPrompt ? (
            <TextArea
              onBlur={async (e) => {
                setLoading(true);
                await updateSystemAgent(systemAgentKey, { customPrompt: e.target.value });
                setLoading(false);
              }}
              placeholder={t('systemAgent.customPrompt.placeholder')}
              style={{ minHeight: 160 }}
              value={value.customPrompt}
            />
          ) : (
            <Button
              block
              icon={PencilIcon}
              onClick={async () => {
                setLoading(true);
                await updateSystemAgent(systemAgentKey, { customPrompt: defaultPrompt });
                setLoading(false);
              }}
            >
              {t('systemAgent.customPrompt.addPrompt')}
            </Button>
          ),
          desc: t('systemAgent.customPrompt.desc'),
          label: t('systemAgent.customPrompt.title'),
          name: [systemAgentKey, 'customPrompt'],
        }) as FormItemProps,
      ].filter(Boolean),
      extra: (
        <Flexbox>
          {loading && <Icon icon={Loader2Icon} size={16} spin style={{ opacity: 0.5 }} />}
          {allowDisable && (
            <Switch
              onChange={async (enabled) => {
                setLoading(true);
                await updateSystemAgent(systemAgentKey, { enabled });
                setLoading(false);
              }}
              value={value.enabled}
            />
          )}
        </Flexbox>
      ),
      title: (
        <span
          style={{
            opacity: typeof value.enabled === 'boolean' && !value.enabled ? 0.45 : 1,
          }}
        >
          {t(`systemAgent.${systemAgentKey}.title`)}
        </span>
      ),
    };

    return (
      <Form form={form} initialValues={settings} items={[systemAgentSettings]} {...FORM_STYLE} />
    );
  },
);

export default SystemAgentForm;
