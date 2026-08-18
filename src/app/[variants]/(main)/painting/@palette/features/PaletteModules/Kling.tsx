'use client';

import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Radio,
  Select,
  Slider,
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
import { KlingStatus } from '@/store/palette/initialState';

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

const IMAGE_MODEL_LIST = [
  { label: 'kling-v2-1', value: 'kling-v2-1' },
  { label: 'kling-v2', value: 'kling-v2' },
];

const VIRTUAL_MODEL_LIST = [
  { label: 'kolors-virtual-try-on-v1-5', value: 'kolors-virtual-try-on-v1-5' },
];

const ASPECT_RATIO_LIST = [
  { label: '16:9', value: '16:9' },
  { label: '9:16', value: '9:16' },
  { label: '1:1', value: '1:1' },
  { label: '4:3', value: '4:3' },
  { label: '3:4', value: '3:4' },
  { label: '3:2', value: '3:2' },
  { label: '2:3', value: '2:3' },
];

const Kling = memo(() => {
  const { styles } = useStyles();
  const { t } = useTranslation('painting');
  const isMobile = useIsMobile();
  const contentWidth = isMobile ? 280 : 290;

  const [klingStatus, updateKlingStatus, resetStatus] = usePaletteStore((s: PaletteStore) => [
    s.klingStatus,
    s.updateKlingStatus,
    s.resetStatus,
  ]);
  const [createPainting] = usePaintingStore((s) => [s.createPainting]);

  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [action, setAction] = useState<'IMAGINE' | 'VIRTUAL'>('IMAGINE');
  const [refrenceImage, setRefrenceImage] = useState<UploadFile[]>([]);
  const [clothImage, setClothImage] = useState<UploadFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onUploadChange = (setter: (files: UploadFile[]) => void): UploadProps['onChange'] => {
    return ({ fileList }) => {
      fileList.forEach((file) => {
        if (file.status === 'error') file.response = '';
      });
      setter(fileList);
    };
  };

  const onNumChange = (value: number | null) => {
    updateKlingStatus((status: KlingStatus) => {
      status.n = value ?? 1;
    });
  };

  const onSelectChange = (field: keyof KlingStatus, value: string) => {
    updateKlingStatus((status: KlingStatus) => {
      (status as any)[field] = value;
    });
  };

  const onActionChange = (value: 'IMAGINE' | 'VIRTUAL') => {
    setAction(value);
    updateKlingStatus((status: KlingStatus) => {
      status.model = value === 'VIRTUAL' ? VIRTUAL_MODEL_LIST[0].value : IMAGE_MODEL_LIST[0].value;
    });
  };

  const resetAll = () => {
    setPrompt('');
    setNegativePrompt('');
    setRefrenceImage([]);
    setClothImage([]);
    setAction('IMAGINE');
    resetStatus('Kling');
    messageApi.open({ content: t('ResetSuccess'), type: 'success' });
  };

  const generate = () => {
    if (action === 'IMAGINE' && prompt.trim() === '') {
      messageApi.open({ content: t('PromptAlert'), type: 'warning' });
      return;
    }

    if (action === 'VIRTUAL' && (refrenceImage.length === 0 || clothImage.length === 0)) {
      messageApi.open({ content: t('kling.ImageAlert'), type: 'warning' });
      return;
    }

    setLoading(true);

    const painting = {
      action,
      config: klingStatus,
      createdAt: new Date(),
      description: '',
      extra: { fetchTimes: 0 },
      failReason: '',
      images: [],
      negativePrompt,
      platform: 'Kling',
      progress: '0%',
      prompt,
      status: 'INIT',
      taskId: '',
      updatedAt: new Date(),
    };

    createPainting(painting as any, { clothImage, refrenceImage }).then((res: string) => {
      if (res === 'success') {
        setPrompt('');
        setNegativePrompt('');
        setRefrenceImage([]);
        setClothImage([]);
        messageApi.open({ content: t('Success'), type: 'success' });
      } else {
        messageApi.open({ content: res, type: 'error' });
      }
      setLoading(false);
    });
  };

  const uploadButton = (label: string) => (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{label}</div>
    </div>
  );

  return (
    <>
      {contextHolder}
      <div className={styles.container}>
        <Form layout="vertical" style={{ width: '100%' }}>
          <Form.Item label={t('mj.Mode')}>
            <Radio.Group
              buttonStyle="solid"
              onChange={(event) => onActionChange(event.target.value)}
              value={action}
            >
              <Radio.Button value="IMAGINE">{t('kling.ModeImagine')}</Radio.Button>
              <Radio.Button value="VIRTUAL">{t('kling.ModeVirtual')}</Radio.Button>
            </Radio.Group>
          </Form.Item>

          {action === 'IMAGINE' && (
            <>
              <Form.Item label={t('Prompt')} rules={[{ required: true }]}>
                <Input.TextArea
                  autoSize={{ maxRows: 6, minRows: 4 }}
                  name="prompt"
                  onChange={(event) => setPrompt(event.target.value)}
                  placeholder={t('Prompt')}
                  style={{ width: contentWidth }}
                  value={prompt}
                />
              </Form.Item>
              <Form.Item label={t('NegativePrompt')}>
                <Input.TextArea
                  autoSize={{ maxRows: 4, minRows: 2 }}
                  name="negativePrompt"
                  onChange={(event) => setNegativePrompt(event.target.value)}
                  placeholder={t('NegativePrompt')}
                  style={{ width: contentWidth }}
                  value={negativePrompt}
                />
              </Form.Item>
            </>
          )}

          <Form.Item className={styles.horizontalItem} label={t('Dall.Model')}>
            <Select
              onChange={(value) => onSelectChange('model', value)}
              options={action === 'IMAGINE' ? IMAGE_MODEL_LIST : VIRTUAL_MODEL_LIST}
              style={{ width: contentWidth }}
              value={klingStatus.model}
            />
          </Form.Item>

          {action === 'IMAGINE' && (
            <>
              <Form.Item className={styles.horizontalItem} label={t('Dall.Num')}>
                <InputNumber max={4} min={1} onChange={onNumChange} value={klingStatus.n} />
              </Form.Item>
              <Form.Item className={styles.horizontalItem} label={t('kling.AspectRatio')}>
                <Select
                  onChange={(value) => onSelectChange('aspect_ratio', value)}
                  options={ASPECT_RATIO_LIST}
                  style={{ width: contentWidth }}
                  value={klingStatus.aspect_ratio}
                />
              </Form.Item>
              <Form.Item label={t('kling.ImageFidelity')} layout="horizontal">
                <Slider
                  max={1}
                  min={0}
                  onChange={(value) =>
                    updateKlingStatus((status) => {
                      status.image_fidelity = value;
                    })
                  }
                  step={0.1}
                  style={{ width: contentWidth }}
                  value={klingStatus.image_fidelity}
                />
              </Form.Item>
            </>
          )}

          <Form.Item label={action === 'IMAGINE' ? t('RefrenceImage') : t('kling.HumanImage')}>
            <Upload
              accept="image/*"
              beforeUpload={() => false}
              fileList={refrenceImage}
              listType="picture-card"
              maxCount={1}
              onChange={onUploadChange(setRefrenceImage)}
            >
              {refrenceImage.length >= 1 ? null : uploadButton(t('RefrenceImage'))}
            </Upload>
          </Form.Item>

          {action === 'VIRTUAL' && (
            <Form.Item label={t('kling.ClothImage')} tooltip={t('kling.Tooltip')}>
              <Upload
                accept="image/*"
                beforeUpload={() => false}
                fileList={clothImage}
                listType="picture-card"
                maxCount={2}
                onChange={onUploadChange(setClothImage)}
              >
                {clothImage.length >= 2 ? null : uploadButton(t('kling.ClothImage'))}
              </Upload>
            </Form.Item>
          )}
        </Form>
      </div>
      <div className={styles.bottom}>
        <Popconfirm onConfirm={resetAll} title={t('ResetTips')}>
          <Button className={styles.reset}>{t('Reset')}</Button>
        </Popconfirm>
        <div className={styles.generate}>
          <Button loading={loading} onClick={generate} type="primary">
            {t('mj.Generate')}
          </Button>
        </div>
      </div>
    </>
  );
});

Kling.displayName = 'Kling';

export default Kling;
