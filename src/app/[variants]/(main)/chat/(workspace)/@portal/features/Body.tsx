'use client';

import { css, cx } from 'antd-style';
import { PropsWithChildren } from 'react';
import { Flexbox } from 'react-layout-kit';

const body = css`
  :has(.portal-artifact) {
    overflow: hidden;
    padding-block-end: 12px;
  }
`;

const Body = ({ children }: PropsWithChildren) => {
  return (
    <Flexbox
      className={cx(body, 'portal-body')}
      height={'100%'}
      style={{ flex: 1, height: 0, position: 'relative' }}
      width={'100%'}
    >
      {children}
    </Flexbox>
  );
};

export default Body;
