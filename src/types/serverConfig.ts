import { DeepPartial } from 'utility-types';

import { IFeatureFlags } from '@/config/featureFlags';
import { ChatModelCard } from '@/types/llm';
import {
  GlobalLLMProviderKey,
  UserDefaultAgent,
  UserSystemAgentConfig,
} from '@/types/user/settings';

export interface ServerModelProviderConfig {
  enabled?: boolean;
  enabledModels?: string[];
  fetchOnClient?: boolean;
  /**
   * the model cards defined in server
   */
  serverModelCards?: ChatModelCard[];
}

export type ServerLanguageModel = Partial<Record<GlobalLLMProviderKey, ServerModelProviderConfig>>;

export interface GlobalServerConfig {
  aiProvider: ServerLanguageModel;
  defaultAgent?: DeepPartial<UserDefaultAgent>;
  enableUploadFileToServer?: boolean;
  enabledAccessCode?: boolean;
  /**
   * @deprecated
   */
  enabledOAuthSSO?: boolean;
  /**
   * @deprecated
   */
  languageModel?: ServerLanguageModel;
  oAuthSSOProviders?: string[];
  systemAgent?: DeepPartial<UserSystemAgentConfig>;
  telemetry: {
    langfuse?: boolean;
  };
}

export interface GlobalRuntimeConfig {
  serverConfig: GlobalServerConfig;
  serverFeatureFlags: IFeatureFlags;
}
