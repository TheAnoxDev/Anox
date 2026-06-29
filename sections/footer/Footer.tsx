
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        <div>
          <h2 className="text-2xl font-black text-white">
            ANOX<span className="text-cyan-400">.</span>
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Engineering the Future.
          </p>
        </div>

        <div className="flex gap-8 text-zinc-400">
          <a href="#" className="hover:text-cyan-400 transition">
            GitHub
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            LinkedIn
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            X
          </a>
        </div>

        <p className="text-sm text-zinc-600">
          © 2026 ANOX
        </p>

      </div>
    </footer>
  );
}
