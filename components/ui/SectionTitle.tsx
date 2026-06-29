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
      <span className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
        {badge}
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-black text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}