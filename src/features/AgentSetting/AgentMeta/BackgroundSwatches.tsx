import { ColorSwatches, ColorSwatchesProps, primaryColors } from '@lobehub/ui';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { DEFAULT_BACKGROUND_COLOR } from '@/const/meta';

interface BackgroundSwatchesProps
  extends Pick<ColorSwatchesProps, 'defaultValue' | 'value' | 'onChange'> {
  onValuesChange?: ColorSwatchesProps['onChange'];
}

const BackgroundSwatches = memo<BackgroundSwatchesProps>(
  ({ defaultValue = DEFAULT_BACKGROUND_COLOR, value, onChange, onValuesChange }) => {
    const { t } = useTranslation('color');
    return (
      <ColorSwatches
        colors={[
          {
            color: 'rgba(0, 0, 0, 0)',
            title: t('default'),
          },
          {
            color: primaryColors.red,
            title: t('red'),
          },
          {
            color: primaryColors.orange,
            title: t('orange'),
          },
          {
            color: primaryColors.gold,
            title: t('gold'),
          },
          {
            color: primaryColors.yellow,
            title: t('yellow'),
          },
          {
            color: primaryColors.lime,
            title: t('lime'),
          },
          {
            color: primaryColors.green,
            title: t('green'),
          },
          {
            color: primaryColors.cyan,
            title: t('cyan'),
          },
          {
            color: primaryColors.blue,
            title: t('blue'),
          },
          {
            color: primaryColors.geekblue,
            title: t('geekblue'),
          },
          {
            color: primaryColors.purple,
            title: t('purple'),
          },
          {
            color: primaryColors.magenta,
            title: t('magenta'),
          },
          {
            color: primaryColors.volcano,
            title: t('volcano'),
          },
        ]}
        defaultValue={defaultValue}
        enableColorPicker
        onChange={(v) => {
          onChange?.(v);
          onValuesChange?.(v);
        }}
        texts={{
          custom: t('custom'),
          presets: t('presets'),
        }}
        value={value}
      />
    );
  },
);

export default BackgroundSwatches;
