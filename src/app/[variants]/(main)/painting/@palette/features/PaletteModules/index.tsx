'use client';

import { memo } from 'react';

import Midjourney from './Midjourney';

const PaletteModules = memo(() => {
  return <Midjourney />;
});

PaletteModules.displayName = 'PaletteModules';

export default PaletteModules;
