import { Progress } from 'antd';
import { createStyles, useResponsive } from 'antd-style';
import { CSSProperties, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ css, token }) => ({
  desc: css`
    height: 20px;
    font-size: 12px;
    line-height: 20px;
    color: ${token.colorTextTertiary};
  `,
  title: css`
    font-size: 15px;
    font-weight: bold;
    color: ${token.colorTextSecondary};
  `,
}));

interface ProgressItemProps {
  className?: string;
  desc?: string;
  legend?: string;
  padding?: number;
  percent: number;
  style?: CSSProperties;
  title: string;
  usage: {
    total: string | number;
    used: string | number;
  };
}

const ProgressItem = memo<ProgressItemProps>(
  ({ legend, title, desc, usage, percent, style, className }) => {
    const { mobile } = useResponsive();
    const { styles, theme } = useStyles();

    return (
      <Flexbox className={className} paddingInline={16} style={style} width={'100%'}>
        <Flexbox align={'center'} horizontal justify={'space-between'} width={'100%'}>
          <Flexbox align={'center'} gap={8} horizontal>
            {legend && (
              <Flexbox
                height={8}
                style={{
                  background: theme.geekblue,
                  borderRadius: '50%',
                  flex: 'none',
                }}
                width={8}
              />
            )}
            <Flexbox align={'baseline'} gap={mobile ? 0 : 8} horizontal={!mobile}>
              <div className={styles.title}>{title}</div>
              {desc && <div className={styles.desc}>{desc}</div>}
            </Flexbox>
          </Flexbox>
          <div>
            <span style={{ fontWeight: 'bold' }}>{usage.used}</span>
            {['', '/', usage.total].join(' ')}
          </div>
        </Flexbox>
        <Progress
          percent={percent}
          showInfo={false}
          size={'small'}
          strokeColor={theme.colorPrimary}
        />
      </Flexbox>
    );
  },
);

export default ProgressItem;
