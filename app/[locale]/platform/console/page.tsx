"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { KeyRound, Users, Gauge, ShieldCheck, Plus, Copy, Trash2 } from "lucide-react";
import { useLang } from "@/components/LangContext";

type Key = { _id: string; name: string; prefix: string; revokedAt?: string | null };
type Usage = { plan: string; used: number; limit: number; remaining: number };

export default function ConsolePage() {
  const { lang } = useLang();
  const rtl = lang === "fa" || lang === "ar";
  const [usage, setUsage] = useState<Usage | null>(null);
  const [keys, setKeys] = useState<Key[]>([]);
  const [secret, setSecret] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let active = true;
    Promise.all([fetch("/api/usage"), fetch("/api/keys")]).then(async ([u, k]) => {
      const ud = await u.json(); const kd = await k.json();
      if (!active) return;
      if (ud.success) setUsage(ud.usage);
      if (kd.success) setKeys(kd.keys);
      setLoading(false);
    }).catch(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);
  const reloadKeys = async () => {
    const r = await fetch("/api/keys"); const d = await r.json();
    if (d.success) setKeys(d.keys);
  };
  const createKey = async () => {
    const name = window.prompt(rtl ? "نام کلید API" : "API key name", "Production");
    if (!name) return;
    const r = await fetch("/api/keys", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name }) });
    const d = await r.json(); if (d.success) { setSecret(d.key.secret); await reloadKeys(); }
  };
  const revoke = async (id: string) => { await fetch(`/api/keys/${id}`, { method: "DELETE" }); await reloadKeys(); };
  const percent = Math.min(100, ((usage?.used ?? 0) / Math.max(1, usage?.limit ?? 1000)) * 100);
  return <main dir={rtl ? "rtl" : "ltr"} className="min-h-screen bg-[#02040a] px-5 pb-24 pt-32 text-white sm:px-8 lg:px-12">
    <section className="mx-auto max-w-6xl">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-xs font-black tracking-[.25em] text-cyan-300">ANOX CONTROL PLANE</p><h1 className="mt-3 text-4xl font-black sm:text-6xl">{rtl ? "مرکز کنترل" : "Control plane"}</h1><p className="mt-4 max-w-2xl text-zinc-400">{rtl ? "اعتبار، تیم و کلیدهای API خود را مدیریت کنید." : "Manage credits, teams and API access from one operational workspace."}</p></div><Link href={`/${lang}/dashboard`} className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-bold hover:border-cyan-300/30">{rtl ? "داشبورد" : "Dashboard"}</Link></div>
      {loading ? <div className="mt-10 rounded-3xl border border-white/10 p-8 text-zinc-500">Loading control plane…</div> : <>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-cyan-300/15 bg-cyan-300/[.045] p-6"><Gauge className="text-cyan-300" size={21}/><p className="mt-5 text-sm text-zinc-500">{rtl ? "مصرف اعتبار" : "Credit usage"}</p><p className="mt-1 text-3xl font-black">{usage?.used?.toLocaleString() ?? 0}<span className="text-sm text-zinc-500"> / {usage?.limit?.toLocaleString() ?? 1000}</span></p><div className="mt-4 h-2 rounded-full bg-white/10"><div className="h-full rounded-full bg-cyan-300" style={{width:`${percent}%`}}/></div></div>
          <div className="rounded-3xl border border-white/10 bg-white/[.03] p-6"><Users className="text-cyan-300" size={21}/><p className="mt-5 text-sm text-zinc-500">{rtl ? "فضای تیم" : "Team workspace"}</p><p className="mt-2 font-bold">{rtl ? "آماده ساخت سازمان" : "Organization-ready"}</p><Link href={`/${lang}/pricing`} className="mt-4 inline-block text-sm font-bold text-cyan-300">{rtl ? "مشاهده پلن‌ها" : "View plans"} →</Link></div>
          <div className="rounded-3xl border border-white/10 bg-white/[.03] p-6"><ShieldCheck className="text-cyan-300" size={21}/><p className="mt-5 text-sm text-zinc-500">{rtl ? "امنیت" : "Security"}</p><p className="mt-2 font-bold">{rtl ? "کلیدها هش‌شده ذخیره می‌شوند" : "Keys are stored hashed"}</p></div>
        </div>
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[.025] p-6"><div className="flex items-center justify-between gap-4"><div><h2 className="text-xl font-black">{rtl ? "کلیدهای API" : "API keys"}</h2><p className="mt-1 text-sm text-zinc-500">{rtl ? "راز کامل فقط هنگام ساخت نمایش داده می‌شود." : "The full secret is shown only once at creation."}</p></div><button onClick={createKey} className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950"><Plus size={16}/> {rtl ? "کلید جدید" : "New key"}</button></div>
          {secret && <div className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-300/[.05] p-4"><p className="text-xs text-amber-200">{rtl ? "این راز را اکنون کپی و امن نگه دارید:" : "Copy this secret now and store it securely:"}</p><div className="mt-2 flex gap-2"><code className="min-w-0 flex-1 break-all text-xs text-white">{secret}</code><button onClick={() => navigator.clipboard.writeText(secret)} className="rounded-lg border border-white/10 p-2"><Copy size={15}/></button></div></div>}
          <div className="mt-5 space-y-2">{keys.length === 0 ? <p className="py-6 text-sm text-zinc-600">{rtl ? "هنوز کلیدی ساخته نشده است." : "No API keys yet."}</p> : keys.map((key) => <div key={key._id} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[.02] p-4"><KeyRound size={17} className="text-cyan-300"/><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{key.name}</p><code className="text-xs text-zinc-500">{key.prefix}••••••</code></div><button disabled={!!key.revokedAt} onClick={() => revoke(key._id)} className="rounded-lg p-2 text-zinc-500 hover:bg-red-500/10 hover:text-red-300 disabled:opacity-40"><Trash2 size={16}/></button></div>)}</div>
        </div>
      </>}
    </section>
  </main>;
}
