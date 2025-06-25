'use client';

import { ActionIcon, Button, Text } from '@lobehub/ui';
import { Divider } from 'antd';
import { useTheme } from 'antd-style';
import { ArrowLeftIcon, DownloadIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { downloadFile } from '@/utils/client/downloadFile';

interface HeaderProps {
  filename: string;
  id: string;
  url: string;
}
const Header = memo<HeaderProps>(({ filename, url }) => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const theme = useTheme();
  return (
    <Flexbox
      align={'center'}
      horizontal
      justify={'space-between'}
      paddingBlock={12}
      paddingInline={12}
      style={{ borderBottom: `1px solid ${theme.colorSplit}` }}
    >
      <Flexbox align={'baseline'} horizontal>
        <Button
          icon={ArrowLeftIcon}
          onClick={() => {
            router.push('/files');
          }}
          size={'small'}
          type={'text'}
        >
          {t('back')}
        </Button>
        <Divider type={'vertical'} />
        <Text
          as={'h1'}
          style={{ fontSize: 16, lineHeight: 1.5, marginBottom: 0, paddingInlineStart: 8 }}
        >
          {filename}
        </Text>
      </Flexbox>
      <Flexbox>
        <ActionIcon
          icon={DownloadIcon}
          onClick={() => {
            downloadFile(url, filename);
          }}
        />
      </Flexbox>
    </Flexbox>
  );
});
export default Header;
