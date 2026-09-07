"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ExperienceRail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <>
      <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,.9)]" style={{ scaleX }} />
      <div aria-hidden="true" className="pointer-events-none fixed bottom-6 end-5 z-40 hidden w-1 flex-col items-center gap-1.5 md:flex">
        <span className="h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,.9)]" />
        <span className="h-16 w-px bg-gradient-to-b from-cyan-300/70 via-white/15 to-transparent" />
      </div>
    </>
  );
}
