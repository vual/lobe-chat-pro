'use client';

import { ActionIcon, Avatar, Block, Grid } from '@lobehub/ui';
import { Skeleton, Typography } from 'antd';
import { createStyles } from 'antd-style';
import { RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';
import useSWR from 'swr';
import urlJoin from 'url-join';

import { assistantService } from '@/services/assistant';
import { useGlobalStore } from '@/store/global';
import { globalGeneralSelectors } from '@/store/global/selectors';
import { DiscoverAssistantItem } from '@/types/discover';

const { Paragraph } = Typography;

const useStyles = createStyles(({ css, token, responsive }) => ({
  card: css`
    position: relative;

    overflow: hidden;

    height: 100%;
    min-height: 110px;
    padding: 16px;
    border-radius: ${token.borderRadiusLG}px;

    background: ${token.colorBgContainer};

    ${responsive.mobile} {
      min-height: 72px;
    }
  `,
  cardDesc: css`
    margin-block: 0 !important;
    color: ${token.colorTextDescription};
  `,
  cardTitle: css`
    margin-block: 0 !important;
    font-size: 16px;
    font-weight: bold;
  `,
  icon: css`
    color: ${token.colorTextSecondary};
  `,
  title: css`
    color: ${token.colorTextDescription};
  `,
}));

const AgentsSuggest = memo<{ mobile?: boolean }>(({ mobile }) => {
  const { t } = useTranslation('welcome');
  const locale = useGlobalStore(globalGeneralSelectors.currentLanguage);
  const [sliceStart, setSliceStart] = useState(0);

  const { data: assistantList, isLoading } = useSWR(
    ['assistant-list', locale].join('-'),
    async () => await assistantService.getAssistantList(),
    {
      refreshWhenOffline: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  const { styles } = useStyles();

  const agentLength = mobile ? 2 : 4;

  const loadingCards = Array.from({ length: agentLength }).map((_, index) => (
    <Block className={styles.card} key={index}>
      <Skeleton active avatar paragraph={{ rows: 2 }} title={false} />
    </Block>
  ));

  const handleRefresh = () => {
    if (!assistantList) return;
    setSliceStart(Math.floor((Math.random() * assistantList.length) / 2));
  };

  // if no assistant data, just hide the component
  if (!isLoading && assistantList?.length === 0) return null;

  return (
    <Flexbox gap={8} width={'100%'}>
      <Flexbox align={'center'} horizontal justify={'space-between'}>
        <div className={styles.title}>{t('guide.agents.title')}</div>
        <ActionIcon
          icon={RefreshCw}
          onClick={handleRefresh}
          size={{ blockSize: 24, size: 14 }}
          title={t('guide.agents.replaceBtn')}
        />
      </Flexbox>
      <Grid gap={8} rows={2}>
        {isLoading || !assistantList
          ? loadingCards
          : assistantList
              .slice(sliceStart, sliceStart + agentLength)
              .map((item: DiscoverAssistantItem) => (
                <Link
                  href={urlJoin('/discover/assistant/', item.identifier)}
                  key={item.identifier}
                  prefetch={false}
                >
                  <Block className={styles.card} clickable gap={12} horizontal variant={'outlined'}>
                    <Avatar avatar={item.meta.avatar} style={{ flex: 'none' }} />
                    <Flexbox gap={2} style={{ overflow: 'hidden', width: '100%' }}>
                      <Paragraph className={styles.cardTitle} ellipsis={{ rows: 1 }}>
                        {item.meta.title}
                      </Paragraph>
                      <Paragraph className={styles.cardDesc} ellipsis={{ rows: mobile ? 1 : 2 }}>
                        {item.meta.description}
                      </Paragraph>
                    </Flexbox>
                  </Block>
                </Link>
              ))}
      </Grid>
    </Flexbox>
  );
});

export default AgentsSuggest;
