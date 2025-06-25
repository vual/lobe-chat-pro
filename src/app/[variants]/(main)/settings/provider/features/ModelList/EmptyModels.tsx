import { Button, Icon } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { BrainIcon, LucideRefreshCcwDot, PlusIcon } from 'lucide-react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';

import { useAiInfraStore } from '@/store/aiInfra';

import CreateNewModelModal from './CreateNewModelModal';

const useStyles = createStyles(({ css, token }) => ({
  circle: css`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${token.colorFillSecondary};
  `,
  container: css`
    width: 100%;
    border: 1px dashed ${token.colorBorder};
    border-radius: 12px;
    background: ${token.colorBgContainer};
  `,
  description: css`
    max-width: 280px;

    font-size: ${token.fontSize}px;
    color: ${token.colorTextDescription};
    text-align: center;
    text-wrap: balance;
  `,
  iconWrapper: css`
    position: relative;
    width: 64px;
    height: 64px;
  `,
  sparklesIcon: css`
    font-size: 40px;
    color: ${token.colorText};
  `,
  title: css`
    font-size: ${token.fontSizeLG}px;
    font-weight: 500;
  `,
}));

const EmptyState = memo<{ provider: string }>(({ provider }) => {
  const { t } = useTranslation('modelProvider');
  const { styles } = useStyles();

  const [fetchRemoteModelList] = useAiInfraStore((s) => [s.fetchRemoteModelList]);

  const [fetchRemoteModelsLoading, setFetchRemoteModelsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <Center className={styles.container} gap={24} paddingBlock={40}>
      <Center className={styles.circle}>
        <Icon className={styles.sparklesIcon} icon={BrainIcon} />
      </Center>
      <Flexbox align={'center'} gap={8}>
        <div className={styles.title}>{t('providerModels.list.empty.title')}</div>
        <div className={styles.description}>{t('providerModels.list.empty.desc')}</div>
      </Flexbox>

      <Flexbox gap={8} horizontal>
        <Button
          icon={PlusIcon}
          onClick={() => {
            setShowModal(true);
          }}
        >
          {t('providerModels.list.addNew')}
        </Button>
        <CreateNewModelModal open={showModal} setOpen={setShowModal} />
        <Button
          icon={<Icon icon={LucideRefreshCcwDot} />}
          loading={fetchRemoteModelsLoading}
          onClick={async () => {
            setFetchRemoteModelsLoading(true);
            try {
              await fetchRemoteModelList(provider);
            } catch (e) {
              console.error(e);
            }
            setFetchRemoteModelsLoading(false);
          }}
          type={'primary'}
        >
          {fetchRemoteModelsLoading
            ? t('providerModels.list.fetcher.fetching')
            : t('providerModels.list.fetcher.fetch')}
        </Button>
      </Flexbox>
    </Center>
  );
});

export default EmptyState;
