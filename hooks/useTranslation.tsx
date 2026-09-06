import { useLang } from "@/components/LangContext";

export function useTranslation(){
  const { t } = useLang();
  return { t };
}