import { Tag, Text, Tooltip } from '@lobehub/ui';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { EngineAvatarGroup } from '@/tools/web-browsing/components/EngineAvatar';

import CategoryAvatar from './CategoryAvatar';

interface TitleExtraProps {
  category?: string;
  engines: string[];
  highlight?: boolean;
  score: number;
}

const TitleExtra = memo<TitleExtraProps>(({ category, score, highlight, engines }) => {
  const { t } = useTranslation('tool');

  return (
    <Flexbox align={'center'} gap={4} horizontal>
      <EngineAvatarGroup engines={engines} />
      <Tooltip title={t(highlight ? 'search.includedTooltip' : 'search.scoreTooltip')}>
        {highlight ? (
          <Tag bordered={false} color={'blue'} style={{ marginInlineEnd: 0 }}>
            {score.toFixed(1)}
          </Tag>
        ) : (
          <Text
            style={{ textAlign: 'center', width: 32, wordBreak: 'keep-all' }}
            type={'secondary'}
          >
            {score.toFixed(1)}
          </Text>
        )}
      </Tooltip>
      <CategoryAvatar category={category || 'general'} />
    </Flexbox>
  );
});
export default TitleExtra;
