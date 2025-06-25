import { PaletteStore } from '@/store/palette/store';

const palettePlatform = (s: PaletteStore) => s.platform;

export const paletteStoreSelectors = {
  palettePlatform,
};
