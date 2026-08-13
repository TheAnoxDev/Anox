import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

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
      className={cn(
        `
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-white/[0.035]

        backdrop-blur-xl

        transition-all
        duration-300

        hover:-translate-y-1

        hover:border-cyan-400/30

        hover:bg-white/[0.06]

        before:absolute
        before:inset-0
        before:bg-[radial-gradient(circle_at_top,rgba(34,211,238,.12),transparent_50%)]
        before:opacity-0
        before:transition-opacity

        group-hover:before:opacity-100
        `,
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}