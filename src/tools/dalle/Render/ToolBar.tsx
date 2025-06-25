import { Button } from '@lobehub/ui';
import { Checkbox } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { useChatStore } from '@/store/chat';
import { chatToolSelectors } from '@/store/chat/selectors';
import { useUserStore } from '@/store/user';
import { settingsSelectors } from '@/store/user/selectors';
import { DallEImageItem } from '@/types/tool/dalle';

interface ToolBarProps {
  content: DallEImageItem[];
  messageId: string;
}

const ToolBar = memo<ToolBarProps>(({ content, messageId }) => {
  const { t } = useTranslation('tool');
  const generateImageFromPrompts = useChatStore((s) => s.generateImageFromPrompts);
  const isLoading = useChatStore(chatToolSelectors.isGeneratingDallEImage);

  const [isAutoGenerate, setSettings] = useUserStore((s) => [
    settingsSelectors.isDalleAutoGenerating(s),
    s.setSettings,
  ]);

  const genImages = () => {
    generateImageFromPrompts(content, messageId);
  };

  const canGen = content.some((i) => !i.imageId);

  return (
    <Flexbox align={'center'} height={28} horizontal justify={'space-between'}>
      {t('dalle.images')}
      <Flexbox align={'center'} gap={8} horizontal>
        <Checkbox
          checked={isAutoGenerate}
          onChange={(e) => {
            setSettings({ tool: { dalle: { autoGenerate: e.target.checked } } });
          }}
        >
          {t('dalle.autoGenerate')}
        </Checkbox>
        {canGen && (
          <Button loading={isLoading} onClick={genImages} size={'small'} type={'primary'}>
            {t('dalle.generate')}
          </Button>
        )}
      </Flexbox>
    </Flexbox>
  );
});

export default ToolBar;
