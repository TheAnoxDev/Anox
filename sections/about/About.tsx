"use client";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

export default function About() {
  const { t } = useTranslation();
  return (
    <section
    className="h-screen"
      id="about"
    
    >
      <Container>

        <SectionTitle
  badge={t.about.badge}
  title={t.about.title}
  description={t.about.description}
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
                {t.about.visionTitle}
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">
                {t.about.missionDescription}
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
                {t.about.missionTitle}
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">
                {t.about.visionDescription}
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">

                  <div className="h-3 w-3 rounded-full bg-cyan-400" />

                  <span className="text-zinc-300">
                   {t.about.ai}
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <div className="h-3 w-3 rounded-full bg-cyan-400" />

                  <span className="text-zinc-300">
                    {t.about.cyber}
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <div className="h-3 w-3 rounded-full bg-cyan-400" />

                  <span className="text-zinc-300">
                    {t.about.software}
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
