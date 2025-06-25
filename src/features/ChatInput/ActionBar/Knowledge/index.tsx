import { LibraryBig } from 'lucide-react';
import { Suspense, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import TipGuide from '@/components/TipGuide';
import { LOBE_CHAT_CLOUD } from '@/const/branding';
import { isServerMode } from '@/const/version';
import { AssignKnowledgeBaseModal } from '@/features/KnowledgeBaseModal';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';
import { useUserStore } from '@/store/user';
import { preferenceSelectors } from '@/store/user/selectors';

import Action from '../components/Action';
import { useControls } from './useControls';

const enableKnowledge = isServerMode;

const Knowledge = memo(() => {
  const { t } = useTranslation('chat');
  const { enableKnowledgeBase } = useServerConfigStore(featureFlagsSelectors);
  const [showTip, updateGuideState] = useUserStore((s) => [
    preferenceSelectors.showUploadFileInKnowledgeBaseTip(s),
    s.updateGuideState,
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [updating, setUpdating] = useState(false);

  const items = useControls({ setModalOpen, setUpdating });

  if (!enableKnowledgeBase) return null;
  if (!enableKnowledge)
    return (
      <Action
        disabled
        icon={LibraryBig}
        showTooltip={true}
        title={t('knowledgeBase.disabled', { cloud: LOBE_CHAT_CLOUD })}
      />
    );

  const content = (
    <Action
      dropdown={{
        maxHeight: 500,
        maxWidth: 480,
        menu: { items },
        minWidth: 240,
      }}
      icon={LibraryBig}
      loading={updating}
      showTooltip={false}
      title={t('knowledgeBase.title')}
    />
  );

  return (
    <Suspense fallback={<Action disabled icon={LibraryBig} title={t('knowledgeBase.title')} />}>
      {showTip ? (
        <TipGuide
          onOpenChange={() => {
            updateGuideState({ uploadFileInKnowledgeBase: false });
          }}
          open={showTip}
          placement={'top'}
          title={t('knowledgeBase.uploadGuide')}
        >
          {content}
        </TipGuide>
      ) : (
        content
      )}
      <AssignKnowledgeBaseModal open={modalOpen} setOpen={setModalOpen} />
    </Suspense>
  );
});

export default Knowledge;
