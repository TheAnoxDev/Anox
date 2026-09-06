"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getTranslation, isLocale, isRTL, LOCALES, type Locale } from "@/locales/registry";

interface LangContextType {
  lang: Locale;
  setLang: (lang: Locale) => void;
  t: ReturnType<typeof getTranslation>;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const pathLocale = pathname.split("/")[1];
  const initial = isLocale(pathLocale) ? pathLocale : "en";
  const [lang, setLangState] = useState<Locale>(initial);

  const setLang = (value: Locale) => {
    setLangState(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", value);
      document.documentElement.lang = value;
      document.documentElement.dir = isRTL(value) ? "rtl" : "ltr";
    }
    const parts = pathname.split("/");
    if (isLocale(parts[1])) parts[1] = value;
    else parts.splice(1, 0, value);
    router.push(parts.join("/") || `/${value}`);
  };

  const t = useMemo(() => getTranslation(lang), [lang]);
  const value = { lang, setLang, t };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used inside LangProvider");
  return context;
}

export { LOCALES };
export type { Locale };