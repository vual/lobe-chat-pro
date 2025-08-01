import { t } from 'i18next';
import { produce } from 'immer';
import { uniqBy } from 'lodash-es';
import useSWR, { SWRResponse, mutate } from 'swr';
import { StateCreator } from 'zustand/vanilla';

import { notification } from '@/components/AntdStaticMethods';
import { pluginService } from '@/services/plugin';
import { toolService } from '@/services/tool';
import { globalHelpers } from '@/store/global/helpers';
import { pluginStoreSelectors } from '@/store/tool/selectors';
import { DiscoverPluginItem, PluginListResponse, PluginQueryParams } from '@/types/discover';
import { LobeTool } from '@/types/tool';
import { PluginInstallError } from '@/types/tool/plugin';
import { sleep } from '@/utils/sleep';
import { setNamespace } from '@/utils/storeDebug';

import { ToolStore } from '../../store';
import { PluginInstallProgress, PluginInstallStep, PluginStoreState } from './initialState';

const n = setNamespace('pluginStore');

const INSTALLED_PLUGINS = 'loadInstalledPlugins';

export interface PluginStoreAction {
  installOldPlugin: (identifier: string, source?: 'plugin' | 'customPlugin') => Promise<void>;
  installPlugin: (identifier: string, source?: 'plugin' | 'customPlugin') => Promise<void>;
  installPlugins: (plugins: string[]) => Promise<void>;
  loadMorePlugins: () => void;
  loadPluginStore: () => Promise<DiscoverPluginItem[]>;
  refreshPlugins: () => Promise<void>;

  resetPluginList: (keywords?: string) => void;
  uninstallPlugin: (identifier: string) => Promise<void>;
  updateInstallLoadingState: (key: string, value: boolean | undefined) => void;
  updatePluginInstallProgress: (
    identifier: string,
    progress: PluginInstallProgress | undefined,
  ) => void;

  useFetchInstalledPlugins: (enabled: boolean) => SWRResponse<LobeTool[]>;
  useFetchPluginList: (params: PluginQueryParams) => SWRResponse<PluginListResponse>;
  useFetchPluginStore: () => SWRResponse<DiscoverPluginItem[]>;
}

export const createPluginStoreSlice: StateCreator<
  ToolStore,
  [['zustand/devtools', never]],
  [],
  PluginStoreAction
