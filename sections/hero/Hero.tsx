import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Aurora from "@/components/effects/Aurora";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Aurora />
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[140px]" />
      </div>

      <Container>
        <div className="max-w-4xl">

          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Next Generation Technology
          </span>

          <h1 className="mt-8 text-6xl md:text-8xl font-black tracking-tight text-white">
            ANOX
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-400">
            Engineering the future through software,
            artificial intelligence and digital innovation.
          </p>

          <div className="mt-10 flex gap-4">
            <Button>
              Explore
            </Button>

            <Button variant="secondary">
              Learn More
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}