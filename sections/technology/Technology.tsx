"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Technology() {
  const items = [
    {
      title: "Artificial Intelligence",
      description:
        "Building intelligent systems powered by modern AI technologies.",
    },
    {
      title: "Cyber Security",
      description:
        "Advanced security solutions to protect digital infrastructure.",
    },
    {
      title: "Software Engineering",
      description:
        "Scalable applications with modern architecture and performance.",
    },
    {
      title: "Cloud Computing",
      description:
        "Reliable cloud infrastructure and deployment solutions.",
    },
  ];

  return (
    <motion.section
      id="technology"
      className="border-t border-white/10 py-40"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Technology"
          title="What We Build"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <GlassCard key={item.title}>
              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>

      </div>
    </motion.section>
  );
}