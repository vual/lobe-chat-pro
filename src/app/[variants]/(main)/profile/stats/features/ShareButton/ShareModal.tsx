'use client';

import { type FormItemProps, FormModal, FormModalProps, Segmented } from '@lobehub/ui';
import { Skeleton } from 'antd';
import { createStyles } from 'antd-style';
import dynamic from 'next/dynamic';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ImageType, imageTypeOptions, useScreenshot } from '@/hooks/useScreenshot';

const Preview = dynamic(() => import('./Preview'), {
  loading: () => (
    <Skeleton.Button
      active
      block
      size={'large'}
      style={{
        height: 400,
        width: '100%',
      }}
    />
  ),
});

const useStyles = createStyles(({ css, prefixCls }) => ({
  preview: css`
    .${prefixCls}-form-item-label {
      display: none;
    }
  `,
}));

type FieldType = {
  imageType: ImageType;
};

const DEFAULT_FIELD_VALUE: FieldType = {
  imageType: ImageType.JPG,
};

const ShareModal = memo<FormModalProps & { mobile?: boolean }>(({ open, onCancel, mobile }) => {
  const { t } = useTranslation(['chat', 'common']);
  const [fieldValue, setFieldValue] = useState<FieldType>(DEFAULT_FIELD_VALUE);
  const { styles } = useStyles();
  const { loading, onDownload } = useScreenshot({
    imageType: fieldValue.imageType,
    title: 'stats',
    width: mobile ? 440 : undefined,
  });

  const items: FormItemProps[] = [
    {
      children: <Preview />,
      className: styles.preview,
      divider: false,
      minWidth: '100%',
    },
    {
      children: <Segmented options={imageTypeOptions} />,
      divider: false,
      label: t('shareModal.imageType'),
      minWidth: undefined,
      name: 'imageType',
    },
  ];

  return (
    <FormModal
      allowFullscreen
      footer={null}
      initialValues={DEFAULT_FIELD_VALUE}
      items={items}
      itemsType={'flat'}
      onCancel={onCancel}
      onFinish={onDownload}
      onValuesChange={(_, v) => setFieldValue(v)}
      open={open}
      submitLoading={loading}
      submitText={t('shareModal.download')}
      title={t('share', { ns: 'common' })}
      width={480}
    />
  );
});

export default ShareModal;
