import { Painting } from '@/types/painting';

export interface PaintingState {
  current: number;
  isFetching: boolean; // 是否正在获取mj任务状态
  mjPlus: boolean; // 是否mj-plus接口
  pageSize: number;
  paintingsMap: Record<string, Painting>;
  previewMap: Record<string, string>;
  showPanel: boolean;
  taskIdMap: Record<string, string>; // <taskId, id>
  taskIds: string[]; // 需要获取结果的任务id
}

export const initialState: PaintingState = {
  current: 1,
  isFetching: false,
  mjPlus: true,
  pageSize: 10,
  paintingsMap: {},
  previewMap: {} as Record<string, string>,
  showPanel: false,
  taskIdMap: {},
  taskIds: [] as string[],
};
