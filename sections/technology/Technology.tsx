"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

import {
  Brain,
  Shield,
  Code2,
} from "lucide-react";

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative py-32"
    >
      <Container>

        <SectionTitle
          badge="TECHNOLOGY"
          title="Our Expertise"
          description="ANOX develops cutting-edge technologies that empower businesses and shape the digital future."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* AI */}

          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.6 }}
          >

            <GlassCard className="h-full p-8">

              <Brain
                size={46}
                className="text-cyan-400"
              />

              <h3 className="mt-8 text-2xl font-bold text-white">

                Artificial Intelligence

              </h3>

              <p className="mt-5 leading-8 text-zinc-400">

                Intelligent systems, machine learning,
                automation and AI-driven solutions.

              </p>

            </GlassCard>

          </motion.div>

          {/* Security */}

          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.6, delay:.15 }}
          >

            <GlassCard className="h-full p-8">

              <Shield
                size={46}
                className="text-cyan-400"
              />

              <h3 className="mt-8 text-2xl font-bold text-white">

                Cyber Security

              </h3>

              <p className="mt-5 leading-8 text-zinc-400">

                Secure infrastructure, ethical hacking,
                protection and digital resilience.

              </p>

            </GlassCard>

          </motion.div>

          {/* Software */}

          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.6, delay:.3 }}
          >

            <GlassCard className="h-full p-8">

              <Code2
                size={46}
                className="text-cyan-400"
              />

              <h3 className="mt-8 text-2xl font-bold text-white">

                Software Engineering

              </h3>

              <p className="mt-5 leading-8 text-zinc-400">

                Modern scalable applications with
                performance-focused architecture.

              </p>

            </GlassCard>

          </motion.div>

                    {/* Cloud */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: .45 }}
          >

            <GlassCard className="h-full p-8">

              <div className="text-5xl">☁️</div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                Cloud Computing
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                Reliable cloud infrastructure, scalable deployment
                and enterprise hosting solutions.
              </p>

            </GlassCard>

          </motion.div>

          {/* Automation */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: .6 }}
          >

            <GlassCard className="h-full p-8">

              <div className="text-5xl">⚙️</div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                Automation
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                Smart workflows, business automation and AI-powered
                productivity systems.
              </p>

            </GlassCard>

          </motion.div>

          {/* Web */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: .75 }}
          >

            <GlassCard className="h-full p-8">

              <div className="text-5xl">🌐</div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                Web Technologies
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                Modern web platforms built with Next.js, React,
                TypeScript and scalable architectures.
              </p>

            </GlassCard>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}