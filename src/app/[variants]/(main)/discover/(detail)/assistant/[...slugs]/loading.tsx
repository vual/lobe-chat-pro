'use client';

import { Skeleton } from 'antd';
import { useResponsive } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import Nav from './features/Details/Nav';

const Loading = memo(() => {
  const { mobile } = useResponsive();
  return (
    <Flexbox gap={24}>
      <Flexbox gap={12}>
        <Flexbox align={'center'} gap={16} horizontal width={'100%'}>
          <Skeleton.Avatar active size={mobile ? 48 : 64} />
          <Skeleton.Button active style={{ height: 36, width: 200 }} />
        </Flexbox>
        <Skeleton.Button size={'small'} style={{ width: 200 }} />
      </Flexbox>
      <Nav />
      <Flexbox
        gap={48}
        horizontal={!mobile}
        style={mobile ? { flexDirection: 'column-reverse' } : undefined}
      >
        <Flexbox
          flex={1}
          gap={16}
          style={{
            overflow: 'hidden',
          }}
          width={'100%'}
        >
          <Skeleton paragraph={{ rows: 3 }} title={false} />
          <Skeleton paragraph={{ rows: 8 }} title={false} />
          <Skeleton paragraph={{ rows: 8 }} title={false} />
        </Flexbox>
        <Flexbox gap={16} width={360}>
          <Skeleton paragraph={{ rows: 3 }} title={false} />
          <Skeleton paragraph={{ rows: 4 }} title={false} />
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
});

export default Loading;
