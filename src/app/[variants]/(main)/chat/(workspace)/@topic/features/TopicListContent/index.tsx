'use client';

import { GuideCard } from '@lobehub/ui';
import { useThemeMode } from 'antd-style';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { imageUrl } from '@/const/url';
import { useFetchTopics } from '@/hooks/useFetchTopics';
import { useChatStore } from '@/store/chat';
import { topicSelectors } from '@/store/chat/selectors';
import { useUserStore } from '@/store/user';
import { preferenceSelectors } from '@/store/user/selectors';
import { TopicDisplayMode } from '@/types/topic';

import { SkeletonList } from '../SkeletonList';
import ByTimeMode from './ByTimeMode';
import FlatMode from './FlatMode';
import SearchResult from './SearchResult';

const TopicListContent = memo(() => {
  const { t } = useTranslation('topic');
  const { isDarkMode } = useThemeMode();
  const [topicsInit, topicLength] = useChatStore((s) => [
    s.topicsInit,
    topicSelectors.currentTopicLength(s),
  ]);
  const [isUndefinedTopics, isInSearchMode] = useChatStore((s) => [
    topicSelectors.isUndefinedTopics(s),
    topicSelectors.isInSearchMode(s),
  ]);

  const [visible, updateGuideState, topicDisplayMode] = useUserStore((s) => [
    s.preference.guide?.topic,
    s.updateGuideState,
    preferenceSelectors.topicDisplayMode(s),
  ]);

  useFetchTopics();

  if (isInSearchMode) return <SearchResult />;

  // first time loading or has no data
  if (!topicsInit || isUndefinedTopics) return <SkeletonList />;

  return (
    <>
      {topicLength === 0 && visible && (
        <Flexbox paddingInline={8}>
          <GuideCard
            alt={t('guide.desc')}
            cover={imageUrl(`empty_topic_${isDarkMode ? 'dark' : 'light'}.webp`)}
            coverProps={{
              priority: true,
            }}
            desc={t('guide.desc')}
            height={120}
            onClose={() => {
              updateGuideState({ topic: false });
            }}
            style={{ flex: 'none', marginBottom: 12 }}
            title={t('guide.title')}
            visible={visible}
            width={200}
          />
        </Flexbox>
      )}
      {topicDisplayMode === TopicDisplayMode.ByTime ? <ByTimeMode /> : <FlatMode />}
    </>
  );
});

TopicListContent.displayName = 'TopicListContent';

export default TopicListContent;
