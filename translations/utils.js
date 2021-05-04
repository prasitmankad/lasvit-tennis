import i18n from "i18next";
import { baseLanguage } from "./config";
const I18N = "i18n-lang";

export function setLanguage(lang) {
  i18n.changeLanguage(lang);
  localStorage.setItem(I18N, lang);
}

export function getLanguage() {
  try {
    const lang = localStorage.getItem(I18N) || baseLanguage;
    return lang;
  } catch (error) {
    return baseLanguage;
  }
}
