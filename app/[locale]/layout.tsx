import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/footer/Footer";
import LocaleTextBridge from "@/components/LocaleTextBridge";
import { isLocale, isRTL, LOCALES, type Locale } from "@/locales/registry";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dir = isRTL(locale as Locale) ? "rtl" : "ltr";

  return (
    <div lang={locale} dir={dir} className="min-h-screen">
      <Navbar />
      <LocaleTextBridge />
      <div className="pt-0">{children}</div>
      <Footer />
    </div>
  );
}
