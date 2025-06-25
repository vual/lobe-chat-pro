import { Alert, Button, Highlighter, Icon } from '@lobehub/ui';
import { Result } from 'antd';
import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import React, { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';
import Balancer from 'react-wrap-balancer';

import { GITHUB_ISSUES } from '@/const/url';
import { githubService } from '@/services/github';
import { ErrorShape } from '@/types/importer';

interface ErrorProps {
  error?: ErrorShape;
  onClick: () => void;
}

const Error = memo<ErrorProps>(({ error, onClick }) => {
  const { t } = useTranslation('common');
  return (
    <Result
      extra={
        <Flexbox gap={12} style={{ textAlign: 'start' }}>
          <Alert
            extra={
              <Highlighter actionIconSize={'small'} language={'json'}>
                {JSON.stringify(error, null, 2)}
              </Highlighter>
            }
            message={error?.message}
            style={{ flex: 1 }}
            type={'error'}
          />
          <Button onClick={onClick}>{t('close')}</Button>
        </Flexbox>
      }
      icon={<Icon icon={ShieldAlert} />}
      status={'error'}
      style={{ paddingBlock: 24, width: 450 }}
      subTitle={
        <Balancer>
          <Trans i18nKey="importModal.error.desc" ns={'common'}>
            非常抱歉，数据库升级过程发生异常。请重试升级，或
            <Link
              aria-label={'issue'}
              href={GITHUB_ISSUES}
              onClick={(e) => {
                e.preventDefault();
                githubService.submitImportError(error!);
              }}
              target="_blank"
            >
              提交问题
            </Link>
            我们将会第一时间帮你排查问题。
          </Trans>
        </Balancer>
      }
      title={t('importModal.error.title')}
    />
  );
});

export default Error;
