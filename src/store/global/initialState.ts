import type { ThemeMode } from 'antd-style';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { DatabaseLoadingState, MigrationSQL, MigrationTableItem } from '@/types/clientDB';
import { LocaleMode } from '@/types/locale';
import { SessionDefaultGroup } from '@/types/session';
import { AsyncLocalStorage } from '@/utils/localStorage';

export enum SidebarTabKey {
  Chat = 'chat',
  Discover = 'discover',
  Files = 'files',
  Me = 'me',
  Painting = 'painting',
  Setting = 'settings',
}

export enum ChatSettingsTabs {
  Chat = 'chat',
  Meta = 'meta',
  Modal = 'modal',
  Opening = 'opening',
  Plugin = 'plugin',
  Prompt = 'prompt',
  TTS = 'tts',
}

export enum SettingsTabs {
  About = 'about',
  Agent = 'agent',
  Common = 'common',
  Hotkey = 'hotkey',
  LLM = 'llm',
  Provider = 'provider',
  Storage = 'storage',
  Sync = 'sync',
  SystemAgent = 'system-agent',
  TTS = 'tts',
}

export enum ProfileTabs {
  Profile = 'profile',
  Security = 'security',
  Stats = 'stats',
}

export interface SystemStatus {
  // which sessionGroup should expand
  expandSessionGroupKeys: string[];
  filePanelWidth: number;
  hidePWAInstaller?: boolean;
  hideThreadLimitAlert?: boolean;
  inputHeight: number;
  /**
   * 应用初始化时不启用 PGLite，只有当用户手动开启时才启用
   */
  isEnablePglite?: boolean;
  isShowCredit?: boolean;
  language?: LocaleMode;
  latestChangelogId?: string;
  mobileShowPortal?: boolean;
  mobileShowTopic?: boolean;
  paletteWidth: number;
  portalWidth: number;
  sessionsWidth: number;
  showChatSideBar?: boolean;
  showFilePanel?: boolean;
  showHotkeyHelper?: boolean;
  showPalettePanel?: boolean;
  showSessionPanel?: boolean;
  showSystemRole?: boolean;
  systemRoleExpandedMap: Record<string, boolean>;
  /**
   * theme mode
   */
  themeMode?: ThemeMode;
  threadInputHeight: number;
  zenMode?: boolean;
}

export interface GlobalState {
  hasNewVersion?: boolean;
  initClientDBError?: Error;
  initClientDBMigrations?: {
    sqls: MigrationSQL[];
    tableRecords: MigrationTableItem[];
  };

  initClientDBProcess?: { costTime?: number; phase: 'wasm' | 'dependencies'; progress: number };
  /**
   * 客户端数据库初始化状态
   * 启动时为 Idle，完成为 Ready，报错为 Error
   */
  initClientDBStage: DatabaseLoadingState;
  isMobile?: boolean;
  isStatusInit?: boolean;
  latestVersion?: string;
  router?: AppRouterInstance;
  sidebarKey: SidebarTabKey;
  status: SystemStatus;
  statusStorage: AsyncLocalStorage<SystemStatus>;
}

export const INITIAL_STATUS = {
  expandSessionGroupKeys: [SessionDefaultGroup.Pinned, SessionDefaultGroup.Default],
  filePanelWidth: 320,
  hidePWAInstaller: false,
  hideThreadLimitAlert: false,
  inputHeight: 200,
  mobileShowTopic: false,
  paletteWidth: 400,
  portalWidth: 400,
  sessionsWidth: 320,
  showChatSideBar: true,
  showFilePanel: true,
  showHotkeyHelper: false,
  showPalettePanel: true,
  showSessionPanel: true,
  showSystemRole: false,
  systemRoleExpandedMap: {},
  themeMode: 'auto',
  threadInputHeight: 200,
  zenMode: false,
} satisfies SystemStatus;

export const initialState: GlobalState = {
  initClientDBStage: DatabaseLoadingState.Idle,
  isMobile: false,
  isStatusInit: false,
  sidebarKey: SidebarTabKey.Chat,
  status: INITIAL_STATUS,
  statusStorage: new AsyncLocalStorage('LOBE_SYSTEM_STATUS'),
};
