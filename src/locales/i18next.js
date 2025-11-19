import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './ru/translation.json';
import en from './en/translation.json';
import ky from './ky/translation.json';
import Locales from './locales.js';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      [Locales.Locale.EN]: { translation: en },
      [Locales.Locale.RU]: { translation: ru },
      [Locales.Locale.KY]: { translation: ky },
    },
    lng: Locales.DEFAULT_LOCALE,
    fallbackLng: Locales.Locale.EN,
    supportedLngs: Locales.SUPPORTED_LOCALES,
  });

export default i18n;
