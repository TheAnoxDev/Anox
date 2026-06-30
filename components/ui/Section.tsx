interface SectionTitleProps {
  badge: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl">

      <span
        className="
        inline-flex
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-400/10
        px-4
        py-2
        text-xs
        font-semibold
        uppercase
        tracking-[0.35em]
        text-cyan-400
      "
      >
        {badge}
      </span>

      <h2
        className="
        mt-6
        text-4xl
        md:text-6xl
        font-black
        tracking-tight
        text-white
      "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
          mt-7
          text-base
          md:text-xl
          leading-8
          text-zinc-400
        "
        >
          {description}
        </p>
      )}

    </div>
  );
}