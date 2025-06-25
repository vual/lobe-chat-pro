import { subscribeWithSelector } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { StateCreator } from 'zustand/vanilla';

import { createDevtools } from '@/store/middleware/createDevtools';

import { PaintingStoreAction, createPaintingAction } from './action';
import { type PaintingState, initialState } from './initialState';

//  ===============  聚合 createStoreFn ============ //

export type PaintingStore = PaintingState & PaintingStoreAction;

const createStore: StateCreator<PaintingStore, [['zustand/devtools', never]]> = (
  ...parameters
) => ({
  ...initialState,
  ...createPaintingAction(...parameters),
});

//  ===============  实装 useStore ============ //

const devtools = createDevtools('painting');

export const usePaintingStore = createWithEqualityFn<PaintingStore>()(
  subscribeWithSelector(devtools(createStore)),
  shallow,
);
