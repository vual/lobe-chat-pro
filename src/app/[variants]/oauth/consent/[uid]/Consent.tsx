'use client';

import { Button, Text } from '@lobehub/ui';
import { Card, Divider } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';

import OAuthApplicationLogo from './components/OAuthApplicationLogo';

interface ClientProps {
  clientId: string;
  clientMetadata: {
    clientName?: string;
    isFirstParty?: boolean;
    logo?: string;
  };

  redirectUri?: string;
  scopes: string[];
  uid: string;
}

const useStyles = createStyles(({ css, token }) => ({
  authButton: css`
    width: 100%;
    height: 40px;
    border-radius: ${token.borderRadius}px;
    font-weight: 500;
  `,
  cancelButton: css`
    width: 100%;
    height: 40px;
    border-color: ${token.colorBorderSecondary};
    border-radius: ${token.borderRadius}px;

    font-weight: 500;
    color: ${token.colorTextBase};

    background-color: transparent;
  `,
  card: css`
    width: 100%;
    max-width: 500px;
    border-color: ${token.colorBorderSecondary};
    border-radius: 12px;

    background-color: ${token.colorBgContainer};
  `,
  connector: css`
    width: 40px;
    height: 40px;
  `,
  connectorLine: css`
    width: 32px;
    height: 1px;
    background-color: ${token.colorBorderSecondary};
  `,
  container: css`
    width: 100%;
    min-height: 100vh;
    color: ${token.colorTextBase};
    background-color: ${token.colorBgLayout};
  `,
  icon: css`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 64px;
    height: 64px;
    border: 1px solid ${token.colorBorderSecondary};
    border-radius: 16px;

    background-color: ${token.colorBgElevated};
  `,
  iconContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  lobeIcon: css`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 64px;
    height: 64px;
    border-radius: 50%;

    background-color: ${token.colorBgElevated};
  `,
  scope: css`
    margin-block: 8px;
    padding: 12px;
    border-radius: 6px;
    background: ${token.colorFillQuaternary};
  `,
  scopes: css`
    width: 100%;
  `,
  title: css`
    margin-block-end: ${token.marginLG}px;
    font-size: 24px;
    color: ${token.colorTextBase};
    text-align: center;
  `,
}));

/**
 * 获取 Scope 的描述
 */
function getScopeDescription(scope: string, t: any): string {
  return t(`consent.scope.${scope.replace(':', '-')}`, scope);
}

const ConsentClient = memo<ClientProps>(
  ({ uid, clientId, scopes, clientMetadata, redirectUri }) => {
    const { styles, theme } = useStyles();
    const { t } = useTranslation('oauth');

    const clientDisplayName = clientMetadata?.clientName || clientId;
    return (
      <Center className={styles.container} gap={16}>
        <Flexbox gap={40}>
          <OAuthApplicationLogo
            clientDisplayName={clientDisplayName}
            isFirstParty={clientMetadata.isFirstParty}
            logoUrl={clientMetadata.logo}
          />
          <Text as={'h3'} className={styles.title}>
            {t('consent.title', { clientName: clientDisplayName })}
          </Text>
        </Flexbox>
        <Card className={styles.card}>
          <Flexbox gap={8}>
            <Flexbox gap={12}>
              <Text>{t('consent.description', { clientName: clientDisplayName })}</Text>

              <div className={styles.scopes}>
                <Text type={'secondary'}>{t('consent.permissionsTitle')}</Text>
                {scopes.map((scope) => (
                  <div className={styles.scope} key={scope}>
                    <Text>{getScopeDescription(scope, t)}</Text>
                  </div>
                ))}
              </div>

              <Divider dashed />
              <Flexbox gap={16}>
                <form action="/oidc/consent" method="post" style={{ width: '100%' }}>
                  <input name="uid" type="hidden" value={uid} />
                  <Flexbox gap={12} horizontal>
                    <Button
                      className={styles.cancelButton}
                      htmlType="submit"
                      name="consent"
                      value="deny"
                    >
                      {t('consent.buttons.deny')}
                    </Button>
                    <Button
                      className={styles.authButton}
                      htmlType="submit"
                      name="consent"
                      type="primary"
                      value="accept"
                    >
                      {t('consent.buttons.accept')}
                    </Button>
                  </Flexbox>
                </form>
                <Center>
                  <div style={{ color: theme.colorTextTertiary, fontSize: 12, height: '18px' }}>
                    {t('consent.redirectUri')}
                  </div>
                  <div>
                    <div
                      style={{
                        color: theme.colorTextSecondary,
                        fontSize: 12,
                        height: '18px',
                      }}
                    >
                      {redirectUri}
                    </div>
                  </div>
                </Center>
              </Flexbox>
            </Flexbox>
          </Flexbox>
        </Card>
      </Center>
    );
  },
);

ConsentClient.displayName = 'ConsentClient';

export default ConsentClient;
