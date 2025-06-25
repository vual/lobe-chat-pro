'use client';

import { DownOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { createStyles } from 'antd-style';
import { Suspense, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { withSuspense } from '@/components/withSuspense';
import InitClientDB from '@/features/InitClientDB';
import { usePaintingStore } from '@/store/painting';

import { LayoutProps } from './type';

const useStyles = createStyles(({ css, token }) => ({
  main: css`
    position: relative;
    overflow: hidden;
    background: ${token.colorBgLayout};
  `,
  panel: css`
    .ant-drawer-header {
      display: flex;
      height: 30px;
      padding: 0;
      background-color: #ececec;

      .ant-drawer-header-title {
        justify-content: center;
      }
    }

    .ant-drawer-body {
      padding: 10px;
    }
  `,
}));

const Layout = memo<LayoutProps>(({ children, palette }) => {
  const { styles } = useStyles();
  const [showPanel, updateShowPanel] = usePaintingStore((s) => [s.showPanel, s.updateShowPanel]);

  return (
    <>
      <Flexbox className={styles.main} height="100%" width="100%">
        {children}
      </Flexbox>
      <Suspense>
        <InitClientDB bottom={100} />
      </Suspense>
      <Drawer
        className={styles.panel}
        closeIcon={<DownOutlined />}
        height={'90%'}
        onClose={() => updateShowPanel(false)}
        open={showPanel}
        placement={'bottom'}
      >
        {palette}
      </Drawer>
    </>
  );
});

Layout.displayName = 'MobilePaintingLayout';

export default withSuspense(Layout);
