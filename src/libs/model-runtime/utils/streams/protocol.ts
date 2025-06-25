import { CitationItem, ModelSpeed, ModelTokensUsage } from '@/types/message';
import { safeParseJSON } from '@/utils/safeParseJSON';
import { nanoid } from '@/utils/uuid';

import { AgentRuntimeErrorType } from '../../error';
import { parseToolCalls } from '../../helpers';
import { ChatStreamCallbacks } from '../../types';

/**
 * context in the stream to save temporarily data
 */
export interface StreamContext {
  id: string;
  /**
   * As pplx citations is in every chunk, but we only need to return it once
   * this flag is used to check if the pplx citation is returned,and then not return it again.
   * Same as Hunyuan and Wenxin
   */
  returnedCitation?: boolean;
  /**
   * Claude's citations are inline and interleaved with text output.
   * Each text segment may carry references to sources (e.g., web search results)
   * relevant to that specific portion of the generated content.
   * This array accumulates all citation items received during the streaming response.
   */
  returnedCitationArray?: CitationItem[];
  /**
   * O series models need a condition to separate part
   */
  startReasoning?: boolean;
  thinking?: {
    id: string;
    name: string;
  };
  /**
   * Indicates whether the current state is within a "thinking" segment of the model output
   * (e.g., when processing lmstudio responses).
   *
   * When parsing output containing <think> and </think> tags:
   * - Set to `true` upon encountering a <think> tag (entering reasoning mode)
   * - Set to `false` upon encountering a </think> tag (exiting reasoning mode)
   *
   * While `thinkingInContent` is `true`, subsequent content should be stored in `reasoning_content`.
   * When `false`, content should be stored in the regular `content` field.
   */
  thinkingInContent?: boolean;
  tool?: {
    id: string;
    index: number;
    name: string;
  };
  toolIndex?: number;
  usage?: ModelTokensUsage;
}

export interface StreamProtocolChunk {
  data: any;
  id?: string;
  type: // pure text
  | 'text'
    // base64 format image
    | 'base64_image'
    // Tools use
    | 'tool_calls'
    // Model Thinking
    | 'reasoning'
    // use for reasoning signature, maybe only anthropic
    | 'reasoning_signature'
    // flagged reasoning signature
    | 'flagged_reasoning_signature'
    // Search or Grounding
    | 'grounding'
    // stop signal
    | 'stop'
    // Error
    | 'error'
    // token usage
    | 'usage'
    // performance monitor
    | 'speed'
    // unknown data result
    | 'data';
}

export interface StreamToolCallChunkData {
  function?: {
    arguments?: string;
    name?: string | null;
  };
  id?: string;
  index: number;
  type: 'function' | string;
}

export interface StreamProtocolToolCallChunk {
  data: StreamToolCallChunkData[];
  id: string;
  type: 'tool_calls';
}

export const generateToolCallId = (index: number, functionName?: string) =>
  `${functionName || 'unknown_tool_call'}_${index}_${nanoid()}`;

const chatStreamable = async function* <T>(stream: AsyncIterable<T>) {
  for await (const response of stream) {
    yield response;
  }
};

const ERROR_CHUNK_PREFIX = '%FIRST_CHUNK_ERROR%: ';
// make the response to the streamable format
export const convertIterableToStream = <T>(stream: AsyncIterable<T>) => {
  const iterable = chatStreamable(stream);

  // copy from https://github.com/vercel/ai/blob/d3aa5486529e3d1a38b30e3972b4f4c63ea4ae9a/packages/ai/streams/ai-stream.ts#L284
  // and add an error handle
  let it = iterable[Symbol.asyncIterator]();

  return new ReadableStream<T>({
    async cancel(reason) {
      await it.return?.(reason);
    },
    async pull(controller) {
      const { done, value } = await it.next();
      if (done) controller.close();
      else controller.enqueue(value);
    },

    async start(controller) {
      try {
        const { done, value } = await it.next();
        if (done) controller.close();
        else controller.enqueue(value);
      } catch (e) {
        const error = e as Error;

        controller.enqueue(
          (ERROR_CHUNK_PREFIX +
            JSON.stringify({ message: error.message, name: error.name, stack: error.stack })) as T,
        );
        controller.close();
      }
    },
  });
};

/**
 * Create a transformer to convert the response into an SSE format
 */
export const createSSEProtocolTransformer = (
  transformer: (chunk: any, stack: StreamContext) => StreamProtocolChunk | StreamProtocolChunk[],
  streamStack?: StreamContext,
) =>
  new TransformStream({
    transform: (chunk, controller) => {
      const result = transformer(chunk, streamStack || { id: '' });

      const buffers = Array.isArray(result) ? result : [result];

      buffers.forEach(({ type, id, data }) => {
        controller.enqueue(`id: ${id}\n`);
        controller.enqueue(`event: ${type}\n`);
        controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
      });
    },
  });

