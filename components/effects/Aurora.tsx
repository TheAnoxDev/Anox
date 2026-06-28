"use client";

export default function Aurora() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[180px] animate-pulse" />

      <div className="absolute right-20 top-24 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[140px] animate-pulse" />

      <div className="absolute left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-sky-300/10 blur-[120px] animate-pulse" />
    </div>
  );
}