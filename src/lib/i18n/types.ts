export const LOCALES = ["ru", "tj", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  ru: "RU",
  tj: "TJ",
  en: "EN",
};

export type TranslationDict = typeof import("./translations").translations.ru;
