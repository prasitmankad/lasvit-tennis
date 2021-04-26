import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import transitionEn from "./translationEn.json";
import transitionZh from "./translationZh.json";

import { getLanguage } from "./utils";

const resources = {
  en: {
    translation: transitionEn,
  },
  zh: {
    translation: transitionZh,
  },
};

void i18n.use(initReactI18next).init({
  debug: false,
  resources,
  lng: getLanguage() || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
