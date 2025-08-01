import { Modal, message } from 'antd';
import React, { memo, useEffect, useState } from 'react';

import { usePaintingStore } from '@/store/painting';
import { Painting } from '@/types/painting';

const InpaintModal = memo(
  (props: {
    customId: string;
    doAction: (p: Painting, params: any) => void;
    onClose: () => void;
    painting: Painting;
  }) => {
    const [getPreviewUrl] = usePaintingStore((s) => [s.getPreviewUrl]);
    const [params, setParams] = useState('');
    const [imageUrl] = useState(getPreviewUrl(props.painting.images[0].url));
    const [messageApi, contextHolder] = message.useMessage();
    const [hasReceived, setHasReceived] = useState(false);

    const receiveMsg = (e: MessageEvent) => {
      console.log('receive:', e.data);
      if (hasReceived) return;
      if (!e?.data) {
        messageApi.open({ content: 'error: no data response!', type: 'error' });
        return;
      }
      setHasReceived(true);
      const obj = JSON.parse(e.data);
      props.doAction(props.painting, {
        customId: props.customId,
        maskBase64: obj.mask,
        prompt: obj.prompt,
      });
      props.onClose();
    };
    const loadOk = (e: any) => {
      console.log('loadOk', e);
      const iframe = e.target as HTMLIFrameElement;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      iframe.contentWindow &&
        iframe.contentWindow.postMessage(
          JSON.stringify({
            act: 'go',
            img_info: {
              image_url: `https://wsrv.nl/?url=` + encodeURIComponent(imageUrl),
              prompt: '',
            },
          }),
          '*',
        );
    };

    useEffect(() => {
      setHasReceived(false);
      const data: any = {
        channel_id: '3',
        custom_id: '2',
        frame_id: '5',
        guild_id: '4',
        img_info: JSON.stringify({ image_url: '', prompt: 'sunglasses' }), // 按实际传入
        img_type: 'png', // 按实际传入
        instance_id: '1',
        platform: 'desktop',
        prompt: props.painting.extra.promptEn as string, // 按实际传入
      };
      // @ts-ignore
      setParams(
        Object.keys(data)
          .map((key) => key + '=' + encodeURIComponent(data[key]))
          .join('&'),
      );
      window.addEventListener('message', receiveMsg);
    }, [props.painting]);

    return (
      <>
        {contextHolder}
        <Modal
          footer={null}
          onCancel={() => props.onClose()}
          open
          style={{ top: 50 }}
          title={'Inpaint'}
          width={'60vw'}
        >
          <iframe
            onLoad={loadOk}
            src={`https://static.aitutu.cc/res/mitf/index.html?${params}`}
            style={{
              borderStyle: 'none',
              borderWidth: 0,
              height: '80vh',
              overflow: 'hidden',
              width: '100%',
            }}
          />
        </Modal>
      </>
    );
  },
);

export default InpaintModal;
