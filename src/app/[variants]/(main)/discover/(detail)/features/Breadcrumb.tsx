'use client';

import { CopyButton } from '@lobehub/ui';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { useTheme } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';
import urlJoin from 'url-join';

import { DiscoverTab } from '@/types/discover';

const Breadcrumb = memo<{ identifier: string; tab: DiscoverTab }>(({ tab, identifier }) => {
  const theme = useTheme();
  const { t } = useTranslation('discover');
  return (
    <AntdBreadcrumb
      items={[
        {
          title: <Link href={'/discover'}>Discover</Link>,
        },
        {
          title: (
            <Link href={urlJoin('/discover', tab)}>
              {tab === DiscoverTab.Mcp ? 'MCP Servers' : t(`tab.${tab}` as any)}
            </Link>
          ),
        },
        {
          title: (
            <Flexbox
              align={'center'}
              gap={4}
              horizontal
              style={{
                color: theme.colorTextSecondary,
              }}
            >
              {identifier}
              <CopyButton
                content={identifier}
                size={{
                  blockSize: 22,
                  size: 14,
                }}
              />
            </Flexbox>
          ),
        },
      ]}
    />
  );
});

export default Breadcrumb;
