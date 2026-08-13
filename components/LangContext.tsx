"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import fa from "@/locales/fa";
import en from "@/locales/en";

export type Lang = "fa" | "en";

type Translation = typeof fa;

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
}

const LangContext = createContext<LangContextType | null>(null);


export function LangProvider({
  children,
}: {
  children: ReactNode;
}) {


  const [lang, setLangState] = useState<Lang>("en");


  const setLang = (value: Lang) => {

    setLangState(value);

    if (typeof window !== "undefined") {

      localStorage.setItem(
        "lang",
        value
      );


      document.documentElement.lang = value;


      document.documentElement.dir =
        value === "fa"
          ? "rtl"
          : "ltr";

    }

  };



  const t = useMemo(
    () =>
      lang === "fa"
        ? fa
        : en,
    [lang]
  );



  const value = useMemo(
    () => ({
      lang,
      setLang,
      t,
    }),
    [
      lang,
      t
    ]
  );



  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );

}



export function useLang() {


  const context = useContext(LangContext);


  if (!context) {

    throw new Error(
      "useLang must be used inside LangProvider"
    );

  }


  return context;

}