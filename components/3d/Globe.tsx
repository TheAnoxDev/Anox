"use client";

import dynamic from "next/dynamic";


const Scene = dynamic(
  () => import("./Scene"),
  {
    ssr:false,

    loading:()=>(
      <div
        className="
        flex
        h-full
        w-full
        items-center
        justify-center
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-400/5
        animate-pulse
        "
      >
        <span
          className="
          font-mono
          text-xs
          tracking-[0.35em]
          uppercase
          text-cyan-400/70
          "
        >
          Initializing Core...
        </span>

      </div>
    )
  }
);



export default function Globe(){

return (

<div

  role="img"

  aria-label="
  ANOX AI Global Intelligence Network
  "

  className="
  relative
  mx-auto

  aspect-square

  w-[320px]

  sm:w-[420px]

  lg:w-[560px]

  xl:w-[650px]

  select-none

  contain-layout

  will-change-transform

  "

>


{/* MAIN GLOW */}

<div

className="
absolute
left-1/2
top-1/2

h-[280px]

w-[280px]

sm:h-[450px]

sm:w-[450px]

lg:h-[600px]

lg:w-[600px]

-translate-x-1/2
-translate-y-1/2

rounded-full

bg-cyan-400/10

blur-[100px]

pointer-events-none

"

/>



{/* CORE GLOW */}

<div

className="
absolute

left-1/2
top-1/2

h-[180px]

w-[180px]

sm:h-[300px]

sm:w-[300px]

lg:h-[420px]

lg:w-[420px]

-translate-x-1/2
-translate-y-1/2

rounded-full

bg-cyan-300/10

blur-[70px]

pointer-events-none

"

/>



{/* 3D */}

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