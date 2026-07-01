"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

export default function About() {
  return (
    <section
    className="h-screen"
      id="about"
    
    >
      <Container>

        <SectionTitle
          badge="ABOUT"
          title="Building Tomorrow."
          description="ANOX is creating the next generation of software, artificial intelligence, cybersecurity and digital infrastructure."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <GlassCard className="h-full p-10">

              <div className="mb-8 text-5xl">
                🚀
              </div>

              <h3 className="text-3xl font-bold text-white">
                Our Mission
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">
                We build modern software, intelligent systems and
                secure digital products that help businesses grow
                faster and prepare for the future.
              </p>

            </GlassCard>

          </motion.div>
                    <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7, delay: .15 }}
          >

            <GlassCard className="h-full p-10">

              <div className="mb-8 text-5xl">
                🌌
              </div>

              <h3 className="text-3xl font-bold text-white">
                Our Vision
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">
                To become one of the world's leading technology
                companies by creating intelligent products,
                powerful software and innovative digital
                ecosystems.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">

                  <div className="h-3 w-3 rounded-full bg-cyan-400" />

                  <span className="text-zinc-300">
                    Artificial Intelligence
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <div className="h-3 w-3 rounded-full bg-cyan-400" />

                  <span className="text-zinc-300">
                    Cyber Security
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <div className="h-3 w-3 rounded-full bg-cyan-400" />

                  <span className="text-zinc-300">
                    Future Software
                  </span>

                </div>

              </div>

            </GlassCard>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}