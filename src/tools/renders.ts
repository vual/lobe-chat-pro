import { BuiltinRender } from '@/types/tool';

import { DalleManifest } from './dalle';
import DalleRender from './dalle/Render';
import { LocalSystemManifest } from './local-system';
import LocalFilesRender from './local-system/Render';
import { WebBrowsingManifest } from './web-browsing';
import WebBrowsing from './web-browsing/Render';

export const BuiltinToolsRenders: Record<string, BuiltinRender> = {
  [DalleManifest.identifier]: DalleRender as BuiltinRender,
  [WebBrowsingManifest.identifier]: WebBrowsing as BuiltinRender,
  [LocalSystemManifest.identifier]: LocalFilesRender as BuiltinRender,
};
