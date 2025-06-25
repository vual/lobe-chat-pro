import { INBOX_SESSION_ID } from '@/const/session';
import { clientDB } from '@/database/client/db';
import { MessageModel } from '@/database/models/message';
import { ThreadModel } from '@/database/models/thread';
import { BaseClientService } from '@/services/baseClientService';

import { IThreadService } from './type';

export class ClientService extends BaseClientService implements IThreadService {
  private get threadModel(): ThreadModel {
    return new ThreadModel(clientDB as any, this.userId);
  }

  private get messageModel(): MessageModel {
    return new MessageModel(clientDB as any, this.userId);
  }

  getThreads: IThreadService['getThreads'] = async (topicId) => {
    return this.threadModel.queryByTopicId(topicId);
  };

  createThreadWithMessage: IThreadService['createThreadWithMessage'] = async (input) => {
    const thread = await this.threadModel.create({
      parentThreadId: input.parentThreadId,
      sourceMessageId: input.sourceMessageId,
      title: input.message.content.slice(0, 20),
      topicId: input.topicId,
      type: input.type,
    });

    const message = await this.messageModel.create({
      ...input.message,
      sessionId: this.toDbSessionId(input.message.sessionId) as string,
      threadId: thread?.id,
    });

    return { messageId: message?.id, threadId: thread?.id };
  };

  updateThread: IThreadService['updateThread'] = async (id, data) => {
    return this.threadModel.update(id, data);
  };

  removeThread: IThreadService['removeThread'] = async (id) => {
    return this.threadModel.delete(id);
  };

  private toDbSessionId = (sessionId: string | undefined) => {
    return sessionId === INBOX_SESSION_ID ? null : sessionId;
  };
}
