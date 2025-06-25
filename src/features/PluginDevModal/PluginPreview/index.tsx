import { LobeChatPluginManifest } from '@lobehub/chat-plugin-sdk';
import { Block, Icon } from '@lobehub/ui';
import { Form as AForm, Button, FormInstance, Typography } from 'antd';
import { useTheme } from 'antd-style';
import { FileCode } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import ManifestPreviewer from '@/components/ManifestPreviewer';
import PluginAvatar from '@/features/PluginStore/PluginItem/PluginAvatar';
import PluginTag from '@/features/PluginStore/PluginItem/PluginTag';
import { pluginHelpers } from '@/store/tool';

import ApiVisualizer from './ApiVisualizer';
import PluginEmptyState from './EmptyState';

const PluginPreview = memo<{ form: FormInstance }>(({ form }) => {
  const { t } = useTranslation('plugin');
  const theme = useTheme();
  const manifest: LobeChatPluginManifest = AForm.useWatch(['manifest'], form);
  const meta = manifest?.meta;

  if (!manifest)
    return (
      <Flexbox flex={2} height={'100%'} style={{ background: theme.colorBgLayout }}>
        <PluginEmptyState />
      </Flexbox>
    );

  return (
    <Flexbox
      flex={2}
      gap={24}
      padding={12}
      style={{ background: theme.colorBgLayout, overflowY: 'auto' }}
    >
      <Block
        gap={16}
        horizontal
        justify={'space-between'}
        padding={16}
        title={t('dev.preview.card')}
        variant={'outlined'}
      >
        <Flexbox gap={16} horizontal>
          <PluginAvatar avatar={pluginHelpers.getPluginAvatar(meta)} size={40} />
          <Flexbox gap={2}>
            <Flexbox align={'center'} gap={8} horizontal>
              {pluginHelpers.getPluginTitle(meta) || 'Plugin Title'}
              <PluginTag type={'customPlugin'} />
            </Flexbox>
            <Typography.Text style={{ fontSize: 12 }} type={'secondary'}>
              {pluginHelpers.getPluginDesc(meta) || 'Plugin Description'}
            </Typography.Text>
          </Flexbox>
        </Flexbox>

        {manifest && (
          <ManifestPreviewer manifest={manifest}>
            <Flexbox>
              <Button icon={<Icon icon={FileCode} />}>{t('dev.mcp.previewManifest')}</Button>
            </Flexbox>
          </ManifestPreviewer>
        )}
      </Block>
      {manifest && <ApiVisualizer apis={manifest.api as any} />}
    </Flexbox>
  );
});

export default PluginPreview;
