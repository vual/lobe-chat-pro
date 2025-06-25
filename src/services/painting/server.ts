/* eslint-disable @typescript-eslint/no-unused-vars */
import { lambdaClient } from '@/libs/trpc/client';
import { Painting, Paintings } from '@/types/painting';

import { IPaintingService } from './type';

export class ServerService implements IPaintingService {
  async queryPainting(params?: any): Promise<Paintings> {
    // @ts-ignore
    return lambdaClient.painting.query.query(params);
  }

  async createPainting(painting: Partial<Painting>): Promise<any> {
    return lambdaClient.painting.create.mutate({ ...painting } as any);
  }

  async updatePainting(painting: Partial<Painting>): Promise<any> {
    return lambdaClient.painting.update.mutate({ ...painting } as any);
  }

  async deletePainting(id: string): Promise<any> {
    return lambdaClient.painting.delete.mutate(id);
  }
}
