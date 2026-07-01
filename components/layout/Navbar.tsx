"use client";
import { useTranslation } from "@/hooks/useTranslation";
import { useLang } from "@/components/LangContext";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [active, setActive] = useState("#hero");
const { lang, setLang } = useLang();
const { t } = useTranslation();
const links = [
  {
    name: t.navbar.about,
    href: "#about",
  },
  {
    name: t.navbar.technology,
    href: "#technology",
  },
  {
    name: t.navbar.projects,
    href: "#projects",
  },
];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "hero",
        "about",
        "technology",
        "projects",
        "contact",
      ];

      for (const id of sections) {
        const section = document.getElementById(id);

        if (!section) continue;

        const top = section.offsetTop - 120;

        const bottom = top + section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          setActive(`#${id}`);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",

        scrolled
          ? "border-b border-white/5 bg-black/30 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />
                {/* Desktop Navigation */}

        <nav className="hidden items-center gap-2 md:flex">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className={clsx(
                "rounded-xl px-5 py-2 text-sm font-medium transition-all duration-300",

                active === link.href
                  ? "bg-cyan-400/5 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                  : "text-zinc-300 hover:bg-white/5 hover:text-white"
              )}
            >
              {link.name}
            </a>

          ))}

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <a
            href="#contact"
            className="
              hidden
              rounded-xl
              border
              border-cyan-400/30
              bg-cyan-400/10
              px-5
              py-2
              text-sm
              font-semibold
              text-cyan-300
              transition-all
              duration-300
              hover:bg-cyan-400
              hover:text-black
              md:inline-flex
            "
          >
            {t.navbar.contact}
          </a>
          <button
  onClick={() => setLang(lang === "en" ? "fa" : "en")}
  className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
>
  {lang === "en" ? "FA" : "EN"}
</button>

          <button
            onClick={() => setOpen(!open)}
            className="
              rounded-xl
              p-2
              text-white
              transition
              hover:bg-white/10
              md:hidden
            "
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

      </div>
            {/* Mobile Menu */}

      <div
        className={clsx(
          "overflow-hidden transition-all duration-500 md:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >

        <div className="border-t border-white/5 bg-black/90 backdrop-blur-3xl">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={clsx(
                "block px-6 py-5 text-sm font-medium transition-all",

                active === link.href
                  ? ""
                  : "text-zinc-300 hover:bg-white/5 hover:text-white"
              )}
            >
              {link.name}
            </a>

          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="
              m-4
              flex
              justify-center
              rounded-xl
              border
              border-cyan-400/30
              bg-cyan-400/10
              px-5
              py-3
              font-semibold
              text-cyan-300
              transition-all
              hover:bg-cyan-400
              hover:text-black
            "
          >
            {t.navbar.contact}
          </a>

        </div>

      </div>

    </header>
  );
}