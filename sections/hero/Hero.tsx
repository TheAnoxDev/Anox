"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import Aurora from "@/components/effects/Aurora";
import GridBackground from "@/components/effects/GridBackground";
import FloatingOrbs from "@/components/effects/FloatingOrbs";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
      relative
      flex
      min-h-screen
      items-center
      overflow-hidden
      pt-32
    "
    >
      {/* Background */}

      <GridBackground />

      <Aurora />

      <FloatingOrbs />

      {/* Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
          absolute
          left-1/2
          top-1/2

          h-[1100px]
          w-[1100px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-400/20

          blur-[220px]
        "
        />

      </div>

      {/* Noise */}

      <div
        className="
        pointer-events-none

        absolute
        inset-0

        opacity-[0.03]

        [background-image:radial-gradient(white_1px,transparent_1px)]

        [background-size:24px_24px]
      "
      />

      <Container>

        <motion.div
          initial={{
            opacity:0,
            y:70
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1
          }}

          className="max-w-5xl"
        >

          {/* Badge */}

          <div
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

            backdrop-blur-2xl
          "
          >

            <span
              className="
              h-2
              w-2

              rounded-full

              bg-cyan-400

              animate-pulse
            "
            />

            <span
              className="
              text-sm

              font-medium

              tracking-[0.25em]

              uppercase

              text-cyan-300
            "
            >
              Engineering The Future
            </span>

          </div>

          {/* Heading */}

          <h1
            className="
              mt-10

              text-6xl

              sm:text-7xl

              lg:text-[8.5rem]

              font-black

              leading-[0.9]

              tracking-tight
            "
          >

            <span
              className="
                bg-gradient-to-b

                from-white

                via-white

                to-cyan-400

                bg-clip-text

                text-transparent
              "
            >
              ANOX
            </span>

            <span className="text-cyan-400">
              .
            </span>

          </h1>

          {/* Description */}

          <p
            className="
              mt-8

              max-w-3xl

              text-lg

              leading-9

              text-zinc-400

              md:text-xl
            "
          >

            Building next-generation

            <span className="text-white font-semibold">
              {" "}Artificial Intelligence{" "}
            </span>

            ,

            <span className="text-white font-semibold">
              {" "}Cyber Security{" "}
            </span>

            ,

            scalable software platforms and future digital
            infrastructure for companies worldwide.

          </p>

          {/* Buttons */}

          <div
            className="
              mt-12

              flex

              flex-wrap

              gap-5
            "
          >

            <Button>

              Explore ANOX

            </Button>

            <Button variant="secondary">

              Our Vision

            </Button>

          </div>
                    {/* Stats */}

          <div
            className="
              mt-20

              grid

              max-w-2xl

              grid-cols-3

              gap-8
            "
          >

            <div>

              <h2 className="text-4xl md:text-5xl font-black text-white">

                <CountUp end={12} duration={2.5} />+

              </h2>

              <p className="mt-2 text-zinc-500">
                Technologies
              </p>

            </div>

            <div>

              <h2 className="text-4xl md:text-5xl font-black text-white">

                AI

              </h2>

              <p className="mt-2 text-zinc-500">
                First
              </p>

            </div>

            <div>

              <h2 className="text-4xl md:text-5xl font-black text-white">

                <CountUp end={100} duration={3} />%

              </h2>

              <p className="mt-2 text-zinc-500">
                Innovation
              </p>

            </div>

          </div>

          {/* Scroll Indicator */}

          <motion.div

            animate={{
              y: [0, 12, 0],
            }}

            transition={{
              repeat: Infinity,
              duration: 2,
            }}

            className="mt-24 flex justify-center lg:justify-start"

          >

            <div
              className="
                flex
                h-14
                w-8
                justify-center

                rounded-full

                border

                border-white/20
              "
            >

              <div
                className="
                  mt-2

                  h-3
                  w-1

                  rounded-full

                  bg-cyan-400
                "
              />

            </div>

          </motion.div>

        </motion.div>

      </Container>

    </section>
  );
}
