import { notFound } from 'next/navigation';
import urlJoin from 'url-join';

import StructuredData from '@/components/StructuredData';
import { ldModule } from '@/server/ld';
import { metadataModule } from '@/server/metadata';
import { DiscoverService } from '@/server/services/discover';
import { translation } from '@/server/translation';
import { DiscoverPageProps, DiscoverPlugintem } from '@/types/discover';
import { RouteVariants } from '@/utils/server/routeVariants';

import DetailLayout from '../../features/DetailLayout';
import Actions from './features/Actions';
import Header from './features/Header';
import InfoSidebar from './features/InfoSidebar';
import Temp from './features/Temp';

// import ConversationExample from './features/ConversationExample';
// import SystemRole from './features/SystemRole';

const getSharedProps = async (props: DiscoverPageProps) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const { isMobile, locale: hl } = await RouteVariants.getVariantsFromProps(props);

  const { slug: identifier } = params;
  const { t, locale } = await translation('metadata', searchParams?.hl || hl);

  const discoverService = new DiscoverService();
  const data = await discoverService.getAssistantById(locale, identifier);
  return {
    data,
    discoverService,
    identifier,
    isMobile,
    locale,
    t,
  };
};

export const generateMetadata = async (props: DiscoverPageProps) => {
  const { data, t, locale, identifier } = await getSharedProps(props);
  if (!data) return;

  const { meta, createdAt, homepage, author } = data;

  return {
    authors: [
      { name: author, url: homepage },
      { name: 'LobeHub', url: 'https://github.com/lobehub' },
      { name: 'LobeChat', url: 'https://github.com/lobehub/lobe-chat' },
    ],
    keywords: meta.tags,
    ...metadataModule.generate({
      alternate: true,
      description: meta.description,
      locale,
      tags: meta.tags,
      title: [meta.title, t('discover.assistants.title')].join(' · '),
      url: urlJoin('/discover/assistant', identifier),
    }),
    other: {
      'article:author': author,
      'article:published_time': createdAt
        ? new Date(createdAt).toISOString()
        : new Date().toISOString(),
      'robots': 'index,follow,max-image-preview:large',
    },
  };
};

const Page = async (props: DiscoverPageProps) => {
  const { data, t, locale, discoverService, identifier, isMobile } = await getSharedProps(props);
  if (!data) return notFound();

  const { meta, createdAt, author, config } = data;

  let pluginData: DiscoverPlugintem[] = [];
  if (config?.plugins && config.plugins?.length > 0) {
    pluginData = await discoverService.getPluginByIds(locale, config.plugins);
  }

  const ld = ldModule.generate({
    article: {
      author: [author],
      enable: true,
      identifier,
      tags: meta.tags,
    },
    date: createdAt ? new Date(createdAt).toISOString() : new Date().toISOString(),
    description: meta.description || t('discover.assistants.description'),
    locale,
    title: [meta.title, t('discover.assistants.title')].join(' · '),
    url: urlJoin('/discover/assistant', identifier),
    webpage: {
      enable: true,
      search: '/discover/search',
    },
  });

  return (
    <>
      <StructuredData ld={ld} />
      <DetailLayout
        actions={<Actions data={data} identifier={identifier} />}
        header={<Header data={data} identifier={identifier} mobile={isMobile} />}
        mobile={isMobile}
        sidebar={<InfoSidebar data={data} identifier={identifier} pluginData={pluginData} />}
        /* ↓ cloud slot ↓ */

        /* ↑ cloud slot ↑ */
      >
        <Temp data={data} identifier={identifier} />
        {/* TODO: Chat Preview */}
        {/*<ConversationExample data={data} identifier={identifier} />*/}
        {/*<SystemRole>{data?.config?.systemRole}</SystemRole>*/}
      </DetailLayout>
    </>
  );
};

Page.DisplayName = 'DiscoverAssistantsDetail';

export default Page;
