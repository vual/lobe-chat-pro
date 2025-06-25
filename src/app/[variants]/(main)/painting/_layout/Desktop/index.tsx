import { Flexbox } from 'react-layout-kit';

import InitClientDB from '@/features/InitClientDB';

import { LayoutProps } from '../type';
import PalettePanel from './PalettePanel';

const Layout = ({ children, palette }: LayoutProps) => {
  return (
    <>
      <Flexbox
        height={'100%'}
        horizontal
        style={{ maxWidth: 'calc(100vw - 64px)', overflow: 'hidden', position: 'relative' }}
        width={'100%'}
      >
        <PalettePanel>{palette}</PalettePanel>
        <Flexbox flex={1} style={{ overflow: 'hidden', position: 'relative' }}>
          {children}
        </Flexbox>
      </Flexbox>
      <InitClientDB bottom={60} />
      {/* ↓ cloud slot ↓ */}

      {/* ↑ cloud slot ↑ */}
    </>
  );
};

Layout.displayName = 'DesktopPaintingLayout';

export default Layout;
