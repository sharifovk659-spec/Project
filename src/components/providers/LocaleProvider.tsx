"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getByPath } from "@/lib/i18n/get";
import { translations } from "@/lib/i18n/translations";
import type { Locale } from "@/lib/i18n/types";
import { LOCALES } from "@/lib/i18n/types";

const STORAGE_KEY = "eterna-locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "ru";
  const stored = localStorage.getItem(STORAGE_KEY);
  return LOCALES.includes(stored as Locale) ? (stored as Locale) : "ru";
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru");

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "tj" ? "tg" : next;
    document.title = getByPath(translations[next] as Record<string, unknown>, "meta.title");
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "tj" ? "tg" : locale;
    document.title = getByPath(translations[locale] as Record<string, unknown>, "meta.title");
  }, [locale]);

  const t = useCallback(
    (key: string) => getByPath(translations[locale] as Record<string, unknown>, key),
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export default LocaleProvider;

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
}
