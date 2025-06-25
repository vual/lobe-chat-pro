import { describe, expect, it } from 'vitest';

import { aiProviderSelectors } from '../selectors';

describe('aiProviderSelectors', () => {
  const mockState: any = {
    aiProviderList: [
      { id: 'provider1', enabled: true, sort: 1 },
      { id: 'provider2', enabled: false, sort: 2 },
      { id: 'provider3', enabled: true, sort: 0 },
    ],
    aiProviderDetail: {
      id: 'provider1',
      keyVaults: {
        baseURL: 'https://api.example.com',
        apiKey: 'test-key',
      },
    },
    aiProviderLoadingIds: ['loading-provider'],
    aiProviderConfigUpdatingIds: ['updating-provider'],
    activeAiProvider: 'provider1',
    aiProviderRuntimeConfig: {
      provider1: {
        keyVaults: {
          baseURL: 'https://api.example.com',
          apiKey: 'test-key',
        },
        settings: {
          searchMode: 'internal',
        },
        fetchOnClient: true,
      },
      provider2: {
        keyVaults: {
          baseURL: 'https://api2.example.com',
        },
        settings: {},
      },
      ollama: {
        keyVaults: {},
        settings: {},
        fetchOnClient: true,
      },
    },
    // Required by AIProviderStoreState
    activeProviderModelList: [],
    initAiProviderList: [],
    providerSearchKeyword: '',
    aiModelLoadingIds: [],
    modelFetchingStatus: {},
    modelRuntimeConfig: {},
    modelSearchKeyword: '',
  };

  describe('enabledAiProviderList', () => {
    it('should return enabled providers sorted by sort', () => {
      const result = aiProviderSelectors.enabledAiProviderList(mockState);
      expect(result).toEqual([
        { id: 'provider3', enabled: true, sort: 0 },
        { id: 'provider1', enabled: true, sort: 1 },
      ]);
    });
  });

  describe('disabledAiProviderList', () => {
    it('should return disabled providers', () => {
      const result = aiProviderSelectors.disabledAiProviderList(mockState);
      expect(result).toEqual([{ id: 'provider2', enabled: false, sort: 2 }]);
    });
  });

  describe('isProviderEnabled', () => {
    it('should return true for enabled provider', () => {
      expect(aiProviderSelectors.isProviderEnabled('provider1')(mockState)).toBe(true);
    });

    it('should return false for disabled provider', () => {
      expect(aiProviderSelectors.isProviderEnabled('provider2')(mockState)).toBe(false);
    });
  });

  describe('isProviderLoading', () => {
    it('should return true for loading provider', () => {
      expect(aiProviderSelectors.isProviderLoading('loading-provider')(mockState)).toBe(true);
    });

    it('should return false for non-loading provider', () => {
      expect(aiProviderSelectors.isProviderLoading('provider1')(mockState)).toBe(false);
    });
  });

  describe('activeProviderConfig', () => {
    it('should return active provider config', () => {
      expect(aiProviderSelectors.activeProviderConfig(mockState)).toEqual(
        mockState.aiProviderDetail,
      );
    });
  });

  describe('isAiProviderConfigLoading', () => {
    it('should return true if provider id does not match active provider', () => {
      expect(aiProviderSelectors.isAiProviderConfigLoading('provider2')(mockState)).toBe(true);
    });

    it('should return false if provider id matches active provider', () => {
      expect(aiProviderSelectors.isAiProviderConfigLoading('provider1')(mockState)).toBe(false);
    });
  });

  describe('isActiveProviderEndpointNotEmpty', () => {
    it('should return true when baseURL exists', () => {
      expect(aiProviderSelectors.isActiveProviderEndpointNotEmpty(mockState)).toBe(true);
    });

    it('should return false when no endpoint info exists', () => {
      const stateWithoutEndpoint = {
        ...mockState,
        aiProviderDetail: { keyVaults: {} },
      };
      expect(aiProviderSelectors.isActiveProviderEndpointNotEmpty(stateWithoutEndpoint)).toBe(
        false,
      );
    });
  });

  describe('isActiveProviderApiKeyNotEmpty', () => {
    it('should return true when apiKey exists', () => {
      expect(aiProviderSelectors.isActiveProviderApiKeyNotEmpty(mockState)).toBe(true);
    });

    it('should return false when no api key exists', () => {
      const stateWithoutApiKey = {
        ...mockState,
        aiProviderDetail: { keyVaults: {} },
      };
      expect(aiProviderSelectors.isActiveProviderApiKeyNotEmpty(stateWithoutApiKey)).toBe(false);
    });
  });

  describe('providerConfigById', () => {
    it('should return config for existing provider', () => {
      expect(aiProviderSelectors.providerConfigById('provider1')(mockState)).toEqual(
        mockState.aiProviderRuntimeConfig.provider1,
      );
    });

    it('should return undefined for non-existing provider', () => {
      expect(aiProviderSelectors.providerConfigById('non-existing')(mockState)).toBeUndefined();
    });

    it('should return undefined for empty id', () => {
      expect(aiProviderSelectors.providerConfigById('')(mockState)).toBeUndefined();
    });
  });

  describe('isProviderConfigUpdating', () => {
    it('should return true for updating provider', () => {
      expect(aiProviderSelectors.isProviderConfigUpdating('updating-provider')(mockState)).toBe(
        true,
      );
    });

    it('should return false for non-updating provider', () => {
      expect(aiProviderSelectors.isProviderConfigUpdating('provider1')(mockState)).toBe(false);
    });
  });

  describe('isProviderFetchOnClient', () => {
    it('should return false if provider is in disable browser request list', () => {
      expect(
        aiProviderSelectors.isProviderFetchOnClient('provider-with-disabled-browser')(mockState),
      ).toBe(false);
    });

    it('should follow user settings for whitelisted providers', () => {
      expect(aiProviderSelectors.isProviderFetchOnClient('ollama')(mockState)).toBe(true);
    });

    it('should return false if no endpoint and api key', () => {
      const state = {
        ...mockState,
        aiProviderRuntimeConfig: {
          test: {
            keyVaults: {},
            settings: {},
          },
        },
      };
      expect(aiProviderSelectors.isProviderFetchOnClient('test')(state)).toBe(false);
    });

    it('should return true if only baseURL exists', () => {
      const state = {
        ...mockState,
        aiProviderRuntimeConfig: {
          test: {
            keyVaults: { baseURL: 'http://test.com' },
            settings: {},
          },
        },
      };
      expect(aiProviderSelectors.isProviderFetchOnClient('test')(state)).toBe(true);
    });

    it('should follow user settings if both endpoint and api key exist', () => {
      expect(aiProviderSelectors.isProviderFetchOnClient('provider1')(mockState)).toBe(true);
    });
  });

  describe('providerKeyVaults', () => {
    it('should return key vaults for existing provider', () => {
      expect(aiProviderSelectors.providerKeyVaults('provider1')(mockState)).toEqual(
        mockState.aiProviderRuntimeConfig.provider1.keyVaults,
      );
    });

    it('should return undefined for undefined provider', () => {
      expect(aiProviderSelectors.providerKeyVaults(undefined)(mockState)).toBeUndefined();
    });

    it('should return undefined for non-existing provider', () => {
      expect(aiProviderSelectors.providerKeyVaults('non-existing')(mockState)).toBeUndefined();
    });
  });

  describe('isProviderHasBuiltinSearch', () => {
    it('should return true if provider has search mode', () => {
      expect(aiProviderSelectors.isProviderHasBuiltinSearch('provider1')(mockState)).toBe(true);
    });

    it('should return false if provider has no search mode', () => {
      expect(aiProviderSelectors.isProviderHasBuiltinSearch('provider2')(mockState)).toBe(false);
    });
  });

  describe('isProviderHasBuiltinSearchConfig', () => {
    it('should return false if search mode is internal', () => {
      expect(aiProviderSelectors.isProviderHasBuiltinSearchConfig('provider1')(mockState)).toBe(
        false,
      );
    });

    it('should return false if no search mode exists', () => {
      expect(aiProviderSelectors.isProviderHasBuiltinSearchConfig('provider2')(mockState)).toBe(
        false,
      );
    });
  });
});
