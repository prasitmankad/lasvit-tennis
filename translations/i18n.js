import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLanguage } from "./utils";
import { lang } from "./config";
import transitionEn from "./translationEn.json";
import transitionZh from "./translationZh.json";

void i18n.use(initReactI18next).init({
  debug: false,
  resources: {
    [lang.en]: {
      translation: transitionEn,
    },
    [lang.zh]: {
      translation: transitionZh,
    },
  },
  lng: getLanguage() || lang.base,
  fallbackLng: lang.base,
  interpolation: { escapeValue: false },
});

export default i18n;
