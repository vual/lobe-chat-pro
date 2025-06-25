import { LobeSessions } from '@/types/session/agentSession';
import { LobeSessionGroups, SessionGroupId } from '@/types/session/sessionGroup';

export * from './agentSession';
export * from './sessionGroup';

export interface ChatSessionList {
  sessionGroups: LobeSessionGroups;
  sessions: LobeSessions;
}

export interface UpdateSessionParams {
  group?: SessionGroupId;
  meta?: any;
  pinned?: boolean;
  updatedAt: Date;
}

export interface SessionRankItem {
  avatar: string | null;
  backgroundColor: string | null;
  count: number;
  id: string;
  title: string | null;
}
