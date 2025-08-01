'use client';

import { ModelIcon } from '@lobehub/icons';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import urlJoin from 'url-join';

import { OFFICIAL_URL } from '@/const/url';

import ShareButton from '../../../../../features/ShareButton';
import { useDetailContext } from '../../DetailProvider';
import ChatWithModel from './ChatWithModel';

const ActionButton = memo(() => {
  const { description, providers, displayName, identifier } = useDetailContext();
  return (
    <Flexbox align={'center'} gap={8} horizontal>
      <ChatWithModel />
      <ShareButton
        meta={{
          avatar: <ModelIcon model={identifier} size={64} type={'avatar'} />,
          desc: description,
          hashtags: providers?.map((item) => item.name) || [],
          title: displayName || identifier,
          url: urlJoin(OFFICIAL_URL, '/discover/model', identifier as string),
        }}
      />
    </Flexbox>
  );
});

export default ActionButton;
