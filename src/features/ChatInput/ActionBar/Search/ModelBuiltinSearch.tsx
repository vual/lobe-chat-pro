import { Exa, Google } from '@lobehub/icons';
import { Icon } from '@lobehub/ui';
import { Switch } from 'antd';
import { Search } from 'lucide-react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { useAgentStore } from '@/store/agent';
import { agentChatConfigSelectors, agentSelectors } from '@/store/agent/selectors';
import { aiModelSelectors, useAiInfraStore } from '@/store/aiInfra';

interface SearchEngineIconProps {
  icon?: string;
}

const SearchEngineIcon = ({ icon }: SearchEngineIconProps) => {
  switch (icon) {
    case 'google': {
      return <Google.Avatar size={20} />;
    }

    case 'exa': {
      return <Exa.Avatar size={20} />;
    }

    default: {
      return <Icon icon={Search} size={14} />;
    }
  }
};

const ModelBuiltinSearch = memo(() => {
  const { t } = useTranslation('chat');
  const [model, provider, checked, updateAgentChatConfig] = useAgentStore((s) => [
    agentSelectors.currentAgentModel(s),
    agentSelectors.currentAgentModelProvider(s),
    agentChatConfigSelectors.useModelBuiltinSearch(s),
    s.updateAgentChatConfig,
  ]);

  const [isLoading, setLoading] = useState(false);
  const modelCard = useAiInfraStore(aiModelSelectors.getEnabledModelById(model, provider));

  return (
    <Flexbox
      align={'center'}
      horizontal
      justify={'space-between'}
      onClick={async () => {
        setLoading(true);
        await updateAgentChatConfig({ useModelBuiltinSearch: !checked });
        setLoading(false);
      }}
      padding={'8px 12px'}
      style={{ cursor: 'pointer', userSelect: 'none' }}
    >
      <Flexbox align={'center'} gap={8} horizontal>
        <SearchEngineIcon icon={modelCard?.settings?.searchProvider} />
        {t('search.mode.useModelBuiltin')}
      </Flexbox>
      <Switch checked={checked} loading={isLoading} size={'small'} />
    </Flexbox>
  );
});
export default ModelBuiltinSearch;
