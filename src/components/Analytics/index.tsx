import dynamic from 'next/dynamic';

import { analyticsEnv } from '@/config/analytics';
import { isDesktop } from '@/const/version';

import Desktop from './Desktop';
import Google from './Google';
import Vercel from './Vercel';

const Plausible = dynamic(() => import('./Plausible'));
const Posthog = dynamic(() => import('./Posthog'));
const Umami = dynamic(() => import('./Umami'));
const Clarity = dynamic(() => import('./Clarity'));
const ReactScan = dynamic(() => import('./ReactScan'));

const Analytics = () => {
  return (
    <>
      {analyticsEnv.ENABLE_VERCEL_ANALYTICS && <Vercel />}
      {analyticsEnv.ENABLE_GOOGLE_ANALYTICS && <Google />}
      {analyticsEnv.ENABLED_PLAUSIBLE_ANALYTICS && (
        <Plausible
          domain={analyticsEnv.PLAUSIBLE_DOMAIN}
          scriptBaseUrl={analyticsEnv.PLAUSIBLE_SCRIPT_BASE_URL}
        />
      )}
      {analyticsEnv.ENABLED_POSTHOG_ANALYTICS && (
        <Posthog
          debug={analyticsEnv.DEBUG_POSTHOG_ANALYTICS}
          host={analyticsEnv.POSTHOG_HOST!}
          token={analyticsEnv.POSTHOG_KEY}
        />
      )}
      {analyticsEnv.ENABLED_UMAMI_ANALYTICS && (
        <Umami
          scriptUrl={analyticsEnv.UMAMI_SCRIPT_URL}
          websiteId={analyticsEnv.UMAMI_WEBSITE_ID}
        />
      )}
      {analyticsEnv.ENABLED_CLARITY_ANALYTICS && (
        <Clarity projectId={analyticsEnv.CLARITY_PROJECT_ID} />
      )}
      {!!analyticsEnv.REACT_SCAN_MONITOR_API_KEY && (
        <ReactScan apiKey={analyticsEnv.REACT_SCAN_MONITOR_API_KEY} />
      )}
      {isDesktop && <Desktop />}
    </>
  );
};

export default Analytics;
