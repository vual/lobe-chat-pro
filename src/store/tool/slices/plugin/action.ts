import { Schema, ValidationResult } from '@cfworker/json-schema';
import { SWRResponse } from 'swr';
import { StateCreator } from 'zustand/vanilla';

import { MESSAGE_CANCEL_FLAT } from '@/const/message';
import { useClientDataSWR } from '@/libs/swr';
import { pluginService } from '@/services/plugin';
import { merge } from '@/utils/merge';

import { ToolStore } from '../../store';
import { pluginStoreSelectors } from '../store/selectors';
import { pluginSelectors } from './selectors';

/**
 * 插件接口
 */
export interface PluginAction {
  checkPluginsIsInstalled: (plugins: string[]) => Promise<void>;
  removeAllPlugins: () => Promise<void>;
  updatePluginSettings: <T>(id: string, settings: Partial<T>) => Promise<void>;
  useCheckPluginsIsInstalled: (enable: boolean, plugins: string[]) => SWRResponse;
  validatePluginSettings: (identifier: string) => Promise<ValidationResult | undefined>;
}

export const createPluginSlice: StateCreator<
  ToolStore,
  [['zustand/devtools', never]],
  [],
  PluginAction
> = (set, get) => ({
  checkPluginsIsInstalled: async (plugins) => {
    // if there is no plugins, just skip.
    if (plugins.length === 0) return;

    const { loadPluginStore, installPlugins } = get();

    // check if the store is empty
    // if it is, we need to load the plugin store
    if (pluginStoreSelectors.onlinePluginStore(get()).length === 0) {
      await loadPluginStore();
    }

    await installPlugins(plugins);
  },
  removeAllPlugins: async () => {
    await pluginService.removeAllPlugins();
    await get().refreshPlugins();
  },
  updatePluginSettings: async (id, settings) => {
    const signal = get().updatePluginSettingsSignal;
    if (signal) signal.abort(MESSAGE_CANCEL_FLAT);

    const newSignal = new AbortController();

    const previousSettings = pluginSelectors.getPluginSettingsById(id)(get());
    const nextSettings = merge(previousSettings, settings);

    set({ updatePluginSettingsSignal: newSignal }, false, 'create new Signal');
    await pluginService.updatePluginSettings(id, nextSettings, newSignal.signal);

    await get().refreshPlugins();
  },
  useCheckPluginsIsInstalled: (enable, plugins) =>
    useClientDataSWR(enable ? plugins : null, get().checkPluginsIsInstalled),
  validatePluginSettings: async (identifier) => {
    const manifest = pluginSelectors.getToolManifestById(identifier)(get());
    if (!manifest || !manifest.settings) return;
    const settings = pluginSelectors.getPluginSettingsById(identifier)(get());

    // validate the settings
    const { Validator } = await import('@cfworker/json-schema');
    const validator = new Validator(manifest.settings as Schema);
    const result = validator.validate(settings);

    if (!result.valid) return { errors: result.errors, valid: false };

    return { errors: [], valid: true };
  },
});
