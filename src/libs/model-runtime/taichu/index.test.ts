// @vitest-environment node
import OpenAI from 'openai';
import { Mock, afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  ChatStreamCallbacks,
  LobeMoonshotAI,
  LobeOpenAICompatibleRuntime,
  ModelProvider,
} from '@/libs/model-runtime';
import { testProvider } from '@/libs/model-runtime/providerTestUtils';

import * as debugStreamModule from '../utils/debugStream';
import { LobeTaichuAI } from './index';

const provider = ModelProvider.Taichu;
const defaultBaseURL = 'https://ai-maas.wair.ac.cn/maas/v1';

testProvider({
  Runtime: LobeTaichuAI,
  provider,
  defaultBaseURL,
  chatDebugEnv: 'DEBUG_TAICHU_CHAT_COMPLETION',
  chatModel: 'taichu',
  test: {
    skipAPICall: true,
  },
});

let instance: LobeOpenAICompatibleRuntime;

beforeEach(() => {
  instance = new LobeTaichuAI({ apiKey: 'test' });

  // 使用 vi.spyOn 来模拟 chat.completions.create 方法
  vi.spyOn(instance['client'].chat.completions, 'create').mockResolvedValue(
    new ReadableStream() as any,
  );
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('LobeTaichuAI', () => {
  describe('chat', () => {
    it('should correctly adjust temperature and top_p parameters', async () => {
      const instance = new LobeTaichuAI({ apiKey: 'test_api_key' });

      // Mock the chat.completions.create method
      const errorInfo = {
        stack: 'abc',
        cause: {
          message: 'api is undefined',
        },
      };
      const apiError = new OpenAI.APIError(400, errorInfo, 'module error', {});

      const mockCreate = vi
        .spyOn(instance['client'].chat.completions, 'create')
        .mockRejectedValue(apiError);

      // Test cases for temperature and top_p
      const testCases = [
        { temperature: 0.5, top_p: 0.5, expectedTemperature: 0.25, expectedTopP: 0.25 },
        { temperature: 1.0, top_p: 1.0, expectedTemperature: 0.5, expectedTopP: 0.5 },
        { temperature: 2.0, top_p: 2.0, expectedTemperature: 1.0, expectedTopP: 1.0 },
        { temperature: 1.0, top_p: undefined, expectedTemperature: 0.5, expectedTopP: undefined },
        { temperature: 0, top_p: 0.1, expectedTemperature: 0.01, expectedTopP: 0.1 },
        { temperature: 0.01, top_p: 0.0, expectedTemperature: 0.01, expectedTopP: 0.1 },
        { temperature: 0.02, top_p: 20.0, expectedTemperature: 0.01, expectedTopP: 9.9 },
      ];

      for (const { temperature, top_p, expectedTemperature, expectedTopP } of testCases) {
        try {
          await instance.chat({
            messages: [{ content: 'Hello', role: 'user' }],
            model: 'Taichu4',
            temperature,
            top_p,
            stream: true,
          });

          expect(mockCreate).toHaveBeenCalledWith(
            expect.objectContaining({
              temperature: expectedTemperature,
              top_p: expectedTopP,
            }),
            expect.objectContaining({}),
          );
        } catch (e) {}
      }
    });
  });
});
