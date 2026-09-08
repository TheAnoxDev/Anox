"use client";
import { useEffect, useState } from "react";
import { CreditCard, Gauge, KeyRound, Users } from "lucide-react";
import Link from "next/link";

export default function UsagePanel({ lang }: { lang: string }) {
  const rtl = lang === "fa" || lang === "ar";
  const [usage, setUsage] = useState<{ plan: string; used: number; limit: number } | null>(null);
  useEffect(() => { fetch("/api/usage").then((r) => r.ok ? r.json() : null).then((d) => d?.usage && setUsage(d.usage)).catch(() => {}); }, []);
  const limit = usage?.limit ?? 1000;
  const used = usage?.used ?? 0;
  const percent = Math.min(100, Math.round((used / Math.max(1, limit)) * 100));
  const plan = usage?.plan ?? "free";
  return (
    <section className="mt-6 grid gap-4 xl:grid-cols-3">
      <div className="rounded-3xl border border-cyan-300/15 bg-cyan-300/[.045] p-6 xl:col-span-2">
        <div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><Gauge className="text-cyan-300" size={21} /><div><h2 className="font-black">{rtl ? "مصرف هوش" : "AI Usage"}</h2><p className="text-xs text-zinc-500">{rtl ? "اعتبار چرخه فعلی" : "Current billing-cycle credits"}</p></div></div><span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold uppercase text-cyan-300">{plan}</span></div>
        <div className="mt-6 flex items-end justify-between"><div><span className="text-3xl font-black">{used.toLocaleString()}</span><span className="ml-2 text-sm text-zinc-500">/ {limit.toLocaleString()}</span></div><span className="text-sm text-zinc-400">{percent}%</span></div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-cyan-300 transition-all" style={{ width: `${percent}%` }} /></div>
      </div>
      <div className="grid grid-cols-3 gap-3 xl:grid-cols-1">
        <Link href={`/${lang}/pricing`} className="rounded-2xl border border-white/10 bg-white/[.03] p-4 hover:border-cyan-300/30"><CreditCard size={18} className="text-cyan-300" /><span className="mt-3 block text-xs font-bold">{rtl ? "ارتقا" : "Upgrade"}</span></Link>
        <Link href={`/${lang}/dashboard?section=team`} className="rounded-2xl border border-white/10 bg-white/[.03] p-4 hover:border-cyan-300/30"><Users size={18} className="text-cyan-300" /><span className="mt-3 block text-xs font-bold">{rtl ? "تیم" : "Team"}</span></Link>
        <Link href={`/${lang}/dashboard?section=api`} className="rounded-2xl border border-white/10 bg-white/[.03] p-4 hover:border-cyan-300/30"><KeyRound size={18} className="text-cyan-300" /><span className="mt-3 block text-xs font-bold">API Keys</span></Link>
      </div>
    </section>
  );
}
