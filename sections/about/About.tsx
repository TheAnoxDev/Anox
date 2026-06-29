"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="border-t border-white/10 py-40"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <span className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
          About
        </span>

        <h2 className="mt-6 text-5xl font-black text-white">
          Building Tomorrow.
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
          ANOX is a technology company focused on building
          software, artificial intelligence solutions,
          cybersecurity tools and digital products that shape
          the future.
        </p>
      </div>
    </motion.section>
  );
}