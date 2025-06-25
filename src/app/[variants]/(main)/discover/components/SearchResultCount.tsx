'use client';

import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Trans } from 'react-i18next';

import Title from './Title';

const useStyles = createStyles(({ css, token }) => ({
  highlight: css`
    color: ${token.colorInfo};

    &::before,
    &::after {
      content: '\`';
    }
  `,
}));

const SearchResultCount = memo<{ count: number; keyword: string }>(({ keyword, count }) => {
  const { styles } = useStyles();
  return (
    <Title>
      <Trans
        components={{ highlight: <span className={styles.highlight} /> }}
        i18nKey={'search.result'}
        ns={'discover'}
        values={{
          count,
          keyword,
        }}
      />
    </Title>
  );
});

export default SearchResultCount;
