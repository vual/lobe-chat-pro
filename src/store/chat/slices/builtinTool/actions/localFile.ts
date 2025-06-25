import {
  ListLocalFileParams,
  LocalMoveFilesResultItem,
  LocalReadFileParams,
  LocalReadFilesParams,
  LocalSearchFilesParams,
  MoveLocalFilesParams,
  RenameLocalFileParams,
  WriteLocalFileParams,
} from '@lobechat/electron-client-ipc';
import { StateCreator } from 'zustand/vanilla';

import { localFileService } from '@/services/electron/localFileService';
import { ChatStore } from '@/store/chat/store';
import {
  LocalFileListState,
  LocalFileSearchState,
  LocalMoveFilesState,
  LocalReadFileState,
  LocalReadFilesState,
  LocalRenameFileState,
} from '@/tools/local-system/type';

export interface LocalFileAction {
  internal_triggerLocalFileToolCalling: <T = any>(
    id: string,
    callingService: () => Promise<{ content: any; state?: T }>,
  ) => Promise<boolean>;

  listLocalFiles: (id: string, params: ListLocalFileParams) => Promise<boolean>;
  moveLocalFiles: (id: string, params: MoveLocalFilesParams) => Promise<boolean>;
  reSearchLocalFiles: (id: string, params: LocalSearchFilesParams) => Promise<boolean>;
  readLocalFile: (id: string, params: LocalReadFileParams) => Promise<boolean>;
  readLocalFiles: (id: string, params: LocalReadFilesParams) => Promise<boolean>;
  renameLocalFile: (id: string, params: RenameLocalFileParams) => Promise<boolean>;
  // Added rename action
  searchLocalFiles: (id: string, params: LocalSearchFilesParams) => Promise<boolean>;
  toggleLocalFileLoading: (id: string, loading: boolean) => void;

  writeLocalFile: (id: string, params: WriteLocalFileParams) => Promise<boolean>;
}

export const localFileSlice: StateCreator<
  ChatStore,
  [['zustand/devtools', never]],
  [],
  LocalFileAction
> = (set, get) => ({
  internal_triggerLocalFileToolCalling: async (id, callingService) => {
    get().toggleLocalFileLoading(id, true);
    try {
      const { state, content } = await callingService();
      if (state) {
        await get().updatePluginState(id, state as any);
      }
      await get().internal_updateMessageContent(id, JSON.stringify(content));
    } catch (error) {
      await get().internal_updateMessagePluginError(id, {
        body: error,
        message: (error as Error).message,
        type: 'PluginServerError',
      });
    }
    get().toggleLocalFileLoading(id, false);

    return true;
  },

  listLocalFiles: async (id, params) => {
    return get().internal_triggerLocalFileToolCalling<LocalFileListState>(id, async () => {
      const result = await localFileService.listLocalFiles(params);
      const state: LocalFileListState = { listResults: result };
      return { content: result, state };
    });
  },

  moveLocalFiles: async (id, params) => {
    return get().internal_triggerLocalFileToolCalling<LocalMoveFilesState>(id, async () => {
      const results: LocalMoveFilesResultItem[] = await localFileService.moveLocalFiles(params);

      // 检查所有文件是否成功移动以更新消息内容
      const allSucceeded = results.every((r) => r.success);
      const someFailed = results.some((r) => !r.success);
      const successCount = results.filter((r) => r.success).length;
      const failedCount = results.length - successCount;

      let message = '';

      if (allSucceeded) {
        message = `Successfully moved ${results.length} item(s).`;
      } else if (someFailed) {
        message = `Moved ${successCount} item(s) successfully. Failed to move ${failedCount} item(s).`;
      } else {
        // 所有都失败了？
        message = `Failed to move all ${results.length} item(s).`;
      }

      const state: LocalMoveFilesState = { results, successCount, totalCount: results.length };

      return { content: { message, results }, state };
    });
  },

  reSearchLocalFiles: async (id, params) => {
    get().toggleLocalFileLoading(id, true);

    await get().updatePluginArguments(id, params);

    return get().searchLocalFiles(id, params);
  },

  readLocalFile: async (id, params) => {
    return get().internal_triggerLocalFileToolCalling<LocalReadFileState>(id, async () => {
      const result = await localFileService.readLocalFile(params);
      const state: LocalReadFileState = { fileContent: result };
      return { content: result, state };
    });
  },

  readLocalFiles: async (id, params) => {
    return get().internal_triggerLocalFileToolCalling<LocalReadFilesState>(id, async () => {
      const results = await localFileService.readLocalFiles(params);
      const state: LocalReadFilesState = { filesContent: results };
      return { content: results, state };
    });
  },

  renameLocalFile: async (id, params) => {
    return get().internal_triggerLocalFileToolCalling<LocalRenameFileState>(id, async () => {
      const { path: currentPath, newName } = params;

      // Basic validation for newName (can be done here or backend, maybe better in backend)
      if (
        !newName ||
        newName.includes('/') ||
        newName.includes('\\') ||
        newName === '.' ||
        newName === '..' ||
        /["*/:<>?\\|]/.test(newName)
      ) {
        throw new Error(
          'Invalid new name provided. It cannot be empty, contain path separators, or invalid characters.',
        );
      }

      const result = await localFileService.renameLocalFile({ newName, path: currentPath }); // Call the specific service

      let state: LocalRenameFileState;
      let content: { message: string; success: boolean };

      if (result.success) {
        state = { newPath: result.newPath!, oldPath: currentPath, success: true };
        // Simplified message
        content = {
          message: `Successfully renamed file ${currentPath} to ${newName}.`,
          success: true,
        };
      } else {
        const errorMessage = result.error;
        state = {
          error: errorMessage,
          newPath: '',
          oldPath: params.path,
          success: false,
        };
        content = { message: errorMessage, success: false };
      }
      return { content, state };
    });
  },

  searchLocalFiles: async (id, params) => {
    return get().internal_triggerLocalFileToolCalling<LocalFileSearchState>(id, async () => {
      const result = await localFileService.searchLocalFiles(params);
      const state: LocalFileSearchState = { searchResults: result };
      return { content: result, state };
    });
  },

  toggleLocalFileLoading: (id, loading) => {
    // Assuming a loading state structure similar to searchLoading
    set(
      (state) => ({
        localFileLoading: { ...state.localFileLoading, [id]: loading },
      }),
      false,
      `toggleLocalFileLoading/${loading ? 'start' : 'end'}`,
    );
  },

  writeLocalFile: async (id, params) => {
    return get().internal_triggerLocalFileToolCalling(id, async () => {
      const result = await localFileService.writeFile(params);

      let content: { message: string; success: boolean };

      if (result.success) {
        content = {
          message: `成功写入文件 ${params.path}`,
          success: true,
        };
      } else {
        const errorMessage = result.error;

        content = { message: errorMessage || '写入文件失败', success: false };
      }
      return { content };
    });
  },
});
