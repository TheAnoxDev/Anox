import { ReactNode } from "react";
import clsx from "clsx";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function Heading({
  children,
  className,
}: HeadingProps) {
  return (
    <h2
      className={clsx(
        "text-4xl md:text-6xl font-bold tracking-tight text-white",
        className
      )}
    >
      {children}
    </h2>
  );
}