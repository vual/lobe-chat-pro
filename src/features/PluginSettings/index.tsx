import { PluginSchema } from '@lobehub/chat-plugin-sdk';
import { Form, Markdown } from '@lobehub/ui';
import { Form as AForm } from 'antd';
import { createStyles } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useToolStore } from '@/store/tool';
import { pluginSelectors } from '@/store/tool/selectors';

import PluginSettingRender from './PluginSettingRender';

export const transformPluginSettings = (pluginSettings: PluginSchema) => {
  if (!pluginSettings?.properties) return [];

  return Object.entries(pluginSettings.properties).map(([name, i]) => ({
    desc: i.description,
    enum: i.enum,
    format: i.format,
    label: i.title || name,
    maximum: i.maximum,
    minimum: i.minimum,
    name,
    tag: name,
    type: i.type,
  }));
};

interface PluginSettingsConfigProps {
  id: string;
  schema: PluginSchema;
}

const useStyles = createStyles(({ css, token }) => ({
  markdown: css`
    p {
      color: ${token.colorTextDescription};
    }
  `,
}));

const PluginSettingsConfig = memo<PluginSettingsConfigProps>(({ schema, id }) => {
  const { styles } = useStyles();
  const { t } = useTranslation('setting');

  const [updatePluginSettings] = useToolStore((s) => [s.updatePluginSettings]);
  const pluginSetting = useToolStore(pluginSelectors.getPluginSettingsById(id), isEqual);

  const [form] = AForm.useForm();

  const items = transformPluginSettings(schema);

  return (
    <Form
      footer={
        <Form.SubmitFooter
          texts={{
            reset: t('submitFooter.reset'),
            submit: t('submitFooter.submit'),
            unSaved: t('submitFooter.unSaved'),
            unSavedWarning: t('submitFooter.unSavedWarning'),
          }}
        />
      }
      form={form}
      gap={16}
      initialValues={pluginSetting}
      items={items.map((item) => ({
        children: (
          <PluginSettingRender
            enum={item.enum}
            format={item.format}
            maximum={item.maximum}
            minimum={item.minimum}
            type={item.type as any}
          />
        ),
        desc: item.desc && (
          <Markdown className={styles.markdown} variant={'chat'}>
            {item.desc as string}
          </Markdown>
        ),
        key: item.label,
        label: item.label,
        name: item.name,
        tag: item.tag,
        valuePropName: item.type === 'boolean' ? 'checked' : undefined,
      }))}
      itemsType={'flat'}
      layout={'vertical'}
      onFinish={async (v) => {
        await updatePluginSettings(id, v);
      }}
      variant={'borderless'}
    />
  );
});

export default PluginSettingsConfig;
