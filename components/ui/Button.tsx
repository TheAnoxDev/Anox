import Link from "next/link";
import clsx from "clsx";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center",
    "rounded-2xl",
    "px-7 py-3",
    "font-semibold",
    "transition-all duration-500",
    "border",
    "select-none",

    variant === "primary"
      ? `
        border-cyan-400
        bg-cyan-400
        text-black
        hover:scale-105
        hover:bg-cyan-300
        hover:shadow-[0_0_35px_rgba(34,211,238,.45)]
      `
      : `
        border-white/10
        bg-white/5
        backdrop-blur-xl
        text-white
        hover:border-cyan-400/40
        hover:bg-white/10
      `,

    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}