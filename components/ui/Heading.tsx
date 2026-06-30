interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Heading({
  children,
  className = "",
}: HeadingProps) {
  return (
    <h2
      className={`
        text-4xl
        sm:text-5xl
        lg:text-6xl
        font-black
        tracking-tight
        leading-none
        text-white
        ${className}
      `}
    >
      {children}
    </h2>
  );
}