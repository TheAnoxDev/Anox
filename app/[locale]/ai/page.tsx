import Link from "next/link";

export default async function AIPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-[#03060b] px-3 pb-3 pt-[88px] text-white sm:px-5">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between pb-3">
        <div>
          <p className="font-mono text-[10px] font-bold tracking-[.28em] text-cyan-300">ANOX / INTELLIGENCE</p>
          <h1 className="mt-1 text-xl font-black tracking-tight sm:text-2xl">ANOX AI</h1>
        </div>
        <Link href={`/${locale}`} className="rounded-xl border border-white/10 bg-white/[.035] px-4 py-2 text-xs font-bold text-zinc-300 transition hover:border-cyan-300/30 hover:text-white">Back to ANOX</Link>
      </div>
      <div className="mx-auto h-[calc(100vh-145px)] max-w-[1500px] overflow-hidden rounded-[28px] border border-cyan-300/15 bg-[#04070b] shadow-[0_0_80px_rgba(6,182,212,.08)]">
        <iframe
          title="ANOX AI"
          src="https://anox-ai.vercel.app"
          className="h-full w-full border-0"
          allow="microphone; clipboard-read; clipboard-write"
        />
      </div>
    </main>
  );
}
