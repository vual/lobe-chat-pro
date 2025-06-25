import { notFound } from 'next/navigation';
import urlJoin from 'url-join';

import StructuredData from '@/components/StructuredData';
import { Locales } from '@/locales/resources';
import { ldModule } from '@/server/ld';
import { metadataModule } from '@/server/metadata';
import { DiscoverService } from '@/server/services/discover';
import { translation } from '@/server/translation';
import { DiscoverProviderItem } from '@/types/discover';
import { PageProps } from '@/types/next';
import { RouteVariants } from '@/utils/server/routeVariants';

import DetailLayout from '../../features/DetailLayout';
import Actions from './features/Actions';
import Header from './features/Header';
import InfoSidebar from './features/InfoSidebar';
import ParameterList from './features/ParameterList';
import ProviderList from './features/ProviderList';

type DiscoverPageProps = PageProps<{ slugs: string[]; variants: string }, { hl?: Locales }>;

const getSharedProps = async (props: DiscoverPageProps) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const { isMobile, locale: hl } = await RouteVariants.getVariantsFromProps(props);

  const { slugs } = params;
  const identifier = decodeURIComponent(slugs.join('/'));
  const { t, locale } = await translation('metadata', searchParams?.hl || hl);
  const { t: td } = await translation('models', searchParams?.hl || hl);

  const discoverService = new DiscoverService();
  const data = await discoverService.getModelById(locale, identifier);
  return {
    data,
    discoverService,
    identifier,
    isMobile,
    locale,
    t,
    td,
  };
};

export const generateMetadata = async (props: DiscoverPageProps) => {
  const { data, locale, identifier, t, td } = await getSharedProps(props);
  if (!data) return;

  const { meta, createdAt, providers } = data;

  return {
    authors: [
      { name: meta.title },
      { name: 'LobeHub', url: 'https://github.com/lobehub' },
      { name: 'LobeChat', url: 'https://github.com/lobehub/lobe-chat' },
    ],
    webpage: {
      enable: true,
      search: '/discover/search',
    },
    ...metadataModule.generate({
      alternate: true,
      description: td(`${identifier}.description`) || t('discover.models.description'),
      locale,
      tags: providers || [],
      title: [meta.title, t('discover.models.title')].join(' · '),
      url: urlJoin('/discover/model', identifier),
    }),
    other: {
      'article:author': meta.title,
      'article:published_time': createdAt
        ? new Date(createdAt).toISOString()
        : new Date().toISOString(),
      'robots': 'index,follow,max-image-preview:large',
    },
  };
};

const Page = async (props: DiscoverPageProps) => {
  const { data, locale, identifier, t, td, discoverService, isMobile } =
    await getSharedProps(props);
  if (!data) return notFound();

  const { meta, createdAt, providers } = data;

  let providerData: DiscoverProviderItem[] = [];
  if (providers && providers?.length > 0) {
    providerData = await discoverService.getProviderByIds(locale, providers);
  }

  const ld = ldModule.generate({
    article: {
      author: [meta.title],
      enable: true,
      identifier,
      tags: providers || [],
    },
    date: createdAt ? new Date(createdAt).toISOString() : new Date().toISOString(),
    description: td(`${identifier}.description`) || t('discover.models.description'),
    locale,
    title: [meta.title, t('discover.models.title')].join(' · '),
    url: urlJoin('/discover/model', identifier),
  });

  return (
    <>
      <StructuredData ld={ld} />
      <DetailLayout
        actions={<Actions data={data} identifier={identifier} providerData={providerData} />}
        header={<Header data={data} identifier={identifier} mobile={isMobile} />}
        mobile={isMobile}
        sidebar={<InfoSidebar data={data} identifier={identifier} />}
        /* ↓ cloud slot ↓ */

        /* ↑ cloud slot ↑ */
      >
        <ProviderList data={providerData} identifier={identifier} mobile={isMobile} />
        <ParameterList data={data} identifier={identifier} />
      </DetailLayout>
    </>
  );
};

Page.DisplayName = 'DiscoverModelDetail';

export default Page;
