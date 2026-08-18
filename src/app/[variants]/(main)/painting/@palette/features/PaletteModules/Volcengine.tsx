'use client';

import {
  Button,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Select,
  Slider,
  Switch,
  message,
} from 'antd';
import { createStyles } from 'antd-style';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useIsMobile } from '@/hooks/useIsMobile';
import { usePaintingStore } from '@/store/painting';
import { PaletteStore, usePaletteStore } from '@/store/palette';
import { VolcengineConfig } from '@/store/palette/initialState';

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

const Volcengine = memo(() => {
  const { styles } = useStyles();
  const { t } = useTranslation('painting');
  const isMobile = useIsMobile();
  const contentWidth = isMobile ? 280 : 290;
  const [volcengineConfig, updateVolcConfig, resetStatus] = usePaletteStore((s: PaletteStore) => [
    s.volcengineConfig,
    s.updateVolcConfig,
    s.resetStatus,
  ]);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [createPainting] = usePaintingStore((s) => [s.createPainting]);

  const MODEL_LIST = [
    { label: 'doubao-seedream-5-0-260128', value: 'doubao-seedream-5-0-260128' },
    { label: 'doubao-seedream-4-5-251128', value: 'doubao-seedream-4-5-251128' },
  ];

  const DOUBAO_5_SIZE_LIST = [
    { label: '2048x2048', value: '2048x2048' },
    { label: '1728x2304', value: '1728x2304' },
    { label: '2304x1728', value: '2304x1728' },
    { label: '2848x1600', value: '2848x1600' },
    { label: '1600x2848', value: '1600x2848' },
    { label: '2496x1664', value: '2496x1664' },
    { label: '1664x2496', value: '1664x2496' },
    { label: '3136x1344', value: '3136x1344' },
    { label: '3072x3072', value: '3072x3072' },
    { label: '2592x3456', value: '2592x3456' },
    { label: '3456x2592', value: '3456x2592' },
    { label: '4096x2304', value: '4096x2304' },
    { label: '2304x4096', value: '2304x4096' },
    { label: '2496x3744', value: '2496x3744' },
    { label: '3744x2496', value: '3744x2496' },
    { label: '4704x2016', value: '4704x2016' },
  ];

  const DOUBAO_4_5_SIZE_LIST = [
    { label: '2048x2048', value: '2048x2048' },
    { label: '1728x2304', value: '1728x2304' },
    { label: '2304x1728', value: '2304x1728' },
    { label: '2848x1600', value: '2848x1600' },
    { label: '1600x2848', value: '1600x2848' },
    { label: '2496x1664', value: '2496x1664' },
    { label: '1664x2496', value: '1664x2496' },
    { label: '3136x1344', value: '3136x1344' },
    { label: '4096x4096', value: '4096x4096' },
    { label: '3520x4704', value: '3520x4704' },
    { label: '4704x3520', value: '4704x3520' },
    { label: '5504x3040', value: '5504x3040' },
    { label: '3040x5504', value: '3040x5504' },
    { label: '3328x4992', value: '3328x4992' },
    { label: '4992x3328', value: '4992x3328' },
    { label: '6240x2656', value: '6240x2656' },
  ];

  const SIZE_LIST =
    volcengineConfig.model === 'doubao-seedream-5-0-260128'
      ? DOUBAO_5_SIZE_LIST
      : DOUBAO_4_5_SIZE_LIST;

  const RESPONSE_FORMAT_LIST = [
    { label: 'url', value: 'url' },
    { label: 'base64', value: 'b64_json' },
  ];

  const onInputChange = (e: any) => {
    if (e.target.name === 'prompt') {
      setPrompt(e.target.value);
    }
  };

  const onSelctChange = (field: string, value: string) => {
    updateVolcConfig((config: VolcengineConfig) => {
      if (field === 'model') {
        config.model = value;

        const nextSizeList =
          value === 'doubao-seedream-5-0-260128' ? DOUBAO_5_SIZE_LIST : DOUBAO_4_5_SIZE_LIST;

        if (!nextSizeList.some((item) => item.value === config.size)) {
          config.size = nextSizeList[0].value;
        }

        return;
      }

      // @ts-ignore
      config[field] = value;
    });
  };

  const onSeedChange = (value: number | null) => {
    updateVolcConfig((config) => {
      config.seed = value ? value : -1;
    });
  };

  const onWatermarkChange = (checked: boolean) => {
    updateVolcConfig((config) => {
      config.watermark = checked;
    });
  };

  const resetAll = () => {
    setPrompt('');
    resetStatus('Volcengine');
    messageApi.open({ content: t('ResetSuccess'), type: 'success' });
  };

  const generate = () => {
    if (prompt.trim() === '') {
      messageApi.open({ content: t('PromptAlert'), type: 'warning' });
      return;
    }

    setLoading(true);

    const painting = {
      action: 'IMAGIN',
      config: volcengineConfig,
      createdAt: new Date(),
      description: '',
      extra: {
        fetchTimes: 0,
      },
      failReason: '',
      images: [],
      negativePrompt: '',
      platform: 'Volcengine',
      progress: '0%',
      prompt: prompt,
      status: 'INIT',
      taskId: '',
      updatedAt: new Date(),
    };

    createPainting(painting as any, {}).then((res: string) => {
      if (res === 'success') {
        setPrompt('');
        messageApi.open({
          content: t('Success'),
          type: 'success',
        });
      } else {
        messageApi.open({
          content: res,
          type: 'error',
        });
      }
      setLoading(false);
    });
  };

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
              onChange={onInputChange}
              rows={2}
              value={prompt}
            />
          </Form.Item>
          <Form.Item
            className={styles.horizontalItem}
            label={t('Dall.Model')}
            layout={'horizontal'}
          >
            <Select
              onChange={(value: string) => onSelctChange('model', value)}
              options={MODEL_LIST}
              style={{ width: contentWidth }}
              value={volcengineConfig.model}
            />
          </Form.Item>
          <Form.Item className={styles.horizontalItem} label={t('Dall.Size')} layout={'horizontal'}>
            <Select
              onChange={(value: string) => onSelctChange('size', value)}
              options={SIZE_LIST}
              style={{ width: contentWidth }}
              value={volcengineConfig.size}
            />
          </Form.Item>
          <Form.Item
            className={styles.horizontalItem}
            label={t('Dall.ResponseFormat')}
            layout={'horizontal'}
          >
            <Select
              onChange={(value: string) => onSelctChange('response_format', value)}
              options={RESPONSE_FORMAT_LIST}
              style={{ width: contentWidth }}
              value={volcengineConfig.response_format}
            />
          </Form.Item>
          <Form.Item className={styles.horizontalItem} label={'引导强度'} layout={'horizontal'}>
            <Slider
              max={10}
              min={1}
              onChange={(value) => updateVolcConfig((config) => (config.guidance_scale = value))}
              step={0.1}
              style={{ width: contentWidth }}
              value={volcengineConfig.guidance_scale}
            />
          </Form.Item>
          <Form.Item className={styles.horizontalItem} label={t('mj.Seed')} layout={'horizontal'}>
            <InputNumber
              onChange={onSeedChange}
              style={{ width: contentWidth }}
              value={volcengineConfig.seed}
            />
          </Form.Item>
          <Form.Item className={styles.horizontalItem} label={t('Watermark')} layout={'horizontal'}>
            <Switch checked={volcengineConfig.watermark} onChange={onWatermarkChange} />
          </Form.Item>
        </Form>
      </div>
      <div className={styles.bottom}>
        <div className={styles.reset}>
          <Popconfirm description={t('ResetTips')} onConfirm={() => resetAll()} title="Tips">
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

Volcengine.displayName = 'Volcengine';

export default Volcengine;
