import { Empty } from 'antd';
import { useTheme } from 'antd-style';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';

import Deployment from '@/features/MCPPluginDetail/Deployment';
import { DetailProvider } from '@/features/MCPPluginDetail/DetailProvider';
import Header from '@/features/MCPPluginDetail/Header';
import Nav from '@/features/MCPPluginDetail/Nav';
import Overview from '@/features/MCPPluginDetail/Overview';
import Schema from '@/features/MCPPluginDetail/Schema';
import Score from '@/features/MCPPluginDetail/Score';
import DetailLoading from '@/features/PluginStore/McpList/Detail/Loading';
import { useDiscoverStore } from '@/store/discover';
import { useToolStore } from '@/store/tool';
import { McpNavKey } from '@/types/discover';

import Settings from './Settings';

interface DetailProps {
  identifier?: string;
}
const Detail = memo<DetailProps>(({ identifier: defaultIdentifier }) => {
  const [activeTab, setActiveTab] = useState(McpNavKey.Overview);
  const { t } = useTranslation('plugin');

  const theme = useTheme();
  const [activeMCPIdentifier, isMcpListInit] = useToolStore((s) => [
    s.activeMCPIdentifier,
    s.isMcpListInit,
  ]);

  const identifier = defaultIdentifier ?? activeMCPIdentifier;

  const useMcpDetail = useDiscoverStore((s) => s.useFetchMcpDetail);
  const { data, isLoading } = useMcpDetail({ identifier });

  if (!isMcpListInit || isLoading) return <DetailLoading />;

  if (!identifier)
    return (
      <Center
        height={'100%'}
        style={{
          background: theme.colorBgContainerSecondary,
        }}
        width={'100%'}
      >
        <Empty description={t('store.emptySelectHint')} image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </Center>
    );

  return (
    <DetailProvider config={data}>
      <Flexbox gap={16}>
        <Header inModal />
        <Nav activeTab={activeTab as McpNavKey} inModal setActiveTab={setActiveTab} />
        <Flexbox gap={24}>
          {activeTab === McpNavKey.Settings && <Settings identifier={identifier} />}
          {activeTab === McpNavKey.Overview && <Overview inModal />}
          {activeTab === McpNavKey.Deployment && <Deployment />}
          {activeTab === McpNavKey.Schema && <Schema />}
          {activeTab === McpNavKey.Score && <Score />}
        </Flexbox>
      </Flexbox>
    </DetailProvider>
  );
});

export default Detail;
