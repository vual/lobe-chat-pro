import { Suspense, lazy } from 'react';

import CircleLoading from '@/components/Loading/CircleLoading';
import ServerLayout from '@/components/server/ServerLayout';
import { DynamicLayoutProps } from '@/types/next';

import Desktop from './_layout/Desktop';
import Mobile from './_layout/Mobile';
import SkeletonList from './features/SkeletonList';

const PaletteModules = lazy(() => import('./features/PaletteModules'));

const Layout = ServerLayout({ Desktop, Mobile });

const Palette = (props: DynamicLayoutProps) => {
  return (
    <Suspense fallback={<CircleLoading />}>
      <Layout {...props}>
        <Suspense fallback={<SkeletonList />}>
          <PaletteModules />
        </Suspense>
      </Layout>
    </Suspense>
  );
};

Palette.displayName = 'Palette';

export default Palette;
