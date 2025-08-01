'use client';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useSize } from 'ahooks';
import { memo, useRef } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useFetchGenerationTopics } from '@/hooks/useFetchGenerationTopics';
import { useImageStore } from '@/store/image';
import { generationTopicSelectors } from '@/store/image/selectors';

import NewTopicButton from './NewTopicButton';
import TopicItem from './TopicItem';

const TopicsList = memo(() => {
  useFetchGenerationTopics();
  const ref = useRef(null);
  const { width = 80 } = useSize(ref) || {};
  const [parent] = useAutoAnimate();
  const generationTopics = useImageStore(generationTopicSelectors.generationTopics);
  const openNewGenerationTopic = useImageStore((s) => s.openNewGenerationTopic);

  const showMoreInfo = Boolean(width > 120);

  const isEmpty = !generationTopics || generationTopics.length === 0;
  if (isEmpty) {
    return null;
  }

  return (
    <Flexbox
      align="center"
      gap={12}
      ref={ref}
      style={{
        maxHeight: '100%',
        overflowY: 'auto',
      }}
      width={'100%'}
    >
      <NewTopicButton
        count={generationTopics?.length}
        onClick={openNewGenerationTopic}
        showMoreInfo={showMoreInfo}
      />
      <Flexbox align="center" gap={12} ref={parent} width={'100%'}>
        {generationTopics.map((topic) => (
          <TopicItem key={topic.id} showMoreInfo={showMoreInfo} topic={topic} />
        ))}
      </Flexbox>
    </Flexbox>
  );
});

TopicsList.displayName = 'TopicsList';

export default TopicsList;
