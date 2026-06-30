"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <>
      <motion.div
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        left-[10%]
        top-[20%]
        h-40
        w-40
        rounded-full
        bg-cyan-400/10
        blur-3xl
      "
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        right-[15%]
        bottom-[15%]
        h-56
        w-56
        rounded-full
        bg-sky-500/10
        blur-3xl
      "
      />
    </>
  );
}