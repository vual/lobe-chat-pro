import { ActionIcon, Button, Dropdown, Icon } from '@lobehub/ui';
import { App } from 'antd';
import { InfoIcon, MoreVerticalIcon, Settings, Trash2 } from 'lucide-react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import PluginDetailModal from '@/features/PluginDetailModal';
import { useAgentStore } from '@/store/agent';
import { useServerConfigStore } from '@/store/serverConfig';
import { pluginHelpers, useToolStore } from '@/store/tool';
import { pluginSelectors, pluginStoreSelectors } from '@/store/tool/selectors';
import { LobeToolType } from '@/types/tool/tool';

import EditCustomPlugin from './EditCustomPlugin';

interface ActionsProps {
  identifier: string;
  type: LobeToolType;
}

const Actions = memo<ActionsProps>(({ identifier, type }) => {
  const mobile = useServerConfigStore((s) => s.isMobile);
  const [installed, installing, installPlugin, unInstallPlugin] = useToolStore((s) => [
    pluginSelectors.isPluginInstalled(identifier)(s),
    pluginStoreSelectors.isPluginInstallLoading(identifier)(s),
    s.installPlugin,
    s.uninstallPlugin,
  ]);

  const isCustomPlugin = type === 'customPlugin';
  const { t } = useTranslation('plugin');
  const [open, setOpen] = useState(false);
  const plugin = useToolStore(pluginSelectors.getToolManifestById(identifier));
  const togglePlugin = useAgentStore((s) => s.togglePlugin);
  const { modal } = App.useApp();
  const [tab, setTab] = useState('info');
  const hasSettings = pluginHelpers.isSettingSchemaNonEmpty(plugin?.settings);

  return (
    <>
      <Flexbox align={'center'} horizontal>
        {installed ? (
          <>
            {isCustomPlugin && <EditCustomPlugin identifier={identifier} />}
            {hasSettings && (
              <ActionIcon
                icon={Settings}
                onClick={() => {
                  setOpen(true);
                  setTab('settings');
                }}
                title={t('store.actions.settings')}
              />
            )}
            <Dropdown
              menu={{
                items: [
                  {
                    icon: <Icon icon={InfoIcon} />,
                    key: 'detail',
                    label: t('store.actions.detail'),
                    onClick: () => {
                      setOpen(true);
                      setTab('info');
                    },
                  },
                  {
                    danger: true,
                    icon: <Icon icon={Trash2} />,
                    key: 'uninstall',
                    label: t('store.actions.uninstall'),
                    onClick: () => {
                      modal.confirm({
                        centered: true,
                        okButtonProps: { danger: true },
                        onOk: async () => unInstallPlugin(identifier),
                        title: t('store.actions.confirmUninstall'),
                        type: 'error',
                      });
                    },
                  },
                ],
              }}
              placement="bottomRight"
              trigger={['click']}
            >
              <ActionIcon icon={MoreVerticalIcon} loading={installing} />
            </Dropdown>
          </>
        ) : (
          <Button
            loading={installing}
            onClick={async () => {
              await installPlugin(identifier);
              await togglePlugin(identifier);
            }}
            size={mobile ? 'small' : undefined}
            type={'primary'}
          >
            {t('store.actions.install')}
          </Button>
        )}
      </Flexbox>
      <PluginDetailModal
        id={identifier}
        onClose={() => {
          setOpen(false);
        }}
        onTabChange={setTab}
        open={open}
        schema={plugin?.settings}
        tab={tab}
      />
    </>
  );
});

export default Actions;
