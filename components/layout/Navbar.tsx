"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const links = [
  { name: "Technology", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Research", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/5">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-black tracking-[0.35em] text-white"
          >
            ANOX
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-cyan-300 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Button>
            Get Started
          </Button>

        </div>
      </Container>
    </header>
  );
}