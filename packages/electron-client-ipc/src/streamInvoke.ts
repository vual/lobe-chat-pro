import { ProxyTRPCRequestParams } from './types';
import { headersToRecord } from './utils/headers';
import { getRequestBody } from './utils/request';

// eslint-disable-next-line no-undef
export const streamInvoke = async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = input.toString();
  const parsedUrl = new URL(url, window.location.origin);
  const urlPath = parsedUrl.pathname + parsedUrl.search;
  const method = init?.method?.toUpperCase() || 'GET';
  const headers = headersToRecord(init?.headers);
  const body = await getRequestBody(init?.body);

  const params: ProxyTRPCRequestParams = {
    body,
    headers,
    method,
    urlPath,
  };

  return new Promise<Response>((resolve, reject) => {
    let streamController: ReadableStreamDefaultController<any>;
    let responseResolved = false;

    const stream = new ReadableStream({
      cancel() {
        // This will be called if the consumer of the stream calls .cancel()
        // We should clean up the IPC listeners
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        cleanup?.();
      },
      start(controller) {
        streamController = controller;
      },
    });

    const cleanup = window.electronAPI.onStreamInvoke(params, {
      onData: (chunk) => {
        if (streamController) streamController.enqueue(chunk);
      },
      onEnd: () => {
        if (streamController) streamController.close();
      },
      onError: (error) => {
        console.error('[streamInvoke] Error during IPC stream proxy call:', error);
        if (!responseResolved) {
          responseResolved = true;
          reject(error); // Reject the main promise if response not yet sent
        } else if (streamController) {
          streamController.error(error); // Otherwise, propagate error through the stream
        }
      },
      onResponse: (meta) => {
        if (responseResolved) return;
        responseResolved = true;

        const response = new Response(stream, meta);
        resolve(response);
      },
    });
  });
};
