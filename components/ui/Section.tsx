import { ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "py-24 lg:py-32",
        className
      )}
    >
      {children}
    </section>
  );
}