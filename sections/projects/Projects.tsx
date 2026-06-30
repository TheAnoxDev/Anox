"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

const projects = [
  {
    title: "ANOX Intelligence",
    desc: "Autonomous AI system for next-gen digital intelligence.",
    image: "/images/projects/anox-intelligence.jpg",
    tags: ["AI", "Next.js"],
  },
  {
    title: "ANOX Shield",
    desc: "Enterprise cyber defense and cloud protection system.",
    image: "/images/projects/anox-shield.jpg",
    tags: ["Security", "Cloud"],
  },
  {
    title: "ANOX Future Systems",
    desc: "Smart infrastructure powered by robotics and AI automation.",
    image: "/images/projects/anox-future-systems.jpg",
    tags: ["AI", "IoT", "Robotics"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // 🎯 Mouse tracker (light system)
  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">

      {/* 🌌 dynamic light following mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(34,211,238,0.10), transparent 80%)`,
        }}
      />

      {/* background orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 h-72 w-72 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-20 h-72 w-72 bg-violet-500/10 blur-3xl rounded-full" />
      </div>

      <Container>

        <SectionTitle
          badge="PROJECTS"
          title="What We're Building"
          description="Advanced AI systems shaping the future of digital infrastructure."
        />

        {/* GRID */}
        <div className="mt-20 grid gap-10 lg:grid-cols-3">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              onClick={() => setSelected(p)}
              whileHover={{
                scale: 1.03,
                rotateX: 4,
                rotateY: -4,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="cursor-pointer perspective"
            >

              <GlassCard className="overflow-hidden p-0 group relative">

                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden">

                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* glow pulse */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-cyan-400/10 blur-xl" />
                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-6 text-3xl font-bold text-white">
                    {p.title}
                  </h3>

                  <p className="mt-5 text-zinc-400 leading-7">
                    {p.desc}
                  </p>

                  <div className="mt-8">
                    <Button>Open Case</Button>
                  </div>

                </div>

              </GlassCard>

            </motion.div>
          ))}

        </div>
      </Container>

      {/* 💀 ULTRA MODAL */}
      <AnimatePresence>

        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* blur world */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-3xl"
              onClick={() => setSelected(null)}
            />

            {/* modal */}
            <motion.div
              initial={{ scale: 0.6, rotateX: 15, opacity: 0 }}
              animate={{ scale: 1, rotateX: 0, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative z-10 w-[92%] max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-black/60"
            >

              {/* HERO IMAGE */}
              <div className="relative h-[450px] overflow-hidden">

                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* floating light */}
                <div className="absolute inset-0 bg-cyan-500/10 blur-2xl animate-pulse" />
              </div>

              {/* CONTENT */}
              <div className="p-10">

                <h2 className="text-4xl font-bold text-white">
                  {selected.title}
                </h2>

                <p className="mt-5 text-zinc-400 leading-8">
                  {selected.desc}
                </p>

                <div className="mt-6 flex gap-2 flex-wrap">
                  {selected.tags.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex justify-end">
                  <button
                    onClick={() => setSelected(null)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition"
                  >
                    Close Reality
                  </button>
                </div>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}