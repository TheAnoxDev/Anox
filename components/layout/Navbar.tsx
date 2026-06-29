"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "./Logo";

const navItems = [
  { title: "About", href: "#about" },
  { title: "Technology", href: "#technology" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
  scrolled
    ? "border-b border-cyan-400/10 bg-black/80 backdrop-blur-2xl shadow-2xl shadow-cyan-500/5"
    : "bg-transparent"
}`}
    >
      <Container>
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm text-zinc-400 transition hover:text-cyan-300"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button>Start</Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 py-6 md:hidden">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-zinc-300 transition hover:text-cyan-300"
                >
                  {item.title}
                </Link>
              ))}

              <Button>Start</Button>
            </div>
          </div>
        )}
      </Container>
    </motion.header>
  );
}