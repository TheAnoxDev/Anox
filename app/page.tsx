import Navbar from "@/components/layout/Navbar";
import MouseGlow from "@/components/effects/MouseGlow";

import Hero from "@/sections/hero/Hero";
import About from "@/sections/about/About";
import Technology from "@/sections/technology/Technology";
import Projects from "@/sections/projects/Projects";
import Contact from "@/sections/contact/Contact";
import Footer from "@/sections/footer/Footer";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <Navbar />

      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Technology />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}