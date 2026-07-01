"use client";

import { useLang } from "@/components/LangContext";
import en from "@/locales/en";
import fa from "@/locales/fa";

export function useTranslation() {
  const { lang } = useLang();

  const t = lang === "fa" ? fa : en;

  return { t, lang };
}