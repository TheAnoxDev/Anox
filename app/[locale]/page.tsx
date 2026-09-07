import dynamic from "next/dynamic";

import Hero from "@/sections/hero/Hero";
import ExecutiveRail from "@/components/ExecutiveRail";
import Experience from "@/sections/experience/Experience";

const Services = dynamic(() => import("@/sections/services/Services"));
const Projects = dynamic(() => import("@/sections/projects/Projects"));
const Technology = dynamic(() => import("@/sections/technology/Technology"));
const WhyAnox = dynamic(() => import("@/sections/why-anox/WhyAnox"));
const Contact = dynamic(() => import("@/sections/contact/Contact"));

export default function Home() {
  return (
    <main className="anox-page relative overflow-hidden bg-[#05070b]">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/[.08] blur-[180px]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[.035] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px]" />

      <Hero />
      <ExecutiveRail />
      <Experience />

      <section id="capabilities" data-section>
        <Services />
      </section>

      <Projects />
      <Technology />
      <WhyAnox />

      <section id="cta" data-section className="relative overflow-hidden py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[.08] via-white/[.025] to-blue-500/[.06] p-7 sm:p-10 lg:p-14">
            <div aria-hidden className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/10 blur-[90px]" />
            <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="font-mono text-[10px] font-bold tracking-[.24em] text-cyan-300">ANOX / NEXT MOVE</div>
                <h2 className="mt-4 max-w-3xl text-3xl sm:text-5xl">Build beyond the obvious<span className="text-cyan-300">.</span></h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">Bring us the difficult problem. We turn ambitious ideas into intelligent, secure and scalable digital systems.</p>
              </div>
              <a href="#contact" className="anox-btn-primary w-full sm:w-auto">Start a conversation</a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
