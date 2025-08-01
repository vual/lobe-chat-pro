'use client';

import { ModelTag, ProviderIcon } from '@lobehub/icons';
import { Tag } from '@lobehub/ui';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';
import urlJoin from 'url-join';

import { OFFICIAL_URL } from '@/const/url';

import ShareButton from '../../../../../features/ShareButton';
import { useDetailContext } from '../../DetailProvider';
import ProviderConfig from './ProviderConfig';

const ActionButton = memo(() => {
  const { models = [], identifier, name } = useDetailContext();
  const { t } = useTranslation('providers');
  return (
    <Flexbox align={'center'} gap={8} horizontal width={'100%'}>
      <ProviderConfig />
      <ShareButton
        meta={{
          avatar: <ProviderIcon provider={identifier} size={64} type={'avatar'} />,
          desc: t(`${identifier}.description`),
          tags: (
            <Flexbox align={'center'} gap={4} horizontal justify={'center'} wrap={'wrap'}>
              {models
                .slice(0, 4)
                .filter(Boolean)
                .map((item) => (
                  <ModelTag key={item.id} model={item.id} style={{ margin: 0 }} />
                ))}
              {models.length > 3 && <Tag>+{models.length - 3}</Tag>}
            </Flexbox>
          ),
          title: name,
          url: urlJoin(OFFICIAL_URL, '/discover/provider', identifier as string),
        }}
      />
    </Flexbox>
  );
});

export default ActionButton;
