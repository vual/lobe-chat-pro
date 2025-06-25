'use client';

import { Form } from '@lobehub/ui';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { FORM_STYLE } from '@/const/layoutTokens';

import OpeningMessage from './OpeningMessage';
import OpeningQuestions from './OpeningQuestions';

const wrapperCol = {
  style: {
    maxWidth: '100%',
    width: '100%',
  },
};

const AgentOpening = memo(() => {
  const { t } = useTranslation('setting');

  return (
    <Form
      items={[
        {
          children: [
            {
              children: <OpeningMessage />,
              desc: t('settingOpening.openingMessage.desc'),
              label: t('settingOpening.openingMessage.title'),
              layout: 'vertical',
              wrapperCol,
            },
            {
              children: <OpeningQuestions />,
              desc: t('settingOpening.openingQuestions.desc'),
              label: t('settingOpening.openingQuestions.title'),
              layout: 'vertical',
              wrapperCol,
            },
          ],
          title: t('settingOpening.title'),
        },
      ]}
      itemsType={'group'}
      variant={'borderless'}
      {...FORM_STYLE}
    />
  );
});

export default AgentOpening;
