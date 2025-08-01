import { ModelIcon } from '@lobehub/icons';
import { Block, Text } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { DiscoverModelItem } from '@/types/discover';

const useStyles = createStyles(({ css, token }) => {
  return {
    desc: css`
      flex: 1;
      margin: 0 !important;
      font-size: 14px !important;
      color: ${token.colorTextSecondary};
    `,
    title: css`
      margin: 0 !important;
      font-size: 14px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${token.colorLink};
      }
    `,
  };
});

const RelatedItem = memo<DiscoverModelItem>(({ identifier, displayName }) => {
  const { styles } = useStyles();
  const { t } = useTranslation('models');
  return (
    <Block gap={12} horizontal key={identifier} padding={12} variant={'outlined'}>
      <ModelIcon model={identifier} size={40} style={{ flex: 'none' }} type={'avatar'} />
      <Flexbox
        flex={1}
        gap={6}
        style={{
          overflow: 'hidden',
        }}
      >
        <Text as={'h2'} className={styles.title} ellipsis>
          {displayName || identifier}
        </Text>
        <Text
          as={'p'}
          className={styles.desc}
          ellipsis={{
            rows: 2,
          }}
        >
          {t(`${identifier}.description`)}
        </Text>
      </Flexbox>
    </Block>
  );
});

export default RelatedItem;
