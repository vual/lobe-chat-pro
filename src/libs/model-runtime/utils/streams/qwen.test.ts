import OpenAI from 'openai';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import { StreamContext } from './protocol';
import { QwenAIStream, transformQwenStream } from './qwen';

describe('QwenAIStream', () => {
  beforeAll(() => {});

  it('should transform OpenAI stream to protocol stream', async () => {
    const mockOpenAIStream = new ReadableStream({
      start(controller) {
        controller.enqueue({
          choices: [
            {
              delta: { content: 'Hello' },
              index: 0,
            },
          ],
          id: '1',
        });
        controller.enqueue({
          choices: [
            {
              delta: { content: ' world!' },
              index: 1,
            },
          ],
          id: '1',
        });
        controller.enqueue({
          choices: [
            {
              delta: null,
              finish_reason: 'stop',
              index: 2,
            },
          ],
          id: '1',
        });

        controller.close();
      },
    });

    const onStartMock = vi.fn();
    const onTextMock = vi.fn();
    const onCompletionMock = vi.fn();

    const protocolStream = QwenAIStream(mockOpenAIStream, {
      callbacks: {
        onStart: onStartMock,
        onText: onTextMock,
        onCompletion: onCompletionMock,
      },
    });

    const decoder = new TextDecoder();
    const chunks = [];

    // @ts-ignore
    for await (const chunk of protocolStream) {
      chunks.push(decoder.decode(chunk, { stream: true }));
    }

    expect(chunks).toEqual([
      'id: 1\n',
      'event: text\n',
      `data: "Hello"\n\n`,
      'id: 1\n',
      'event: text\n',
      `data: " world!"\n\n`,
      'id: 1\n',
      'event: stop\n',
      `data: "stop"\n\n`,
    ]);

    expect(onStartMock).toHaveBeenCalledTimes(1);
    expect(onTextMock).toHaveBeenNthCalledWith(1, 'Hello');
    expect(onTextMock).toHaveBeenNthCalledWith(2, ' world!');
    expect(onCompletionMock).toHaveBeenCalledTimes(1);
  });

  it('should handle tool calls', async () => {
    const mockOpenAIStream = new ReadableStream({
      start(controller) {
        controller.enqueue({
          choices: [
            {
              delta: {
                tool_calls: [
                  {
                    function: { name: 'tool1', arguments: '{}' },
                    id: 'call_1',
                    index: 0,
                    type: 'function',
                  },
                  {
                    function: { name: 'tool2', arguments: '{}' },
                    id: 'call_2',
                    index: 1,
                  },
                ],
              },
              index: 0,
            },
          ],
          id: '2',
        });

        controller.close();
      },
    });

    const onToolCallMock = vi.fn();

    const protocolStream = QwenAIStream(mockOpenAIStream, {
      callbacks: {
        onToolsCalling: onToolCallMock,
      },
    });

    const decoder = new TextDecoder();
    const chunks = [];

    // @ts-ignore
    for await (const chunk of protocolStream) {
      chunks.push(decoder.decode(chunk, { stream: true }));
    }

    expect(chunks).toEqual([
      'id: 2\n',
      'event: tool_calls\n',
      `data: [{"function":{"name":"tool1","arguments":"{}"},"id":"call_1","index":0,"type":"function"},{"function":{"name":"tool2","arguments":"{}"},"id":"call_2","index":1,"type":"function"}]\n\n`,
    ]);

    expect(onToolCallMock).toHaveBeenCalledTimes(1);
  });

  it('should handle empty stream', async () => {
    const mockStream = new ReadableStream({
      start(controller) {
        controller.close();
      },
    });

    const protocolStream = QwenAIStream(mockStream);

    const decoder = new TextDecoder();
    const chunks = [];

    // @ts-ignore
    for await (const chunk of protocolStream) {
      chunks.push(decoder.decode(chunk, { stream: true }));
    }

    expect(chunks).toEqual([]);
  });

  it('should handle chunk with no choices', async () => {
    const mockStream = new ReadableStream({
      start(controller) {
        controller.enqueue({
          choices: [],
          id: '1',
        });

        controller.close();
      },
    });

    const protocolStream = QwenAIStream(mockStream);

    const decoder = new TextDecoder();
    const chunks = [];

    // @ts-ignore
    for await (const chunk of protocolStream) {
      chunks.push(decoder.decode(chunk, { stream: true }));
    }

    expect(chunks).toEqual(['id: 1\n', 'event: data\n', 'data: {"choices":[],"id":"1"}\n\n']);
  });

  it('should handle vision model stream', async () => {
    const mockStream = new ReadableStream({
      start(controller) {
        controller.enqueue({
          choices: [
            {
              delta: {
                content: [
                  {
                    text: '图中是一只小狗',
                  },
                ],
              },
            },
          ],
          id: '3',
        });

        /**
         * Just for test against the description of 'output.choices[x].message.content' in [documents](https://help.aliyun.com/zh/dashscope/developer-reference/tongyi-qianwen-vl-plus-api)
         * You're not likely to get image outputs from current versions of vl models.
         */
        controller.enqueue({
          choices: [
            {
              delta: {
                content: [
                  {
                    image: 'https://hello.mock/test.png',
                  },
                ],
              },
            },
          ],
          id: '3',
        });
        controller.close();
      },
    });

    const protocolStream = QwenAIStream(mockStream);

    const decoder = new TextDecoder();
    const chunks = [];

    // @ts-ignore
    for await (const chunk of protocolStream) {
      chunks.push(decoder.decode(chunk, { stream: true }));
    }

    expect(chunks).toEqual([
      'id: 3\n',
      'event: text\n',
      'data: "图中是一只小狗"\n\n',
      'id: 3\n',
      'event: text\n',
      'data: "![image](https://hello.mock/test.png)"\n\n',
    ]);
  });

  it('should delta content null', async () => {
    const mockOpenAIStream = new ReadableStream({
      start(controller) {
        controller.enqueue({
          choices: [
            {
              delta: { content: null },
              index: 0,
            },
          ],
          id: '3',
        });

        controller.close();
      },
    });

    const protocolStream = QwenAIStream(mockOpenAIStream);

    const decoder = new TextDecoder();
    const chunks = [];

    // @ts-ignore
    for await (const chunk of protocolStream) {
      chunks.push(decoder.decode(chunk, { stream: true }));
    }

    expect(chunks).toEqual(['id: 3\n', 'event: data\n', `data: {"content":null}\n\n`]);
  });

  it('should handle other delta data', async () => {
    const mockOpenAIStream = new ReadableStream({
      start(controller) {
        controller.enqueue({
          choices: [
            {
              delta: { custom_field: 'custom_value' },
              index: 0,
            },
          ],
          id: '4',
        });

        controller.close();
      },
    });

    const protocolStream = QwenAIStream(mockOpenAIStream);

    const decoder = new TextDecoder();
    const chunks = [];

    // @ts-ignore
    for await (const chunk of protocolStream) {
      chunks.push(decoder.decode(chunk, { stream: true }));
    }

    expect(chunks).toEqual([
      'id: 4\n',
      'event: data\n',
      `data: {"delta":{"custom_field":"custom_value"},"id":"4","index":0}\n\n`,
    ]);
  });

  it('should handle tool calls without index and type', async () => {
    const mockOpenAIStream = new ReadableStream({
      start(controller) {
        controller.enqueue({
          choices: [
            {
              delta: {
                tool_calls: [
                  {
                    function: { name: 'tool1', arguments: '{}' },
                    id: 'call_1',
                  },
                  {
                    function: { name: 'tool2', arguments: '{}' },
                    id: 'call_2',
                  },
                ],
              },
              index: 0,
            },
          ],
          id: '5',
        });

        controller.close();
      },
    });

    const protocolStream = QwenAIStream(mockOpenAIStream);

    const decoder = new TextDecoder();
    const chunks = [];

    // @ts-ignore
    for await (const chunk of protocolStream) {
      chunks.push(decoder.decode(chunk, { stream: true }));
    }

    expect(chunks).toEqual([
      'id: 5\n',
      'event: tool_calls\n',
      `data: [{"function":{"name":"tool1","arguments":"{}"},"id":"call_1","index":0,"type":"function"},{"function":{"name":"tool2","arguments":"{}"},"id":"call_2","index":1,"type":"function"}]\n\n`,
    ]);
  });
});

