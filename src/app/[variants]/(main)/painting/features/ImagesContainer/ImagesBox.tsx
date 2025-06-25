import { Flex, Image } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';

import { usePaintingStore } from '@/store/painting';
import { Painting } from '@/types/painting';

const useStyles = createStyles(({ css }) => ({
  box: css`
    display: flex !important;
    align-items: center;
    justify-content: center;

    width: 250px;
    height: 250px;
    border-radius: 10px;

    background-color: lightgray;
  `,

  mobile: css`
    width: 175px;
    max-width: 175px;
    height: 175px;
    max-height: 175px;
  `,
}));

const ImagesBox = memo((props: { isMobile: boolean; painting: Painting }) => {
  const { styles } = useStyles();
  const [getPreviewUrl] = usePaintingStore((s) => [s.getPreviewUrl]);

  return (
    <Flex className={styles.box + (props.isMobile ? ' ' + styles.mobile : '')} wrap>
      {props.painting.images.length > 0 &&
        props.painting.images.map((image: any, index) => {
          const imageUrl = getPreviewUrl(image.url);

          return (
            <Image
              key={index}
              src={imageUrl}
              style={{
                borderRadius: 10,
                maxHeight: props.isMobile ? 175 : 250,
                maxWidth: props.isMobile ? 175 : 250,
              }}
            />
          );
        })}
    </Flex>
  );
});

export default ImagesBox;
