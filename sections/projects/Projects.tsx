
"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const projects = [
  {
    title: "ANOX AI",
    description:
      "Artificial intelligence platform for modern businesses.",
  },
  {
    title: "ANOX Shield",
    description:
      "Cybersecurity suite protecting digital infrastructure.",
  },
  {
    title: "ANOX Cloud",
    description:
      "Cloud platform built for speed, scalability and reliability.",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="border-t border-white/10 py-40"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Projects"
          title="Featured Products"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <GlassCard key={project.title}>
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                {project.description}
              </p>

              <button className="mt-8 text-cyan-400 transition hover:text-cyan-300">
                Learn More →
              </button>
            </GlassCard>
          ))}
        </div>

      </div>
    </motion.section>
  );
}