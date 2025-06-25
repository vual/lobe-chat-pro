import { createTRPCClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

import { isDesktop } from '@/const/version';
import type { ToolsRouter } from '@/server/routers/tools';

import { fetchWithDesktopRemoteRPC } from './helpers/desktopRemoteRPCFetch';

export const toolsClient = createTRPCClient<ToolsRouter>({
  links: [
    httpBatchLink({
      fetch: isDesktop
        ? (input, init) => fetchWithDesktopRemoteRPC(input as string, init)
        : undefined,
      headers: async () => {
        // dynamic import to avoid circular dependency
        const { createHeaderWithAuth } = await import('@/services/_auth');

        return createHeaderWithAuth();
      },
      maxURLLength: 2083,
      transformer: superjson,
      url: '/trpc/tools',
    }),
  ],
});
