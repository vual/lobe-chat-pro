import { UserSettings } from '@/types/user/settings';

import { DEFAULT_AGENT } from './agent';
import { DEFAULT_COMMON_SETTINGS } from './common';
import { DEFAULT_HOTKEY_CONFIG } from './hotkey';
import { DEFAULT_LLM_CONFIG } from './llm';
import { DEFAULT_SYNC_CONFIG } from './sync';
import { DEFAULT_SYSTEM_AGENT_CONFIG } from './systemAgent';
import { DEFAULT_TOOL_CONFIG } from './tool';
import { DEFAULT_TTS_CONFIG } from './tts';

export const COOKIE_CACHE_DAYS = 30;

export * from './agent';
export * from './hotkey';
export * from './llm';
export * from './systemAgent';
export * from './tool';
export * from './tts';

export const DEFAULT_SETTINGS: UserSettings = {
  defaultAgent: DEFAULT_AGENT,
  general: DEFAULT_COMMON_SETTINGS,
  hotkey: DEFAULT_HOTKEY_CONFIG,
  keyVaults: {},
  languageModel: DEFAULT_LLM_CONFIG,
  sync: DEFAULT_SYNC_CONFIG,
  systemAgent: DEFAULT_SYSTEM_AGENT_CONFIG,
  tool: DEFAULT_TOOL_CONFIG,
  tts: DEFAULT_TTS_CONFIG,
};
