
"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import GridBackground from "@/components/effects/GridBackground";
import Aurora from "@/components/effects/Aurora";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32">
      <GridBackground />
  
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

            <span className="text-sm font-medium tracking-wide text-cyan-300">
              Next Generation Technology
            </span>
          </div>

          <h1
            className="
              mt-8
              bg-gradient-to-b
              from-white
              via-white
              to-cyan-400
              bg-clip-text
              text-transparent
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[8rem]
              font-black
              leading-none
              tracking-tight
            "
          >
            ANOX<span className="text-cyan-400">.</span>
          </h1>

          <p className="max-w-2xl text-base md:text-xl leading-8 md:leading-9 text-zinc-400 md:text-xl">
            Building Artificial Intelligence, Cyber Security and
            Digital Products for the Next Generation.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 ">
            <Button>Explore ANOX</Button>

            <Button variant="secondary">
              Our Vision
            </Button>
          </div>

          <div className="mt-20 grid max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h2 className="text-5xl font-black text-white">
                <CountUp end={12} duration={2} />+
              </h2>

              <p className="mt-2 text-zinc-500">
                Technologies
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-white">
                AI
              </h2>

              <p className="mt-2 text-zinc-500">
                First
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-white">
                <CountUp end={100} duration={3} />%
              </h2>

              <p className="mt-2 text-zinc-500">
                Innovation
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
