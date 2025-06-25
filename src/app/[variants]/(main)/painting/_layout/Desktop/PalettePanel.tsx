'use client';

import { DraggablePanel, DraggablePanelContainer, type DraggablePanelProps } from '@lobehub/ui';
import { createStyles, useResponsive } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { PropsWithChildren, memo, useEffect, useState } from 'react';

import { useGlobalStore } from '@/store/global';
import { systemStatusSelectors } from '@/store/global/selectors';

export const useStyles = createStyles(({ css, token }) => ({
  panel: css`
    height: 100%;
    color: ${token.colorTextSecondary};
    background: ${token.colorBgContainer};
  `,
}));

const PalettePanel = memo<PropsWithChildren>(({ children }) => {
  const { md = true } = useResponsive();

  const { styles } = useStyles();
  const [paletteWidth, paletteExpandable, updatePreference] = useGlobalStore((s) => [
    systemStatusSelectors.paletteWidth(s),
    systemStatusSelectors.showPalettePanel(s),
    s.updateSystemStatus,
  ]);

  const [cacheExpand, setCacheExpand] = useState<boolean>(Boolean(paletteExpandable));
  const [tmpWidth, setWidth] = useState(paletteWidth);
  if (tmpWidth !== paletteWidth) setWidth(paletteWidth);

  const handleExpand = (expand: boolean) => {
    if (isEqual(expand, paletteExpandable)) return;
    updatePreference({ showPalettePanel: expand });
    setCacheExpand(expand);
  };

  const handleSizeChange: DraggablePanelProps['onSizeChange'] = (_, size) => {
    if (!size) return;
    const nextWidth = typeof size.width === 'string' ? Number.parseInt(size.width) : size.width;
    if (!nextWidth) return;

    if (isEqual(nextWidth, paletteWidth)) return;
    setWidth(nextWidth);
    updatePreference({ paletteWidth: nextWidth });
  };

  useEffect(() => {
    if (md && cacheExpand) updatePreference({ showPalettePanel: true });
    if (!md) updatePreference({ showPalettePanel: false });
  }, [md, cacheExpand]);

  return (
    <DraggablePanel
      className={styles.panel}
      defaultSize={{ width: tmpWidth }}
      expand={paletteExpandable}
      maxWidth={400}
      minWidth={320}
      mode={md ? 'fixed' : 'float'}
      onExpandChange={handleExpand}
      onSizeChange={handleSizeChange}
      placement="left"
      size={{ height: '100%', width: paletteWidth }}
    >
      <DraggablePanelContainer style={{ flex: 'none', height: '100%', minWidth: 320 }}>
        {children}
      </DraggablePanelContainer>
    </DraggablePanel>
  );
});

export default PalettePanel;
