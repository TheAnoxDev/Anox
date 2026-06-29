export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">

      <div
        className="
        absolute
        inset-0
        opacity-20
        [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
        [background-size:60px_60px]
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-transparent
        via-transparent
        to-black
        "
      />

    </div>
  );
}