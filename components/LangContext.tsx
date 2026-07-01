"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Lang = "en" | "fa";

type LangContextType = {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("en");

  // خواندن زبان ذخیره‌شده
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;

    if (saved === "fa" || saved === "en") {
      setLang(saved);
    }
  }, []);

  // ذخیره زبان
  useEffect(() => {
    localStorage.setItem("lang", lang);

    document.documentElement.lang = lang;
    document.documentElement.dir =
      lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error("useLang must be used inside LangProvider");
  }

  return context;
}