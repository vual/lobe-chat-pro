'use client';

import { Icon, Tooltip } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { CircleDashedIcon, HammerIcon, LayersIcon, MessageSquareQuoteIcon } from 'lucide-react';
import Link from 'next/link';
import qs from 'query-string';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';
import urlJoin from 'url-join';

import { McpNavKey } from '@/types/discover';

import {
  calculateScore,
  calculateScoreFlags,
  createScoreItems,
  getGradeColor,
  getGradeStyleClass,
} from './calculateScore';

const useStyles = createStyles(({ css, token }) => {
  return {
    active: css`
      background: ${token.colorSuccessBgHover};
    `,
    disable: css`
      color: ${token.colorTextDescription};
    `,
    extraTag: css`
      padding-block: 4px;
      padding-inline: 10px 12px;
      border-radius: 16px;

      color: ${token.colorTextSecondary};

      background: ${token.colorFillTertiary};
    `,
    extraTagActive: css`
      &:hover {
        color: ${token.colorText};
      }
    `,
    gradeA: css`
      color: ${token.colorSuccess};
      background: ${token.colorSuccessBg};
    `,
    gradeB: css`
      color: ${token.colorWarning};
      background: ${token.colorWarningBg};
    `,
    gradeF: css`
      color: ${token.colorError};
      background: ${token.colorErrorBg};
    `,
    gradeIcon: css`
      flex: none;

      width: 22px;
      height: 22px;
      border: 1.5px solid;
      border-radius: 50%;

      font-size: 12px;
      font-weight: 600;
    `,
    tag: css`
      padding-block: 4px;
      padding-inline: 8px 12px;
      border-radius: 16px;
      background: ${token.colorFillTertiary};
    `,
  };
});

interface ScoresProps {
  deploymentOptions?: Array<{
    installationMethod?: string;
  }>;
  github?: {
    license?: string;
  };
  identifier: string;
  // 列表页支持
  installationMethods?: string;
  isClaimed?: boolean;
  isValidated?: boolean;
  // 原始数据属性
  overview?: {
    readme?: string;
  };
  promptsCount?: number;
  resourcesCount?: number;
  toolsCount?: number;
}

const Scores = memo<ScoresProps>(
  ({
    identifier,
    promptsCount,
    toolsCount,
    resourcesCount,
    isValidated,
    overview,
    github,
    deploymentOptions,
    isClaimed = false,
    installationMethods,
  }) => {
    const { cx, styles, theme } = useStyles();
    const { t } = useTranslation('discover');

    // 使用工具函数计算所有的 has* 值，但需要处理类型转换
    const scoreFlags = calculateScoreFlags({
      // 只传递兼容的属性，或者进行类型转换
      deploymentOptions: deploymentOptions?.map((item) => ({
        // 确保不为 undefined
        connection: { type: 'stdio' as const },
        installationMethod: item.installationMethod || 'manual', // 提供默认的 connection
      })),
      github: github?.license
        ? {
            license: github.license,
            url: '', // 提供默认的 url
          }
        : undefined,
      installationMethods,
      isClaimed,
      isValidated,
      overview: overview?.readme
        ? {
            readme: overview.readme,
          }
        : undefined,
      promptsCount,
      resourcesCount,
      toolsCount,
    });

    // 计算评分
    const scoreItems = createScoreItems(scoreFlags);
    const scoreResult = calculateScore(scoreItems);
    const { grade, percentage } = scoreResult;

    const showToolts = Boolean(toolsCount && toolsCount > 0);
    const showResources = Boolean(resourcesCount && resourcesCount > 0);
    const showPrompts = Boolean(promptsCount && promptsCount > 0);

    const showExtra = showToolts || showResources || showPrompts;

    const scoreTag = (
      <Tooltip title={`${t(`mcp.details.scoreLevel.${grade}.desc`)} (${Math.round(percentage)}%)`}>
        <Flexbox
          align={'center'}
          className={cx(styles.tag, getGradeStyleClass(grade, styles))}
          gap={8}
          horizontal
          style={{
            paddingLeft: 4,
          }}
        >
          <Center className={styles.gradeIcon} style={{ borderColor: getGradeColor(grade, theme) }}>
            {grade.toUpperCase()}
          </Center>
          <span style={{ fontWeight: 500 }}>
            {t(`mcp.details.scoreLevel.${grade}.title`).toUpperCase()}
          </span>
        </Flexbox>
      </Tooltip>
    );

    const unvalidatedTag = (
      <Tooltip title={t('mcp.unvalidated.desc')}>
        <Flexbox
          align={'center'}
          className={styles.tag}
          gap={8}
          horizontal
          style={{
            color: theme.colorTextDescription,
            paddingLeft: 4,
          }}
        >
          <Icon color={theme.colorTextQuaternary} icon={CircleDashedIcon} size={22} />
          {t('mcp.unvalidated.title')}
        </Flexbox>
      </Tooltip>
    );

    return (
      <Flexbox
        align={'center'}
        flex={'none'}
        gap={8}
        horizontal
        onClick={(e) => e.stopPropagation()}
      >
        {identifier && (
          <Link
            href={qs.stringifyUrl({
              query: {
                activeTab: McpNavKey.Score,
              },
              url: urlJoin('/discover/mcp', identifier),
            })}
          >
            {isValidated ? scoreTag : unvalidatedTag}
          </Link>
        )}
        {showExtra && (
          <Link
            href={qs.stringifyUrl({
              query: {
                activeTab: McpNavKey.Schema,
              },
              url: urlJoin('/discover/mcp', identifier),
            })}
          >
            <Flexbox align={'center'} className={styles.extraTag} gap={16} horizontal>
              {showToolts && (
                <Tooltip
                  title={[
                    t('mcp.details.schema.tools.title'),
                    t('mcp.details.schema.tools.desc'),
                  ].join(': ')}
                >
                  <Flexbox align={'center'} className={styles.extraTagActive} gap={8} horizontal>
                    <Icon icon={HammerIcon} size={14} />
                    {toolsCount}
                  </Flexbox>
                </Tooltip>
              )}
              {showPrompts && (
                <Tooltip
                  title={[
                    t('mcp.details.schema.prompts.title'),
                    t('mcp.details.schema.prompts.desc'),
                  ].join(': ')}
                >
                  <Flexbox align={'center'} className={styles.extraTagActive} gap={8} horizontal>
                    <Icon icon={MessageSquareQuoteIcon} size={14} />
                    {promptsCount}
                  </Flexbox>
                </Tooltip>
              )}
              {showResources && (
                <Tooltip
                  title={[
                    t('mcp.details.schema.resources.title'),
                    t('mcp.details.schema.resources.desc'),
                  ].join(': ')}
                >
                  <Flexbox align={'center'} className={styles.extraTagActive} gap={8} horizontal>
                    <Icon icon={LayersIcon} size={14} />
                    {resourcesCount}
                  </Flexbox>
                </Tooltip>
              )}
            </Flexbox>
          </Link>
        )}
      </Flexbox>
    );
  },
);

export default Scores;
