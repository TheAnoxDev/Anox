import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import PageTransition from "@/components/layout/PageTransition";
import Footer from "@/sections/footer/Footer";
import LocaleTextBridge from "@/components/LocaleTextBridge";
import { isLocale, isRTL, LOCALES, type Locale } from "@/locales/registry";
import { notFound } from "next/navigation";

const siteUrl = "https://anox-five.vercel.app";
const meta: Record<Locale, { title: string; description: string }> = {
  en: { title: "ANOX — Intelligence Infrastructure", description: "ANOX builds intelligent digital systems across AI, cybersecurity, cloud and automation." },
  fa: { title: "ANOX — زیرساخت هوشمند", description: "ANOX سامانه‌های دیجیتال هوشمند در حوزه هوش مصنوعی، امنیت سایبری، رایانش ابری و اتوماسیون می‌سازد." },
  ar: { title: "ANOX — بنية تحتية ذكية", description: "تبني ANOX أنظمة رقمية ذكية في الذكاء الاصطناعي والأمن السيبراني والسحابة والأتمتة." },
  ru: { title: "ANOX — Интеллектуальная инфраструктура", description: "ANOX создаёт интеллектуальные цифровые системы для ИИ, кибербезопасности, облака и автоматизации." },
  es: { title: "ANOX — Infraestructura inteligente", description: "ANOX crea sistemas digitales inteligentes para IA, ciberseguridad, cloud y automatización." },
  zh: { title: "ANOX — 智能基础设施", description: "ANOX 构建涵盖人工智能、网络安全、云计算和自动化的智能数字系统。" },
};

export function generateStaticParams() { return LOCALES.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const key = isLocale(locale) ? locale : "en";
  const canonical = `${siteUrl}/${key}`;
  return {
    title: { default: meta[key].title, template: `%s — ANOX` },
    description: meta[key].description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical, languages: Object.fromEntries(LOCALES.map((l) => [l, `${siteUrl}/${l}`])) },
    openGraph: { type: "website", siteName: "ANOX", title: meta[key].title, description: meta[key].description, url: canonical },
    twitter: { card: "summary_large_image", title: meta[key].title, description: meta[key].description },
  };
}

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dir = isRTL(locale as Locale) ? "rtl" : "ltr";
  return (
    <div lang={locale} dir={dir} className="anox-page min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-cyan-300 focus:px-4 focus:py-3 focus:text-sm focus:font-black focus:text-slate-950">Skip to content</a>
      <Navbar />
      <LocaleTextBridge />
      <div id="main-content" className="pt-0"><PageTransition>{children}</PageTransition></div>
      <Footer />
    </div>
  );
}
