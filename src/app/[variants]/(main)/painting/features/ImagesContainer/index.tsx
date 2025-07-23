'use client';

import {
  CloseCircleOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
  PlusOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import {
  Button,
  Card,
  Flex,
  FloatButton,
  InputNumber,
  Modal,
  Popconfirm,
  Progress,
  Tag,
  Tooltip,
  message,
} from 'antd';
import { createStyles } from 'antd-style';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useGlobalStore } from '@/store/global';
import { systemStatusSelectors } from '@/store/global/selectors';
import { usePaintingStore } from '@/store/painting';
import { paintingStoreSelectors } from '@/store/painting/selectors';
import { PaletteStore, usePaletteStore } from '@/store/palette';
import { useUserStore } from '@/store/user';
import { authSelectors } from '@/store/user/slices/auth/selectors';
import { Painting } from '@/types/painting';

import ImagesBox from './ImagesBox';
import InpaintModal from './InpaintModal';

const useStyles = createStyles(({ css }) => ({
  buttons: css`
    .ant-btn-sm {
      height: 22px;
      padding-inline: 11px 11px !important;
      border-radius: 22px !important;
      font-size: 12px;
    }
  `,

  container: css`
    height: auto;
    padding: 10px;
  `,

  customZoomInput: css`
    width: 300px;
    margin: 10px;
  `,

  dateTime: css`
    display: flex;
    align-items: center;
    font-size: 12px;
  `,

  imageCard: css`
    width: 250px;

    .ant-flex-wrap-wrap,
    .ant-image-mask {
      border-radius: 10px;
    }

    .ant-card-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      height: 35px;
      padding: 5px;

      transition: all 0.5s ease;

      .bottom-info {
        flex: 1;
        margin-block-start: 10px;
        opacity: 0;
        transition: all 0.5s ease;
      }

      &:hover {
        height: 100px;

        .bottom-info {
          opacity: 1;
        }
      }
    }
  `,

  imageCardFailure: css`
    .ant-card-body {
      height: 35px !important;

      &:hover {
        height: 35px;
      }
    }
  `,

  imageCardMobile: css`
    width: 175px;

    .ant-card-body {
      &:hover {
        height: 145px;
      }
    }
  `,

  imageCardMoreButtons: css`
    .ant-card-body {
      &:hover {
        height: 125px;
      }
    }
  `,

  imageCardMoreButtonsMobile: css`
    .ant-card-body {
      &:hover {
        height: 170px;
      }
    }
  `,

  imageCardProgress: css`
    .ant-card-body {
      height: 60px !important;
    }
  `,

  imageInfo: css`
    display: flex;
    flex-direction: column;
  `,

  infoTags: css`
    .ant-tag {
      margin-inline-end: 5px;
    }
  `,

  toolTips: css`
    max-width: 300px;
    height: auto;

    .ant-tooltip-inner {
      overflow: auto auto;
      word-break: break-word;
    }
  `,

  topInfo: css`
    display: flex;
    justify-content: space-between;
  `,
}));

const formatDate = (date: Date) => {
  const dateStr = date.toLocaleString();
  return dateStr.slice(0, Math.max(0, dateStr.lastIndexOf(':')));
};

