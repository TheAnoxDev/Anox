"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, ShieldCheck, Code2, Cloud, Workflow, Globe2 } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/components/LangContext";
import { useTranslation } from "@/hooks/useTranslation";

const icons=[BrainCircuit,ShieldCheck,Code2,Cloud,Workflow,Globe2];
export default function ExecutiveRail(){
 const {lang}=useLang(); const {t}=useTranslation(); const p=`/${lang}`;
 const items=[
  {icon:icons[0],title:t.technology.aiTitle,meta:"AI / INTELLIGENCE"},
  {icon:icons[1],title:t.technology.cyberTitle,meta:"SECURITY / TRUST"},
  {icon:icons[2],title:t.technology.softwareTitle,meta:"SOFTWARE / SCALE"},
  {icon:icons[3],title:t.technology.cloudTitle,meta:"CLOUD / INFRA"},
  {icon:icons[4],title:t.technology.automationTitle,meta:"AUTOMATION / OPS"},
  {icon:icons[5],title:t.technology.webTitle,meta:"WEB / EXPERIENCE"},
 ];
 return <section aria-label="ANOX capabilities" className="relative z-10 -mt-10 pb-20 sm:-mt-16 lg:-mt-24">
  <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
   <div className="glass overflow-hidden rounded-[28px]">
    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7"><div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_#22d3ee]"/><span className="font-mono text-[10px] font-bold tracking-[.24em] text-cyan-300">ANOX INTELLIGENCE GRID</span></div><Link href={`${p}/architecture`} className="group hidden items-center gap-2 text-xs font-semibold text-zinc-400 transition hover:text-white sm:flex">Architecture <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></Link></div>
    <div className="grid divide-y divide-white/8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
     {items.map(({icon:Icon,title,meta},i)=><motion.div key={meta} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} className="group relative p-5 transition hover:bg-cyan-300/[.025] sm:p-6"><div className="flex items-start gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[.06] text-cyan-300 transition group-hover:scale-105 group-hover:border-cyan-300/30"><Icon size={20}/></div><div className="min-w-0"><div className="font-mono text-[9px] font-bold tracking-[.18em] text-zinc-600">{meta}</div><div className="mt-1 text-sm font-bold text-zinc-100">{title}</div></div></div><div className="mt-5 h-px w-full bg-gradient-to-r from-cyan-300/20 via-white/5 to-transparent"/></motion.div>)}
    </div>
   </div>
  </div>
 </section>
}
