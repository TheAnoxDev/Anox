"use client";

export default function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <div
        className="
        absolute
        left-1/2
        top-0
        h-[700px]
        w-[700px]
        -translate-x-1/2
        rounded-full
        bg-cyan-400/20
        blur-[180px]
      "
      />

      <div
        className="
        absolute
        right-0
        bottom-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-blue-500/10
        blur-[180px]
      "
      />
    </div>
  );
}