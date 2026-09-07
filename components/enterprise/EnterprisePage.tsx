"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Cloud, LockKeyhole } from "lucide-react";

type Kind = "solutions" | "labs" | "company" | "careers";

const copy = {
  en: {
    solutions: { kicker: "ANOX / SOLUTIONS", title: "Systems built for the edge of tomorrow.", body: "From intelligent automation to resilient infrastructure, ANOX turns ambitious technology programs into dependable products.", cards: [["AI Systems", "Reasoning, agents and intelligent workflows designed around real operations."], ["Cyber Defense", "Security architecture, detection and hardened digital surfaces."], ["Cloud & Platform", "Scalable infrastructure engineered for reliability, speed and control."]] },
    labs: { kicker: "ANOX / LABS", title: "Where impossible becomes engineering.", body: "ANOX Labs is our experimental layer: prototypes, models, interfaces and infrastructure that explore what technology can become next.", cards: [["Intelligence", "Models, agents and multimodal interfaces."], ["Interfaces", "New interaction patterns for human and machine collaboration."], ["Infrastructure", "Experiments in distributed, secure compute."]] },
    company: { kicker: "ANOX / COMPANY", title: "A technology company with a long horizon.", body: "We build software and infrastructure with the ambition to become a trusted technology partner for teams operating at global scale.", cards: [["Mission", "Make advanced technology useful, secure and beautifully engineered."], ["Principles", "Clarity. Craft. Security. Speed. Long-term thinking."], ["Global", "Designed for international products, teams and markets."]] },
    careers: { kicker: "ANOX / CAREERS", title: "Build the systems people will depend on.", body: "We are looking for curious engineers, designers and builders who care about the details and think beyond the obvious.", cards: [["Engineering", "Frontend, backend, AI, infrastructure and security."], ["Design", "Product, motion and interaction design."], ["Future", "Bring a discipline we have not listed yet."]] },
  },
fa: {
    solutions: { kicker: "ANOX / راهکارها", title: "سیستم‌هایی برای مرز فردا.", body: "از اتوماسیون هوشمند تا زیرساخت مقاوم، ANOX برنامه‌های فناوری بلندپروازانه را به محصولات قابل اتکا تبدیل می‌کند.", cards: [["سیستم‌های هوشمند", "عامل‌ها، استدلال و گردش‌کارهای هوشمند برای عملیات واقعی."], ["دفاع سایبری", "معماری امنیت، تشخیص تهدید و سطوح دیجیتال مقاوم."], ["کلاد و پلتفرم", "زیرساخت مقیاس‌پذیر با تمرکز بر سرعت، کنترل و پایداری."]] },
    labs: { kicker: "ANOX / آزمایشگاه", title: "جایی که ناممکن به مهندسی تبدیل می‌شود.", body: "ANOX Labs لایه آزمایش ماست؛ جایی برای مدل‌ها، رابط‌ها و زیرساخت‌هایی که آینده فناوری را بررسی می‌کنند.", cards: [["هوش", "مدل‌ها، عامل‌ها و رابط‌های چندوجهی."], ["رابط‌ها", "الگوهای تازه برای همکاری انسان و ماشین."], ["زیرساخت", "آزمایش‌هایی در پردازش توزیع‌شده و امن."]] },
    company: { kicker: "ANOX / شرکت", title: "یک شرکت فناوری با افقی بلندمدت.", body: "ما نرم‌افزار و زیرساخت می‌سازیم تا به شریک فناوری قابل اعتماد تیم‌های جهانی تبدیل شویم.", cards: [["ماموریت", "فناوری پیشرفته را کاربردی، امن و مهندسی‌شده کنیم."], ["اصول", "شفافیت، کیفیت، امنیت، سرعت و نگاه بلندمدت."], ["جهانی", "برای محصولات، تیم‌ها و بازارهای بین‌المللی ساخته شده."]] },
    careers: { kicker: "ANOX / فرصت‌های شغلی", title: "سیستم‌هایی بساز که مردم به آن‌ها تکیه کنند.", body: "ما به دنبال مهندسان، طراحان و سازندگانی هستیم که به جزئیات اهمیت می‌دهند و فراتر از مسیرهای معمول فکر می‌کنند.", cards: [["مهندسی", "فرانت‌اند، بک‌اند، هوش مصنوعی، زیرساخت و امنیت."], ["طراحی", "محصول، موشن و طراحی تعامل."], ["آینده", "حوزه‌ای را که هنوز در فهرست ما نیست با خودت بیاور."]] },
  },
} as const;

const icons = [BrainCircuit, LockKeyhole, Cloud];

export default function EnterprisePage({ kind, locale }: { kind: Kind; locale: string }) {
  const language = locale === "fa" ? "fa" : "en";
  const data = copy[language][kind];
  const rtl = language === "fa";
  return (
    <main dir={rtl ? "rtl" : "ltr"} className="min-h-screen overflow-hidden bg-[#02040a] px-5 pb-24 pt-32 text-white sm:px-8 lg:px-12">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-20 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-400/[.08] blur-[150px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <span className="eyebrow">{data.kicker}</span>
            <h1 className="mt-8 max-w-5xl text-5xl leading-[.98] sm:text-7xl lg:text-[6.5rem]">{data.title}<span className="text-cyan-300">.</span></h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .7 }} className="max-w-xl text-lg leading-9 text-zinc-400">{data.body}</motion.p>
        </div>
        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {data.cards.map(([title, body], index) => {
            const Icon = icons[index];
            return <motion.article key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .08 }} className="anox-card min-h-[310px] p-7 sm:p-9">
              <div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[.25em] text-zinc-600">0{index + 1}</span><Icon size={25} className="text-cyan-300" /></div>
              <h2 className="mt-20 text-3xl">{title}</h2><p className="mt-4 text-sm leading-7 text-zinc-400">{body}</p>
            </motion.article>;
          })}
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-5 rounded-[28px] border border-white/10 bg-white/[.025] p-7 backdrop-blur-xl sm:p-9">
          <div><div className="font-mono text-[10px] tracking-[.28em] text-cyan-300">ANOX / 2026 ↗</div><p className="mt-2 text-sm text-zinc-500">{language === "fa" ? "لایه بعدی تجربه دیجیتال را بسازیم." : "Let's build the next layer of digital experience."}</p></div>
          <Link href={`/${locale}/contact`} className="anox-btn-primary">{language === "fa" ? "شروع گفتگو" : "Start a conversation"}<ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </main>
  );
}
