
import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = clsx(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-7 py-3.5 font-semibold transition-all duration-300 active:scale-95",
    variant === "primary"
      ? "border border-cyan-400 bg-cyan-400 text-black hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,.45)]"
      : "border border-cyan-400/40 bg-white/5 text-cyan-300 backdrop-blur-xl hover:scale-105 hover:border-cyan-300 hover:bg-cyan-400/10",
    className
  );

  const content = (
    <>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {content}
    </button>
  );
}
