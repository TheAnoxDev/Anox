import { getRequestConfig } from "next-intl/server";


const locales = ["en", "fa"];


export default getRequestConfig(async ({ locale }) => {

  const currentLocale =
    locale && locales.includes(locale)
      ? locale
      : "en";


  return {
    locale: currentLocale,

    messages: (
      await import(`./messages/${currentLocale}.json`)
    ).default,
  };

});