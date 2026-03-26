'use client';

import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Select,
  Upload,
  UploadFile,
  UploadProps,
  message,
} from 'antd';
import { createStyles } from 'antd-style';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useIsMobile } from '@/hooks/useIsMobile';
import { usePaintingStore } from '@/store/painting';
import { PaletteStore, usePaletteStore } from '@/store/palette';
import { DallEStatus } from '@/store/palette/initialState';

const useStyles = createStyles(({ css }) => ({
  bottom: css`
    position: absolute;
    inset-block-end: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
  `,

  container: css`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-block-start: 10px;

    .ant-form-item {
      margin-block-end: 10px;
    }

    .ant-form-item-label {
      font-weight: bold;
    }
  `,

  generate: css`
    display: flex;
    justify-content: center;
  `,

  horizontalItem: css`
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;

    .ant-form-item-row {
      justify-content: space-between !important;
      width: 100%;
    }

    .ant-form-item-label,
    .ant-form-item-control {
      flex: 0 0 auto !important;
      max-width: none !important;
    }

    .ant-form-item-label {
      text-align: end;
    }

    .ant-form-item-control-input-content {
      display: flex;
      justify-content: flex-end;
    }
  `,

  reset: css`
    position: absolute;
    inset-inline-start: 10px;
  `,
}));

const PLATFORM_LIST = [
  { label: 'OpenAI', value: 'OpenAI' },
  { label: 'Flux', value: 'Flux' },
  { label: 'Recraft', value: 'Recraft' },
];

const PLATFORM_MODEL_MAP: Record<string, { label: string; value: string }[]> = {
  Flux: [
    { label: 'flux-kontext-dev', value: 'flux-kontext-dev' },
    { label: 'flux-kontext', value: 'flux-kontext' },
    { label: 'flux.1.1-pro', value: 'flux-pro-max' },
  ],
  OpenAI: [
    { label: 'gpt-image-1.5', value: 'gpt-image-1.5' },
    { label: 'gpt-image-1', value: 'gpt-image-1' },
    { label: 'dall-e-3', value: 'dall-e-3' },
    { label: 'dall-e-2', value: 'dall-e-2' },
  ],
  Recraft: [
    { label: 'recraftv3', value: 'recraftv3' },
    { label: 'recraftv3-halloween', value: 'recraftv3-halloween' },
  ],
};

const QUALITY_LIST = [
  { label: 'auto', value: 'auto' },
  { label: 'high(gpt-image-1)', value: 'high' },
  { label: 'hd(dall-e-3)', value: 'hd' },
  { label: 'standard', value: 'standard' },
];

const SIZE_LIST = [
  { label: '1024x1024', value: '1024x1024' },
  { label: '1792x1024', value: '1792x1024' },
  { label: '1024x1792', value: '1024x1792' },
];

const FLUX_SIZE_LIST = [
  { label: '1024x1024', value: '1024x1024' },
  { label: '1280x960', value: '1280x960' },
  { label: '960x1280', value: '960x1280' },
  { label: '1366x768', value: '1366x768' },
  { label: '768x1366', value: '768x1366' },
];

const STYLE_LIST = [
  { label: 'vivid', value: 'vivid' },
  { label: 'natural', value: 'natural' },
];

const RESPONSE_FORMAT_LIST = [
  { label: 'url', value: 'url' },
  { label: 'base64', value: 'b64_json' },
];

