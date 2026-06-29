import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
    >
      <div className="h-10 w-10 rounded-xl border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-300">
        <span className="font-black text-cyan-300 text-lg">
          A
        </span>
      </div>

      <div>
        <h1 className="text-xl font-black tracking-[0.35em] text-white">
          ANOX
        </h1>

        <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
          Engineering The Future
        </p>
      </div>
    </Link>
  );
}