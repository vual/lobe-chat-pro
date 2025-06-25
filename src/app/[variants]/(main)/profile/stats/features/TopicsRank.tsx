import { BarList } from '@lobehub/charts';
import { ActionIcon, FormGroup, Icon, Modal } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import { MaximizeIcon, MessageSquareIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import qs from 'query-string';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { FORM_STYLE } from '@/const/layoutTokens';
import { INBOX_SESSION_ID } from '@/const/session';
import { useClientDataSWR } from '@/libs/swr';
import { topicService } from '@/services/topic';
import { TopicRankItem } from '@/types/topic';

export const TopicsRank = memo<{ mobile?: boolean }>(({ mobile }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('auth');
  const theme = useTheme();
  const router = useRouter();
  const { data, isLoading } = useClientDataSWR('rank-topics', async () =>
    topicService.rankTopics(),
  );

  const showExtra = Boolean(data && data?.length > 5);

  const mapData = (item: TopicRankItem) => {
    const link = qs.stringifyUrl({
      query: {
        session: item.sessionId || INBOX_SESSION_ID,
        topic: item.id,
        ...(mobile ? { showMobileWorkspace: true } : {}),
      },
      url: '/chat',
    });
    return {
      icon: <Icon color={theme.colorTextDescription} icon={MessageSquareIcon} size={16} />,
      link,
      name: (
        <Link href={link} style={{ color: 'inherit' }}>
          {item.title}
        </Link>
      ),
      value: item.count,
    };
  };

  return (
    <>
      <FormGroup
        extra={
          showExtra && (
            <ActionIcon
              icon={MaximizeIcon}
              onClick={() => setOpen(true)}
              size={{ blockSize: 28, size: 20 }}
            />
          )
        }
        style={FORM_STYLE.style}
        title={t('stats.topicsRank.title')}
        variant={'borderless'}
      >
        <Flexbox paddingBlock={16}>
          <BarList
            data={data?.slice(0, 5).map((item) => mapData(item)) || []}
            height={220}
            leftLabel={t('stats.topicsRank.left')}
            loading={isLoading || !data}
            noDataText={{
              desc: t('stats.empty.desc'),
              title: t('stats.empty.title'),
            }}
            onValueChange={(item) => router.push(item.link)}
            rightLabel={t('stats.topicsRank.right')}
          />
        </Flexbox>
      </FormGroup>
      {showExtra && (
        <Modal
          footer={null}
          loading={isLoading || !data}
          onCancel={() => setOpen(false)}
          open={open}
          title={t('stats.topicsRank.title')}
        >
          <BarList
            data={data?.map((item) => mapData(item)) || []}
            height={340}
            leftLabel={t('stats.topicsRank.left')}
            loading={isLoading || !data}
            onValueChange={(item) => router.push(item.link)}
            rightLabel={t('stats.topicsRank.right')}
          />
        </Modal>
      )}
    </>
  );
});

export default TopicsRank;
