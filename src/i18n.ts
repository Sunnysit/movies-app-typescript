import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//Languages translation resource
import translationEn from './locales/en/translation.json';
import translationZhCN from './locales/zh-cn/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEn,
  },
  zh: {
    translation: translationZhCN,
  },
  'zh-CN': {
    translation: translationZhCN,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
