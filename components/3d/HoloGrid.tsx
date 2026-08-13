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
        text-cyan-400
        "
      >
        Loading...
      </div>
    )
  }
);


export default function HeroGlobe(){

return(

<div

className="
relative
mx-auto
h-[420px]
w-[420px]

sm:h-[500px]
sm:w-[500px]

lg:h-[650px]
lg:w-[650px]

"

>


{/* Glow */}

<div

className="
absolute
inset-0
rounded-full
bg-cyan-400/10
blur-[120px]
"

/>



<Scene />


</div>

)

}