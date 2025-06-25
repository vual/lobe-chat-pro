import { ActionIcon, Input, InputProps } from '@lobehub/ui';
import { FormInstance } from 'antd/es/form/hooks/useForm';
import { LucideDices } from 'lucide-react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { generateRandomRoomName } from './generateRandomRoomName';

interface ChannelNameInputProps extends Omit<InputProps, 'form'> {
  form: FormInstance;
}

const ChannelNameInput = memo<ChannelNameInputProps>(({ form, ...rest }) => {
  const { t } = useTranslation('setting');
  const [loading, setLoading] = useState(false);

  return (
    <Input
      placeholder={t('sync.webrtc.channelName.placeholder')}
      suffix={
        <ActionIcon
          active
          icon={LucideDices}
          loading={loading}
          onClick={async () => {
            setLoading(true);
            const name = await generateRandomRoomName();
            setLoading(false);
            form.setFieldValue(['sync', 'webrtc', 'channelName'], name);
            form.setFieldValue(['sync', 'webrtc', 'enabled'], false);
            form.submit();
          }}
          size={'small'}
          style={{
            marginRight: -4,
          }}
          title={t('sync.webrtc.channelName.shuffle')}
        />
      }
      {...rest}
    />
  );
});

export default ChannelNameInput;
