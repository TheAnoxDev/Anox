"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  loading: boolean;
};

export default function LoadingScreen({ loading }: Props) {
  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#05070B]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="text-center">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                textShadow: [
                  "0 0 0px #22d3ee",
                  "0 0 25px #22d3ee",
                  "0 0 12px #22d3ee",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-5xl font-black tracking-[0.45em] text-cyan-400"
            >
              ANOX
            </motion.h1>

            <motion.p
              className="mt-6 text-zinc-400 tracking-[0.25em] uppercase text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .4 }}
            >
              Initializing...
            </motion.p>

            <div className="mt-8 w-72 h-1 rounded-full bg-white/10 overflow-hidden">

              <motion.div
                className="h-full bg-cyan-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2.3,
                  ease: "easeInOut",
                }}
              />

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}