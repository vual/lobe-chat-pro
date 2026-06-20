'use client';

import { memo } from 'react';

import { usePaletteStore } from '@/store/palette';
import { paletteStoreSelectors } from '@/store/palette/selectors';

import Kling from './Kling';
import Midjourney from './Midjourney';
import OpenAI from './OpenAI';
import Volcengine from './Volcengine';

const PaletteModules = memo(() => {
  const platform = usePaletteStore(paletteStoreSelectors.palettePlatform);

  switch (platform) {
    case 'OpenAI':
    case 'Flux':
    case 'Recraft': {
      return <OpenAI />;
    }
    case 'Volcengine': {
      return <Volcengine />;
    }
    case 'Kling': {
      return <Kling />;
    }
    default: {
      return <Midjourney />;
    }
  }
});

PaletteModules.displayName = 'PaletteModules';

export default PaletteModules;
