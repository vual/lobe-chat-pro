import { PaintingStore } from './store';

const paintingsMap = (s: PaintingStore) => s.paintingsMap;
const showPanel = (s: PaintingStore) => s.showPanel;

export const paintingStoreSelectors = {
  paintingsMap,
  showPanel,
};
