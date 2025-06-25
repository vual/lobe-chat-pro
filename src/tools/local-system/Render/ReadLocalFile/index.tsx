import { LocalReadFileParams } from '@lobechat/electron-client-ipc';
import { memo } from 'react';

import { useChatStore } from '@/store/chat';
import { chatToolSelectors } from '@/store/chat/slices/builtinTool/selectors';
import { LocalReadFileState } from '@/tools/local-system/type';
import { ChatMessagePluginError } from '@/types/message';

import ReadFileSkeleton from './ReadFileSkeleton';
import ReadFileView from './ReadFileView';

interface ReadFileQueryProps {
  args: LocalReadFileParams;
  messageId: string;
  pluginError: ChatMessagePluginError;
  pluginState: LocalReadFileState;
}

const ReadFileQuery = memo<ReadFileQueryProps>(({ args, pluginState, messageId }) => {
  const loading = useChatStore(chatToolSelectors.isSearchingLocalFiles(messageId));

  if (loading) {
    return <ReadFileSkeleton />;
  }

  if (!args?.path || !pluginState) return null;

  return <ReadFileView {...pluginState.fileContent} path={args.path} />;
});

export default ReadFileQuery;
