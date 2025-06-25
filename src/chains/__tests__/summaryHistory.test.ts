import { Mock, describe, expect, it, vi } from 'vitest';

import { chatHelpers } from '@/store/chat/helpers';
import { globalHelpers } from '@/store/global/helpers';
import { ChatMessage } from '@/types/message';
import { OpenAIChatMessage } from '@/types/openai/chat';

import { chainSummaryHistory } from '../summaryHistory';

describe('chainSummaryHistory', () => {
  it('should use the default model if the token count is below the GPT-3.5 limit', async () => {
    // Arrange
    const messages = [
      { content: 'Hello, how can I assist you?', role: 'assistant' },
      { content: 'I need help with my account.', role: 'user' },
    ] as ChatMessage[];

    // Act
    const result = chainSummaryHistory(messages);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
