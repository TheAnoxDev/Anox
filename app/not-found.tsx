import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030712] px-6 text-white">
      <div className="w-full max-w-xl text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 text-2xl font-black text-cyan-300 shadow-[0_0_70px_rgba(34,211,238,.12)]">
          AX
        </div>
        <p className="font-mono text-sm tracking-[0.35em] text-cyan-400">ERROR 404</p>
        <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl">Page not found.</h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-zinc-400">
          The requested route does not exist or has moved somewhere else in the ANOX network.
        </p>
        <Link
          href="/en"
          className="mt-9 inline-flex rounded-2xl bg-cyan-400 px-7 py-3.5 font-bold text-black transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,.3)]"
        >
          Return to ANOX
        </Link>
      </div>
    </main>
  );
}
