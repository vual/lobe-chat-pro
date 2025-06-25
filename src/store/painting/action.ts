import { UploadFile } from 'antd';
import useSWR, { SWRResponse } from 'swr';
import type { StateCreator } from 'zustand/vanilla';

import { enableAuth } from '@/const/auth';
import { paintingService } from '@/services/painting';
import { buildMjButtons, buildMjParams, buildMjPrompt, fetchToMj } from '@/store/painting/utils';
import { useUserStore } from '@/store/user';
import { Painting, Paintings } from '@/types/painting';
import { fileToBase64 } from '@/utils/fileUtil';
import { setNamespace } from '@/utils/storeDebug';

import type { PaintingStore } from './index';

const n = setNamespace('painting');
const FETCH_PAINTINGS_KEY = 'fetchPaintings';

/**
 * 设置操作
 */
export interface PaintingStoreAction {
  createPainting: (painting: Painting, params: any) => Promise<any>;
  deletePainting: (painting: Painting) => Promise<any>;
  fetchMidjourney: (painting: Painting, params: any) => Promise<any>;
  fetchMidjourneyTasks: () => void;
  fetchMidjourneyTasksBatch: () => void;
  getPreviewUrl: (keyPath: string) => string;
  queryPaintings: () => Promise<any>;
  updatePainting: (painting: Painting) => Promise<string>;
  updateShowPanel: (showPanel: boolean) => void;
  uploadToDiscord: (fileList: UploadFile[]) => Promise<any>;
  useFetchPaitings: (isLogin: boolean | undefined) => SWRResponse<number>;
}

export const createPaintingAction: StateCreator<
  PaintingStore,
  [['zustand/devtools', never]],
  [],
  PaintingStoreAction
