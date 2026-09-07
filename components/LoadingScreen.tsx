"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = { loading: boolean };

export default function LoadingScreen({ loading }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!loading) return;
    const started = performance.now();
    const tick = window.setInterval(() => {
      const elapsed = performance.now() - started;
      const target = Math.min(100, Math.round((elapsed / 2150) * 100));
      setProgress((current) => Math.max(current, target));
    }, 35);
    return () => window.clearInterval(tick);
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.025, filter: "blur(10px)" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#02040a]"
          role="status"
          aria-live="polite"
          aria-label={`ANOX loading ${progress}%`}
        >
          <div aria-hidden className="absolute inset-0 opacity-[.055] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:56px_56px]" />
          <div aria-hidden className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[.09] blur-[150px]" />
          <div aria-hidden className="absolute left-1/2 top-0 h-px w-[65vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

          <div className="relative z-10 w-[min(560px,calc(100vw-48px))] text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-12"
            >
              <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/[.035] shadow-[0_0_80px_rgba(34,211,238,.16)]">
                <span className="text-2xl font-black tracking-[-.08em] text-white">AX</span>
              </div>
              <h1 className="text-6xl font-black tracking-[.22em] text-white sm:text-8xl">ANOX</h1>
              <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[.38em] text-cyan-300/80">Intelligence infrastructure</p>
            </motion.div>

            <div className="relative">
              <div className="mb-3 flex items-end justify-between font-mono">
                <span className="text-[10px] uppercase tracking-[.28em] text-zinc-500">Initializing experience</span>
                <motion.span key={progress} className="text-3xl font-black tabular-nums text-white">{progress}<span className="text-cyan-300">%</span></motion.span>
              </div>
              <div className="h-[3px] overflow-hidden rounded-full bg-white/[.08]">
                <motion.div
                  className="h-full rounded-full bg-cyan-300 shadow-[0_0_28px_rgba(34,211,238,.8)]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.12, ease: "linear" }}
                />
              </div>
              <div className="mt-3 flex justify-between font-mono text-[9px] uppercase tracking-[.2em] text-zinc-700">
                <span>System ready</span><span>100</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-10 flex items-center justify-center gap-3 text-[9px] font-bold uppercase tracking-[.3em] text-zinc-600"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
              AI · CLOUD · SECURITY · SOFTWARE
            </motion.div>
          </div>

          <div aria-hidden className="absolute bottom-7 left-7 font-mono text-[9px] tracking-[.22em] text-zinc-700">ANOX / 01</div>
          <div aria-hidden className="absolute bottom-7 right-7 font-mono text-[9px] tracking-[.22em] text-zinc-700">EST. 2026</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