const OpenAI = memo(() => {
  const { styles } = useStyles();
  const { t } = useTranslation('painting');
  const isMobile = useIsMobile();
  const contentWidth = isMobile ? 280 : 290;

  const [dallEStatus, updateDallEStatus, resetStatus] = usePaletteStore((s: PaletteStore) => [
    s.dallEStatus,
    s.updateDallEStatus,
    s.resetStatus,
  ]);
  const [createPainting] = usePaintingStore((s) => [s.createPainting]);

  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [platform, setPlatform] = useState('OpenAI');
  const [refrenceImage, setRefrenceImage] = useState<UploadFile[]>([]);
  const [messageApi, contextHolder] = message.useMessage();

  const uploadRefrenceChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    newFileList.forEach((file) => {
      if (file.status === 'error') {
        file.response = '';
      }
    });
    setRefrenceImage(newFileList);
  };

  const onPlatformChange = (value: string) => {
    setPlatform(value);
    updateDallEStatus((status: DallEStatus) => {
      status.model = PLATFORM_MODEL_MAP[value][0].value;
      status.size = '1024x1024';
    });
  };

  const onNumChange = (value: number | null) => {
    updateDallEStatus((status: DallEStatus) => {
      status.n = value ?? 1;
    });
  };

  const onSelectChange = (field: string, value: string) => {
    updateDallEStatus((status: DallEStatus) => {
      if (field === 'model' && status.model !== value) {
        status.size = '1024x1024';
      }
      (status as any)[field] = value;
    });
  };

  const resetAll = () => {
    setPrompt('');
    resetStatus('OpenAI');
    messageApi.open({ content: t('ResetSuccess'), type: 'success' });
  };

  const generate = () => {
    if (prompt.trim() === '') {
      messageApi.open({ content: t('PromptAlert'), type: 'warning' });
      return;
    }

    setLoading(true);

    const painting = {
      action: 'IMAGINE',
      config: dallEStatus,
      createdAt: new Date(),
      description: '',
      extra: { fetchTimes: 0 },
      failReason: '',
      images: [],
      negativePrompt: '',
      platform,
      progress: '0%',
      prompt,
      status: 'INIT',
      taskId: '',
      updatedAt: new Date(),
    };

    const params = {
      isEdit: false,
      refrenceImage,
    };

    createPainting(painting as any, params).then((res: string) => {
      if (res === 'success') {
        setPrompt('');
        setRefrenceImage([]);
        messageApi.open({ content: t('Success'), type: 'success' });
      } else {
        messageApi.open({ content: res, type: 'error' });
      }
      setLoading(false);
    });
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>upload</div>
    </div>
  );

  return (
    <>
      {contextHolder}
      <div className={styles.container}>
        <Form layout="vertical" style={{ width: '100%' }}>
          <Form.Item
            label={t('Prompt')}
            layout={'vertical'}
            rules={[{ message: 'Please input prompt!', required: true }]}
          >
            <Input.TextArea
              autoSize={{ maxRows: 10, minRows: 2 }}
              name={'prompt'}
              onChange={(e) => setPrompt(e.target.value)}
              rows={2}
              value={prompt}
            />
          </Form.Item>
          <Form.Item
            className={styles.horizontalItem}
            label={t('Dall.Platform')}
            layout={'horizontal'}
          >
            <Select
              onChange={onPlatformChange}
              options={PLATFORM_LIST}
              style={{ width: contentWidth }}
              value={platform}
            />
          </Form.Item>
          <Form.Item
            className={styles.horizontalItem}
            label={t('Dall.Model')}
            layout={'horizontal'}
          >
            <Select
              onChange={(value: string) => onSelectChange('model', value)}
              options={PLATFORM_MODEL_MAP[platform]}
              style={{ width: contentWidth }}
              value={dallEStatus.model}
            />
          </Form.Item>
          <Form.Item className={styles.horizontalItem} label={t('Dall.Num')} layout={'horizontal'}>
            <InputNumber
              disabled
              onChange={onNumChange}
              style={{ width: contentWidth }}
              value={dallEStatus.n}
            />
          </Form.Item>
          <Form.Item
            className={styles.horizontalItem}
            label={t('Dall.Quality')}
            layout={'horizontal'}
          >
            <Select
              onChange={(value: string) => onSelectChange('quality', value)}
              options={QUALITY_LIST}
              style={{ width: contentWidth }}
              value={dallEStatus.quality}
            />
          </Form.Item>
          <Form.Item
            className={styles.horizontalItem}
            label={t('Dall.Size')}
            layout={'horizontal'}
          >
            <Select
              onChange={(value: string) => onSelectChange('size', value)}
              options={dallEStatus.model.startsWith('dall-e') ? SIZE_LIST : FLUX_SIZE_LIST}
              style={{ width: contentWidth }}
              value={dallEStatus.size}
            />
          </Form.Item>
          <Form.Item
            className={styles.horizontalItem}
            label={t('Dall.Style')}
            layout={'horizontal'}
          >
            <Select
              onChange={(value: string) => onSelectChange('style', value)}
              options={STYLE_LIST}
              style={{ width: contentWidth }}
              value={dallEStatus.style}
            />
          </Form.Item>
          <Form.Item
            className={styles.horizontalItem}
            label={t('Dall.ResponseFormat')}
            layout={'horizontal'}
          >
            <Select
              onChange={(value: string) => onSelectChange('response_format', value)}
              options={RESPONSE_FORMAT_LIST}
              style={{ width: contentWidth }}
              value={dallEStatus.response_format}
            />
          </Form.Item>
          {dallEStatus.model.startsWith('gpt') && (
            <Form.Item label={t('RefrenceImage')}>
              <Upload
                accept=".png,.jpg,.jpeg,.webp"
                action={''}
                fileList={refrenceImage}
                listType="picture-card"
                onChange={uploadRefrenceChange}
              >
                {refrenceImage.length >= 10 ? null : uploadButton}
              </Upload>
            </Form.Item>
          )}
        </Form>
      </div>
      <div className={styles.bottom}>
        <div className={styles.reset}>
          <Popconfirm description={t('ResetTips')} onConfirm={resetAll} title="Tips">
            <Button size={'small'}>{t('Reset')}</Button>
          </Popconfirm>
        </div>
        <div className={styles.generate}>
          <Button disabled={loading} loading={loading} onClick={generate} type={'primary'}>
            {t('mj.Generate')}
          </Button>
        </div>
      </div>
    </>
  );
});

OpenAI.displayName = 'OpenAI';

export default OpenAI;
