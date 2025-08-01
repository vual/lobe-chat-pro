import { SiApple, SiLinux } from '@icons-pack/react-simple-icons';
import { Microsoft } from '@lobehub/icons';
import { ActionIcon, Block, Collapse, Icon, Snippet, Tag } from '@lobehub/ui';
import { Divider, Empty, Popover, Steps } from 'antd';
import { createStyles } from 'antd-style';
import { startCase } from 'lodash-es';
import {
  CheckIcon,
  CloudIcon,
  CodeIcon,
  DownloadIcon,
  MinusIcon,
  TerminalIcon,
} from 'lucide-react';
import { markdownToTxt } from 'markdown-to-txt';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import Descriptions from '@/components/Descriptions';
import InlineTable from '@/components/InlineTable';

import Title from '../../../app/[variants]/(main)/discover/features/Title';
import InstallationIcon from '../../../components/MCPDepsIcon';
import CollapseDesc from '../CollapseDesc';
import CollapseLayout from '../CollapseLayout';
import { useDetailContext } from '../DetailProvider';
import Platform from './Platform';

const useStyles = createStyles(({ css, token }) => {
  return {
    code: css`
      font-family: ${token.fontFamilyCode};
    `,
  };
});

const Deployment = memo<{ mobile?: boolean }>(({ mobile }) => {
  const { styles, theme } = useStyles();
  const { t } = useTranslation('discover');
  const { deploymentOptions = [], identifier } = useDetailContext();
  const [activeKey, setActiveKey] = useState<string[]>(['0']);

  if (!deploymentOptions)
    return (
      <Block variant="outlined">
        <Empty
          description={t('mcp.details.deployment.empty')}
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      </Block>
    );

  const getConnectionTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'stdio': {
        return <Icon icon={TerminalIcon} />;
      }
      default: {
        return <Icon icon={CloudIcon} />;
      }
    }
  };

  const getPlatformIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'macos': {
        return <SiApple color={theme.colorTextDescription} size={16} />;
      }
      case 'windows': {
        return <Microsoft color={theme.colorTextDescription} size={16} />;
      }
      case 'linux_debian': {
        return <SiLinux color={theme.colorTextDescription} size={16} />;
      }
      case 'manual': {
        return <CodeIcon color={theme.colorTextDescription} size={16} />;
      }
      default: {
        return <CodeIcon color={theme.colorTextDescription} size={16} />;
      }
    }
  };

  return (
    <Collapse
      activeKey={activeKey}
      expandIconPosition={'end'}
      gap={24}
      items={deploymentOptions.map((item, index) => {
        let properties: {
          description?: string;
          name: string;
          required?: boolean;
          type: string;
        }[] = [];
        if (item.connection?.configSchema?.properties) {
          properties = Object.entries(item.connection.configSchema.properties).map(
            ([key, value]: any) => {
              const required = item.connection.configSchema?.required?.includes(key);
              return {
                name: key,
                required,
                ...value,
              };
            },
          );
        }
        const setupSteps = item?.installationDetails?.setupSteps || [];
        const installCommand = [item.connection.command, item.connection.args?.join(' ')].join(' ');
        const showSystemDependencies =
          item?.systemDependencies && item.systemDependencies.length > 0;
        return {
          children: (
            <CollapseLayout
              items={[
                {
                  children: (
                    <Platform
                      connection={item.connection}
                      identifier={identifier}
                      mobile={mobile}
                    />
                  ),
                  key: 'platform',
                },
                {
                  children: (
                    <>
                      <p style={{ margin: 0 }}>{item.description}</p>
                      {setupSteps && setupSteps.length > 0 && (
                        <Steps
                          current={-1}
                          direction="vertical"
                          items={setupSteps.map((i) => ({
                            title: <p style={{ color: theme.colorText }}>{i}</p>,
                          }))}
                          progressDot
                          size={'small'}
                          style={{ marginTop: 12 }}
                        />
                      )}
                      {item.connection.command && (
                        <Snippet language={'shell'} prefix={'$'}>
                          {installCommand}
                        </Snippet>
                      )}
                    </>
                  ),
                  key: 'guide',
                  title: t('mcp.details.deployment.guide'),
                },
                item.connection.configSchema && {
                  children: (
                    <InlineTable
                      columns={[
                        {
                          dataIndex: 'name',
                          render: (_, record) => (
                            <span
                              className={styles.code}
                              style={{
                                color: theme.gold,
                              }}
                            >
                              {record.name}
                            </span>
                          ),
                          title: t('mcp.details.deployment.table.name'),
                        },
                        {
                          dataIndex: 'type',
                          render: (_, record) => <Tag className={styles.code}>{record.type}</Tag>,
                          title: t('mcp.details.deployment.table.type'),
                        },
                        {
                          dataIndex: 'required',
                          render: (_, record) => (
                            <Icon
                              color={
                                record.required ? theme.colorSuccess : theme.colorTextDescription
                              }
                              icon={record.required ? CheckIcon : MinusIcon}
                            />
                          ),
                          title: t('mcp.details.deployment.table.required'),
                        },
                        {
                          dataIndex: 'description',
                          title: t('mcp.details.deployment.table.description'),
                        },
                      ]}
                      dataSource={properties}
                      pagination={false}
                      rowKey={'name'}
                    />
                  ),
                  key: 'env',
                  title: t('mcp.details.deployment.env'),
                },
                showSystemDependencies && {
                  children: (
                    <Descriptions
                      bordered
                      items={(item.systemDependencies || []).map((dep, i) => {
                        return {
                          icon: <InstallationIcon size={16} type={dep.name} />,
                          key: `system-dependency-${i}`,
                          label: dep.name,
                          value: (
                            <Flexbox align="center" gap={8} horizontal>
                              <span
                                style={{
                                  fontFamily: theme.fontFamilyCode,
                                  fontSize: 12,
                                }}
                              >
                                {dep.requiredVersion || 'installed'}
                              </span>
                              {dep.installInstructions && (
                                <Popover
                                  arrow={false}
                                  content={
                                    <Flexbox gap={8}>
                                      <Descriptions
                                        items={Object.entries(dep.installInstructions).map(
                                          ([system, code]) => ({
                                            copyable: true,
                                            icon: getPlatformIcon(system),
                                            key: system,
                                            label: (
                                              <span style={{ fontSize: 13, fontWeight: 500 }}>
                                                {system.toUpperCase()}
                                              </span>
                                            ),
                                            style: {
                                              fontFamily: theme.fontFamilyCode,
                                              fontSize: 12,
                                            },
                                            value: code,
                                          }),
                                        )}
                                        rows={1}
                                      />
                                      {dep.checkCommand && (
                                        <>
                                          <Divider style={{ margin: 0 }} />
                                          <Descriptions
                                            items={[
                                              {
                                                copyable: true,
                                                key: 'check',
                                                label: t('mcp.details.deployment.checkCommand'),
                                                style: {
                                                  fontFamily: theme.fontFamilyCode,
                                                  fontSize: 12,
                                                },
                                                value: dep.checkCommand,
                                              },
                                            ]}
                                            rows={1}
                                          />
                                        </>
                                      )}
                                    </Flexbox>
                                  }
                                  trigger={['hover']}
                                >
                                  <ActionIcon
                                    color={theme.colorTextDescription}
                                    icon={DownloadIcon}
                                    size={'small'}
                                  />
                                </Popover>
                              )}
                            </Flexbox>
                          ),
                        };
                      })}
                    />
                  ),
                  key: 'commandLine',
                  title: t('mcp.details.deployment.commandLine'),
                },
              ].filter(Boolean)}
            />
          ),
          desc: (
            <CollapseDesc hide={activeKey.includes(String(index))}>
              {item.description && markdownToTxt(item.description)}
            </CollapseDesc>
          ),
          key: String(index),
          label: (
            <Title
              icon={<InstallationIcon size={20} type={item.installationMethod} />}
              id={`deployment-${index}`}
              tag={
                <>
                  <Tag icon={getConnectionTypeIcon(item.connection.type)}>
                    {item.connection.type}
                  </Tag>
                  {item.isRecommended && (
                    <Tag color="success">{t('mcp.details.deployment.recommended')}</Tag>
                  )}
                </>
              }
            >
              {t('mcp.details.deployment.installation', {
                method: startCase(item.installationMethod),
              })}
            </Title>
          ),
        };
      })}
      onChange={setActiveKey}
      variant={'outlined'}
    />
  );
});

export default Deployment;
