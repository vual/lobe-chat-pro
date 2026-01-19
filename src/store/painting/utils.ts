import { UploadFile } from 'antd';

import { AgentRuntimeError } from '@lobechat/model-runtime';
import { ModelProvider } from 'model-bank';
import { createHeaderWithAuth, createPayloadWithKeyVaults } from '@/services/_auth';
import { API_ENDPOINTS } from '@/services/_url';
import { aiProviderSelectors, getAiInfraStoreState } from '@/store/aiInfra';
import { MjStatus } from '@/store/palette/initialState';
import { useUserStore } from '@/store/user';
import { ChatErrorType } from '@/types/fetch';
import { Painting } from '@/types/painting';
import { createTraceHeader } from '@/utils/trace';

export const buildMjParams = (config: MjStatus) => {
  let paramBefore = [
    config.accuracy,
    config.cameraEffects,
    config.characterShots,
    config.light,
    config.paintingTypes,
    config.renderStyle,
    config.scene,
    config.shot,
    config.style,
    config.visualAngles,
  ].join(',');
  paramBefore = paramBefore.replaceAll(/,+/g, ',');
  if (paramBefore === ',') {
    paramBefore = '';
  }
  if (paramBefore.startsWith(',')) {
    paramBefore = paramBefore.slice(1);
  }
  if (paramBefore.length > 0 && !paramBefore.endsWith(',')) {
    paramBefore += ', ';
  }

  let paramBehind = ' ';
  if (config.version !== 'Latest') {
    paramBehind += '--v ' + config.version + ' ';
  }
  paramBehind += '--ar ' + config.size + ' ';
  paramBehind += '--q ' + config.quality + ' ';
  if (config.quality === '2') {
    paramBehind += '--hd ';
  }
  if (config.chaos > 0) {
    paramBehind += '--c ' + config.chaos + ' ';
  }
  if (config.stylize !== 100) {
    paramBehind += '--s ' + config.stylize + ' ';
  }
  if (config.tile) {
    paramBehind += '--tile ';
  }
  if (config.seed !== -1) {
    paramBehind += '--seed ' + config.seed + ' ';
  }

  return { paramBefore, paramBehind };
};

export const buildMjPrompt = (
  painting: Painting,
  paramBefore: string,
  paramBehind: string,
  params: any,
) => {
  let prompt =
    paramBefore +
    painting.prompt.replaceAll('--v', '') +
    (painting.negativePrompt ? ' --no ' + painting.negativePrompt.replaceAll('--v', '') : '') +
    paramBehind +
    (params.sourceImages.length > 0 ? ' --iw ' + painting.config.iw : '');

  if (params.crefImages.length > 0) {
    prompt += ' --cref ';
    params.crefImages.forEach((file: UploadFile, index: number) => {
      if (file.url) {
        prompt +=
          file.url + (params.crefImages.length > 1 ? '::' + painting.config.cws[index] : '') + ' ';
      }
    });
    prompt += '--cw ' + painting.config.cw;
  }

  if (params.styleImages.length > 0) {
    prompt += ' --sref ';
    params.styleImages.forEach((file: UploadFile, index: number) => {
      if (file.url) {
        prompt +=
          file.url + (params.styleImages.length > 1 ? '::' + painting.config.sws[index] : '') + ' ';
      }
    });

    prompt += '--sw ' + painting.config.sw;
  }

  return prompt;
};

export const fetchToMj = async (options: any) => {
  const userStore = useUserStore.getState();
  if (userStore.enableAuth() && !userStore.isSignedIn) {
    throw AgentRuntimeError.createError(ChatErrorType.InvalidAccessCode);
  }

  let url = '';

  const enableFetchOnClient = aiProviderSelectors.isProviderFetchOnClient(ModelProvider.Midjourney)(
    getAiInfraStoreState(),
  );

  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  } as any;

  if (enableFetchOnClient) {
    const authPayload: any = createPayloadWithKeyVaults(ModelProvider.Midjourney);
    url = authPayload?.baseURL;
    url = url.endsWith('/') ? url.slice(0, -1) : url;
    url =
      url.endsWith('mj') ||
      url.endsWith('mj-relax') ||
      url.endsWith('mj-fast') ||
      url.endsWith('mj-turbo')
        ? url + options.path
        : url + '/' + options.interfaceMode + options.path;
    headers['Authorization'] = `Bearer ${authPayload?.apiKey}`;
    headers['mj-api-secret'] = authPayload?.apiKey;
  } else {
    url = API_ENDPOINTS.platformPath('midjourney', options.path);
    const traceHeader = createTraceHeader({
      interfaceMode: options.interfaceMode,
    });
    const authHeaders = await createHeaderWithAuth({
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      payload: {
        interfaceMode: options.interfaceMode,
        provider: ModelProvider.Midjourney,
      },
      provider: ModelProvider.Midjourney,
    });

    headers = {
      ...authHeaders,
      ...traceHeader,
    };
  }

  return fetch(url, {
    body: options.body,
    headers: headers,
    method: options.method,
  });
};

export const buildMjButtons = (buttons: any) => {
  buttons?.forEach((btn: any) => {
    if (btn.emoji.startsWith('upscale')) {
      btn.emoji = '🔳';
      // } else if (btn.label.startsWith('Vary')) {
      //   btn.emoji = '✏️';
    } else if (btn.customId.includes('pan_left')) {
      btn.label = 'Pan Left';
    } else if (btn.customId.includes('pan_right')) {
      btn.label = 'Pan Right';
    } else if (btn.customId.includes('pan_up')) {
      btn.label = 'Pan Up';
    } else if (btn.customId.includes('pan_down')) {
      btn.label = 'Pan Down';
    } else if (btn.customId.includes('BOOKMARK')) {
      btn.label = 'BOOKMARK';
    }
  });

  return buttons;
};
