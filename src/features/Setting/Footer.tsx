'use client';

import { Icon } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { MessageSquareHeart } from 'lucide-react';
import Link from 'next/link';
import { PropsWithChildren, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';

import GuideModal from '@/components/GuideModal';
import GuideVideo from '@/components/GuideVideo';
import { BRANDING_NAME } from '@/const/branding';
import { GITHUB, GITHUB_ISSUES } from '@/const/url';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';
import { isOnServerSide } from '@/utils/env';

const useStyles = createStyles(
  ({ css, token }) => css`
    font-size: 12px;
    color: ${token.colorTextSecondary};
  `,
);

const Footer = memo<PropsWithChildren>(() => {
  const { t } = useTranslation('common');
  const [openStar, setOpenStar] = useState(false);
  const [openFeedback, setOpenFeedback] = useState(false);
  const { styles } = useStyles();

  const { hideGitHub } = useServerConfigStore(featureFlagsSelectors);

  return hideGitHub ? null : (
    <>
      <Flexbox justify={'flex-end'}>
        <Center
          as={'footer'}
          className={styles}
          flex={'none'}
          horizontal
          padding={16}
          width={'100%'}
        >
          <div style={{ textAlign: 'center' }}>
            <Icon icon={MessageSquareHeart} /> {`${t('footer.title')} `}
            <Link
              aria-label={'star'}
              href={GITHUB}
              onClick={(e) => {
                e.preventDefault();
                setOpenStar(true);
              }}
            >
              {t('footer.action.star')}
            </Link>
            {` ${t('footer.and')} `}
            <Link
              aria-label={'feedback'}
              href={GITHUB_ISSUES}
              onClick={(e) => {
                e.preventDefault();
                setOpenFeedback(true);
              }}
            >
              {t('footer.action.feedback')}
            </Link>
            {' !'}
          </div>
        </Center>
      </Flexbox>
      <GuideModal
        cancelText={t('footer.later')}
        cover={<GuideVideo height={269} src={'/videos/star.mp4?v=1'} width={358} />}
        desc={t('footer.star.desc')}
        okText={t('footer.star.action')}
        onCancel={() => setOpenStar(false)}
        onOk={() => {
          if (isOnServerSide) return;
          window.open(GITHUB, '__blank');
        }}
        open={openStar}
        title={t('footer.star.title')}
      />
      <GuideModal
        cancelText={t('footer.later')}
        cover={<GuideVideo height={269} src={'/videos/feedback.mp4?v=1'} width={358} />}
        desc={t('footer.feedback.desc', { appName: BRANDING_NAME })}
        okText={t('footer.feedback.action')}
        onCancel={() => setOpenFeedback(false)}
        onOk={() => {
          if (isOnServerSide) return;
          window.open(GITHUB_ISSUES, '__blank');
        }}
        open={openFeedback}
        title={t('footer.feedback.title')}
      />
    </>
  );
});

Footer.displayName = 'SettingFooter';

export default Footer;
