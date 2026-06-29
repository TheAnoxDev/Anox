"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  return (
    <>
      <div
        onMouseMove={(e) => {
          mouseX.set(e.clientX - 250);
          mouseY.set(e.clientY - 250);
        }}
        className="fixed inset-0 z-0"
      />

      <motion.div
        style={{
          x,
          y,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/10
          blur-[120px]
          z-0
        "
      />
    </>
  );
}