const ImagesContainer = memo((props: { isMobile: boolean }) => {
  const { styles } = useStyles();
  const isDBInited = useGlobalStore(systemStatusSelectors.isDBInited);
  const isLogin = useUserStore(authSelectors.isLogin);
  const [
    useFetchPaitings,
    createPainting,
    deletePainting,
    paintingsMap,
    queryPaintings,
    updateShowPanel,
  ] = usePaintingStore((s) => [
    s.useFetchPaitings,
    s.createPainting,
    s.deletePainting,
    paintingStoreSelectors.paintingsMap(s),
    s.queryPaintings,
    s.updateShowPanel,
  ]);
  useFetchPaitings(isDBInited && isLogin);
  const [mjStatus] = usePaletteStore((s: PaletteStore) => [s.mjStatus]);
  const { t } = useTranslation('painting');
  const [messageApi, contextHolder] = message.useMessage();
  const [showCustomZoomModal, setShowCustomZoomModal] = useState(false);
  const [showInpaintModal, setShowInpaintModal] = useState(false);
  const [currentPainting, setCurrentPainting] = useState<Painting>({} as Painting);
  const [customId, setCustomId] = useState('');
  const [customZoom, setCustomZoom] = useState(1.8);
  const [querying, setQuerying] = useState(false);

  const scrollTo = (type: string) => {
    // 使用最后一个卡片元素进行滚动
    const cards = document.querySelectorAll(`.${styles.imageCard}`);
    if (cards && cards.length > 0) {
      const lastIndex = cards.length - 1;
      const lastCard = type === 'top' ? cards[0] : cards[lastIndex];
      lastCard.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };
  const queryMoreData = () => {
    if (querying) return;
    setQuerying(true);
    queryPaintings().then((res) => {
      setQuerying(false);
      if (res > 0) {
        messageApi.open({ content: t('LoadSuccess'), type: 'success' });
        setTimeout(() => {
          scrollTo('bottom');
        }, 300);
      } else if (res === 0) {
        messageApi.open({ content: t('NoMoreData'), type: 'warning' });
      } else {
        messageApi.open({ content: t('LoadError'), type: 'error' });
      }
    });
  };
  const onCustomZoomChange = (value: number | null) => {
    setCustomZoom(value ? value : 1.8);
  };

  const delPainting = (p: Painting) => {
    deletePainting(p).then((res) => {
      if (res === 'success') {
        messageApi.open({ content: t('DeleteSuccess'), type: 'success' });
      } else {
        messageApi.open({ content: t('DeleteFailed') + ':' + JSON.stringify(res), type: 'error' });
      }
    });
  };

  const doAction = (p: Painting, params: any) => {
    const action = params.customId.startsWith('MJ') ? 'CUSTOM' : params.customId.split('::')[0];
    const platform = params.platform || p.platform;
    const painting = {
      action,
      config: { interfaceMode: mjStatus.interfaceMode },
      createdAt: new Date(),
      description: '',
      extra: {
        fetchTimes: 0,
        groupId: p.extra.groupId,
        parentId: p.id,
        parentTaskId: p.taskId,
      },
      failReason: '',
      images: [],
      negativePrompt: '',
      platform,
      progress: '0%',
      prompt: params.prompt ? p.prompt + ', ' + params.prompt : params.customId,
      status: 'INIT', // INIT, SUBMITTED, IN_PROGRESS, SUCCESS, FAILURE
      taskId: '',
      updatedAt: new Date(),
    };

    createPainting(painting as any, params).then((res: string) => {
      if (res === 'success') {
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
    });
  };

  const doCustomZoom = () => {
    let prompt = currentPainting.extra.promptEn || currentPainting.prompt;
    const index = prompt.indexOf('--zoom');
    if (index > 0) {
      prompt =
        prompt.slice(0, Math.max(0, index + 6)) +
        ' ' +
        customZoom +
        ' ' +
        prompt.slice(Math.max(0, index + 10));
    } else {
      prompt += ' --zoom ' + customZoom;
    }
    doAction(currentPainting, { customId, prompt });
    setShowCustomZoomModal(false);
  };

  return (
    <>
      {contextHolder}
      <Flex className={styles.container} gap={'small'} wrap>
        {Object.values(paintingsMap).map((painting: Painting, index: number) => (
          <Card
            className={
              styles.imageCard +
              (painting.status !== 'SUCCESS' && painting.status !== 'FAILURE'
                ? ' ' + styles.imageCardProgress
                : '') +
              (painting.status === 'FAILURE' ? ' ' + styles.imageCardFailure : '') +
              (props.isMobile ? ' ' + styles.imageCardMobile : '') +
              (painting.extra.buttons && painting.extra.buttons.length > 10
                ? ' ' +
                  (props.isMobile ? styles.imageCardMoreButtonsMobile : styles.imageCardMoreButtons)
                : '')
            }
            cover={<ImagesBox isMobile={props.isMobile} painting={painting} />}
            hoverable
            key={index}
          >
            <div className={styles.topInfo}>
              <div className={styles.infoTags}>
                <Tag color={'cyan'}>{'MJ'}</Tag>
                <Tooltip classNames={{ root: styles.toolTips }} title={painting.prompt}>
                  <Tag color={'geekblue'} icon={<InfoCircleOutlined />} />
                </Tooltip>
                <Popconfirm
                  description={t('DeleteTips')}
                  onConfirm={() => delPainting(painting)}
                  title={'Tips'}
                  zIndex={1001}
                >
                  <Tooltip title={'Delete'} zIndex={1000}>
                    <Tag color={'red'} icon={<DeleteOutlined />} />
                  </Tooltip>
                </Popconfirm>
                {painting.status !== 'SUCCESS' && painting.status !== 'FAILURE' && (
                  <Tag color={'processing'} icon={<SyncOutlined spin />} />
                )}
                {painting.status === 'FAILURE' && (
                  <Tooltip classNames={{ root: styles.toolTips }} title={painting.failReason}>
                    <Tag color={'error'} icon={<CloseCircleOutlined />} />
                  </Tooltip>
                )}
              </div>
              {!props.isMobile && (
                <div className={styles.dateTime}>
                  <span>{formatDate(painting.createdAt)}</span>
                </div>
              )}
            </div>
            {painting.status !== 'SUCCESS' && painting.status !== 'FAILURE' && (
              <Progress percent={parseInt(painting.progress.replace('%', ''))} />
            )}
            <div className={'bottom-info'}>
              <Flex className={styles.buttons} gap={5} wrap>
                {painting.platform === 'Midjourney' && painting.status === 'SUCCESS' && (
                  <>
                    {painting.extra.buttons &&
                      painting.extra.buttons?.map((bt: any, bti: number) => (
                        <Tooltip key={bti} title={bt.label}>
                          <Button
                            onClick={() => {
                              if (bt.customId.includes('CustomZoom')) {
                                setCurrentPainting(painting);
                                setCustomId(bt.customId);
                                setShowCustomZoomModal(true);
                              } else if (bt.customId.includes('Inpaint')) {
                                setCurrentPainting(painting);
                                setCustomId(bt.customId);
                                setShowInpaintModal(true);
                              } else {
                                doAction(painting, { customId: bt.customId });
                              }
                            }}
                            shape={'round'}
                            size={'small'}
                          >
                            {bt.emoji || bt.label}
                          </Button>
                        </Tooltip>
                      ))}
                    {!painting.extra.buttons &&
                      ['VARIATION', 'IMAGINE', 'BLEND'].includes(painting.action) && (
                        <>
                          {Array.from({ length: 9 }).map((_, bti: number) => (
                            <Button
                              key={bti}
                              onClick={() => {
                                setCustomId(
                                  bti === 4
                                    ? 'REROLL'
                                    : bti < 4
                                      ? 'UPSCALE::' + (bti + 1)
                                      : 'VARIATION::' + (bti - 4),
                                );
                                doAction(painting, { customId });
                              }}
                              shape={'round'}
                              size={'small'}
                            >
                              {bti === 4 ? '🔄' : bti < 4 ? 'U' + (bti + 1) : 'V' + (bti - 4)}
                            </Button>
                          ))}
                        </>
                      )}
                  </>
                )}
              </Flex>
            </div>
          </Card>
        ))}
        <div>
          <FloatButton
            icon={<SyncOutlined spin={querying} />}
            onClick={queryMoreData}
            style={{
              insetBlockEnd: props.isMobile ? 110 : undefined,
              insetInlineEnd: props.isMobile ? 10 : undefined,
            }}
            tooltip={t('LoadMore')}
          />
          {props.isMobile && (
            <FloatButton
              icon={<PlusOutlined />}
              onClick={() => updateShowPanel(true)}
              style={{ insetBlockEnd: 55, insetInlineEnd: 10 }}
            />
          )}
        </div>
      </Flex>
      <Modal
        onCancel={() => setShowCustomZoomModal(false)}
        onOk={doCustomZoom}
        open={showCustomZoomModal && customId.includes('CustomZoom')}
        title={'CustomZoom'}
      >
        <InputNumber
          className={styles.customZoomInput}
          max={2}
          min={1}
          onChange={onCustomZoomChange}
          step={0.1}
          value={customZoom}
        />
      </Modal>
      {showInpaintModal && (
        <InpaintModal
          customId={customId}
          doAction={doAction}
          onClose={() => setShowInpaintModal(false)}
          painting={currentPainting}
        />
      )}
    </>
  );
});

export default ImagesContainer;
