import { Text } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { PropsWithChildren, memo } from 'react';

const useStyles = createStyles(({ css, token }) => {
  return {
    desc: css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;

      height: 28px;
      margin-block: 4px 0 !important;

      font-size: 14px;
      line-height: 28px;
      color: ${token.colorTextSecondary};
      text-overflow: ellipsis;

      transition:
        margin-block-start 0.3s ${token.motionEaseInOut},
        height 0.3s ${token.motionEaseInOut},
        opacity 0.2s ${token.motionEaseInOut};
    `,
    hideDesc: css`
      height: 0;
      margin-block-start: 0;
      opacity: 0;
    `,
  };
});

const CollapseDesc = memo<PropsWithChildren<{ hide?: boolean }>>(({ children, hide }) => {
  const { cx, styles } = useStyles();

  return (
    <Text as={'p'} className={cx(styles.desc, hide && styles.hideDesc)}>
      {children}
    </Text>
  );
});

export default CollapseDesc;
