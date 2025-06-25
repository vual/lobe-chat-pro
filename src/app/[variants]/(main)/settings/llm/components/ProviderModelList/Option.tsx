import { ModelIcon } from '@lobehub/icons';
import { ActionIcon, Text, Tooltip } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { Recycle } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { ModelInfoTags } from '@/components/ModelSelect';
import { useUserStore } from '@/store/user';
import { modelProviderSelectors } from '@/store/user/selectors';
import { GlobalLLMProviderKey } from '@/types/user/settings';

import CustomModelOption from './CustomModelOption';

interface OptionRenderProps {
  displayName: string;
  id: string;
  isAzure?: boolean;
  provider: GlobalLLMProviderKey;
  removed?: boolean;
}
const OptionRender = memo<OptionRenderProps>(({ displayName, id, provider, isAzure, removed }) => {
  const model = useUserStore(
    (s) => modelProviderSelectors.getModelCardById(id, provider)(s),
    isEqual,
  );
  const { t } = useTranslation('components');
  const theme = useTheme();
  // if there is isCustom, it means it is a user defined custom model
  if (model?.isCustom || isAzure) return <CustomModelOption id={id} provider={provider} />;

  return (
    <Flexbox
      align={'center'}
      gap={8}
      horizontal
      justify={'space-between'}
      style={{ paddingInlineEnd: 8 }}
    >
      <Flexbox align={'center'} gap={8} horizontal>
        <ModelIcon model={id} size={32} />
        <Flexbox>
          <Flexbox align={'center'} gap={8} horizontal>
            {displayName}
            <ModelInfoTags directionReverse placement={'top'} {...model!} />
          </Flexbox>
          <Text style={{ fontSize: 12 }} type={'secondary'}>
            {id}
          </Text>
        </Flexbox>
      </Flexbox>
      {removed && (
        <Tooltip
          placement={'top'}
          style={{ pointerEvents: 'none' }}
          styles={{ root: { maxWidth: 300 } }}
          title={t('ModelSelect.removed')}
        >
          <ActionIcon icon={Recycle} style={{ color: theme.colorWarning }} />
        </Tooltip>
      )}
    </Flexbox>
  );
});

export default OptionRender;
