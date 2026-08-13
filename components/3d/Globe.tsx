"use client";

import dynamic from "next/dynamic";



const Scene = dynamic(
  () => import("./Scene"),
  {
    ssr: false,

    loading: () => (
      <div
        className="
        flex
        h-full
        w-full
        items-center
        justify-center
        rounded-full

        border
        border-cyan-400/15

        bg-cyan-400/[0.03]

        animate-pulse
        "
      >
        <div className="text-center">

          <span
            className="
            block
            font-mono
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-cyan-400/70
            "
          >
            ANOX CORE
          </span>

          <span
            className="
            mt-2
            block
            text-[9px]
            tracking-[0.2em]
            text-zinc-600
            "
          >
            INITIALIZING
          </span>

        </div>
      </div>
    ),
  }
);



export default function Globe() {

  return (

    <div
      role="img"
      aria-label="ANOX AI Global Intelligence Network"
      className="
      relative
      mx-auto
      aspect-square

      w-[280px]

      sm:w-[360px]

      md:w-[420px]

      lg:w-[480px]

      xl:w-[520px]

      select-none

      contain-layout

      "
    >


      {/* Ambient Glow */}

      <div
        aria-hidden="true"
        className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2

        h-[260px]
        w-[260px]

        sm:h-[330px]
        sm:w-[330px]

        lg:h-[420px]
        lg:w-[420px]

        -translate-x-1/2
        -translate-y-1/2

        rounded-full

        bg-cyan-400/[0.07]

        blur-[90px]
        "
      />



      {/* Subtle Core Light */}

      <div
        aria-hidden="true"
        className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2

        h-[160px]
        w-[160px]

        sm:h-[220px]
        sm:w-[220px]

        lg:h-[280px]
        lg:w-[280px]

        -translate-x-1/2
        -translate-y-1/2

        rounded-full

        bg-cyan-300/[0.05]

        blur-[60px]
        "
      />



      {/* Three.js Scene */}

      <div
        className="
        relative
        z-10
        h-full
        w-full
        "
      >
        <Scene />
      </div>


    </div>

  );

}