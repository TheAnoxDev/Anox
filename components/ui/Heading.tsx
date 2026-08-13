import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export default function Heading({
  children,
  className,
}: HeadingProps) {

  return (
    <h2
      className={cn(
        `
        max-w-4xl

        text-4xl
        sm:text-5xl
        lg:text-6xl

        font-black

        leading-[1.05]

        tracking-[-0.04em]

        text-white
        `,
        className
      )}
    >
      {children}
    </h2>
  );
}