> = (set, get) => ({
  createPainting: async (painting: Painting, params: any) => {
    const userStore = useUserStore.getState();
    if (enableAuth && !userStore.isSignedIn) {
      return 'Please Login!';
    }
    const id = await paintingService.createPainting(painting);
    painting.id = id as string;
    if (!painting.extra.groupId) {
      painting.extra.groupId = id as string;
    }

    const paintingsMap = {
      [id]: painting,
      ...get().paintingsMap,
    };
    set({ paintingsMap });

    let result: any;

    switch (painting.platform) {
      case 'Midjourney': {
        result = await get().fetchMidjourney(painting, params);
        break;
      }
      // No default
    }

    if (result === 'success') {
      set({ showPanel: false });
    }

    return result;
  },

  deletePainting: async (painting: Painting): Promise<any> => {
    await paintingService.deletePainting(painting.id);
    if (painting.platform === 'Midjourney' && painting.taskId) {
      const taskIds = get().taskIds;
      const taskIdMap = get().taskIdMap;
      const index = taskIds.indexOf(painting.taskId);
      if (index > 0) {
        taskIds.splice(index, 1);
        delete taskIdMap[painting.taskId];
        set({ taskIdMap, taskIds }, false, n('deletePainting/deleteTask', painting));
      }
    }
    const paintingsMap = {
      ...get().paintingsMap,
    };
    delete paintingsMap[painting.id];
    set({ paintingsMap }, false, n('deletePainting/deletePainting', painting));
    return 'success';
  },

  fetchMidjourney: async (painting: Painting, params: any) => {
    const srcBase64Array = [] as string[];
    const tagBase64Array = [] as string[];
    if (params.sourceImages && params.sourceImages.length > 0) {
      for (const imgFile of params.sourceImages) {
        const imgBase64 = await fileToBase64(imgFile.originFileObj as File);
        srcBase64Array.push(imgBase64);
      }
    }
    if (params.targetImages && params.targetImages.length > 0) {
      for (const imgFile of params.targetImages) {
        const imgBase64 = await fileToBase64(imgFile.originFileObj as File);
        tagBase64Array.push(imgBase64);
      }
    }
    // 上传图片到discord
    let imgFiles = [] as UploadFile[];
    if (params.crefImages && params.crefImages.length > 0) {
      imgFiles = imgFiles.concat([...params.crefImages]);
    }
    if (params.styleImages && params.styleImages.length > 0) {
      imgFiles = imgFiles.concat([...params.styleImages]);
    }
    if (imgFiles.length > 0) {
      const imageUrls = await get().uploadToDiscord(imgFiles);
      if (imageUrls.length > 0) {
        let i = 0;
        if (params.crefImages && params.crefImages.length > 0) {
          params.crefImages.forEach((file: UploadFile, index: number) => {
            file.url = imageUrls[index];
          });
          i = params.crefImages.length;
        }
        if (params.styleImages && params.styleImages.length > 0) {
          params.styleImages.forEach((file: UploadFile, index: number) => {
            file.url = imageUrls[index + i];
          });
        }
      }
    }

    let path = '';
    let method = '';
    let body = '';
    const interfaceMode = painting.config.interfaceMode;
    switch (painting.action) {
      case 'IMAGINE': {
        path = '/submit/imagine';
        method = 'POST';
        const { paramBefore, paramBehind } = buildMjParams(painting.config);
        const prompt = buildMjPrompt(painting, paramBefore, paramBehind, params);
        body = JSON.stringify({
          base64Array: srcBase64Array,
          botType: painting.config.botType,
          prompt,
        });
        break;
      }
      case 'BLEND': {
        path = '/submit/blend';
        method = 'POST';
        body = JSON.stringify({
          base64Array: srcBase64Array,
          botType: painting.config.botType,
        });
        break;
      }
      case 'DESCRIBE': {
        path = '/submit/describe';
        method = 'POST';
        body = JSON.stringify({
          base64: srcBase64Array[0],
          botType: painting.config.botType,
        });
        break;
      }
      case 'UPSCALE':
      case 'VARIATION':
      case 'REROLL': {
        path = '/submit/change';
        method = 'POST';
        body = JSON.stringify({
          action: painting.action,
          index: painting.action !== 'REROLL' ? parseInt(params.customId.split('::')[1]) : 1,
          taskId: painting.extra.parentTaskId,
        });
        break;
      }
      case 'CUSTOM': {
        path = '/submit/action';
        method = 'POST';
        body = JSON.stringify({
          customId: params.customId,
          taskId: painting.extra.parentTaskId,
        });
        break;
      }
      case 'INSIGHTFACE': {
        path = '/insight-face/swap';
        method = 'POST';
        body = JSON.stringify({
          sourceBase64: srcBase64Array[0],
          targetBase64: tagBase64Array[0],
        });
        break;
      }
      default: {
        break;
      }
    }

    let result = 'success';

    try {
      let res = await fetchToMj({ body, interfaceMode, method, path });
      let resJson = await res.json();
      if (
        painting.action === 'CUSTOM' &&
        (params.customId.includes('CustomZoom') || params.customId.includes('Inpaint'))
      ) {
        res = await fetchToMj({
          body: JSON.stringify({
            maskBase64: params.maskBase64,
            prompt: params.prompt,
            taskId: resJson.result,
          }),
          interfaceMode,
          method: 'POST',
          path: '/submit/modal',
        });
        resJson = await res.json();
      }
      // 确认提交任务
      if (resJson.code === 21) {
        res = await fetchToMj({
          body: JSON.stringify({
            prompt: '',
            taskId: resJson.result,
          }),
          interfaceMode,
          method: 'POST',
          path: '/submit/modal',
        });
        resJson = await res.json();
      }

      const paintingsMap = {
        ...get().paintingsMap,
      };
      if (res.status === 200 && resJson.result) {
        const taskId = resJson.result;
        painting.taskId = taskId;
        painting.status = 'SUBMITTED';
        const taskIds = get().taskIds;
        const taskIdMap = get().taskIdMap;
        paintingsMap[painting.id] = painting;
        taskIds.push(taskId);
        taskIdMap[taskId] = painting.id;
        set({ paintingsMap, taskIdMap, taskIds });

        if (!get().isFetching) {
          if (get().mjPlus) {
            get().fetchMidjourneyTasksBatch();
          } else {
            get().fetchMidjourneyTasks();
          }
        }
      } else {
        painting.status = 'FAILURE';
        painting.failReason = JSON.stringify(
          resJson?.msg || resJson?.error || resJson?.description || resJson,
        );
        paintingsMap[painting.id] = painting;
        set({ paintingsMap });

        result = painting.failReason;
      }
    } catch (e) {
      painting.status = 'FAILURE';
      painting.failReason = JSON.stringify(e);
      const paintingsMap = {
        ...get().paintingsMap,
      };
      paintingsMap[painting.id] = painting;
      set({ paintingsMap });

      result = painting.failReason;
    }

    paintingService.updatePainting(painting);

    return result;
  },

  fetchMidjourneyTasks: async () => {
    set({ isFetching: true });
    setTimeout(async () => {
      if (get().taskIds.length <= 0) {
        set({ isFetching: false });
        return;
      }

      try {
        // 定义异步任务查询方法。
        const fetchTask = async (tid: string, interfaceMode: string) => {
          const path = '/task/' + tid + '/fetch';
          const method = 'GET';
          const res = await fetchToMj({ interfaceMode, method, path });
          const resJson = await res.json();
          const paintingsMap = {
            ...get().paintingsMap,
          };
          const taskIds = get().taskIds;
          const taskIdMap = get().taskIdMap;
          const painting = {
            ...paintingsMap[taskIdMap[tid]],
          };
          let removeTaskId = true;
          if (taskIds.includes(tid)) {
            if (res.ok) {
              switch (resJson.status) {
                case 'CANCEL': {
                  painting.status = 'CANCEL';
                  painting.failReason = 'CANCEL';
                  break;
                }
                case 'IN_PROGRESS': {
                  painting.status = 'IN_PROGRESS';
                  painting.progress = resJson.progress;
                  if (resJson.imageUrl) {
                    painting.images = [{ fileId: '', url: resJson.imageUrl }];
                  }
                  removeTaskId = false;
                  break;
                }
                case 'FAILURE': {
                  painting.status = 'FAILURE';
                  painting.failReason = resJson.failReason ?? JSON.stringify(resJson);
                  break;
                }
                case 'SUCCESS': {
                  painting.status = 'SUCCESS';
                  painting.progress = resJson.progress;
                  painting.description = resJson.prompt;
                  painting.extra.promptEn = resJson.promptEn;
                  painting.extra.buttons = buildMjButtons(resJson.buttons);
                  if (resJson.imageUrl) {
                    painting.images = [{ fileId: '', url: resJson.imageUrl }];
                  }
                  break;
                }
                default: {
                  painting.status = resJson.status ? resJson.status : painting.status;
                  painting.progress = resJson.progress ? resJson.progress : painting.progress;
                  if (resJson.imageUrl) {
                    painting.images = [{ fileId: '', url: resJson.imageUrl }];
                  }
                  removeTaskId = false;
                  break;
                }
              }
            } else {
              painting.status = 'FAILURE';
              painting.failReason = resJson.failReason ?? JSON.stringify(resJson.error);
              removeTaskId = true;
            }

            painting.extra.fetchTimes =
              (painting.extra.fetchTimes ? painting.extra.fetchTimes : 0) + 1;
            if (painting.extra.fetchTimes >= 100) {
              painting.status = 'FAILURE';
              painting.failReason = 'fetch task status exceeded times.';
              removeTaskId = true;
            }

            paintingsMap[taskIdMap[tid]] = painting;

            if (removeTaskId) {
              taskIds.splice(taskIds.indexOf(tid), 1);
              delete taskIdMap[tid];
            }
            // 更新到数据库
            if (painting.status === 'SUCCESS' || painting.status === 'FAILURE') {
              paintingService.updatePainting(painting);
            }
            set({ paintingsMap, taskIdMap, taskIds }, false, n('fetchMidjourneyTasks', resJson));
          }
        };
        // 获取未完成的id集合
        const unfinishedTaskIds = get().taskIds;
        const taskIdMap = get().taskIdMap;
        const paintingMap = get().paintingsMap;
        for (const taskId of unfinishedTaskIds) {
          const painting = paintingMap[taskIdMap[taskId]];
          // 执行异步任务方法
          fetchTask(taskId, painting.config.interfaceMode);
        }
      } catch (e) {
        console.log('[Fetch Midjourney Task Error]:', e);
      }

      if (get().taskIds.length > 0) {
        get().fetchMidjourneyTasks();
      } else {
        set({ isFetching: false });
      }
    }, 10_000);
  },

  fetchMidjourneyTasksBatch: async () => {
    set({ isFetching: true });
    setTimeout(async () => {
      if (get().taskIds.length <= 0) {
        set({ isFetching: false });
        return;
      }
      const path = '/task/list-by-condition';
      const method = 'POST';
      const body = JSON.stringify({
        ids: get().taskIds,
      });
      const taskIdMap = get().taskIdMap;
      const paintingMap = get().paintingsMap;
      const painting = paintingMap[taskIdMap[get().taskIds[0]]];
      const interfaceMode = painting.config.interfaceMode;

      try {
        const res = await fetchToMj({ body, interfaceMode, method, path });
        const resJson = await res.json();
        const paintingsMap = {
          ...get().paintingsMap,
        };
        const taskIds = get().taskIds;
        const taskIdMap = get().taskIdMap;
        const successArr = [] as Painting[];
        for (const task of resJson) {
          if (taskIds.includes(task.id)) {
            const painting = {
              ...paintingsMap[taskIdMap[task.id]],
            };
            let removeTaskId = true;
            switch (task.status) {
              case 'CANCEL': {
                painting.status = 'CANCEL';
                painting.failReason = 'CANCEL';
                break;
              }
              case 'IN_PROGRESS': {
                painting.status = 'IN_PROGRESS';
                painting.progress = task.progress;
                if (task.imageUrl) {
                  painting.images = [{ fileId: '', url: task.imageUrl }];
                }
                removeTaskId = false;
                break;
              }
              case 'FAILURE': {
                painting.status = 'FAILURE';
                painting.failReason = task.failReason ?? 'UNKNOWN';
                break;
              }
              case 'SUCCESS': {
                painting.status = 'SUCCESS';
                painting.progress = task.progress;
                painting.description = task.prompt;
                painting.extra.promptEn = task.promptEn;
                painting.extra.buttons = buildMjButtons(task.buttons);
                if (task.imageUrl) {
                  painting.images = [{ fileId: '', url: task.imageUrl }];
                  successArr.push(painting);
                }
                break;
              }
              default: {
                painting.status = task.status ? task.status : painting.status;
                painting.progress = task.progress ? task.progress : painting.progress;
                if (task.imageUrl) {
                  painting.images = [{ fileId: '', url: task.imageUrl }];
                }
                removeTaskId = false;
                break;
              }
            }

            painting.extra.fetchTimes =
              (painting.extra.fetchTimes ? painting.extra.fetchTimes : 0) + 1;
            if (painting.extra.fetchTimes >= 100) {
              painting.status = 'FAILURE';
              painting.failReason = 'fetch task status exceeded times.';
              removeTaskId = true;
            }

            paintingsMap[taskIdMap[task.id]] = painting;

            if (removeTaskId) {
              taskIds.splice(taskIds.indexOf(task.id), 1);
              delete taskIdMap[task.id];
            }
            // 更新到数据库
            if (painting.status === 'SUCCESS' || painting.status === 'FAILURE') {
              paintingService.updatePainting(painting);
            }
          }
        }
        set({ paintingsMap, taskIdMap, taskIds }, false, n('fetchMidjourneyTasksBatch', resJson));
      } catch (e) {
        console.log('[Fetch Midjourney Task Batch Error]:', e);
        // 报错了，可能是不支持mj-plus的批量接口，改成调用单个查询接口。
        set({ mjPlus: false });
      }

      if (get().taskIds.length > 0) {
        if (get().mjPlus) {
          get().fetchMidjourneyTasksBatch();
        } else {
          get().fetchMidjourneyTasks();
        }
      } else {
        set({ isFetching: false });
      }
    }, 10_000);
  },

  getPreviewUrl: (keyPath) => {
    return get().previewMap[keyPath] || keyPath;
  },

  queryPaintings: async () => {
    try {
      const data: Paintings = await paintingService.queryPainting({
        current: get().current,
        pageSize: get().pageSize,
      });
      if (data.length > 0) {
        const current = get().current + 1;
        const paintingsMap: Record<string, Painting> = {
          ...get().paintingsMap,
        };
        const taskIds = get().taskIds;
        const taskIdMap = get().taskIdMap;
        for (const p of data) {
          paintingsMap[p.id] = p;
          if (!['FAILURE', 'SUCCESS', 'CANCEL'].includes(p.status) && p.taskId) {
            taskIdMap[p.taskId] = p.id;
            if (p.platform === 'Midjourney' && !taskIds.includes(p.taskId)) {
              taskIds.push(p.taskId);
            }
          }
        }

        set(
          { current, paintingsMap, taskIdMap, taskIds },
          false,
          n('queryPaintings/onSuccess', data),
        );

        if (taskIds.length > 0 && !get().isFetching) {
          if (get().mjPlus) {
            get().fetchMidjourneyTasksBatch();
          } else {
            get().fetchMidjourneyTasks();
          }
        }
      }
      return data.length;
    } catch (e) {
      console.log('[Query Painting Error]:', e);
      return -1;
    }
  },

  updatePainting: async (painting: Painting) => {
    const paintingsMap = {
      ...get().paintingsMap,
    };
    paintingsMap[painting.id] = painting;
    set({ paintingsMap }, false, n('updatePainting', painting));
    paintingService.updatePainting(painting);

    return 'success';
  },

  updateShowPanel: (showPanel: boolean) => {
    set({ showPanel }, false, n('updateShowPanel', showPanel));
  },

  uploadToDiscord: async (fileList: UploadFile[]) => {
    let result = [] as string[];
    try {
      const base64Array = [] as string[];
      for (const file of fileList) {
        const imgBase64 = await fileToBase64(file.originFileObj as File);
        base64Array.push(imgBase64);
      }
      const path = '/submit/upload-discord-images';
      const method = 'POST';
      const body = JSON.stringify({
        base64Array,
      });

      const res = await fetchToMj({ body, method, path });
      const resJson = await res.json();
      if (resJson.result && resJson.result.length > 0) {
        result = resJson.result;
      } else {
        console.log('Upload image to discord failed.', JSON.stringify(res));
      }
    } catch (e) {
      console.log('Upload image to discord error.', e);
    }

    return result;
  },

  useFetchPaitings: (isLogin) =>
    useSWR<number>(!!isLogin ? FETCH_PAINTINGS_KEY : null, () => get().queryPaintings(), {
      fallbackData: 0,
      onError: (error) => {
        console.log('[Fetch Paintings Error]:', error);
      },
      onSuccess: (data) => {
        console.log('[Fetch Paintings Success]:', data);
      },
      refreshWhenOffline: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      suspense: true,
    }),
});
