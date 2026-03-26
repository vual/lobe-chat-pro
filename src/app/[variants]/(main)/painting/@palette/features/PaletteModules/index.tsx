'use client';

import { memo } from 'react';

import { usePaletteStore } from '@/store/palette';
import { paletteStoreSelectors } from '@/store/palette/selectors';

import Midjourney from './Midjourney';
import OpenAI from './OpenAI';

const PaletteModules = memo(() => {
  const platform = usePaletteStore(paletteStoreSelectors.palettePlatform);

  switch (platform) {
    case 'OpenAI':
    case 'Flux':
    case 'Recraft': {
      return <OpenAI />;
    }
    default: {
      return <Midjourney />;
    }
  }
});

PaletteModules.displayName = 'PaletteModules';

export default PaletteModules;
