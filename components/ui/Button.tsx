import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-medium transition-all duration-300",
    "border",
    variant === "primary"
      ? "bg-cyan-400 text-black border-cyan-400 hover:bg-cyan-300 hover:scale-105"
      : "bg-transparent text-cyan-400 border-cyan-400 hover:bg-cyan-400/10 hover:scale-105",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}