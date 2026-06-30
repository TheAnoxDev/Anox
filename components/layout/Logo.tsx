import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
    >
      <Image
        src="/logo.png"
        alt="ANOX Logo"
        width={46}
        height={46}
        priority
        className="
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,.55)]
        "
      />

      <div className="leading-none">
        <h2 className="text-xl font-black tracking-[0.25em] text-white">
          ANOX
        </h2>

        <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
          Future Technology
        </p>
      </div>
    </Link>
  );
}