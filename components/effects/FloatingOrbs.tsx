
"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    size: 280,
    top: "12%",
    left: "8%",
    color: "bg-cyan-400/15",
    duration: 10,
  },
  {
    size: 220,
    top: "55%",
    right: "12%",
    color: "bg-sky-400/15",
    duration: 13,
  },
  {
    size: 340,
    bottom: "-80px",
    left: "40%",
    color: "bg-blue-500/10",
    duration: 16,
  },
];

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[120px] ${orb.color}`}
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}