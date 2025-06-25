'use client';

import { Grid, Icon, Modal, Segmented } from '@lobehub/ui';
import { MessageSquare, Settings2 } from 'lucide-react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useGlobalStore } from '@/store/global';
import { HotkeyGroupEnum, HotkeyGroupId } from '@/types/hotkey';

import HotkeyContent from './HotkeyContent';

const HotkeyHelperPanel = memo(() => {
  const [open, updateSystemStatus] = useGlobalStore((s) => [
    s.status.showHotkeyHelper,
    s.updateSystemStatus,
  ]);
  const [active, setActive] = useState<HotkeyGroupId>(HotkeyGroupEnum.Essential);
  const { t } = useTranslation('setting');

  const handleClose = () => updateSystemStatus({ showHotkeyHelper: false });

  return (
    <Modal
      centered
      footer={null}
      onCancel={handleClose}
      open={open}
      styles={{
        body: { paddingBlock: 24 },
        mask: {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
      title={
        <Segmented
          onChange={(key) => setActive(key as HotkeyGroupId)}
          options={[
            {
              icon: <Icon icon={Settings2} />,
              label: t('hotkey.group.essential'),
              value: HotkeyGroupEnum.Essential,
            },
            {
              icon: <Icon icon={MessageSquare} />,
              label: t('hotkey.group.conversation'),
              value: HotkeyGroupEnum.Conversation,
            },
          ]}
          value={active}
          variant="filled"
        />
      }
    >
      <Grid gap={32}>
        <HotkeyContent groupId={active} />
      </Grid>
    </Modal>
  );
});

export default HotkeyHelperPanel;
