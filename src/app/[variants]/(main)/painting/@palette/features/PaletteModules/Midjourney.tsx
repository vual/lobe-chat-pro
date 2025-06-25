import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Radio,
  RadioChangeEvent,
  Row,
  Select,
  Slider,
  Switch,
  Upload,
  UploadFile,
  UploadProps,
  message,
} from 'antd';
import { createStyles } from 'antd-style';
import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  MJ_CAMERA_EFFECTS,
  MJ_CHARACTER_SHOTS,
  MJ_IMAGE_ACCURACY,
  MJ_LIGHT,
  MJ_PAINTING_TYPES,
  MJ_RENDER_STYLE,
  MJ_SCENE,
  MJ_SHOTS,
  MJ_STYLES,
  MJ_VISUAL_ANGLES,
} from '@/const/midjourney';
import { useIsMobile } from '@/hooks/useIsMobile';
import { usePaintingStore } from '@/store/painting';
import { PaletteStore, usePaletteStore } from '@/store/palette';

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

  mjSize: css`
    .ant-radio-wrapper-in-form-item {
      margin-inline-end: 6px;
    }
  `,

  mjSlider: css`
    .ant-col-8 {
      flex: auto;
      width: 75%;
      max-width: 75%;
    }

    .ant-input-number-in-form-item {
      width: 70px;
    }
  `,

  reset: css`
    position: absolute;
    inset-inline-start: 10px;
  `,
}));

