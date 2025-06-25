import { Suspense } from 'react';
import { Flexbox } from 'react-layout-kit';

import Loading from '@/components/Loading/BrandTextLoading';
import StructuredData from '@/components/StructuredData';
import { ldModule } from '@/server/ld';
import { metadataModule } from '@/server/metadata';
import { translation } from '@/server/translation';
import { DynamicLayoutProps } from '@/types/next';
import { RouteVariants } from '@/utils/server/routeVariants';

import ImagesContainer from './features/ImagesContainer';

export const generateMetadata = async (props: DynamicLayoutProps) => {
  const locale = await RouteVariants.getLocale(props);
  const { t } = await translation('metadata', locale);
  return metadataModule.generate({
    description: t('painting.description'),
    title: t('painting.title'),
    url: '/painting',
  });
};

const Page = async (props: DynamicLayoutProps) => {
  const { isMobile, locale } = await RouteVariants.getVariantsFromProps(props);
  const { t } = await translation('metadata', locale);
  const ld = ldModule.generate({
    description: t('painting.description'),
    title: t('painting.title'),
    url: '/painting',
  });

  return (
    <>
      <StructuredData ld={ld} />
      <Suspense fallback={<Loading />}>
        <Flexbox gap={isMobile ? 16 : 24} style={{ height: '100%', overflowY: 'scroll' }}>
          <ImagesContainer isMobile={isMobile} />
        </Flexbox>
      </Suspense>
    </>
  );
};

Page.DisplayName = 'Painting';

export default Page;
