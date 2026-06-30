"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

/* =========================
   TYPES
========================= */
type Project = {
  title: string;
  desc: string;
  image: string;
  tags: string[];
};

/* =========================
   DATA
========================= */
const projects: Project[] = [
  {
    title: "ANOX Intelligence",
    desc: "Autonomous AI system for next-generation digital intelligence and automation.",
    image: "/images/projects/anox-intelligence.jpg",
    tags: ["AI", "Next.js"],
  },
  {
    title: "ANOX Shield",
    desc: "Enterprise cybersecurity platform for cloud protection and infrastructure security.",
    image: "/images/projects/anox-shield.jpg",
    tags: ["Security", "Cloud"],
  },
  {
    title: "ANOX Future Systems",
    desc: "Smart city infrastructure powered by AI, robotics and automation systems.",
    image: "/images/projects/anox-future-systems.jpg",
    tags: ["AI", "IoT", "Robotics"],
  },
];

/* =========================
   COMPONENT
========================= */
export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* 🌌 Mouse light effect */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">

      {/* 🌠 LIGHT FOLLOW CURSOR */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(34,211,238,0.12), transparent 80%)`,
        }}
      />

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-violet-500/10 blur-3xl rounded-full" />
      </div>

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
          What We're Building
        </h2>
        <p className="text-zinc-400 mt-3">
          Advanced AI systems under ANOX ecosystem
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-3">

        {projects.map((p: Project, i: number) => (
          <motion.div
            key={i}
            onClick={() => setSelected(p)}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="cursor-pointer"
          >

            {/* CARD */}
            <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10">

              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">

                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-white mt-4">
                  {p.title}
                </h3>

                {/* DESC */}
                <p className="text-zinc-400 mt-3 text-sm leading-6">
                  {p.desc}
                </p>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* 💀 MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* BACKDROP */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
              onClick={() => setSelected(null)}
            />

            {/* MODAL */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-[92%] max-w-5xl rounded-3xl overflow-hidden border border-white/10 bg-black/60"
            >

              {/* IMAGE HERO */}
              <div className="relative h-[420px]">

                {selected?.image && (
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h2 className="text-3xl font-bold text-white">
                  {selected?.title}
                </h2>

                <p className="text-zinc-400 mt-4 leading-7">
                  {selected?.desc}
                </p>

                {/* TAGS */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {selected?.tags?.map((t: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CLOSE */}
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setSelected(null)}
                    className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition"
                  >
                    Close Experience
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