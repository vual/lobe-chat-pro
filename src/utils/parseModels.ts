import { produce } from 'immer';

import { LOBE_DEFAULT_MODEL_LIST } from '@/config/aiModels';
import { AiFullModelCard } from '@/types/aiModel';
import { merge } from '@/utils/merge';

/**
 * Parse model string to add or remove models.
 */
export const parseModelString = (modelString: string = '', withDeploymentName = false) => {
  let models: AiFullModelCard[] = [];
  let removeAll = false;
  const removedModels: string[] = [];
  const modelNames = modelString.split(/[,，]/).filter(Boolean);

  for (const item of modelNames) {
    const disable = item.startsWith('-');
    const nameConfig = item.startsWith('+') || item.startsWith('-') ? item.slice(1) : item;
    const [idAndDisplayName, ...capabilities] = nameConfig.split('<');
    let [id, displayName] = idAndDisplayName.split('=');

    let deploymentName: string | undefined;

    if (withDeploymentName) {
      [id, deploymentName] = id.split('->');
      // if (!deploymentName) deploymentName = id;
    }

    if (disable) {
      // Disable all models.
      if (id === 'all') {
        removeAll = true;
      }
      removedModels.push(id);
      continue;
    }

    // remove empty model name
    if (!item.trim().length) {
      continue;
    }

    // Remove duplicate model entries.
    const existingIndex = models.findIndex(({ id: n }) => n === id);
    if (existingIndex !== -1) {
      models.splice(existingIndex, 1);
    }

    const model: AiFullModelCard = {
      abilities: {},
      displayName: displayName || undefined,
      id,
      // TODO: 临时写死为 chat ，后续基于元数据迭代成对应的类型
      type: 'chat',
    };

    if (deploymentName) {
      model.config = { deploymentName };
    }

    if (capabilities.length > 0) {
      const [maxTokenStr, ...capabilityList] = capabilities[0].replace('>', '').split(':');
      model.contextWindowTokens = parseInt(maxTokenStr, 10) || undefined;

      for (const capability of capabilityList) {
        switch (capability) {
          case 'reasoning': {
            model.abilities!.reasoning = true;
            break;
          }
          case 'vision': {
            model.abilities!.vision = true;
            break;
          }
          case 'fc': {
            model.abilities!.functionCall = true;
            break;
          }
          case 'file': {
            model.abilities!.files = true;
            break;
          }
          case 'search': {
            model.abilities!.search = true;
            break;
          }
          case 'imageOutput': {
            model.abilities!.imageOutput = true;
            break;
          }
          default: {
            console.warn(`Unknown capability: ${capability}`);
          }
        }
      }
    }

    models.push(model);
  }

  return {
    add: models,
    removeAll,
    removed: removedModels,
  };
};

/**
 * Extract a special method to process chatModels
 */
export const transformToAiChatModelList = ({
  modelString = '',
  defaultChatModels,
  providerId,
  withDeploymentName = false,
}: {
  defaultChatModels: AiFullModelCard[];
  modelString?: string;
  providerId: string;
  withDeploymentName?: boolean;
}): AiFullModelCard[] | undefined => {
  if (!modelString) return undefined;

  const modelConfig = parseModelString(modelString, withDeploymentName);
  let chatModels = modelConfig.removeAll ? [] : defaultChatModels;

  // 处理移除逻辑
  if (!modelConfig.removeAll) {
    chatModels = chatModels.filter((m) => !modelConfig.removed.includes(m.id));
  }

  return produce(chatModels, (draft) => {
    // 处理添加或替换逻辑
    for (const toAddModel of modelConfig.add) {
      // first try to find the model in LOBE_DEFAULT_MODEL_LIST to confirm if it is a known model
      let knownModel = LOBE_DEFAULT_MODEL_LIST.find(
        (model) => model.id === toAddModel.id && model.providerId === providerId,
      );

      if (!knownModel) {
        knownModel = LOBE_DEFAULT_MODEL_LIST.find((model) => model.id === toAddModel.id);
        if (knownModel) knownModel.providerId = providerId;
      }
      if (withDeploymentName) {
        toAddModel.config = toAddModel.config || {};
        if (!toAddModel.config.deploymentName) {
          toAddModel.config.deploymentName = knownModel?.config?.deploymentName ?? toAddModel.id;
        }
      }

      // if the model is known, update it based on the known model
      if (knownModel) {
        const index = draft.findIndex((model) => model.id === toAddModel.id);
        const modelInList = draft[index];

        // if the model is already in chatModels, update it
        if (modelInList) {
          draft[index] = merge(modelInList, {
            ...toAddModel,
            displayName: toAddModel.displayName || modelInList.displayName || modelInList.id,
            enabled: true,
          });
        } else {
          // if the model is not in chatModels, add it
          draft.push(
            merge(knownModel, {
              ...toAddModel,
              displayName: toAddModel.displayName || knownModel.displayName || knownModel.id,
              enabled: true,
            }),
          );
        }
      } else {
        // if the model is not in LOBE_DEFAULT_MODEL_LIST, add it as a new custom model
        draft.push({
          ...toAddModel,
          displayName: toAddModel.displayName || toAddModel.id,
          enabled: true,
        });
      }
    }
  });
};

export const extractEnabledModels = (modelString: string = '', withDeploymentName = false) => {
  const modelConfig = parseModelString(modelString, withDeploymentName);
  const list = modelConfig.add.map((m) => m.id);

  if (list.length === 0) return;

  return list;
};
