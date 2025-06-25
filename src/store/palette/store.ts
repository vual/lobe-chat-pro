import { subscribeWithSelector } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { StateCreator } from 'zustand/vanilla';

import { PaletteStoreAction, createPaletteAction } from '@/store/palette/action';

import { createDevtools } from '../middleware/createDevtools';
import { type PaletteState, initialState } from './initialState';

//  ===============  聚合 createStoreFn ============ //

export type PaletteStore = PaletteState & PaletteStoreAction;

const createStore: StateCreator<PaletteStore, [['zustand/devtools', never]]> = (...parameters) => ({
  ...initialState,
  ...createPaletteAction(...parameters),
});

//  ===============  实装 useStore ============ //

const devtools = createDevtools('palette');

export const usePaletteStore = createWithEqualityFn<PaletteStore>()(
  subscribeWithSelector(devtools(createStore)),
  shallow,
);
