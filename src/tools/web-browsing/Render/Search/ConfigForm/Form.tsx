import { Button, Icon } from '@lobehub/ui';
import { KeyRoundIcon, Loader2Icon } from 'lucide-react';
import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';

import { FormInput, FormPassword } from '@/components/FormInput';
import { useChatStore } from '@/store/chat';
import { useUserStore } from '@/store/user';
import { keyVaultsConfigSelectors } from '@/store/user/selectors';

import SearchXNGIcon from './SearchXNGIcon';
import { FormAction } from './style';

interface ProviderApiKeyFormProps {
  id: string;
  provider: string;
}

const Form = memo<ProviderApiKeyFormProps>(({ provider, id }) => {
  const { t } = useTranslation('plugin');

  const [apiKey, baseURL, setConfig] = useUserStore((s) => [
    keyVaultsConfigSelectors.getVaultByProvider(provider as any)(s)?.apiKey,
    keyVaultsConfigSelectors.getVaultByProvider(provider as any)(s)?.baseURL,
    s.updateKeyVaultSettings,
  ]);

  const [showKey, setShow] = useState(false);

  const [resend, deleteMessage] = useChatStore((s) => [s.reInvokeToolMessage, s.deleteMessage]);

  const [loading, setLoading] = useState(false);

  const avatar = useMemo(() => {
    switch (provider) {
      default: {
        return <SearchXNGIcon />;
      }
    }
  }, [provider]);

  return (
    <Center gap={16} style={{ width: 400 }}>
      <FormAction
        avatar={avatar}
        description={t('search.searchxng.description')}
        title={t('search.searchxng.title')}
      >
        <FormInput
          onChange={(value) => {
            setConfig(provider, { baseURL: value });
          }}
          placeholder={'https://searxng.xxx'}
          suffix={<div>{loading && <Icon icon={Loader2Icon} spin />}</div>}
          value={baseURL}
        />
        {showKey ? (
          <FormPassword
            autoComplete={'new-password'}
            onChange={(value) => {
              setConfig(provider, { apiKey: value });
            }}
            placeholder={t('search.searchxng.keyPlaceholder')}
            suffix={<div>{loading && <Icon icon={Loader2Icon} spin />}</div>}
            value={apiKey}
          />
        ) : (
          <Button
            block
            icon={KeyRoundIcon}
            onClick={() => {
              setShow(true);
            }}
            type={'text'}
          >
            {t('search.config.addKey')}
          </Button>
        )}
        <Flexbox gap={12} width={'100%'}>
          <Button
            block
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              resend(id).then(() => {
                setLoading(false);
              });
              // deleteMessage(id);
            }}
            style={{ marginTop: 8 }}
            type={'primary'}
          >
            {t('search.config.confirm')}
          </Button>
          <Button
            onClick={() => {
              deleteMessage(id);
            }}
          >
            {t('search.config.close')}
          </Button>
        </Flexbox>
      </FormAction>
    </Center>
  );
});

export default Form;