export function createCallbacksTransformer(cb: ChatStreamCallbacks | undefined) {
  const textEncoder = new TextEncoder();
  let aggregatedText = '';
  let aggregatedThinking: string | undefined = undefined;
  let usage: ModelTokensUsage | undefined;
  let grounding: any;
  let toolsCalling: any;

  let currentType = '' as unknown as StreamProtocolChunk['type'];
  const callbacks = cb || {};

  return new TransformStream({
    async flush(): Promise<void> {
      const data = {
        grounding,
        text: aggregatedText,
        thinking: aggregatedThinking,
        toolsCalling,
        usage,
      };

      if (callbacks.onCompletion) {
        await callbacks.onCompletion(data);
      }

      if (callbacks.onFinal) {
        await callbacks.onFinal(data);
      }
    },

    async start(): Promise<void> {
      if (callbacks.onStart) await callbacks.onStart();
    },

    async transform(chunk: string, controller): Promise<void> {
      controller.enqueue(textEncoder.encode(chunk));

      // track the type of the chunk
      if (chunk.startsWith('event:')) {
        currentType = chunk.split('event:')[1].trim() as unknown as StreamProtocolChunk['type'];
      }
      // if the message is a data chunk, handle the callback
      else if (chunk.startsWith('data:')) {
        const content = chunk.split('data:')[1].trim();

        const data = safeParseJSON(content) as any;

        if (!data) return;

        switch (currentType) {
          case 'text': {
            aggregatedText += data;
            await callbacks.onText?.(data);
            break;
          }

          case 'reasoning': {
            if (!aggregatedThinking) {
              aggregatedThinking = '';
            }

            aggregatedThinking += data;
            await callbacks.onThinking?.(data);
            break;
          }

          case 'usage': {
            usage = data;
            await callbacks.onUsage?.(data);
            break;
          }

          case 'grounding': {
            grounding = data;
            await callbacks.onGrounding?.(data);
            break;
          }

          case 'tool_calls': {
            if (!toolsCalling) toolsCalling = [];
            toolsCalling = parseToolCalls(toolsCalling, data);

            await callbacks.onToolsCalling?.({ chunk: data, toolsCalling });
          }
        }
      }
    },
  });
}

export const FIRST_CHUNK_ERROR_KEY = '_isFirstChunkError';

export const createFirstErrorHandleTransformer = (
  errorHandler?: (errorJson: any) => any,
  provider?: string,
) => {
  return new TransformStream({
    transform(chunk, controller) {
      if (chunk.toString().startsWith(ERROR_CHUNK_PREFIX)) {
        const errorData = JSON.parse(chunk.toString().replace(ERROR_CHUNK_PREFIX, ''));

        controller.enqueue({
          ...errorData,
          [FIRST_CHUNK_ERROR_KEY]: true,
          errorType: errorHandler?.(errorData) || AgentRuntimeErrorType.ProviderBizError,
          provider,
        });
      } else {
        controller.enqueue(chunk);
      }
    },
  });
};

/**
 * create a transformer to remove SSE format data
 */
export const createSSEDataExtractor = () =>
  new TransformStream({
    transform(chunk: Uint8Array, controller) {
      // 将 Uint8Array 转换为字符串
      const text = new TextDecoder().decode(chunk, { stream: true });

      // 处理多行数据的情况
      const lines = text.split('\n');

      for (const line of lines) {
        // 只处理以 "data: " 开头的行
        if (line.startsWith('data: ')) {
          // 提取 "data: " 后面的实际数据
          const jsonText = line.slice(6);

          // 跳过心跳消息
          if (jsonText === '[DONE]') continue;

          try {
            // 解析 JSON 数据
            const data = JSON.parse(jsonText);
            // 将解析后的数据传递给下一个处理器
            controller.enqueue(data);
          } catch {
            console.warn('Failed to parse SSE data:', jsonText);
          }
        }
      }
    },
  });

export const TOKEN_SPEED_CHUNK_ID = 'output_speed';

/**
 * Create a middleware to calculate the token generate speed
 * @requires createSSEProtocolTransformer
 */
export const createTokenSpeedCalculator = (
  transformer: (chunk: any, stack: StreamContext) => StreamProtocolChunk | StreamProtocolChunk[],
  { inputStartAt, streamStack }: { inputStartAt?: number; streamStack?: StreamContext } = {},
) => {
  let outputStartAt: number | undefined;
  let outputThinking: boolean | undefined;

  const process = (chunk: StreamProtocolChunk) => {
    let result = [chunk];
    // if the chunk is the first text or reasoning chunk, set as output start
    if (!outputStartAt && (chunk.type === 'text' || chunk.type === 'reasoning')) {
      outputStartAt = Date.now();
    }

    /**
     * 部分 provider 在正式输出 reasoning 前，可能会先输出 content 为空字符串的 chunk，
     * 其中 reasoning 可能为 null，会导致判断是否输出思考内容错误，所以过滤掉 null 或者空字符串。
     * 也可能是某些特殊 token，所以不修改 outputStartAt 的逻辑。
     */
    if (
      outputThinking === undefined &&
      (chunk.type === 'text' || chunk.type === 'reasoning') &&
      typeof chunk.data === 'string' &&
      chunk.data.length > 0
    ) {
      outputThinking = chunk.type === 'reasoning';
    }
    // if the chunk is the stop chunk, set as output finish
    if (inputStartAt && outputStartAt && chunk.type === 'usage') {
      const totalOutputTokens = chunk.data?.totalOutputTokens || chunk.data?.outputTextTokens;
      const reasoningTokens = chunk.data?.outputReasoningTokens || 0;
      const outputTokens =
        (outputThinking ?? false) ? totalOutputTokens : totalOutputTokens - reasoningTokens;
      result.push({
        data: {
          tps: (outputTokens / (Date.now() - outputStartAt)) * 1000,
          ttft: outputStartAt - inputStartAt,
        } as ModelSpeed,
        id: TOKEN_SPEED_CHUNK_ID,
        type: 'speed',
      });
    }
    return result;
  };

  return new TransformStream({
    transform(chunk, controller) {
      let result = transformer(chunk, streamStack || { id: '' });
      if (!Array.isArray(result)) result = [result];
      result.forEach((r) => {
        const processed = process(r);
        if (processed) processed.forEach((p) => controller.enqueue(p));
      });
    },
  });
};
