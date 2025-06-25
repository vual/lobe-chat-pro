import { PropsWithChildren } from 'react';

import PaletteBottom from './PaletteBottom';
import PaletteHeder from './PaletteHeader';
import PanelBody from './PanelBody';

const DesktopLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <PaletteHeder />
      <PanelBody>{children}</PanelBody>
      <PaletteBottom />
    </>
  );
};

export default DesktopLayout;
