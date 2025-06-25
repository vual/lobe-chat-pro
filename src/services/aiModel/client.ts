import { clientDB } from '@/database/client/db';
import { AiModelModel } from '@/database/models/aiModel';
import { AiInfraRepos } from '@/database/repositories/aiInfra';
import { BaseClientService } from '@/services/baseClientService';

import { IAiModelService } from './type';

export class ClientService extends BaseClientService implements IAiModelService {
  private get aiModel(): AiModelModel {
    return new AiModelModel(clientDB as any, this.userId);
  }
  private get aiInfraRepos(): AiInfraRepos {
    let config = {};

    if (typeof window !== 'undefined') {
      config = window.global_serverConfigStore.getState().serverConfig.aiProvider || {};
    }

    return new AiInfraRepos(clientDB as any, this.userId, config);
  }

  createAiModel: IAiModelService['createAiModel'] = async (params) => {
    const data = await this.aiModel.create(params);

    return data?.id;
  };

  getAiProviderModelList: IAiModelService['getAiProviderModelList'] = async (id) => {
    return this.aiInfraRepos.getAiProviderModelList(id);
  };

  getAiModelById: IAiModelService['getAiModelById'] = async (id) => {
    return this.aiModel.findById(id);
  };

  toggleModelEnabled: IAiModelService['toggleModelEnabled'] = async (params) => {
    return this.aiModel.toggleModelEnabled(params);
  };

  updateAiModel: IAiModelService['updateAiModel'] = async (id, providerId, value) => {
    return this.aiModel.update(id, providerId, value);
  };

  batchUpdateAiModels: IAiModelService['batchUpdateAiModels'] = async (id, models) => {
    return this.aiModel.batchUpdateAiModels(id, models);
  };

  batchToggleAiModels: IAiModelService['batchToggleAiModels'] = async (id, models, enabled) => {
    return this.aiModel.batchToggleAiModels(id, models, enabled);
  };

  clearRemoteModels: IAiModelService['clearRemoteModels'] = async (providerId) => {
    return this.aiModel.clearRemoteModels(providerId);
  };

  clearModelsByProvider: IAiModelService['clearModelsByProvider'] = async (providerId) => {
    return this.aiModel.clearModelsByProvider(providerId);
  };

  updateAiModelOrder: IAiModelService['updateAiModelOrder'] = async (providerId, items) => {
    return this.aiModel.updateModelsOrder(providerId, items);
  };

  deleteAiModel: IAiModelService['deleteAiModel'] = async (params: {
    id: string;
    providerId: string;
  }) => {
    return this.aiModel.delete(params.id, params.providerId);
  };
}
