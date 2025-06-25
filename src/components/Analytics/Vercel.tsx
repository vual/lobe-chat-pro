import { Analytics } from '@vercel/analytics/react';
import { memo } from 'react';

import { analyticsEnv } from '@/config/analytics';

const VercelAnalytics = memo(() => <Analytics debug={analyticsEnv.DEBUG_VERCEL_ANALYTICS} />);

export default VercelAnalytics;
