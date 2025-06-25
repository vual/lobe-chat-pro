import { describe, expect, it } from 'vitest';

import { idGenerator } from './idGenerator';

describe('idGenerator', () => {
  it('should generate an ID with the correct prefix and length', () => {
    const fileId = idGenerator('files');
    expect(fileId).toMatch(/^file_[a-zA-Z0-9]{12}$/);

    const messageId = idGenerator('messages');
    expect(messageId).toMatch(/^msg_[a-zA-Z0-9]{12}$/);

    const pluginId = idGenerator('plugins');
    expect(pluginId).toMatch(/^plg_[a-zA-Z0-9]{12}$/);

    const sessionGroupId = idGenerator('sessionGroups');
    expect(sessionGroupId).toMatch(/^sg_[a-zA-Z0-9]{12}$/);

    const sessionId = idGenerator('sessions');
    expect(sessionId).toMatch(/^ssn_[a-zA-Z0-9]{12}$/);

    const topicId = idGenerator('topics');
    expect(topicId).toMatch(/^tpc_[a-zA-Z0-9]{12}$/);

    const userId = idGenerator('user');
    expect(userId).toMatch(/^user_[a-zA-Z0-9]{12}$/);
  });

  it('should generate an ID with custom size', () => {
    const fileId = idGenerator('files', 12);
    expect(fileId).toMatch(/^file_[a-zA-Z0-9]{12}$/);
  });

  it('should throw an error for invalid namespace', () => {
    expect(() => idGenerator('invalid' as any)).toThrowError(
      'Invalid namespace: invalid, please check your code.',
    );
  });
});
