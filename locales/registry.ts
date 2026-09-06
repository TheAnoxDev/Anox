import type { Translation } from "./types";
import { buildTranslation } from "./localized";

export const LOCALES = ["en", "fa", "ar", "ru", "es", "zh"] as const;
export type Locale = (typeof LOCALES)[number];

const rtlLocales: Locale[] = ["fa", "ar"];

const translations: Record<Locale, Translation> = {
  en: buildTranslation("en"),
  fa: buildTranslation("fa"),
  ar: buildTranslation("ar"),
  ru: buildTranslation("ru"),
  es: buildTranslation("es"),
  zh: buildTranslation("zh"),
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function isRTL(locale: Locale) {
  return rtlLocales.includes(locale);
}

export function getTranslation(locale: Locale): Translation {
  return translations[locale];
}
