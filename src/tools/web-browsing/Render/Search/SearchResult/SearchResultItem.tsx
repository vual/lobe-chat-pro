import { Text } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import WebFavicon from '@/components/WebFavicon';
import { UniformSearchResult } from '@/types/tool/search';

const useStyles = createStyles(({ css, token }) => ({
  container: css`
    cursor: pointer;

    height: 100%;
    padding: 8px;
    border-radius: 8px;

    font-size: 12px;
    color: initial;

    background: ${token.colorFillQuaternary};

    &:hover {
      background: ${token.colorFillTertiary};
    }
  `,
  title: css`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    color: ${token.colorText};
    text-overflow: ellipsis;
  `,
  url: css`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    text-overflow: ellipsis;
  `,
}));

const SearchResultItem = memo<UniformSearchResult>(({ url, title }) => {
  const { styles } = useStyles();

  const urlObj = new URL(url);
  const host = urlObj.hostname;
  return (
    <Link href={url} target={'_blank'}>
      <Flexbox className={styles.container} gap={2} justify={'space-between'}>
        <div className={styles.title}>{title}</div>
        <Flexbox align={'center'} gap={4} horizontal>
          <WebFavicon size={14} title={title} url={url} />
          <Text className={styles.url} type={'secondary'}>
            {host.replace('www.', '')}
          </Text>
        </Flexbox>
      </Flexbox>
    </Link>
  );
});

export default SearchResultItem;
