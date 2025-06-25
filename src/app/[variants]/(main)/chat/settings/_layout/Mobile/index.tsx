'use client';

import { PropsWithChildren } from 'react';

import MobileContentLayout from '@/components/server/MobileNavLayout';
import Footer from '@/features/Setting/Footer';

import Header from './Header';

const Layout = ({ children }: PropsWithChildren) => (
  <MobileContentLayout header={<Header />}>
    {children}
    <Footer />
  </MobileContentLayout>
);

Layout.displayName = 'MobileSessionSettingsLayout';

export default Layout;
