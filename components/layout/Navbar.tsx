"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import Logo from "./Logo";
import { useLang, LOCALES, type Locale } from "@/components/LangContext";
import { isRTL } from "@/locales/registry";
import { useTranslation } from "@/hooks/useTranslation";

const localeNames: Record<Locale, string> = { en: "EN", fa: "FA", ar: "AR", ru: "RU", es: "ES", zh: "ZH" };
const a11y: Record<Locale, { language: string; close: string; open: string }> = {
  en: { language: "Change language", close: "Close menu", open: "Open menu" },
  fa: { language: "تغییر زبان", close: "بستن منو", open: "باز کردن منو" },
  ar: { language: "تغيير اللغة", close: "إغلاق القائمة", open: "فتح القائمة" },
  ru: { language: "Сменить язык", close: "Закрыть меню", open: "Открыть меню" },
  es: { language: "Cambiar idioma", close: "Cerrar menú", open: "Abrir menú" },
  zh: { language: "切换语言", close: "关闭菜单", open: "打开菜单" },
};
type NavItem = { id: string; label: string; href: string };

export default function Navbar() {
  const { lang, setLang } = useLang();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const languageRef = useRef<HTMLDivElement>(null);
  const rtl = isRTL(lang);
  const prefix = `/${lang}`;
  const labels = a11y[lang];

  const links = useMemo<NavItem[]>(() => [
    { id: "hero", label: t.nav.home, href: `${prefix}#hero` },
    { id: "about", label: t.nav.about, href: `${prefix}#about` },
    { id: "technology", label: t.nav.technology, href: `${prefix}#technology` },
    { id: "projects", label: t.nav.projects, href: `${prefix}#projects` },
    { id: "solutions", label: "Solutions", href: `${prefix}/solutions` },
    { id: "labs", label: "Labs", href: `${prefix}/labs` },
    { id: "ai", label: "ANOX AI", href: `${prefix}/ai` },
  ], [prefix, t]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); setLanguageOpen(false); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);

  useEffect(() => {
    if (!languageOpen) return;
    const onPointer = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) setLanguageOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [languageOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const changeLanguage = (next: Locale) => { setLang(next); setLanguageOpen(false); setOpen(false); };

  return (
    <header dir={rtl ? "rtl" : "ltr"} className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-white/10 bg-[#02040a]/80 shadow-2xl shadow-black/30 backdrop-blur-2xl" : "bg-transparent"}`}>
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {links.map((item) => (
            <Link key={item.id} href={item.href} className={`relative rounded-xl px-4 py-2.5 text-sm font-semibold transition ${active === item.id ? "text-cyan-300" : "text-zinc-400 hover:text-white"}`}>
              {item.label}
              {active === item.id && <motion.span layoutId="nav-active" className="absolute inset-x-3 -bottom-1 h-px bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]" />}
            </Link>
          ))}
          <Link href={`${prefix}/platform`} className="rounded-xl px-4 py-2.5 text-sm font-semibold text-zinc-400 hover:text-white">Platform</Link>
          <Link href={`${prefix}/company`} className="rounded-xl px-4 py-2.5 text-sm font-semibold text-zinc-400 hover:text-white">Company</Link>
          <Link href={`${prefix}/contact`} className="anox-btn-primary ml-2 py-2.5 text-xs">{t.nav.contact}<ArrowUpRight size={14} /></Link>
          <Link href={`${prefix}/login`} className="ml-1 rounded-xl px-4 py-2.5 text-sm font-semibold text-zinc-400 hover:text-white">{t.nav.login}</Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div ref={languageRef} className="relative">
            <button aria-label={labels.language} aria-expanded={languageOpen} aria-haspopup="listbox" onClick={() => setLanguageOpen((v) => !v)} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.035] px-3 py-2 text-xs font-bold text-zinc-300 hover:border-cyan-300/30 hover:text-white">
              <Globe size={15} className="text-cyan-300" aria-hidden="true" /> {localeNames[lang]}
            </button>
            <AnimatePresence>
              {languageOpen && <motion.div role="listbox" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="absolute end-0 top-12 grid w-28 gap-1 rounded-2xl border border-white/10 bg-[#080b12]/95 p-2 shadow-2xl backdrop-blur-2xl">
                {LOCALES.map((locale) => <button role="option" aria-selected={locale === lang} key={locale} onClick={() => changeLanguage(locale)} className={`rounded-xl px-3 py-2 text-start text-xs font-bold ${locale === lang ? "bg-cyan-300/10 text-cyan-300" : "text-zinc-400 hover:bg-white/5 hover:text-white"}`}>{localeNames[locale]}</button>)}
              </motion.div>}
            </AnimatePresence>
          </div>
        </div>

        <button className="rounded-xl border border-white/10 bg-white/[.035] p-2.5 text-zinc-200 md:hidden" aria-label={open ? labels.close : labels.open} aria-expanded={open} onClick={() => setOpen((v) => !v)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
      </div>

      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-t border-white/10 bg-[#03060b]/95 px-5 py-5 backdrop-blur-2xl md:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-2">
            {links.map((item) => <Link key={item.id} href={item.href} onClick={() => setOpen(false)} className={`rounded-2xl px-4 py-3 text-sm font-bold ${active === item.id ? "bg-cyan-300/10 text-cyan-300" : "text-zinc-300 hover:bg-white/5"}`}>{item.label}</Link>)}
            <Link href={`${prefix}/platform`} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-zinc-300 hover:bg-white/5">Platform</Link>
            <Link href={`${prefix}/solutions`} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-zinc-300 hover:bg-white/5">Solutions</Link>
            <Link href={`${prefix}/labs`} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-zinc-300 hover:bg-white/5">Labs</Link>
            <Link href={`${prefix}/company`} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-zinc-300 hover:bg-white/5">Company</Link>
            <Link href={`${prefix}/careers`} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-zinc-300 hover:bg-white/5">Careers</Link>
            <Link href={`${prefix}/contact`} onClick={() => setOpen(false)} className="anox-btn-primary mt-2 w-full">{t.nav.contact}<ArrowUpRight size={15} /></Link>
            <div className="mt-2 grid grid-cols-6 gap-1 rounded-2xl border border-white/10 bg-white/[.025] p-1">{LOCALES.map((locale) => <button key={locale} onClick={() => changeLanguage(locale)} className={`rounded-xl py-2 text-[10px] font-black ${locale === lang ? "bg-cyan-300/10 text-cyan-300" : "text-zinc-500"}`}>{localeNames[locale]}</button>)}</div>
          </nav>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
