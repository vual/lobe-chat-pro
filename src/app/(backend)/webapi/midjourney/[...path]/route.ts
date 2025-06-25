import { checkAuth } from '@/app/(backend)/middleware/auth';
import { getLLMConfig } from '@/config/llm';
import { ChatCompletionErrorPayload } from '@/libs/model-runtime';
import apiKeyManager from '@/server/modules/AgentRuntime/apiKeyManager';
import { ChatErrorType } from '@/types/fetch';
import { createErrorResponse } from '@/utils/errorResponse';
import { getTracePayload } from '@/utils/trace';

export const runtime = 'edge';

const handler = checkAuth(async (req: Request, { params, jwtPayload }) => {
  const { provider } = await params;
  const tracePayload = getTracePayload(req);

  try {
    const { MIDJOURNEY_API_KEY, MIDJOURNEY_PROXY_URL } = getLLMConfig();

    let apiKey = jwtPayload?.apiKey || '';
    let baseURL = jwtPayload?.baseURL || '';
    if (!baseURL) {
      apiKey = apiKeyManager.pick(jwtPayload?.apiKey || MIDJOURNEY_API_KEY);
      baseURL = MIDJOURNEY_PROXY_URL || '';
    }

    if (!apiKey || !baseURL) {
      return new Response(JSON.stringify({ msg: 'Missing midjourney apiKey or baseUrl.' }), {
        status: 401,
      });
    }
    const index = req.url.indexOf('/webapi/midjourney/') + 19;
    const reqPath = req.url.slice(Math.max(0, index));

    if (baseURL.endsWith('/')) {
      baseURL = baseURL.slice(0, -1);
    }

    if (
      !baseURL.endsWith('mj') &&
      !baseURL.endsWith('mj-relax') &&
      !baseURL.endsWith('mj-fast') &&
      !baseURL.endsWith('mj-turbo')
    ) {
      baseURL += '/' + (tracePayload?.interfaceMode ?? 'mj');
    }

    let fetchUrl = `${baseURL}/${reqPath}`;

    console.log('[Midjourney Params]: url:' + fetchUrl + '; apiKey:' + apiKey);

    const controller = new AbortController();
    setTimeout(
      () => {
        controller.abort();
      },
      10 * 60 * 1000,
    );

    const fetchOptions: any = {
      body: req.body,
      cache: 'no-store',
      //@ts-ignore
      duplex: 'half',
      //@ts-ignore
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json',
        'mj-api-secret': apiKey,
      },
      method: req.method,
      signal: controller.signal,
    };

    const response = await fetch(fetchUrl, fetchOptions);
    return response;
  } catch (e) {
    const {
      errorType = ChatErrorType.InternalServerError,
      error: errorContent,
      ...res
    } = e as ChatCompletionErrorPayload;

    const error = errorContent || e;
    // track the error at server side
    console.error(`Route: [${provider}] ${errorType}:`, error);
    return createErrorResponse(errorType, { error, ...res, provider });
  }
});

export const POST = handler;

export const GET = handler;