const Midjourney = memo(() => {
  const { styles } = useStyles();
  const { t } = useTranslation('painting');
  const isMobile = useIsMobile();
  const contentWidth = isMobile ? 280 : 290;
  const [mjStatus, updateMjStatus, resetStatus] = usePaletteStore((s: PaletteStore) => [
    s.mjStatus,
    s.updateMjStatus,
    s.resetStatus,
  ]);
  const [sourceImages, setSourceImages] = useState<UploadFile[]>([]);
  const [targetImages, setTargetImages] = useState<UploadFile[]>([]);
  const [crefImages, setCrefImages] = useState<UploadFile[]>([]);
  const [styleImages, setStyleImages] = useState<UploadFile[]>([]);
  const [maxCount, setMaxCount] = useState(1);
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [createPainting] = usePaintingStore((s) => [s.createPainting]);
  const MODEL_LIST = ['7', '6.1', '6', '5.2'];

  useEffect(() => {
    if (mjStatus.action === 'IMAGINE' || mjStatus.action === 'BLEND') {
      setMaxCount(5);
    } else {
      setMaxCount(1);
    }
  }, [mjStatus.action]);

  const onRadioChange = (e: RadioChangeEvent) => {
    updateMjStatus((mjStatus) => {
      // @ts-ignore
      mjStatus[e.target.name] = e.target.value;
    });
  };

  const onInputChange = (e: any) => {
    if (e.target.name === 'prompt') {
      setPrompt(e.target.value);
    } else if (e.target.name === 'negativePrompt') {
      setNegativePrompt(e.target.value);
    }
  };

  const uploadChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    newFileList.forEach((file) => {
      if (file.status === 'error') {
        file.response = '';
      }
    });
    setSourceImages(newFileList);
  };

  const uploadTargetChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    newFileList.forEach((file) => {
      if (file.status === 'error') {
        file.response = '';
      }
    });
    setTargetImages(newFileList);
  };

  const uploadCrefChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    newFileList.forEach((file) => {
      if (file.status === 'error') {
        file.response = '';
      }
    });
    setCrefImages(newFileList);
  };

  const uploadStyleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    newFileList.forEach((file) => {
      if (file.status === 'error') {
        file.response = '';
      }
    });
    setStyleImages(newFileList);
  };

  // const uploadToDiscordAction = (file: RcFile): Promise<string> => {
  //   return new Promise((resolve, reject) => {
  //     try {
  //       uploadToDiscord(file)
  //         .then((res) => res.json())
  //         .then((res) => {
  //           if (res.result && res.result.length > 0) {
  //             messageApi.open({ content: 'Upload Success', type: 'success' });
  //             resolve(res.result[0]);
  //           } else {
  //             messageApi.open({ content: JSON.stringify(res), type: 'error' });
  //             reject('error');
  //           }
  //         });
  //     } catch (e) {
  //       messageApi.open({ content: JSON.stringify(e), type: 'error' });
  //       console.log('Upload image to discord error', e);
  //       reject('error');
  //     }
  //   });
  // };

  const onIWChange = (value: number | null) => {
    updateMjStatus((mjStatus) => {
      mjStatus.iw = value ? value : 0;
    });
  };
  const onCWChange = (value: number | null) => {
    updateMjStatus((mjStatus) => {
      mjStatus.cw = value ? value : 0;
    });
  };

  const onSWChange = (value: number | null) => {
    updateMjStatus((mjStatus) => {
      mjStatus.sw = value ? value : 0;
    });
  };

  const onChaosChange = (value: number | null) => {
    updateMjStatus((mjStatus) => {
      mjStatus.chaos = value ? value : 0;
    });
  };

  const onStylizeChange = (value: number | null) => {
    updateMjStatus((mjStatus) => {
      mjStatus.stylize = value ? value : 0;
    });
  };

  const onTileChange = (checked: boolean) => {
    updateMjStatus((mjStatus) => {
      mjStatus.tile = checked;
    });
  };

  const onSeedChange = (value: number | null) => {
    updateMjStatus((mjStatus) => {
      mjStatus.seed = value ? value : -1;
    });
  };

  const uploadButton = (name: string) => (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{name}</div>
    </div>
  );

  const resetPromptAndUpload = () => {
    setSourceImages([]);
    setTargetImages([]);
    setCrefImages([]);
    setStyleImages([]);
    setPrompt('');
    setNegativePrompt('');
  };
  const resetAll = () => {
    resetPromptAndUpload();
    resetStatus('Midjourney');
    messageApi.open({ content: t('ResetSuccess'), type: 'success' });
  };

  const generate = () => {
    if (mjStatus.action === 'IMAGINE' && prompt.trim() === '') {
      messageApi.open({ content: t('PromptAlert'), type: 'warning' });
      return;
    }
    if (mjStatus.action === 'BLEND' && sourceImages.length < 2) {
      messageApi.open({ content: t('mj.Need2OrMoreImages'), type: 'warning' });
      return;
    }
    if (mjStatus.action === 'DESCRIBE' && sourceImages.length < 1) {
      messageApi.open({ content: t('mj.Need1Images'), type: 'warning' });
      return;
    }
    if (mjStatus.action === 'INSIGHTFACE' && sourceImages.length < 2) {
      messageApi.open({ content: t('mj.Need2Images'), type: 'warning' });
      return;
    }

    setLoading(true);

    const painting = {
      action: mjStatus.action,
      config: mjStatus,
      createdAt: new Date(),
      description: '',
      extra: {
        fetchTimes: 0,
      },
      failReason: '',
      images: [],
      negativePrompt: negativePrompt,
      platform: 'Midjourney',
      progress: '0%',
      prompt: prompt,
      status: 'INIT', // INIT, SUBMITTED, IN_PROGRESS, SUCCESS, FAILURE
      taskId: '',
      updatedAt: new Date(),
    };

    const extra = {
      crefImages,
      sourceImages,
      styleImages,
      targetImages,
    };

    createPainting(painting as any, extra).then((res: string) => {
      if (res === 'success') {
        resetPromptAndUpload();
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
      {/*{loading && <Spin fullscreen size={'large'} />}*/}
      <div className={styles.container}>
        <Form layout="vertical" style={{ width: '100%' }}>
          <Form.Item label={t('mj.Mode')}>
            <Radio.Group
              buttonStyle="solid"
              name={'action'}
              onChange={onRadioChange}
              value={mjStatus.action}
            >
              <Radio value={'IMAGINE'}>{t('mj.ModeImagine')}</Radio>
              <Radio value={'BLEND'}>{t('mj.ModeBlend')}</Radio>
              <Radio value={'DESCRIBE'}>{t('mj.ModeDescribe')}</Radio>
              <Radio value={'INSIGHTFACE'}>{t('mj.ModeInsightFace')}</Radio>
            </Radio.Group>
          </Form.Item>
          {mjStatus.action === 'IMAGINE' && (
            <>
              <Form.Item
                label={t('Prompt')}
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
              <Form.Item label={t('NegativePrompt')}>
                <Input.TextArea
                  autoSize={{ maxRows: 10, minRows: 2 }}
                  name={'negativePrompt'}
                  onChange={onInputChange}
                  rows={2}
                  value={negativePrompt}
                />
              </Form.Item>
              <Form.Item label={t('mj.Engine')}>
                <Radio.Group name={'botType'} onChange={onRadioChange} value={mjStatus.botType}>
                  <Radio value={'MID_JOURNEY'}>{t('mj.EngineMidj')}</Radio>
                  <Radio value={'NIJI_JOURNEY'}>{t('mj.EngineNiji')}</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label={t('mj.EngineVersion')}>
                <Radio.Group name={'version'} onChange={onRadioChange} value={mjStatus.version}>
                  <Radio value="Latest">Latest</Radio>
                  {MODEL_LIST.map((item) => (
                    <Radio key={item} value={item}>
                      V{item}
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>
              <Form.Item className={styles.mjSize} label={t('mj.Size')}>
                <Radio.Group name={'size'} onChange={onRadioChange} value={mjStatus.size}>
                  <Radio value={'1:1'}>{'1:1'}</Radio>
                  <Radio value={'3:2'}>{'3:2'}</Radio>
                  <Radio value={'3:4'}>{'3:4'}</Radio>
                  <Radio value={'4:3'}>{'4:3'}</Radio>
                  <Radio value={'9:16'}>{'9:16'}</Radio>
                  <Radio value={'16:9'}>{'16:9'}</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label={t('mj.Quality')}>
                <Radio.Group name={'quality'} onChange={onRadioChange} value={mjStatus.quality}>
                  <Radio value={'.25'}>{t('mj.Quality1')}</Radio>
                  <Radio value={'.5'}>{t('mj.Quality2')}</Radio>
                  <Radio value={'1'}>{t('mj.Quality3')}</Radio>
                  <Radio value={'2'}>{t('mj.Quality4')}</Radio>
                </Radio.Group>
              </Form.Item>
            </>
          )}
          <Form.Item label={t('mj.Reference')}>
            <Row>
              <Col>
                <Upload
                  accept=".png, .jpg, .jpeg, .webp"
                  action={''}
                  fileList={sourceImages}
                  listType="picture-card"
                  onChange={uploadChange}
                >
                  {sourceImages.length >= maxCount
                    ? null
                    : uploadButton(mjStatus.action === 'INSIGHTFACE' ? 'source' : 'upload')}
                </Upload>
              </Col>
              {mjStatus.action === 'INSIGHTFACE' && (
                <Col style={{ marginLeft: 10 }}>
                  <Upload
                    accept=".png, .jpg, .jpeg, .webp"
                    action={''}
                    fileList={targetImages}
                    listType="picture-card"
                    onChange={uploadTargetChange}
                  >
                    {targetImages.length >= 1 ? null : uploadButton('target')}
                  </Upload>
                </Col>
              )}
            </Row>
          </Form.Item>
          {mjStatus.action === 'IMAGINE' && (
            <>
              <Form.Item className={styles.mjSlider} label={t('mj.ReferenceWeight')}>
                <Row>
                  <Col span={8}>
                    <Slider
                      max={2}
                      min={0}
                      onChange={onIWChange}
                      step={0.01}
                      value={typeof mjStatus.iw === 'number' ? mjStatus.iw : 0}
                    />
                  </Col>
                  <Col span={2}>
                    <InputNumber
                      max={2}
                      min={0}
                      onChange={onIWChange}
                      step={0.01}
                      style={{ margin: '0 16px' }}
                      value={mjStatus.iw}
                    />
                  </Col>
                </Row>
              </Form.Item>
              {mjStatus.version >= '6' && (
                <>
                  <Form.Item label={t('mj.RoleReference')}>
                    <Row>
                      <Col>
                        <Upload
                          accept=".png, .jpg, .jpeg, .webp"
                          action={''}
                          fileList={crefImages}
                          listType="picture-card"
                          onChange={uploadCrefChange}
                        >
                          {crefImages.length >= 5 ? null : uploadButton('upload')}
                        </Upload>
                      </Col>
                    </Row>
                  </Form.Item>
                  {crefImages.length > 1 && (
                    <Form.Item label={t('mj.RoleReferenceRelativeWeight')}>
                      <Row>
                        {Array.from({ length: crefImages.length }).map((_, index) => (
                          <InputNumber
                            key={index}
                            min={1}
                            onChange={(value) =>
                              updateMjStatus((s) => (s.cws[index] = value ? value : 1))
                            }
                            style={{ marginRight: 5, width: 65 }}
                            value={mjStatus.cws[index]}
                          />
                        ))}
                      </Row>
                    </Form.Item>
                  )}
                  <Form.Item className={styles.mjSlider} label={t('mj.RoleReferenceWeight')}>
                    <Row>
                      <Col span={8}>
                        <Slider
                          max={100}
                          min={0}
                          onChange={onCWChange}
                          value={typeof mjStatus.cw === 'number' ? mjStatus.cw : 0}
                        />
                      </Col>
                      <Col span={2}>
                        <InputNumber
                          max={100}
                          min={0}
                          onChange={onCWChange}
                          style={{ margin: '0 16px' }}
                          value={mjStatus.cw}
                        />
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item label={t('mj.StyleReference')}>
                    <Row>
                      <Col>
                        <Upload
                          accept=".png, .jpg, .jpeg, .webp"
                          action={''}
                          fileList={styleImages}
                          listType="picture-card"
                          onChange={uploadStyleChange}
                        >
                          {styleImages.length >= 5 ? null : uploadButton('upload')}
                        </Upload>
                      </Col>
                    </Row>
                  </Form.Item>
                  {styleImages.length > 1 && (
                    <Form.Item label={t('mj.StyleReferenceRelativeWeight')}>
                      <Row>
                        {Array.from({ length: styleImages.length }).map((_, index) => (
                          <InputNumber
                            key={index}
                            min={1}
                            onChange={(value) =>
                              updateMjStatus((s) => (s.sws[index] = value ? value : 1))
                            }
                            style={{ marginRight: 5, width: 65 }}
                            value={mjStatus.sws[index]}
                          />
                        ))}
                      </Row>
                    </Form.Item>
                  )}
                  <Form.Item className={styles.mjSlider} label={t('mj.StyleReferenceWeight')}>
                    <Row>
                      <Col span={8}>
                        <Slider
                          max={1000}
                          min={0}
                          onChange={onSWChange}
                          value={typeof mjStatus.sw === 'number' ? mjStatus.sw : 0}
                        />
                      </Col>
                      <Col span={2}>
                        <InputNumber
                          max={1000}
                          min={0}
                          onChange={onSWChange}
                          style={{ margin: '0 16px' }}
                          value={mjStatus.sw}
                        />
                      </Col>
                    </Row>
                  </Form.Item>
                </>
              )}
              <Form.Item className={styles.mjSlider} label={t('mj.Chaos')}>
                <Row>
                  <Col span={8}>
                    <Slider
                      max={100}
                      min={0}
                      onChange={onChaosChange}
                      value={typeof mjStatus.chaos === 'number' ? mjStatus.chaos : 0}
                    />
                  </Col>
                  <Col span={2}>
                    <InputNumber
                      max={100}
                      min={0}
                      onChange={onChaosChange}
                      style={{ margin: '0 16px' }}
                      value={mjStatus.chaos}
                    />
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item className={styles.mjSlider} label={t('mj.Stylize')}>
                <Row>
                  <Col span={8}>
                    <Slider
                      max={1000}
                      min={0}
                      onChange={onStylizeChange}
                      value={typeof mjStatus.stylize === 'number' ? mjStatus.stylize : 0}
                    />
                  </Col>
                  <Col span={2}>
                    <InputNumber
                      max={1000}
                      min={0}
                      onChange={onStylizeChange}
                      style={{ margin: '0 16px' }}
                      value={mjStatus.stylize}
                    />
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item
                className={styles.horizontalItem}
                label={t('mj.Tile')}
                layout={'horizontal'}
              >
                <Switch checked={mjStatus.tile} onChange={onTileChange} />
              </Form.Item>
              <Form.Item
                className={styles.horizontalItem}
                label={t('mj.Seed')}
                layout={'horizontal'}
              >
                <InputNumber
                  onChange={onSeedChange}
                  style={{ width: contentWidth }}
                  value={mjStatus.seed}
                />
              </Form.Item>
              {/*<Form.Item label={t('mj.InterfaceMode')}>*/}
              {/*  <Radio.Group*/}
              {/*    name={'interfaceMode'}*/}
              {/*    onChange={onRadioChange}*/}
              {/*    value={mjStatus.interfaceMode}*/}
              {/*  >*/}
              {/*    <Radio value={'mj'}>Default</Radio>*/}
              {/*    <Radio value={'mj-relax'}>Relax</Radio>*/}
              {/*    <Radio value={'mj-fast'}>Fast</Radio>*/}
              {/*    <Radio value={'mj-turbo'}>Turbo</Radio>*/}
              {/*  </Radio.Group>*/}
              {/*</Form.Item>*/}
              <Divider>{t('mj.DividerTips')}</Divider>
              <Form.Item
                className={styles.horizontalItem}
                label={t('mj.CharacterShots')}
                layout={'horizontal'}
              >
                <Select
                  allowClear
                  onChange={(value: string) => {
                    updateMjStatus((mjStatus) => {
                      mjStatus.characterShots = value;
                    });
                  }}
                  options={MJ_CHARACTER_SHOTS}
                  style={{ width: contentWidth }}
                  value={mjStatus.characterShots}
                />
              </Form.Item>
              <Form.Item
                className={styles.horizontalItem}
                label={t('mj.VisualAngles')}
                layout={'horizontal'}
              >
                <Select
                  allowClear
                  onChange={(value: string) => {
                    updateMjStatus((mjStatus) => {
                      mjStatus.visualAngles = value;
                    });
                  }}
                  options={MJ_VISUAL_ANGLES}
                  style={{ width: contentWidth }}
                  value={mjStatus.visualAngles}
                />
              </Form.Item>
              <Form.Item
                className={styles.horizontalItem}
                label={t('mj.Light')}
                layout={'horizontal'}
              >
                <Select
                  allowClear
                  onChange={(value: string) => {
                    updateMjStatus((mjStatus) => {
                      mjStatus.light = value;
                    });
                  }}
                  options={MJ_LIGHT}
                  style={{ width: contentWidth }}
                  value={mjStatus.light}
                />
              </Form.Item>
              <Form.Item
                className={styles.horizontalItem}
                label={t('mj.Shot')}
                layout={'horizontal'}
              >
                <Select
                  allowClear
                  onChange={(value: string) => {
                    updateMjStatus((mjStatus) => {
                      mjStatus.shot = value;
                    });
                  }}
                  options={MJ_SHOTS}
                  style={{ width: contentWidth }}
                  value={mjStatus.shot}
                />
              </Form.Item>
              <Form.Item
                className={styles.horizontalItem}
                label={t('mj.Scene')}
                layout={'horizontal'}
              >
                <Select
                  allowClear
                  onChange={(value: string) => {
                    updateMjStatus((mjStatus) => {
                      mjStatus.scene = value;
                    });
                  }}
                  options={MJ_SCENE}
                  style={{ width: contentWidth }}
                  value={mjStatus.scene}
                />
              </Form.Item>
              <Form.Item
                className={styles.horizontalItem}
                label={t('mj.PaintingTypes')}
                layout={'horizontal'}
              >
                <Select
                  allowClear
                  onChange={(value: string) => {
                    updateMjStatus((mjStatus) => {
                      mjStatus.paintingTypes = value;
                    });
                  }}
                  options={MJ_PAINTING_TYPES}
                  style={{ width: contentWidth }}
                  value={mjStatus.paintingTypes}
                />
              </Form.Item>
              <Form.Item
                className={styles.horizontalItem}
                label={t('mj.Style')}
                layout={'horizontal'}
              >
                <Select
                  allowClear
                  onChange={(value: string) => {
                    updateMjStatus((mjStatus) => {
                      mjStatus.style = value;
                    });
                  }}
                  options={MJ_STYLES}
                  style={{ width: contentWidth }}
                  value={mjStatus.style}
                />
              </Form.Item>
              <Form.Item
                className={styles.horizontalItem}
                label={t('mj.RenderStyle')}
                layout={'horizontal'}
              >
                <Select
                  allowClear
                  onChange={(value: string) => {
                    updateMjStatus((mjStatus) => {
                      mjStatus.renderStyle = value;
                    });
                  }}
                  options={MJ_RENDER_STYLE}
                  style={{ width: contentWidth }}
                  value={mjStatus.renderStyle}
                />
              </Form.Item>
              <Form.Item
                className={styles.horizontalItem}
                label={t('mj.Accuracy')}
                layout={'horizontal'}
              >
                <Select
                  allowClear
                  onChange={(value: string) => {
                    updateMjStatus((mjStatus) => {
                      mjStatus.accuracy = value;
                    });
                  }}
                  options={MJ_IMAGE_ACCURACY}
                  style={{ width: contentWidth }}
                  value={mjStatus.accuracy}
                />
              </Form.Item>
              <Form.Item
                className={styles.horizontalItem}
                label={t('mj.CameraEffects')}
                layout={'horizontal'}
              >
                <Select
                  allowClear
                  onChange={(value: string) => {
                    updateMjStatus((mjStatus) => {
                      mjStatus.cameraEffects = value;
                    });
                  }}
                  options={MJ_CAMERA_EFFECTS}
                  style={{ width: contentWidth }}
                  value={mjStatus.cameraEffects}
                />
              </Form.Item>
            </>
          )}
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

Midjourney.displayName = 'Midjourney';

export default Midjourney;
