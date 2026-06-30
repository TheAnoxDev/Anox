import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        `
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-white/[0.04]

        backdrop-blur-2xl

        p-8

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:bg-white/[0.06]
        hover:shadow-[0_25px_80px_rgba(34,211,238,.18)]
      `,
        className
      )}
    >
      {children}
    </div>
  );
}