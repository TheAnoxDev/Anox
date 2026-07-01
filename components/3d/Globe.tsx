"use client";

import Scene from "./Scene";

export default function Globe() {
  return (
    <div
    
      className="
        relative
        mx-auto
        h-[clamp(320px,40vw,900px)]
w-[clamp(320px,40vw,900px)]
        max-w-full
        select-none
      "
    >
      {/* Outer Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/10
          blur-[120px]
          
        "
        
      />

      {/* Secondary Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[480px]
          w-[480px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[80px]
        "
      />

      {/* Canvas */}
      

      <Scene />
    </div>
  );
}
