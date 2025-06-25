import { clientDB } from '@/database/client/db';
import { PaintingModel } from '@/database/models/painting';
import { BaseClientService } from '@/services/baseClientService';
import { Painting, Paintings } from '@/types/painting';

import { IPaintingService } from './type';

export class ClientService extends BaseClientService implements IPaintingService {
  private get paintingModel(): PaintingModel {
    return new PaintingModel(clientDB as any, this.userId);
  }

  async queryPainting(params?: any): Promise<Paintings> {
    return this.paintingModel.query(params);
  }

  async createPainting(painting: Painting): Promise<string> {
    const item = await this.paintingModel.create(painting);
    if (!item) {
      throw new Error('painting create Error');
    }
    return item.id;
  }

  async updatePainting(painting: Painting): Promise<any> {
    return this.paintingModel.update(painting.id, { ...painting } as any);
  }

  async deletePainting(id: string): Promise<any> {
    return this.paintingModel.delete(id);
  }
}
