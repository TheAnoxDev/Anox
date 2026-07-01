"use client";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative border-t border-white/10 py-20">

      <Container>

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <Logo />

            <p className="mt-8 max-w-sm leading-8 text-zinc-400">
{t.footer.description}
            </p>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-lg font-bold text-white">
              {t.footer.company}
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link
                href="#about"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
               {t.footer.about}
              </Link>

              <Link
                href="#technology"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                {t.footer.technology}
              </Link>

              <Link
                href="#projects"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
               {t.footer.projects} 
              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-lg font-bold text-white">
              {t.footer.resources}
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link
                href="#contact"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                {t.footer.contact}
              </Link>

              <Link
                href="/"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                {t.footer.privacy}

              </Link>

              <Link
                href="/"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                {t.footer.terms}

              </Link>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-lg font-bold text-white">

              {t.footer.follow}

            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <a
                href="https://github.com/TheAnoxDev"
                target="_blank"
                className="text-zinc-400 transition hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/anox-dev-34933941b "
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
            © {new Date().getFullYear()} ANOX. {t.footer.copyright}
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
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/40
              hover:text-cyan-400
            "
          >
            ↑ {t.footer.backToTop}
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