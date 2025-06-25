export interface MjStatus {
  accuracy: string; // 画面精度
  action: string; // IMAGINE、BLEND、DESCRIBE、INSIGHTFACE
  botType: string; // MID_JOURNEY or NIJI_JOURNEY
  cameraEffects: string; // 相机效果
  chaos: number;
  characterShots: string; // 人物镜头
  cw: number; // 角色一致性参考图权重
  cws: number[]; // 角色一致性参考图多图相对权重
  interfaceMode: string; // 接口类型
  iw: number; // 参考图权重
  light: string; // 光线
  paintingTypes: string; // 绘画类型
  quality: string;
  renderStyle: string; // 渲染风格
  scene: string; // 场景
  seed: number; // 种子
  shot: string; // 镜头
  size: string; // 1:1 or 3:2 or 3:4 or 4:3 or 9:16 or 16:9
  style: string; // 画面风格
  stylize: number;
  sw: number; // 风格参考图权重
  sws: number[]; // 风格参考图多图相对权重
  tile: boolean;
  version: string; // 6 or 5.2 or 5.1 or 5
  visualAngles: string; // 视角
}

export interface PaletteState {
  mjStatus: MjStatus;
  platform: string; // Midjourney Stable-Diffusion Dall-E
}

export const MJ_INITIAL_STATUS: MjStatus = {
  accuracy: '',
  action: 'IMAGINE', // IMAGINE、BLEND、DESCRIBE、INSIGHTFACE
  botType: 'MID_JOURNEY', // MID_JOURNEY or NIJI_JOURNEY
  cameraEffects: '',
  chaos: 0, // 混乱程度
  characterShots: '',
  cw: 100,
  cws: [1, 1, 1, 1, 1],
  interfaceMode: 'mj',
  iw: 2,
  light: '',
  paintingTypes: '',
  quality: '1', // 图片质量
  renderStyle: '',
  scene: '',
  seed: -1, // 种子
  shot: '',
  size: '1:1', // 1:1 or 3:2 or 3:4 or 4:3 or 9:16 or 16:9
  style: '',
  stylize: 100, // 风格化程度
  sw: 100,
  sws: [1, 1, 1, 1, 1],
  tile: false, // 纹理平铺
  version: 'Latest', // Latest 6 or 5.2 or 5.1 or 5
  visualAngles: '',
} satisfies MjStatus;

export const initialState: PaletteState = {
  mjStatus: { ...MJ_INITIAL_STATUS },
  platform: 'Midjourney',
};
