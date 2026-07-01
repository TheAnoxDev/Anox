"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-20">

      <Container>

        <div className="h-screen">

          {/* Logo */}

          <div>

            <Logo />

            <p className="mt-8 max-w-sm leading-8 text-zinc-400">

              Engineering the future through artificial
              intelligence, cybersecurity and next-generation
              software.

            </p>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-lg font-bold text-white">
              Company
            </h3>

            <div className="h-screen">

              <Link
                href="#about"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                About
              </Link>

              <Link
                href="#technology"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                Technology
              </Link>

              <Link
                href="#projects"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                Projects
              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-lg font-bold text-white">
              Resources
            </h3>

            <div className="h-screen">

              <Link
                href="#contact"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                Contact
              </Link>

              <Link
                href="/"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                Privacy

              </Link>

              <Link
                href="/"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                Terms

              </Link>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-lg font-bold text-white">

              Follow

            </h3>

            <div>

              <a
                href="https://github.com/TheAnoxDev"
                target="_blank"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                LinkedIn
              </a>

              <a
                href="https://x.com/anox_dev"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                X (Twitter)
              </a>

             <a
                href="https://t.me/anoxdev"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                Telegram
              </a>

              <a
                href="https://www.instagram.com/anox.dev"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                Instagram
              </a>

              


            </div>

          </div>
                  </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 md:flex-row">

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} ANOX. All rights reserved.
          </p>

          <a
            href="#hero"
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-6
              py-3
              text-sm
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/40
              hover:text-cyan-400
            "
          >
            ↑ Back to Top
          </a>

        </div>

        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            h-[350px]
            w-[350px]
            -translate-x-1/2
            rounded-full
            bg-cyan-400/10
            blur-[140px]
            
          "
        />

      </Container>

    </footer>
  );
}