describe('transformQwenStream', () => {
  it('should handle usage chunk', () => {
    const mockChunk: OpenAI.ChatCompletionChunk = {
      choices: [],
      id: 'usage-test-id',
      model: 'qwen-test-model',
      object: 'chat.completion.chunk',
      created: Date.now(),
      usage: {
        completion_tokens: 50,
        prompt_tokens: 100,
        total_tokens: 150,
        completion_tokens_details: {}, // Ensure these exist even if empty
        prompt_tokens_details: {}, // Ensure these exist even if empty
      },
    };

    const streamContext: StreamContext = { id: '' };

    const result = transformQwenStream(mockChunk, streamContext);

    expect(result).toEqual({
      id: 'usage-test-id',
      type: 'usage',
      data: {
        inputTextTokens: 100,
        outputTextTokens: 50,
        totalInputTokens: 100,
        totalOutputTokens: 50,
        totalTokens: 150,
      },
    });

    // Verify streamContext is updated
    expect(streamContext.usage).toEqual({
      inputTextTokens: 100,
      outputTextTokens: 50,
      totalInputTokens: 100,
      totalOutputTokens: 50,
      totalTokens: 150,
    });
  });

  it('should handle usage chunk without streamContext', () => {
    const mockChunk: OpenAI.ChatCompletionChunk = {
      choices: [],
      id: 'usage-test-id-no-ctx',
      model: 'qwen-test-model',
      object: 'chat.completion.chunk',
      created: Date.now(),
      usage: {
        completion_tokens: 55,
        prompt_tokens: 105,
        total_tokens: 160,
      },
    };

    const result = transformQwenStream(mockChunk); // No streamContext passed

    expect(result).toEqual({
      id: 'usage-test-id-no-ctx',
      type: 'usage',
      data: {
        inputTextTokens: 105,
        outputTextTokens: 55,
        totalInputTokens: 105,
        totalOutputTokens: 55,
        totalTokens: 160,
      },
    });
  });
});
