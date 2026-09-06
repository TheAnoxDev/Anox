"use client";

import { useEffect } from "react";

export default function GlobalError({ reset }: { reset: () => void }) {
  useEffect(() => {
    console.error("ANOX application error");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030712] px-6 text-white">
      <div className="w-full max-w-xl text-center">
        <p className="font-mono text-sm tracking-[0.3em] text-cyan-400">SYSTEM RECOVERY</p>
        <h1 className="mt-5 text-4xl font-black sm:text-6xl">Something went wrong.</h1>
        <p className="mt-5 text-zinc-400">ANOX could not complete this request. Try again without leaving the experience.</p>
        <button
          onClick={() => reset()}
          className="mt-8 rounded-2xl bg-cyan-400 px-7 py-3.5 font-bold text-black transition hover:-translate-y-0.5 hover:bg-cyan-300"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
