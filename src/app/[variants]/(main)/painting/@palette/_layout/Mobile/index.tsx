import { PropsWithChildren } from 'react';

import MobileContentLayout from '@/components/server/MobileNavLayout';

import PaletteBottom from '../Desktop/PaletteBottom';
import PaletteHeader from '../Desktop/PaletteHeader';
import PanelBody from '../Desktop/PanelBody';

const MobileLayout = ({ children }: PropsWithChildren) => {
  return (
    <MobileContentLayout header={<PaletteHeader />}>
      <PanelBody>{children}</PanelBody>
      <PaletteBottom />
    </MobileContentLayout>
  );
};

export default MobileLayout;