> = (set, get) => ({
  installOldPlugin: async (name, type = 'plugin') => {
    const plugin = pluginStoreSelectors.getPluginById(name)(get());
    if (!plugin) return;

    const { updateInstallLoadingState, refreshPlugins, updatePluginInstallProgress } = get();

    try {
      // 开始安装流程
      updateInstallLoadingState(name, true);

      // 步骤 1: 获取插件清单
      updatePluginInstallProgress(name, {
        progress: 25,
        step: PluginInstallStep.FETCHING_MANIFEST,
      });

      const data = await toolService.getToolManifest(plugin.manifest);

      // 步骤 2: 安装插件
      updatePluginInstallProgress(name, {
        progress: 60,
        step: PluginInstallStep.INSTALLING_PLUGIN,
      });

      await pluginService.installPlugin({ identifier: plugin.identifier, manifest: data, type });

      updatePluginInstallProgress(name, {
        progress: 85,
        step: PluginInstallStep.INSTALLING_PLUGIN,
      });

      await refreshPlugins();

      // 步骤 4: 完成安装
      updatePluginInstallProgress(name, {
        progress: 100,
        step: PluginInstallStep.COMPLETED,
      });

      // 短暂显示完成状态后清除进度
      await sleep(1000);

      updatePluginInstallProgress(name, undefined);
      updateInstallLoadingState(name, undefined);
    } catch (error) {
      console.error(error);

      const err = error as PluginInstallError;

      // 设置错误状态
      updatePluginInstallProgress(name, {
        error: err.message,
        progress: 0,
        step: PluginInstallStep.ERROR,
      });

      updateInstallLoadingState(name, undefined);

      notification.error({
        description: t(`error.${err.message}`, { ns: 'plugin' }),
        message: t('error.installError', { name: plugin.title, ns: 'plugin' }),
      });
    }
  },
  installPlugin: async (name, type = 'plugin') => {
    const plugin = pluginStoreSelectors.getPluginById(name)(get());
    if (!plugin) return;

    const { updateInstallLoadingState, refreshPlugins } = get();
    try {
      updateInstallLoadingState(name, true);
      const data = await toolService.getToolManifest(plugin.manifest);

      await pluginService.installPlugin({ identifier: plugin.identifier, manifest: data, type });
      await refreshPlugins();

      updateInstallLoadingState(name, undefined);
    } catch (error) {
      console.error(error);

      const err = error as PluginInstallError;

      updateInstallLoadingState(name, undefined);

      notification.error({
        description: t(`error.${err.message}`, { ns: 'plugin' }),
        message: t('error.installError', { name: plugin.title, ns: 'plugin' }),
      });
    }
  },
  installPlugins: async (plugins) => {
    const { installPlugin } = get();

    await Promise.all(plugins.map((identifier) => installPlugin(identifier)));
  },
  loadMorePlugins: () => {
    const { oldPluginItems, pluginTotalCount, currentPluginPage } = get();

    // 检查是否还有更多数据可以加载
    if (oldPluginItems.length < (pluginTotalCount || 0)) {
      set(
        produce((draft: PluginStoreState) => {
          draft.currentPluginPage = currentPluginPage + 1;
        }),
        false,
        n('loadMorePlugins'),
      );
    }
  },
  loadPluginStore: async () => {
    const locale = globalHelpers.getCurrentLanguage();

    const data = await toolService.getOldPluginList({
      locale,
      page: 1,
      pageSize: 50,
    });

    set({ oldPluginItems: data.items }, false, n('loadPluginList'));

    return data.items;
  },
  refreshPlugins: async () => {
    await mutate(INSTALLED_PLUGINS);
  },
  resetPluginList: (keywords) => {
    set(
      produce((draft: PluginStoreState) => {
        draft.oldPluginItems = [];
        draft.currentPluginPage = 1;
        draft.pluginSearchKeywords = keywords;
      }),
      false,
      n('resetPluginList'),
    );
  },
  uninstallPlugin: async (identifier) => {
    await pluginService.uninstallPlugin(identifier);
    await get().refreshPlugins();
  },
  updateInstallLoadingState: (key, value) => {
    set(
      produce((draft: PluginStoreState) => {
        draft.pluginInstallLoading[key] = value;
      }),
      false,
      n('updateInstallLoadingState'),
    );
  },
  updatePluginInstallProgress: (identifier, progress) => {
    set(
      produce((draft: PluginStoreState) => {
        draft.pluginInstallProgress[identifier] = progress;
      }),
      false,
      n(`updatePluginInstallProgress/${progress?.step || 'clear'}`),
    );
  },

  useFetchInstalledPlugins: (enabled: boolean) =>
    useSWR<LobeTool[]>(enabled ? INSTALLED_PLUGINS : null, pluginService.getInstalledPlugins, {
      fallbackData: [],
      onSuccess: (data) => {
        set(
          { installedPlugins: data, loadingInstallPlugins: false },
          false,
          n('useFetchInstalledPlugins'),
        );
      },
      revalidateOnFocus: false,
      suspense: true,
    }),
  useFetchPluginList: (params) => {
    const locale = globalHelpers.getCurrentLanguage();

    return useSWR<PluginListResponse>(
      ['useFetchPluginList', locale, ...Object.values(params)].filter(Boolean).join('-'),
      async () => toolService.getOldPluginList(params),
      {
        onSuccess(data) {
          set(
            produce((draft: PluginStoreState) => {
              draft.pluginSearchLoading = false;

              // 设置基础信息
              if (!draft.isPluginListInit) {
                draft.activePluginIdentifier = data.items?.[0]?.identifier;
                draft.isPluginListInit = true;
                draft.pluginTotalCount = data.totalCount;
              }

              // 累积数据逻辑
              if (params.page === 1) {
                // 第一页，直接设置
                draft.oldPluginItems = uniqBy(data.items, 'identifier');
              } else {
                // 后续页面，累积数据
                draft.oldPluginItems = uniqBy(
                  [...draft.oldPluginItems, ...data.items],
                  'identifier',
                );
              }
            }),
            false,
            n('useFetchPluginList/onSuccess'),
          );
        },
        revalidateOnFocus: false,
      },
    );
  },
  useFetchPluginStore: () =>
    useSWR<DiscoverPluginItem[]>('loadPluginStore', get().loadPluginStore, {
      fallbackData: [],
      revalidateOnFocus: false,
      suspense: true,
    }),
});
