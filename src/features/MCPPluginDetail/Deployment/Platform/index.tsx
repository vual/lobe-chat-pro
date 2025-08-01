import { ConnectionConfig } from '@lobehub/market-types';
import { Block, Highlighter } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';

import { genServerConfig } from '@/features/MCP/utils';

const useStyles = createStyles(({ css }) => {
  return {
    lite: css`
      pre {
        padding: 12px !important;
      }
    `,
  };
});

interface PlatformProps {
  connection?: ConnectionConfig;
  identifier?: string;
  lite?: boolean;
  mobile?: boolean;
}

const Platform = memo<PlatformProps>(({ lite, identifier, connection }) => {
  const serverConfig = genServerConfig(identifier, connection);
  const { cx, styles } = useStyles();

  return (
    <Block gap={lite ? 0 : 16} padding={4} variant={lite ? 'outlined' : 'borderless'}>
      <Highlighter
        className={cx(lite && styles.lite)}
        fileName={'MCP server config'}
        fullFeatured
        language={'json'}
        style={{
          fontSize: 12,
        }}
        variant={'filled'}
      >
        {serverConfig}
      </Highlighter>
    </Block>
  );
});

export default Platform;
