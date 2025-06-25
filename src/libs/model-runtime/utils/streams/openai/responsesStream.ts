import OpenAI from 'openai';
import type { Stream } from 'openai/streaming';

import { ChatMessageError, CitationItem } from '@/types/message';

import { AgentRuntimeErrorType } from '../../../error';
import { convertResponseUsage } from '../../usageConverter';
import {
  FIRST_CHUNK_ERROR_KEY,
  StreamContext,
  StreamProtocolChunk,
  StreamProtocolToolCallChunk,
  StreamToolCallChunkData,
  convertIterableToStream,
  createCallbacksTransformer,
  createFirstErrorHandleTransformer,
  createSSEProtocolTransformer,
  createTokenSpeedCalculator,
} from '../protocol';
import { OpenAIStreamOptions } from './openai';

const transformOpenAIStream = (
  chunk: OpenAI.Responses.ResponseStreamEvent | {
    annotation: {
      end_index: number;
      start_index: number;
      title: string;
      type: 'url_citation';
      url: string;
    };
    item_id: string;
    type: 'response.output_text.annotation.added';
  },
  streamContext: StreamContext,
): StreamProtocolChunk | StreamProtocolChunk[] => {
  // handle the first chunk error
  if (FIRST_CHUNK_ERROR_KEY in chunk) {
    delete chunk[FIRST_CHUNK_ERROR_KEY];
    // @ts-ignore
    delete chunk['name'];
    // @ts-ignore
    delete chunk['stack'];

    const errorData = {
      body: chunk,
      type: 'errorType' in chunk ? chunk.errorType : AgentRuntimeErrorType.ProviderBizError,
    } as ChatMessageError;
    return { data: errorData, id: 'first_chunk_error', type: 'error' };
  }

  try {
    switch (chunk.type) {
      case 'response.created': {
        streamContext.id = chunk.response.id;
        streamContext.returnedCitationArray = [];

        return { data: chunk.response.status, id: streamContext.id, type: 'data' };
      }

      case 'response.output_item.added': {
        switch (chunk.item.type) {
          case 'function_call': {
            streamContext.toolIndex =
              typeof streamContext.toolIndex === 'undefined' ? 0 : streamContext.toolIndex + 1;
            streamContext.tool = {
              id: chunk.item.call_id,
              index: streamContext.toolIndex,
              name: chunk.item.name,
            };

            return {
              data: [
                {
                  function: { arguments: chunk.item.arguments, name: chunk.item.name },
                  id: chunk.item.call_id,
                  index: streamContext.toolIndex!,
                  type: 'function',
                } satisfies StreamToolCallChunkData,
              ],
              id: streamContext.id,
              type: 'tool_calls',
            } satisfies StreamProtocolToolCallChunk;
          }
        }

        return { data: chunk.item, id: streamContext.id, type: 'data' };
      }

      case 'response.function_call_arguments.delta': {
        return {
          data: [
            {
              function: { arguments: chunk.delta, name: streamContext.tool?.name },
              id: streamContext.tool?.id,
              index: streamContext.toolIndex!,
              type: 'function',
            } satisfies StreamToolCallChunkData,
          ],
          id: streamContext.id,
          type: 'tool_calls',
        } satisfies StreamProtocolToolCallChunk;
      }
      case 'response.output_text.delta': {
        return { data: chunk.delta, id: chunk.item_id, type: 'text' };
      }

      case 'response.reasoning_summary_part.added': {
        if (!streamContext.startReasoning) {
          streamContext.startReasoning = true;
          return { data: '', id: chunk.item_id, type: 'reasoning' };
        } else {
          return { data: '\n', id: chunk.item_id, type: 'reasoning' };
        }
      }

      case 'response.reasoning_summary_text.delta': {
        return { data: chunk.delta, id: chunk.item_id, type: 'reasoning' };
      }

      case 'response.output_text.annotation.added': {
        const citations = chunk.annotation;

        if (streamContext.returnedCitationArray) {
          streamContext.returnedCitationArray.push({
            title: citations.title,
            url: citations.url,
          } as CitationItem);
        }

        return { data: null, id: chunk.item_id, type: 'text' };
      }

      case 'response.output_item.done': {
        if (streamContext.returnedCitationArray?.length) {
          return {
            data: { citations: streamContext.returnedCitationArray },
            id: chunk.item.id,
            type: 'grounding',
          }
        }

        return { data: null, id: chunk.item.id, type: 'text' };
      }

      case 'response.completed': {
        if (chunk.response.usage) {
          return {
            data: convertResponseUsage(chunk.response.usage),
            id: chunk.response.id,
            type: 'usage',
          };
        }

        return { data: chunk, id: streamContext.id, type: 'data' };
      }

      default: {
        return { data: chunk, id: streamContext.id, type: 'data' };
      }
    }
  } catch (e) {
    const errorName = 'StreamChunkError';
    console.error(`[${errorName}]`, e);
    console.error(`[${errorName}] raw chunk:`, chunk);

    const err = e as Error;

    /* eslint-disable sort-keys-fix/sort-keys-fix */
    const errorData = {
      body: {
        message:
          'chat response streaming chunk parse error, please contact your API Provider to fix it.',
        context: { error: { message: err.message, name: err.name }, chunk },
      },
      type: errorName,
    } as ChatMessageError;
    /* eslint-enable */

    return { data: errorData, id: streamContext.id, type: 'error' };
  }
};

export const OpenAIResponsesStream = (
  stream: Stream<OpenAI.Responses.ResponseStreamEvent> | ReadableStream,
  { callbacks, provider, bizErrorTypeTransformer, inputStartAt }: OpenAIStreamOptions = {},
) => {
  const streamStack: StreamContext = { id: '' };

  const readableStream =
    stream instanceof ReadableStream ? stream : convertIterableToStream(stream);

  return (
    readableStream
      // 1. handle the first error if exist
      // provider like huggingface or minimax will return error in the stream,
      // so in the first Transformer, we need to handle the error
      .pipeThrough(createFirstErrorHandleTransformer(bizErrorTypeTransformer, provider))
      .pipeThrough(createTokenSpeedCalculator(transformOpenAIStream, { inputStartAt, streamStack }))
      .pipeThrough(createSSEProtocolTransformer((c) => c, streamStack))
      .pipeThrough(createCallbacksTransformer(callbacks))
  );
};
