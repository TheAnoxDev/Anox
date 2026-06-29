"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="border-t border-white/10 py-40"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Contact"
          title="Let's Build the Future"
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <GlassCard>
            <h3 className="text-3xl font-bold text-white">
              Get in Touch
            </h3>

            <p className="mt-6 leading-8 text-zinc-400">
              We are always looking for new ideas, partnerships
              and ambitious projects.
            </p>

            <div className="mt-10 space-y-5">
              <p className="text-zinc-300">
                📧 hello@anox.dev
              </p>

              <p className="text-zinc-300">
                🌍 Worldwide
              </p>

              <p className="text-zinc-300">
                🚀 Building the Future
              </p>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-3xl font-bold text-white">
              Ready?
            </h3>

            <p className="mt-6 text-zinc-400">
              Start your next project with ANOX.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                Contact Us
              </Button>

              <Button variant="secondary">
                GitHub
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </motion.section>
  );
}