'use client';

import { ActionIcon, Avatar, Text } from '@lobehub/ui';
import { App, Popover } from 'antd';
import { useTheme } from 'antd-style';
import { Trash } from 'lucide-react';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { useGlobalStore } from '@/store/global';
import { globalGeneralSelectors } from '@/store/global/selectors';
import { useImageStore } from '@/store/image';
import { generationTopicSelectors } from '@/store/image/slices/generationTopic/selectors';
import { ImageGenerationTopic } from '@/types/generation';

const formatTime = (date: Date, locale: string) => {
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
  }).format(new Date(date));
};

interface TopicItemProps {
  showMoreInfo?: boolean;
  topic: ImageGenerationTopic;
}

const TopicItem = memo<TopicItemProps>(({ topic, showMoreInfo }) => {
  const theme = useTheme();
  const { t } = useTranslation('image');
  const { modal } = App.useApp();
  const locale = useGlobalStore(globalGeneralSelectors.currentLanguage);

  // 检查当前 topic 是否在加载中
  const isLoading = useImageStore(generationTopicSelectors.isLoadingGenerationTopic(topic.id));
  const removeGenerationTopic = useImageStore((s) => s.removeGenerationTopic);
  const switchGenerationTopic = useImageStore((s) => s.switchGenerationTopic);
  const activeTopicId = useImageStore(generationTopicSelectors.activeGenerationTopicId);

  const isActive = activeTopicId === topic.id;

  const handleClick = () => {
    switchGenerationTopic(topic.id);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();

    modal.confirm({
      cancelText: t('cancel', { ns: 'common' }),
      content: t('topic.deleteConfirmDesc'),
      okButtonProps: { danger: true },
      okText: t('delete', { ns: 'common' }),
      onOk: async () => {
        try {
          await removeGenerationTopic(topic.id);
        } catch (error) {
          console.error('Delete topic failed:', error);
        }
      },
      title: t('topic.deleteConfirm'),
    });
  };

  const tooltipContent = (
    <Flexbox
      align={'center'}
      flex={1}
      gap={16}
      horizontal
      justify={'space-between'}
      style={{
        overflow: 'hidden',
      }}
    >
      <Flexbox
        flex={1}
        style={{
          overflow: 'hidden',
        }}
      >
        <Text ellipsis fontSize={14} weight={500}>
          {topic.title || t('topic.untitled')}
        </Text>
        <Text ellipsis fontSize={12} type={'secondary'}>
          {formatTime(topic.updatedAt, locale)}
        </Text>
      </Flexbox>
      <ActionIcon danger icon={Trash} onClick={handleDelete} size="small" />
    </Flexbox>
  );

  return (
    <Popover
      arrow={false}
      content={tooltipContent}
      placement={'left'}
      styles={{
        body: {
          width: 200,
        },
      }}
      trigger={showMoreInfo ? [] : ['hover']}
    >
      <Flexbox
        align={'center'}
        gap={12}
        horizontal
        justify={'center'}
        onClick={handleClick}
        style={{
          cursor: 'pointer',
        }}
        width={'100%'}
      >
        <Avatar
          avatar={topic.coverUrl ?? ''}
          background={theme.colorFillSecondary}
          bordered={isActive}
          loading={isLoading}
          shape="square"
          size={48}
          style={{
            flex: 'none',
          }}
        />
        {showMoreInfo && tooltipContent}
      </Flexbox>
    </Popover>
  );
});

TopicItem.displayName = 'TopicItem';

export default TopicItem;
