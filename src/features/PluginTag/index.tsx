'use client';

import { Dropdown, Icon, type MenuProps, Tag } from '@lobehub/ui';
import isEqual from 'fast-deep-equal';
import { LucideToyBrick } from 'lucide-react';
import { memo } from 'react';
import { Center } from 'react-layout-kit';

import Avatar from '@/features/PluginStore/PluginItem/PluginAvatar';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';
import { pluginHelpers, useToolStore } from '@/store/tool';
import { toolSelectors } from '@/store/tool/selectors';

import PluginStatus from './PluginStatus';

export interface PluginTagProps {
  plugins: string[];
}

const PluginTag = memo<PluginTagProps>(({ plugins }) => {
  const { showDalle } = useServerConfigStore(featureFlagsSelectors);
  const list = useToolStore(toolSelectors.metaList(showDalle), isEqual);
  const displayPlugin = useToolStore(toolSelectors.getMetaById(plugins[0]), isEqual);

  if (plugins.length === 0) return null;

  const items: MenuProps['items'] = plugins.map((id) => {
    const item = list.find((i) => i.identifier === id);
    const isDeprecated = !pluginHelpers.getPluginTitle(item?.meta);
    const avatar = isDeprecated ? '♻️' : pluginHelpers.getPluginAvatar(item?.meta);

    return {
      icon: (
        <Center style={{ minWidth: 24 }}>
          <Avatar avatar={avatar} size={24} />
        </Center>
      ),
      key: id,
      label: (
        <PluginStatus
          deprecated={isDeprecated}
          id={id}
          title={pluginHelpers.getPluginTitle(item?.meta)}
        />
      ),
    };
  });

  const count = plugins.length;

  return (
    <Dropdown menu={{ items }}>
      <div>
        <Tag>
          {<Icon icon={LucideToyBrick} />}
          {pluginHelpers.getPluginTitle(displayPlugin) || plugins[0]}
          {count > 1 && <div>({plugins.length - 1}+)</div>}
        </Tag>
      </div>
    </Dropdown>
  );
});

export default PluginTag;
