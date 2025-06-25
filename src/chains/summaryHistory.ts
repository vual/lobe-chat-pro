import { chatHistoryPrompts } from '@/prompts/chatMessages';
import { ChatMessage } from '@/types/message';
import { ChatStreamPayload } from '@/types/openai/chat';

export const chainSummaryHistory = (messages: ChatMessage[]): Partial<ChatStreamPayload> => ({
  messages: [
    {
      content: `You're an assistant who's good at extracting key takeaways from conversations and summarizing them. Please summarize according to the user's needs. The content you need to summarize is located in the <chat_history> </chat_history> group of xml tags. The summary needs to maintain the original language.`,
      role: 'system',
    },
    {
      content: `${chatHistoryPrompts(messages)}

Please summarize the above conversation and retain key information. The summarized content will be used as context for subsequent prompts, and should be limited to 400 tokens.`,

      role: 'user',
    },
  ],
});
