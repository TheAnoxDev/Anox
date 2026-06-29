
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
}

export default function GlassCard({
  children,
}: GlassCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        md:p-10
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:bg-white/10
        hover:shadow-[0_20px_80px_rgba(34,211,238,.18)]
      "
    >
      {children}
    </div>
  );
}
