/* eslint-disable typescript-sort-keys/interface */
import { Painting, Paintings } from '@/types/painting';

export interface IPaintingService {
  queryPainting(params?: {
    condition?: any;
    current?: number;
    pageSize?: number;
  }): Promise<Paintings>;

  createPainting(painting: Partial<Painting>): Promise<string>;

  updatePainting(painting: Partial<Painting>): Promise<any>;

  deletePainting(id: string): Promise<any>;
}
