"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import Globe from "@/components/3d/Globe";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import Aurora from "@/components/effects/Aurora";
import GridBackground from "@/components/effects/GridBackground";
import FloatingOrbs from "@/components/effects/FloatingOrbs";


export default function Hero() {
  return (
    <section
    className="
relative
flex
min-h-screen
items-center
overflow-hidden
bg-[#04070b]
pt-[clamp(6rem,10vw,10rem)]
pb-[clamp(4rem,8vw,8rem)]
"
    >
      <GridBackground />
      <Aurora />
      <FloatingOrbs />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
          absolute
          left-1/2
          top-1/2
          h-[1200px]
          w-[1200px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/15
          blur-[250px]
          flex items-center justify-center
        "
        />
      </div>

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.025]
        [background-image:radial-gradient(white_1px,transparent_1px)]
        [background-size:24px_24px]
      "
      />

      <Container>

        <div className="grid items-center gap-32 lg:grid-cols-2 lg:gap-40">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-cyan-400/20
                bg-white/5
                px-5
                py-3
                backdrop-blur-3xl
              "
            >

              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"/>

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-cyan-300
                "
              >
                ENGINEERING THE FUTURE
              </span>

            </motion.div>
                        <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: .35,
                duration: .9,
              }}
              className="
                mt-[clamp(2.5rem,5vw,5rem)]
                text-6xl
                font-black
                leading-[0.88]
                tracking-tight
                sm:text-7xl
                lg:text-[6.2rem]
              "
            >

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  via-cyan-100
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                ANOX
              </span>

              <span
                className="
                  mt-3
                  block
                  text-2xl
                  font-semibold
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Engineering Intelligence
              </span>

              <span className="block text-cyan-400">
                Beyond Human Limits.
              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: .55,
                duration: .9,
              }}
              className="
                mt-[clamp(2.5rem,5vw,5rem)]
                max-w-xl lg:max-w-2xl
                text-lg
                leading-9
                text-zinc-400
                md:text-xl
              "
            >

              ANOX creates next-generation

              <span className="font-semibold text-white">
                {" "}Artificial Intelligence{" "}
              </span>

              systems,

              <span className="font-semibold text-white">
                {" "}Cybersecurity{" "}
              </span>

              platforms, cloud infrastructure, autonomous software,
              and digital technologies engineered for the future.

            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: .8,
              }}
              className="
                mt-[clamp(2.5rem,5vw,5rem)]
                flex
                flex-wrap
                gap-5
              "
            >

              <Button>
                Explore ANOX
              </Button>

              <Button variant="secondary">
                Learn More
              </Button>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: .8,
              }}
              className="
                mt-[clamp(2.5rem,5vw,5rem)]
                grid
                gap-6
                sm:grid-cols-3
              "
            >

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">

                <h2 className="text-5xl font-black text-white">
                  <CountUp end={12} duration={2.5} />+
                </h2>

                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Core Technologies
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">

                <h2 className="text-5xl font-black text-cyan-400">
                  AI
                </h2>

                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-zinc-500">
                  AI First
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">

                <h2 className="text-5xl font-black text-white">
                  <CountUp end={100} duration={3} />%
                </h2>

                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Innovation
                </p>

              </div>

            </motion.div>

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="h-screen"
            >

              <div className="flex h-16 w-9 justify-center rounded-full border border-cyan-400/30">

                <motion.div
                  animate={{
                    y: [0, 22, 0],
                    opacity: [1, .3, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="mt-2 h-4 w-1 rounded-full bg-cyan-400"
                />

              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 120,
              scale: .8,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: .5,
            }}
            className="flex items-center justify-center w-full lg:w-auto lg:pl-24"
            
          >

            <Globe />

          </motion.div>

        </div>

      </Container>

    </section>
  );
}