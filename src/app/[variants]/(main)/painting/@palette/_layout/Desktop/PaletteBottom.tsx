'use client';

import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css }) => ({
  paletteBottom: css`
    width: 100%;
    height: 60px;
    border-block-start: 1px solid lightgray;
  `,
}));

const Layout = () => {
  const { styles } = useStyles();

  return <div className={styles.paletteBottom} />;
};
Layout.displayName = 'PaletteBottom';

export default Layout;
