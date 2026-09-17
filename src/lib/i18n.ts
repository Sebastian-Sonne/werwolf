import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import commonDE from '../locales/de/common.json'
import rolesDE from '../locales/de/roles.json'
// import commonEN from '../locales/en/common.json'
// import rolesEN from '../locales/en/roles.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: {
        common: commonDE,
        roles: rolesDE,
      },
    //   en: {
    //     common: commonEN,
    //     roles: rolesEN,
    //   },
    },
    fallbackLng: 'de',
    defaultNS: 'common', 
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n