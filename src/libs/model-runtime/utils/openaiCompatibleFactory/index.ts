import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import OpenAI, { ClientOptions } from 'openai';
import { Stream } from 'openai/streaming';

import { LOBE_DEFAULT_MODEL_LIST } from '@/config/modelProviders';
import type { ChatModelCard } from '@/types/llm';

import { LobeRuntimeAI } from '../../BaseAI';
import { AgentRuntimeErrorType, ILobeAgentRuntimeErrorType } from '../../error';
import {
  ChatCompletionErrorPayload,
  ChatCompletionTool,
  ChatMethodOptions,
  ChatStreamCallbacks,
  ChatStreamPayload,
  Embeddings,
  EmbeddingsOptions,
  EmbeddingsPayload,
  ModelProvider,
  TextToImagePayload,
  TextToSpeechOptions,
  TextToSpeechPayload,
} from '../../types';
import { AgentRuntimeError } from '../createError';
import { debugResponse, debugStream } from '../debugStream';
import { desensitizeUrl } from '../desensitizeUrl';
import { handleOpenAIError } from '../handleOpenAIError';
import { convertOpenAIMessages, convertOpenAIResponseInputs } from '../openaiHelpers';
import { StreamingResponse } from '../response';
import { OpenAIResponsesStream, OpenAIStream, OpenAIStreamOptions } from '../streams';

// the model contains the following keywords is not a chat model, so we should filter them out
export const CHAT_MODELS_BLOCK_LIST = [
  'embedding',
  'davinci',
  'curie',
  'moderation',
  'ada',
  'babbage',
  'tts',
  'whisper',
  'dall-e',
];

type ConstructorOptions<T extends Record<string, any> = any> = ClientOptions & T;

export interface CustomClientOptions<T extends Record<string, any> = any> {
  createChatCompletionStream?: (
    client: any,
    payload: ChatStreamPayload,
    instance: any,
  ) => ReadableStream<any>;
  createClient?: (options: ConstructorOptions<T>) => any;
}

interface OpenAICompatibleFactoryOptions<T extends Record<string, any> = any> {
  apiKey?: string;
  baseURL?: string;
  chatCompletion?: {
    excludeUsage?: boolean;
    handleError?: (
      error: any,
      options: ConstructorOptions<T>,
    ) => Omit<ChatCompletionErrorPayload, 'provider'> | undefined;
    handlePayload?: (
      payload: ChatStreamPayload,
      options: ConstructorOptions<T>,
    ) => OpenAI.ChatCompletionCreateParamsStreaming;
    handleStream?: (
      stream: Stream<OpenAI.ChatCompletionChunk> | ReadableStream,
      { callbacks, inputStartAt }: { callbacks?: ChatStreamCallbacks; inputStartAt?: number },
    ) => ReadableStream;
    handleStreamBizErrorType?: (error: {
      message: string;
      name: string;
    }) => ILobeAgentRuntimeErrorType | undefined;
    handleTransformResponseToStream?: (
      data: OpenAI.ChatCompletion,
    ) => ReadableStream<OpenAI.ChatCompletionChunk>;
    noUserId?: boolean;
  };
  constructorOptions?: ConstructorOptions<T>;
  customClient?: CustomClientOptions<T>;
  debug?: {
    chatCompletion: () => boolean;
    responses?: () => boolean;
  };
  errorType?: {
    bizError: ILobeAgentRuntimeErrorType;
    invalidAPIKey: ILobeAgentRuntimeErrorType;
  };
  models?:
    | ((params: { client: OpenAI }) => Promise<ChatModelCard[]>)
    | {
        transformModel?: (model: OpenAI.Model) => ChatModelCard;
      };
  provider: string;
  responses?: {
    handlePayload?: (
      payload: ChatStreamPayload,
      options: ConstructorOptions<T>,
    ) => ChatStreamPayload;
  };
}

/**
 * make the OpenAI response data as a stream
 */
