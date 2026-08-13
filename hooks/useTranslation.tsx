import { useLang } from "@/components/LangContext";

import en from "@/locales/en";
import fa from "@/locales/fa";


export function useTranslation(){


const {lang} = useLang();


const translations =
lang === "fa"
?
fa
:
en;



return {
  t: translations
};


}