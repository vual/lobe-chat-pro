import { ChatCompletionErrorPayload } from '@lobechat/model-runtime';

import { checkAuth } from '@/app/(backend)/middleware/auth';
import { getLLMConfig } from '@/envs/llm';
import apiKeyManager from '@/server/modules/ModelRuntime/apiKeyManager';
import { ChatErrorType } from '@/types/fetch';
import { createErrorResponse } from '@/utils/errorResponse';
import { encodeJwtToken } from '@/utils/jwt';

export const runtime = 'nodejs';

const handler = checkAuth(async (req: Request, { params, jwtPayload }) => {
  const { path = [] } = (await params) as { path?: string | string[] };
  const reqPath = Array.isArray(path) ? path.join('/') : path;

  try {
    const { KLING_API_KEY, KLING_PROXY_URL } = getLLMConfig();

    let apiKey = jwtPayload?.apiKey || '';
    let baseURL = jwtPayload?.baseURL || '';

    if (!baseURL) {
      apiKey = apiKeyManager.pick(jwtPayload?.apiKey || KLING_API_KEY);
      baseURL = KLING_PROXY_URL || '';
    }

    if (!apiKey || !baseURL) {
      return new Response(JSON.stringify({ msg: 'Missing kling apiKey or baseUrl.' }), {
        status: 401,
      });
    }

    if (apiKey.includes('@')) {
      apiKey = await encodeJwtToken(apiKey);
    }

    const url = new URL(req.url);
    url.searchParams.delete('path');

    if (baseURL.endsWith('/')) {
      baseURL = baseURL.slice(0, -1);
    }

    const fetchUrl = `${baseURL}/${reqPath}${url.search}`;

    const controller = new AbortController();
    setTimeout(() => controller.abort(), 10 * 60 * 1000);

    return fetch(fetchUrl, {
      body: req.body,
      cache: 'no-store',
      // @ts-ignore
      duplex: 'half',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      method: req.method,
      signal: controller.signal,
    });
  } catch (e) {
    const {
      errorType = ChatErrorType.InternalServerError,
      error: errorContent,
      ...res
    } = e as ChatCompletionErrorPayload;

    const error = errorContent || e;
    console.error(`Route: [kling] ${errorType}:`, error);

    return createErrorResponse(errorType, { error, ...res, provider: 'kling' });
  }
});

export const POST = handler;
export const GET = handler;
