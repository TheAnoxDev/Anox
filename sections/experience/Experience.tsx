"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Layers3, LockKeyhole, Workflow } from "lucide-react";
import { useLang } from "@/components/LangContext";
import { isRTL } from "@/locales/registry";
import { useTranslation } from "@/hooks/useTranslation";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  const { lang } = useLang();
  const { t } = useTranslation();
  const p = `/${lang}`;
  const rtl = isRTL(lang);

  const pillars = [
    { icon: BrainCircuit, title: t.about.ai, text: t.technology.aiDesc, href: `${p}/platform` },
    { icon: LockKeyhole, title: t.about.cyber, text: t.technology.cyberDesc, href: `${p}/architecture` },
    { icon: Layers3, title: t.architecture.heroTitle, text: t.architecture.heroDescription, href: `${p}/architecture` },
    { icon: Workflow, title: t.technology.automationTitle, text: t.technology.automationDesc, href: `${p}/platform` },
  ];

  return (
    <section id="intelligence" data-section dir={rtl ? "rtl" : "ltr"} className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/[.07] blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .7, ease }} className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <span className="eyebrow">ANOX / SYSTEM 01</span>
            <h2 className="mt-7 max-w-3xl text-4xl sm:text-6xl">{t.about.title}<span className="text-cyan-300">.</span></h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">{t.about.description}</p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text, href }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * .06, duration: .55, ease }} className="anox-card group p-6 sm:p-7">
              <div className="flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[.06] text-cyan-300"><Icon size={22} /></div><span className="font-mono text-[10px] tracking-[.2em] text-zinc-700">0{i + 1}</span></div>
              <h3 className="mt-7 text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-7">{text}</p>
              <Link href={href} aria-label={`${title} — ${t.hero.secondary}`} className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-cyan-300">{t.hero.secondary} <ArrowUpRight size={14} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, scale: .98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .8, ease }} className="mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-white/[.025] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><div className="font-mono text-[10px] font-bold tracking-[.24em] text-cyan-300">SYSTEM ARCHITECTURE / 02</div><h3 className="mt-4 text-3xl sm:text-4xl">{t.architecture.layersTitle}</h3><p className="mt-4 max-w-2xl text-sm leading-7">{t.architecture.layersDescription}</p></div>
            <Link href={`${p}/architecture`} className="anox-btn-secondary w-full sm:w-auto">{t.hero.secondary}<ArrowUpRight size={17} /></Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
            {[t.architecture.core.user, t.architecture.core.application, t.architecture.core.engine, t.architecture.core.infrastructure].map((label, i) => <div key={label} className="bg-[#070a10] p-4"><div className="font-mono text-[9px] text-zinc-600">LAYER 0{i + 1}</div><div className="mt-2 text-xs font-bold text-zinc-200">{label}</div></div>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
