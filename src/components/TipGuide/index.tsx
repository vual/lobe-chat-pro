import { ActionIcon } from '@lobehub/ui';
import { ConfigProvider, Popover, TooltipProps } from 'antd';
import { createStyles, useTheme } from 'antd-style';
import { XIcon } from 'lucide-react';
import { CSSProperties, type FC, type ReactNode } from 'react';
import { Flexbox } from 'react-layout-kit';

const useStyle = createStyles(({ css }) => {
  return {
    close: css`
      color: white;
    `,
    container: css`
      position: relative;
    `,
    footer: css`
      display: flex;
      justify-content: end;
      width: 100%;
    `,
    overlay: css`
      .ant-popover-inner {
        border: none;
      }
    `,
    tip: css`
      position: absolute;
      inset-inline-start: 50%;
      transform: translate(-50%);
    `,
  };
});

export interface TipGuideProps {
  /**
   * 引导内容
   */
  children?: ReactNode;
  /**
   * 类名
   */
  className?: string;
  /**
   * 默认时候的打开状态
   */
  defaultOpen?: boolean;
  /**
   * 用于自定义 footer 部分的 render api
   */
  footerRender?: (dom: ReactNode) => ReactNode;
  /**
   * 最大宽度
   */
  maxWidth?: number;
  /**
   * 纵向偏移值
   */
  offsetY?: number;
  /**
   * 当 open 属性变化时候的触发
   */
  onOpenChange: (open: boolean) => void;
  /**
   * 受控的 open 属性
   */
  open?: boolean;
  /**
   * Tooltip 位置，默认为 bottom
   */
  placement?: TooltipProps['placement'];
  /**
   * style
   */
  style?: CSSProperties;
  tip?: boolean;
  /**
   * 引导标题
   */
  title: string;
}

const TipGuide: FC<TipGuideProps> = ({
  children,
  placement = 'bottom',
  title,
  offsetY,
  maxWidth = 300,
  className,
  style,
  open,
  onOpenChange: setOpen,
}) => {
  const token = useTheme();
  const { styles, cx } = useStyle();

  return (
    <ConfigProvider
      theme={{
        components: {
          Badge: { fontSize: 12, lineHeight: 1 },
          Button: { colorPrimary: token.blue7 },
          Checkbox: {
            colorPrimary: token.blue7,
            colorText: token.colorTextLightSolid,
          },
          Popover: { colorText: token.colorTextLightSolid },
        },
      }}
    >
      {open ? (
        <div className={styles.container}>
          <div
            style={{
              marginTop: offsetY,
            }}
          >
            <Popover
              arrow={{ pointAtCenter: true }}
              classNames={{
                root: cx(className, styles.overlay),
              }}
              color={'blue'}
              content={
                <Flexbox gap={24} horizontal style={{ userSelect: 'none' }}>
                  <div>{title}</div>
                  <ActionIcon
                    className={styles.close}
                    icon={XIcon}
                    onClick={() => {
                      setOpen(false);
                    }}
                    size={'small'}
                  />
                </Flexbox>
              }
              open={open}
              placement={placement}
              styles={{
                root: { maxWidth, zIndex: 1000, ...style },
              }}
              trigger="hover"
            >
              {children}
            </Popover>
          </div>
        </div>
      ) : (
        children
      )}
    </ConfigProvider>
  );
};

export default TipGuide;
