'use client';

import { Avatar, ConfigProvider, Segmented } from 'antd';
import { createStyles } from 'antd-style';

import { MidjourneyIconBase64 } from '@/const/iconsBase64';
import { usePaletteStore } from '@/store/palette';
import { paletteStoreSelectors } from '@/store/palette/selectors';

const useStyles = createStyles(({ css }) => ({
  paletteSegment: css`
    > .ant-segmented-group > .ant-segmented-item {
      flex: 1;
    }
  `,
}));

const Layout = () => {
  const { styles } = useStyles();
  const [palettePlatsform, switchPlatform] = usePaletteStore((s) => [
    paletteStoreSelectors.palettePlatform(s),
    s.switchPlatform,
  ]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            itemSelectedBg: 'lightblue',
          },
        },
      }}
    >
      <Segmented
        className={styles.paletteSegment}
        onChange={(value) => {
          switchPlatform(value);
        }}
        options={[
          {
            label: (
              <div style={{ padding: 4 }}>
                <Avatar size={25} src={MidjourneyIconBase64} />
                <div>Midjourney</div>
              </div>
            ),
            value: 'Midjourney',
          },
        ]}
        size="small"
        value={palettePlatsform}
      />
    </ConfigProvider>
  );
};
Layout.displayName = 'PaletteHeader';

export default Layout;
