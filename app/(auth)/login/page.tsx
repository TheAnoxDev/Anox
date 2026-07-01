"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#04070b] px-6">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[150px]" />

      </div>

      {/* Grid */}

      <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          z-10
          w-full
          max-w-md
          rounded-[32px]
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-3xl
        "
      >

        {/* Logo */}

        <div className="flex justify-center">

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-cyan-500/20
              text-2xl
              font-black
              text-cyan-300
            "
          >
            A
          </div>

        </div>

        {/* Title */}

        <h1 className="mt-8 text-center text-4xl font-black text-white">
          Welcome Back
        </h1>

        <p className="mt-3 text-center text-zinc-400">
          Sign in to continue to ANOX
        </p>

        {/* Form */}

        <form className="mt-10 space-y-6">

          {/* Email */}

          <div>

            <label className="mb-2 block text-sm text-zinc-300">
              Email Address
            </label>

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
              />

              <input
                type="email"
                placeholder="name@example.com"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-black/30
                  py-3
                  pl-12
                  pr-4
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-zinc-500
                  focus:border-cyan-400
                  focus:bg-black/40
                "
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="mb-2 block text-sm text-zinc-300">
              Password
            </label>

            <div className="relative">

              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-black/30
                  py-3
                  pl-12
                  pr-12
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-zinc-500
                  focus:border-cyan-400
                  focus:bg-black/40
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-zinc-400
                  transition
                  hover:text-cyan-400
                "
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>
                    {/* Remember + Forgot */}

          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm text-zinc-400">

              <input
                type="checkbox"
                className="
                  h-4
                  w-4
                  rounded
                  border-white/20
                  bg-black/30
                  accent-cyan-400
                "
              />

              Remember me

            </label>

            <Link
              href="/forgot-password"
              className="
                text-sm
                text-cyan-400
                transition
                hover:text-cyan-300
              "
            >
              Forgot password?
            </Link>

          </div>

          {/* Sign In Button */}

          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            type="submit"
            className="
              w-full
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              to-cyan-500
              py-3.5
              font-bold
              text-black
              shadow-[0_0_40px_rgba(34,211,238,.35)]
              transition
            "
          >
            Sign In
          </motion.button>

        </form>

        {/* Divider */}

        <div className="my-8 flex items-center gap-4">

          <div className="h-px flex-1 bg-white/10" />

          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            or
          </span>

          <div className="h-px flex-1 bg-white/10" />

        </div>

        {/* Social Login */}

        <div className="grid grid-cols-2 gap-4">

          <button
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              py-3
              text-sm
              text-white
              transition
              hover:bg-white/10
            "
          >
            Google
          </button>

          <button
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              py-3
              text-sm
              text-white
              transition
              hover:bg-white/10
            "
          >
            GitHub
          </button>

        </div>

        {/* Footer */}

        <p className="mt-8 text-center text-sm text-zinc-400">

          Don't have an account?{" "}

          <Link
            href="/register"
            className="
              font-semibold
              text-cyan-400
              transition
              hover:text-cyan-300
            "
          >
            Create one
          </Link>

        </p>

      </motion.div>

    </main>
  );
}