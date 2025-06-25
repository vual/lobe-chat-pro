import { ProviderIcon } from '@lobehub/icons';
import { Button } from '@lobehub/ui';
import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';

import { ModelProvider } from '@/libs/model-runtime';
import { useChatStore } from '@/store/chat';
import { GlobalLLMProviderKey } from '@/types/user/settings';

import BedrockForm from './Bedrock';
import { LoadingContext } from './LoadingContext';
import ProviderApiKeyForm from './ProviderApiKeyForm';

interface APIKeyFormProps {
  id: string;
  provider?: string;
}

const APIKeyForm = memo<APIKeyFormProps>(({ id, provider }) => {
  const { t } = useTranslation('error');
  const [loading, setLoading] = useState(false);

  const [resend, deleteMessage] = useChatStore((s) => [s.regenerateMessage, s.deleteMessage]);

  const apiKeyPlaceholder = useMemo(() => {
    switch (provider) {
      case ModelProvider.Anthropic: {
        return 'sk-ant_*****************************';
      }

      case ModelProvider.OpenRouter: {
        return 'sk-or-********************************';
      }

      case ModelProvider.Perplexity: {
        return 'pplx-********************************';
      }

      case ModelProvider.ZhiPu: {
        return '*********************.*************';
      }

      case ModelProvider.Groq: {
        return 'gsk_*****************************';
      }

      case ModelProvider.DeepSeek: {
        return 'sk_******************************';
      }

      case ModelProvider.Qwen: {
        return 'sk-********************************';
      }

      case ModelProvider.Github: {
        return 'ghp_*****************************';
      }

      default: {
        return '*********************************';
      }
    }
  }, [provider]);

  return (
    <LoadingContext value={{ loading, setLoading }}>
      <Center gap={16} style={{ maxWidth: 300 }}>
        {provider === ModelProvider.Bedrock ? (
          <BedrockForm />
        ) : (
          <ProviderApiKeyForm
            apiKeyPlaceholder={apiKeyPlaceholder}
            avatar={<ProviderIcon provider={provider} size={80} type={'avatar'} />}
            provider={provider as GlobalLLMProviderKey}
            showEndpoint={provider === ModelProvider.OpenAI}
          />
        )}
        <Flexbox gap={12} width={'100%'}>
          <Button
            block
            disabled={loading}
            onClick={() => {
              resend(id);
              deleteMessage(id);
            }}
            style={{ marginTop: 8 }}
            type={'primary'}
          >
            {t('unlock.confirm')}
          </Button>
          <Button
            onClick={() => {
              deleteMessage(id);
            }}
          >
            {t('unlock.closeMessage')}
          </Button>
        </Flexbox>
      </Center>
    </LoadingContext>
  );
});

export default APIKeyForm;
