import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';
import { isRtlLang } from 'rtl-detect';

import { getDebugConfig } from '@/config/debug';
import { DEFAULT_LANG } from '@/const/locale';
import { normalizeLocale } from '@/locales/resources';
import { isDev, isOnServerSide } from '@/utils/env';

const { I18N_DEBUG, I18N_DEBUG_BROWSER, I18N_DEBUG_SERVER } = getDebugConfig();
const debugMode = (I18N_DEBUG ?? isOnServerSide) ? I18N_DEBUG_SERVER : I18N_DEBUG_BROWSER;

export const createI18nNext = (lang?: string) => {
  const instance = i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
      resourcesToBackend(async (lng: string, ns: string) => {
        if (isDev && lng === 'zh-CN') return import(`./default/${ns}`);

        return import(`@/../locales/${normalizeLocale(lng)}/${ns}.json`);
      }),
    );
  // Dynamically set HTML direction on language change
  instance.on('languageChanged', (lng) => {
    if (typeof window !== 'undefined') {
      const direction = isRtlLang(lng) ? 'rtl' : 'ltr';
      document.documentElement.dir = direction;
    }
  });
  return {
    init: () =>
      instance.init({
        debug: debugMode,
        defaultNS: ['error', 'common', 'chat'],
        // detection: {
        //   caches: ['cookie'],
        //   cookieMinutes: 60 * 24 * COOKIE_CACHE_DAYS,
        //   /**
        //      Set `sameSite` to `lax` so that the i18n cookie can be passed to the
        //      server side when returning from the OAuth authorization website.
        //      ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value
        //      discussion: https://github.com/lobehub/lobe-chat/pull/1474
        //   */
        //   cookieOptions: {
        //     sameSite: 'lax',
        //   },
        //   lookupCookie: LOBE_LOCALE_COOKIE,
        // },
        fallbackLng: DEFAULT_LANG,
        interpolation: {
          escapeValue: false,
        },
        lng: lang,
      }),
    instance,
  };
};
