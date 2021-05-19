export const lang = {
  base: "en_us",
  en: "en_us",
  zh: "zh_cn",
};

export const flag = {
  [lang.en]: "https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg",
  [lang.zh]: "https://lipis.github.io/flag-icon-css/flags/4x3/cn.svg",
};

// data for pricing - currency pricing from Sanity
export const Currency = {
  [lang.en]: "USD",
  [lang.zh]: "EUR",
};

// data for sanity studio
export const languages = [
  { name: lang.en, title: "English" },
  { name: lang.zh, title: "Chinese" },
];

export const baseLanguage = lang.base;

export const i18n_options = {
  i18n: true,
  base: "en_us",
  languages,
  messages: {
    loading: "Loading languages...",
    missingTranslations: "Missing translations message...",
  },
};
