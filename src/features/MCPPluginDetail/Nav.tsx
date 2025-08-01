'use client';

import { Icon, Tabs, TabsProps, Tag } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import {
  BookOpenIcon,
  CodeIcon,
  DownloadIcon,
  HistoryIcon,
  ListIcon,
  PackageCheckIcon,
  SettingsIcon,
} from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';
import urlJoin from 'url-join';

import { SOCIAL_URL } from '@/const/branding';
import { useToolStore } from '@/store/tool';
import { pluginSelectors } from '@/store/tool/selectors';
import { McpNavKey } from '@/types/discover';

import { useDetailContext } from './DetailProvider';

const useStyles = createStyles(({ css, token }) => {
  return {
    link: css`
      color: ${token.colorTextDescription};

      &:hover {
        color: ${token.colorInfo};
      }
    `,
    nav: css`
      border-block-end: 1px solid ${token.colorBorder};
    `,
  };
});

interface NavProps {
  activeTab?: McpNavKey;
  inModal?: boolean;
  mobile?: boolean;
  noSettings?: boolean;
  setActiveTab?: (tab: McpNavKey) => void;
}
const Nav = memo<NavProps>(
  ({ mobile, noSettings, setActiveTab, activeTab = McpNavKey.Overview, inModal }) => {
    const { t } = useTranslation('discover');
    const {
      versions,
      deploymentOptions,
      toolsCount,
      resourcesCount,
      promptsCount,
      github,
      identifier,
    } = useDetailContext();
    const { styles } = useStyles();

    // 检查插件是否已安装
    const installedPlugin = useToolStore(pluginSelectors.getInstalledPluginById(identifier));

    const deploymentCount = deploymentOptions?.length || 0;
    const schemaCount = Number(toolsCount) + Number(promptsCount) + Number(resourcesCount);
    const versionCount = versions?.length || 0;

    const nav = (
      <Tabs
        activeKey={activeTab}
        compact={mobile}
        items={
          [
            // 只有已安装的插件才显示设置 tab
            !noSettings &&
              installedPlugin && {
                icon: <Icon icon={SettingsIcon} size={16} />,
                key: McpNavKey.Settings,
                label: t('mcp.details.settings.title'),
              },
            {
              icon: <Icon icon={BookOpenIcon} size={16} />,
              key: McpNavKey.Overview,
              label: t('mcp.details.overview.title'),
            },
            {
              icon: <Icon icon={DownloadIcon} size={16} />,
              key: McpNavKey.Deployment,
              label:
                deploymentCount > 1 ? (
                  <Flexbox
                    align={'center'}
                    gap={6}
                    horizontal
                    style={{
                      display: 'inline-flex',
                    }}
                  >
                    {t('mcp.details.deployment.title')}
                    <Tag>{deploymentCount}</Tag>
                  </Flexbox>
                ) : (
                  t('mcp.details.deployment.title')
                ),
            },
            {
              icon: <Icon icon={CodeIcon} size={16} />,
              key: McpNavKey.Schema,
              label:
                schemaCount > 1 ? (
                  <Flexbox
                    align={'center'}
                    gap={6}
                    horizontal
                    style={{
                      display: 'inline-flex',
                    }}
                  >
                    {t('mcp.details.schema.title')}
                    <Tag>{schemaCount}</Tag>
                  </Flexbox>
                ) : (
                  t('mcp.details.schema.title')
                ),
            },
            !inModal && {
              icon: <Icon icon={ListIcon} size={16} />,
              key: McpNavKey.Related,
              label: t('mcp.details.related.title'),
            },
            {
              icon: <Icon icon={PackageCheckIcon} size={16} />,
              key: McpNavKey.Score,
              label: t('mcp.details.score.title'),
            },

            !inModal && {
              icon: <Icon icon={HistoryIcon} size={16} />,
              key: McpNavKey.Version,
              label:
                versionCount > 1 ? (
                  <Flexbox
                    align={'center'}
                    gap={6}
                    horizontal
                    style={{
                      display: 'inline-flex',
                    }}
                  >
                    {t('mcp.details.versions.title')}
                    <Tag>{versionCount}</Tag>
                  </Flexbox>
                ) : (
                  t('mcp.details.versions.title')
                ),
            },
          ].filter(Boolean) as TabsProps['items']
        }
        onChange={(key) => setActiveTab?.(key as McpNavKey)}
      />
    );

    return mobile ? (
      nav
    ) : (
      <Flexbox align={'center'} className={styles.nav} horizontal justify={'space-between'}>
        {nav}
        {!inModal && (
          <Flexbox gap={12} horizontal>
            <Link className={styles.link} href={SOCIAL_URL.discord} target={'_blank'}>
              {t('mcp.details.nav.needHelp')}
            </Link>
            {github?.url && (
              <>
                <Link className={styles.link} href={github.url} target={'_blank'}>
                  {t('mcp.details.nav.viewSourceCode')}
                </Link>
                <Link
                  className={styles.link}
                  href={urlJoin(github.url, 'issues')}
                  target={'_blank'}
                >
                  {t('mcp.details.nav.reportIssue')}
                </Link>
              </>
            )}
          </Flexbox>
        )}
      </Flexbox>
    );
  },
);

export default Nav;
