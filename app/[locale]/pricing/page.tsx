"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { useLang, type Locale } from "@/components/LangContext";

const copy: Record<Locale, { eyebrow:string; title:string; lead:string; free:string; pro:string; business:string; custom:string; start:string; talk:string; month:string; freePrice:string; proPrice:string; businessPrice:string }> = {
  en:{eyebrow:"ANOX · PRODUCT PLANS",title:"Intelligence that scales with you.",lead:"Start free, prove value, then scale from personal workspaces to production teams and enterprise workloads.",free:"Free",pro:"Pro",business:"Business",custom:"Enterprise",start:"Start free",talk:"Talk to ANOX",month:"/ month",freePrice:"$0",proPrice:"$19",businessPrice:"$79"},
  fa:{eyebrow:"ANOX · پلن‌های محصول",title:"هوشی که همراه شما مقیاس می‌گیرد.",lead:"رایگان شروع کنید، ارزش را بسنجید و بعد از فضای شخصی به تیم و زیرساخت سازمانی برسید.",free:"رایگان",pro:"پرو",business:"بیزنس",custom:"سازمانی",start:"شروع رایگان",talk:"ارتباط با ANOX",month:"/ ماه",freePrice:"$0",proPrice:"$19",businessPrice:"$79"},
  ar:{eyebrow:"ANOX · خطط المنتج",title:"ذكاء يتوسع معك.",lead:"ابدأ مجاناً، اختبر القيمة، ثم انتقل من مساحة شخصية إلى فرق وأحمال مؤسسية.",free:"مجاني",pro:"Pro",business:"Business",custom:"Enterprise",start:"ابدأ مجاناً",talk:"تواصل مع ANOX",month:"/ شهر",freePrice:"$0",proPrice:"$19",businessPrice:"$79"},
  ru:{eyebrow:"ANOX · ТАРИФЫ",title:"Интеллект, который масштабируется вместе с вами.",lead:"Начните бесплатно, проверьте ценность и масштабируйтесь до командной и корпоративной инфраструктуры.",free:"Free",pro:"Pro",business:"Business",custom:"Enterprise",start:"Начать бесплатно",talk:"Связаться с ANOX",month:"/ месяц",freePrice:"$0",proPrice:"$19",businessPrice:"$79"},
  es:{eyebrow:"ANOX · PLANES",title:"Inteligencia que escala contigo.",lead:"Empieza gratis, valida el valor y escala desde espacios personales hasta equipos y empresas.",free:"Gratis",pro:"Pro",business:"Business",custom:"Enterprise",start:"Empezar gratis",talk:"Hablar con ANOX",month:"/ mes",freePrice:"$0",proPrice:"$19",businessPrice:"$79"},
  zh:{eyebrow:"ANOX · 产品方案",title:"与你一起扩展的智能基础设施。",lead:"免费开始，验证价值，再从个人工作区扩展到团队与企业工作负载。",free:"免费",pro:"Pro",business:"Business",custom:"企业版",start:"免费开始",talk:"联系 ANOX",month:"/ 月",freePrice:"$0",proPrice:"$19",businessPrice:"$79"},
};

const features = {
  free:["Personal workspace","Core ANOX AI","Community access","Usage visibility"],
  pro:["Everything in Free","Higher AI limits","Advanced models","Priority processing","API access"],
  business:["Everything in Pro","Team workspaces","Roles & permissions","Usage controls","Audit-ready activity"],
  custom:["Dedicated architecture","Enterprise controls","Custom limits & routing","Priority support","Custom commercial terms"],
};
function Plan({ name, price, items, featured, c, lang }: { name:string; price:string; items:string[]; featured?:boolean; c:typeof copy.en; lang:Locale }) {
  return <motion.article whileHover={{ y:-6 }} className={`relative flex h-full flex-col rounded-[28px] border p-7 ${featured ? "border-cyan-300/40 bg-cyan-300/[.055] shadow-[0_0_70px_rgba(34,211,238,.09)]" : "border-white/10 bg-white/[.025]"}`}>
    {featured && <div className="absolute -top-3 start-6 rounded-full border border-cyan-300/30 bg-[#061116] px-3 py-1 text-[10px] font-black tracking-[.18em] text-cyan-300">MOST POPULAR</div>}
    <div className="flex items-center justify-between"><h2 className="text-xl font-bold text-white">{name}</h2><Sparkles size={18} className="text-cyan-300" /></div>
    <div className="mt-7 flex items-end gap-2"><span className="text-4xl font-black tracking-tight text-white">{price}</span>{price !== c.freePrice && <span className="pb-1 text-sm text-zinc-500">{c.month}</span>}</div>
    <ul className="mt-7 flex flex-1 flex-col gap-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm text-zinc-300"><Check size={17} className="mt-0.5 shrink-0 text-cyan-300" />{item}</li>)}</ul>
    <Link href={`/${lang}/register`} className={`mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-black transition ${featured ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200" : "border border-white/10 bg-white/[.045] text-white hover:border-cyan-300/30"}`}>{c.start}<ArrowRight size={16} /></Link>
  </motion.article>;
}

export default function PricingPage() {
  const { lang } = useLang();
  const c = copy[lang];
  const plans = [
    { name:c.free, price:c.freePrice, items:features.free },
    { name:c.pro, price:c.proPrice, items:features.pro, featured:true },
    { name:c.business, price:c.businessPrice, items:features.business },
    { name:c.custom, price:c.custom, items:features.custom },
  ];
  return <main className="min-h-screen bg-[#02040a] px-5 pb-24 pt-32 text-white sm:px-8 lg:px-10">
    <section className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[.05] px-4 py-2 text-[10px] font-black tracking-[.22em] text-cyan-300"><Zap size={13} />{c.eyebrow}</div>
        <h1 className="text-5xl font-black tracking-[-.045em] sm:text-6xl lg:text-7xl">{c.title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">{c.lead}</p>
      </div>
      <div className="mt-14 grid gap-5 lg:grid-cols-4">
        {plans.map((plan) => <Plan key={plan.name} {...plan} c={c} lang={lang} />)}
      </div>
      <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[.025] p-5 text-sm text-zinc-400 sm:flex-row">
        <div className="flex items-center gap-3"><ShieldCheck className="text-cyan-300" size={20} /><span>Usage visibility, sensible limits and clear upgrade paths are part of the product.</span></div>
        <Link href={`/${lang}/contact`} className="shrink-0 font-bold text-white hover:text-cyan-300">{c.talk} →</Link>
      </div>
    </section>
  </main>;
}
