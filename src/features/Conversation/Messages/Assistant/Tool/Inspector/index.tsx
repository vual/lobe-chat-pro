import { ActionIcon, Icon } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import {
  ChevronDown,
  ChevronRight,
  LayoutPanelTop,
  LogsIcon,
  LucideBug,
  LucideBugOff,
} from 'lucide-react';
import { CSSProperties, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { shinyTextStylish } from '@/styles/loading';

import Debug from './Debug';
import Settings from './Settings';
import ToolTitle from './ToolTitle';

export const useStyles = createStyles(({ css, token }) => ({
  apiName: css`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-family: ${token.fontFamilyCode};
    font-size: 12px;
    text-overflow: ellipsis;
  `,
  container: css`
    cursor: pointer;

    width: fit-content;
    padding-block: 2px;
    border-radius: 6px;

    color: ${token.colorTextTertiary};

    &:hover {
      background: ${token.colorFillTertiary};
    }
  `,
  plugin: css`
    display: flex;
    gap: 4px;
    align-items: center;
    width: fit-content;
  `,
  shinyText: shinyTextStylish(token),
}));

interface InspectorProps {
  apiName: string;
  arguments?: string;
  id: string;
  identifier: string;
  index: number;
  messageId: string;
  payload: object;
  setShowPluginRender: (show: boolean) => void;
  setShowRender: (show: boolean) => void;
  showPluginRender: boolean;
  showPortal?: boolean;
  showRender: boolean;
  style?: CSSProperties;
}

const Inspectors = memo<InspectorProps>(
  ({
    messageId,
    index,
    identifier,
    apiName,
    id,
    arguments: requestArgs,
    showRender,
    payload,
    setShowRender,
    showPluginRender,
    setShowPluginRender,
  }) => {
    const { t } = useTranslation('plugin');
    const { styles } = useStyles();

    const [showDebug, setShowDebug] = useState(false);

    return (
      <Flexbox gap={4}>
        <Flexbox align={'center'} distribution={'space-between'} gap={8} horizontal>
          <Flexbox
            align={'center'}
            className={styles.container}
            gap={8}
            horizontal
            onClick={() => {
              setShowRender(!showRender);
            }}
            paddingInline={4}
          >
            <ToolTitle
              apiName={apiName}
              identifier={identifier}
              index={index}
              messageId={messageId}
              toolCallId={id}
            />
            <Icon icon={showRender ? ChevronDown : ChevronRight} />
          </Flexbox>
          <Flexbox horizontal>
            {showRender && (
              <ActionIcon
                icon={showPluginRender ? LogsIcon : LayoutPanelTop}
                onClick={() => {
                  setShowPluginRender(!showPluginRender);
                }}
                size={'small'}
                title={showPluginRender ? t('inspector.args') : t('inspector.pluginRender')}
              />
            )}
            <ActionIcon
              icon={showDebug ? LucideBugOff : LucideBug}
              onClick={() => {
                setShowDebug(!showDebug);
              }}
              size={'small'}
              title={t(showDebug ? 'debug.off' : 'debug.on')}
            />
            <Settings id={identifier} />
          </Flexbox>
        </Flexbox>
        {showDebug && <Debug payload={payload} requestArgs={requestArgs} toolCallId={id} />}
      </Flexbox>
    );
  },
);

export default Inspectors;