export function transformResponseToStream(data: OpenAI.ChatCompletion) {
  return new ReadableStream({
    start(controller) {
      const choices = data.choices || [];
      const chunk: OpenAI.ChatCompletionChunk = {
        choices: choices.map((choice: OpenAI.ChatCompletion.Choice) => ({
          delta: {
            content: choice.message.content,
            role: choice.message.role,
            tool_calls: choice.message.tool_calls?.map(
              (tool, index): OpenAI.ChatCompletionChunk.Choice.Delta.ToolCall => ({
                function: tool.function,
                id: tool.id,
                index,
                type: tool.type,
              }),
            ),
          },
          finish_reason: null,
          index: choice.index,
          logprobs: choice.logprobs,
        })),
        created: data.created,
        id: data.id,
        model: data.model,
        object: 'chat.completion.chunk',
      };

      controller.enqueue(chunk);

      controller.enqueue({
        choices: choices.map((choice: OpenAI.ChatCompletion.Choice) => ({
          delta: {
            content: null,
            role: choice.message.role,
          },
          finish_reason: choice.finish_reason,
          index: choice.index,
          logprobs: choice.logprobs,
        })),
        created: data.created,
        id: data.id,
        model: data.model,
        object: 'chat.completion.chunk',
        system_fingerprint: data.system_fingerprint,
      } as OpenAI.ChatCompletionChunk);
      controller.close();
    },
  });
}

