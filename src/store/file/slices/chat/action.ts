import { t } from 'i18next';
import { StateCreator } from 'zustand/vanilla';

import { notification } from '@/components/AntdStaticMethods';
import { FILE_UPLOAD_BLACKLIST } from '@/const/file';
import { fileService } from '@/services/file';
import { ServerService } from '@/services/file/server';
import { ragService } from '@/services/rag';
import { UPLOAD_NETWORK_ERROR } from '@/services/upload';
import {
  UploadFileListDispatch,
  uploadFileListReducer,
} from '@/store/file/reducers/uploadFileList';
import { FileListItem } from '@/types/files';
import { UploadFileItem } from '@/types/files/upload';
import { isChunkingUnsupported } from '@/utils/isChunkingUnsupported';
import { sleep } from '@/utils/sleep';
import { setNamespace } from '@/utils/storeDebug';

import { FileStore } from '../../store';

const n = setNamespace('chat');

const serverFileService = new ServerService();

export interface FileAction {
  clearChatUploadFileList: () => void;
  dispatchChatUploadFileList: (payload: UploadFileListDispatch) => void;

  removeChatUploadFile: (id: string) => Promise<void>;
  startAsyncTask: (
    fileId: string,
    runner: (id: string) => Promise<string>,
    onFileItemChange: (fileItem: FileListItem) => void,
  ) => Promise<void>;

  uploadChatFiles: (files: File[]) => Promise<void>;
}

export const createFileSlice: StateCreator<
  FileStore,
  [['zustand/devtools', never]],
  [],
  FileAction
> = (set, get) => ({
  clearChatUploadFileList: () => {
    set({ chatUploadFileList: [] }, false, n('clearChatUploadFileList'));
  },
  dispatchChatUploadFileList: (payload) => {
    const nextValue = uploadFileListReducer(get().chatUploadFileList, payload);
    if (nextValue === get().chatUploadFileList) return;

    set({ chatUploadFileList: nextValue }, false, `dispatchChatFileList/${payload.type}`);
  },
  removeChatUploadFile: async (id) => {
    const { dispatchChatUploadFileList } = get();

    dispatchChatUploadFileList({ id, type: 'removeFile' });
    await fileService.removeFile(id);
  },

  startAsyncTask: async (id, runner, onFileItemUpdate) => {
    await runner(id);

    let isFinished = false;

    while (!isFinished) {
      // 每间隔 2s 查询一次任务状态
      await sleep(2000);

      let fileItem: FileListItem | undefined = undefined;

      try {
        fileItem = await serverFileService.getFileItem(id);
      } catch (e) {
        console.error('getFileItem Error:', e);
        continue;
      }

      if (!fileItem) return;

      onFileItemUpdate(fileItem);

      if (fileItem.finishEmbedding) {
        isFinished = true;
      }

      // if error, also break
      else if (fileItem.chunkingStatus === 'error' || fileItem.embeddingStatus === 'error') {
        isFinished = true;
      }
    }
  },

  uploadChatFiles: async (rawFiles) => {
    const { dispatchChatUploadFileList } = get();
    // 0. skip file in blacklist
    const files = rawFiles.filter((file) => !FILE_UPLOAD_BLACKLIST.includes(file.name));
    // 1. add files with base64
    const uploadFiles: UploadFileItem[] = await Promise.all(
      files.map(async (file) => {
        let previewUrl: string | undefined = undefined;
        let base64Url: string | undefined = undefined;

        // only image and video can be previewed, we create a previewUrl and base64Url for them
        if (file.type.startsWith('image') || file.type.startsWith('video')) {
          const data = await file.arrayBuffer();

          previewUrl = URL.createObjectURL(new Blob([data!], { type: file.type }));

          const base64 = Buffer.from(data!).toString('base64');
          base64Url = `data:${file.type};base64,${base64}`;
        }

        return { base64Url, file, id: file.name, previewUrl, status: 'pending' } as UploadFileItem;
      }),
    );

    dispatchChatUploadFileList({ files: uploadFiles, type: 'addFiles' });

    // upload files and process it
    const pools = files.map(async (file) => {
      let fileResult: { id: string; url: string } | undefined;

      try {
        fileResult = await get().uploadWithProgress({
          file,
          onStatusUpdate: dispatchChatUploadFileList,
        });
      } catch (error) {
        // skip `UNAUTHORIZED` error
        if ((error as any)?.message !== 'UNAUTHORIZED')
          notification.error({
            description:
              // it may be a network error or the cors error
              error === UPLOAD_NETWORK_ERROR
                ? t('upload.networkError', { ns: 'error' })
                : // or the error from the server
                  typeof error === 'string'
                  ? error
                  : t('upload.unknownError', { ns: 'error', reason: (error as Error).message }),
            message: t('upload.uploadFailed', { ns: 'error' }),
          });

        dispatchChatUploadFileList({ id: file.name, type: 'removeFile' });
      }

      if (!fileResult) return;

      // image don't need to be chunked and embedding
      if (isChunkingUnsupported(file.type)) return;

      const data = await ragService.parseFileContent(fileResult.id);
      console.log(data);
    });

    await Promise.all(pools);
  },
});