export const createOpenAICompatibleRuntime = <T extends Record<string, any> = any>({
  provider,
  baseURL: DEFAULT_BASE_URL,
  apiKey: DEFAULT_API_LEY,
  errorType,
  debug,
  constructorOptions,
  chatCompletion,
  models,
  customClient,
  responses,
}: OpenAICompatibleFactoryOptions<T>) => {
  const ErrorType = {
    bizError: errorType?.bizError || AgentRuntimeErrorType.ProviderBizError,
    invalidAPIKey: errorType?.invalidAPIKey || AgentRuntimeErrorType.InvalidProviderAPIKey,
  };

  return class LobeOpenAICompatibleAI implements LobeRuntimeAI {
    client!: OpenAI;

    private id: string;

    baseURL!: string;
    protected _options: ConstructorOptions<T>;

    constructor(options: ClientOptions & Record<string, any> = {}) {
      const _options = {
        ...options,
        apiKey: options.apiKey?.trim() || DEFAULT_API_LEY,
        baseURL: options.baseURL?.trim() || DEFAULT_BASE_URL,
      };
      const { apiKey, baseURL = DEFAULT_BASE_URL, ...res } = _options;
      this._options = _options as ConstructorOptions<T>;

      if (!apiKey) throw AgentRuntimeError.createError(ErrorType?.invalidAPIKey);

      const initOptions = { apiKey, baseURL, ...constructorOptions, ...res };

      // if the custom client is provided, use it as client
      if (customClient?.createClient) {
        this.client = customClient.createClient(initOptions as any);
      } else {
        this.client = new OpenAI(initOptions);
      }

      this.baseURL = baseURL || this.client.baseURL;

      this.id = options.id || provider;
    }

    async chat({ responseMode, ...payload }: ChatStreamPayload, options?: ChatMethodOptions) {
      try {
        const inputStartAt = Date.now();
        const postPayload = chatCompletion?.handlePayload
          ? chatCompletion.handlePayload(payload, this._options)
          : ({
              ...payload,
              stream: payload.stream ?? true,
            } as OpenAI.ChatCompletionCreateParamsStreaming);

        // new openai Response API
        if ((postPayload as any).apiMode === 'responses') {
          return this.handleResponseAPIMode(payload, options);
        }

        const messages = await convertOpenAIMessages(postPayload.messages);

        let response: Stream<OpenAI.Chat.Completions.ChatCompletionChunk>;

        const streamOptions: OpenAIStreamOptions = {
          bizErrorTypeTransformer: chatCompletion?.handleStreamBizErrorType,
          callbacks: options?.callback,
          provider: this.id,
        };

        if (customClient?.createChatCompletionStream) {
          response = customClient.createChatCompletionStream(this.client, payload, this) as any;
        } else {
          const finalPayload = {
            ...postPayload,
            messages,
            ...(chatCompletion?.noUserId ? {} : { user: options?.user }),
            stream_options:
              postPayload.stream && !chatCompletion?.excludeUsage
                ? { include_usage: true }
                : undefined,
          };

          if (debug?.chatCompletion?.()) {
            console.log('[requestPayload]');
            console.log(JSON.stringify(finalPayload), '\n');
          }

          response = await this.client.chat.completions.create(finalPayload, {
            // https://github.com/lobehub/lobe-chat/pull/318
            headers: { Accept: '*/*', ...options?.requestHeaders },
            signal: options?.signal,
          });
        }

        if (postPayload.stream) {
          const [prod, useForDebug] = response.tee();

          if (debug?.chatCompletion?.()) {
            const useForDebugStream =
              useForDebug instanceof ReadableStream ? useForDebug : useForDebug.toReadableStream();

            debugStream(useForDebugStream).catch(console.error);
          }

          return StreamingResponse(
            chatCompletion?.handleStream
              ? chatCompletion.handleStream(prod, {
                  callbacks: streamOptions.callbacks,
                  inputStartAt,
                })
              : OpenAIStream(prod, { ...streamOptions, inputStartAt }),
            {
              headers: options?.headers,
            },
          );
        }

        if (debug?.chatCompletion?.()) {
          debugResponse(response);
        }

        if (responseMode === 'json') return Response.json(response);

        const transformHandler =
          chatCompletion?.handleTransformResponseToStream || transformResponseToStream;
        const stream = transformHandler(response as unknown as OpenAI.ChatCompletion);

        return StreamingResponse(
          chatCompletion?.handleStream
            ? chatCompletion.handleStream(stream, {
                callbacks: streamOptions.callbacks,
                inputStartAt,
              })
            : OpenAIStream(stream, { ...streamOptions, inputStartAt }),
          {
            headers: options?.headers,
          },
        );
      } catch (error) {
        throw this.handleError(error);
      }
    }

    async models() {
      if (typeof models === 'function') return models({ client: this.client });

      const list = await this.client.models.list();

      return list.data
        .filter((model) => {
          return CHAT_MODELS_BLOCK_LIST.every(
            (keyword) => !model.id.toLowerCase().includes(keyword),
          );
        })
        .map((item) => {
          if (models?.transformModel) {
            return models.transformModel(item);
          }

          const toReleasedAt = () => {
            if (!item.created) return;
            dayjs.extend(utc);

            // guarantee item.created in Date String format
            if (
              typeof (item.created as any) === 'string' ||
              // or in milliseconds
              item.created.toFixed(0).length === 13
            ) {
              return dayjs.utc(item.created).format('YYYY-MM-DD');
            }

            // by default, the created time is in seconds
            return dayjs.utc(item.created * 1000).format('YYYY-MM-DD');
          };

          // TODO: should refactor after remove v1 user/modelList code
          const knownModel = LOBE_DEFAULT_MODEL_LIST.find((model) => model.id === item.id);

          if (knownModel) {
            const releasedAt = knownModel.releasedAt ?? toReleasedAt();

            return { ...knownModel, releasedAt };
          }

          return { id: item.id, releasedAt: toReleasedAt() };
        })

        .filter(Boolean) as ChatModelCard[];
    }

    async embeddings(
      payload: EmbeddingsPayload,
      options?: EmbeddingsOptions,
    ): Promise<Embeddings[]> {
      try {
        const res = await this.client.embeddings.create(
          { ...payload, encoding_format: 'float', user: options?.user },
          { headers: options?.headers, signal: options?.signal },
        );

        return res.data.map((item) => item.embedding);
      } catch (error) {
        throw this.handleError(error);
      }
    }

    async textToImage(payload: TextToImagePayload) {
      try {
        const res = await this.client.images.generate(payload);
        return (res.data || []).map((o) => o.url) as string[];
      } catch (error) {
        throw this.handleError(error);
      }
    }

    async textToSpeech(payload: TextToSpeechPayload, options?: TextToSpeechOptions) {
      try {
        const mp3 = await this.client.audio.speech.create(payload as any, {
          headers: options?.headers,
          signal: options?.signal,
        });

        return mp3.arrayBuffer();
      } catch (error) {
        throw this.handleError(error);
      }
    }

    protected handleError(error: any): ChatCompletionErrorPayload {
      let desensitizedEndpoint = this.baseURL;

      // refs: https://github.com/lobehub/lobe-chat/issues/842
      if (this.baseURL !== DEFAULT_BASE_URL) {
        desensitizedEndpoint = desensitizeUrl(this.baseURL);
      }

      if (chatCompletion?.handleError) {
        const errorResult = chatCompletion.handleError(error, this._options);

        if (errorResult)
          return AgentRuntimeError.chat({
            ...errorResult,
            provider: this.id,
          } as ChatCompletionErrorPayload);
      }

      if ('status' in (error as any)) {
        switch ((error as Response).status) {
          case 401: {
            return AgentRuntimeError.chat({
              endpoint: desensitizedEndpoint,
              error: error as any,
              errorType: ErrorType.invalidAPIKey,
              provider: this.id as ModelProvider,
            });
          }

          default: {
            break;
          }
        }
      }

      const { errorResult, RuntimeError } = handleOpenAIError(error);

      switch (errorResult.code) {
        case 'insufficient_quota': {
          return AgentRuntimeError.chat({
            endpoint: desensitizedEndpoint,
            error: errorResult,
            errorType: AgentRuntimeErrorType.InsufficientQuota,
            provider: this.id as ModelProvider,
          });
        }

        case 'model_not_found': {
          return AgentRuntimeError.chat({
            endpoint: desensitizedEndpoint,
            error: errorResult,
            errorType: AgentRuntimeErrorType.ModelNotFound,
            provider: this.id as ModelProvider,
          });
        }

        // content too long
        case 'context_length_exceeded':
        case 'string_above_max_length': {
          return AgentRuntimeError.chat({
            endpoint: desensitizedEndpoint,
            error: errorResult,
            errorType: AgentRuntimeErrorType.ExceededContextWindow,
            provider: this.id as ModelProvider,
          });
        }
      }

      return AgentRuntimeError.chat({
        endpoint: desensitizedEndpoint,
        error: errorResult,
        errorType: RuntimeError || ErrorType.bizError,
        provider: this.id as ModelProvider,
      });
    }

    private async handleResponseAPIMode(
      payload: ChatStreamPayload,
      options?: ChatMethodOptions,
    ): Promise<Response> {
      const inputStartAt = Date.now();

      const { messages, reasoning_effort, tools, reasoning, ...res } = responses?.handlePayload
        ? (responses?.handlePayload(payload, this._options) as ChatStreamPayload)
        : payload;

      // remove penalty params
      delete res.apiMode;
      delete res.frequency_penalty;
      delete res.presence_penalty;

      const input = await convertOpenAIResponseInputs(messages as any);

      const postPayload = {
        ...res,
        ...(reasoning || reasoning_effort
          ? {
              reasoning: {
                ...reasoning,
                ...(reasoning_effort && { effort: reasoning_effort }),
              },
            }
          : {}),
        input,
        store: false,
        tools: tools?.map((tool) => this.convertChatCompletionToolToResponseTool(tool)),
      } as OpenAI.Responses.ResponseCreateParamsStreaming;

      if (debug?.responses?.()) {
        console.log('[requestPayload]');
        console.log(JSON.stringify(postPayload), '\n');
      }

      const response = await this.client.responses.create(postPayload, {
        headers: options?.requestHeaders,
        signal: options?.signal,
      });

      const [prod, useForDebug] = response.tee();

      if (debug?.responses?.()) {
        const useForDebugStream =
          useForDebug instanceof ReadableStream ? useForDebug : useForDebug.toReadableStream();

        debugStream(useForDebugStream).catch(console.error);
      }

      const streamOptions: OpenAIStreamOptions = {
        bizErrorTypeTransformer: chatCompletion?.handleStreamBizErrorType,
        callbacks: options?.callback,
        provider: this.id,
      };

      return StreamingResponse(OpenAIResponsesStream(prod, { ...streamOptions, inputStartAt }), {
        headers: options?.headers,
      });
    }

    private convertChatCompletionToolToResponseTool = (tool: ChatCompletionTool) => {
      return { type: tool.type, ...tool.function };
    };
  };
};
