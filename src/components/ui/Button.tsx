"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-gold text-background hover:bg-gold-light border border-gold/30",
  outline:
    "border border-gold/50 text-beige hover:bg-gold/10 hover:border-gold",
  ghost: "text-beige-muted hover:text-beige",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-widest uppercase transition-colors duration-300",
    variants[variant],
    disabled && "pointer-events-none opacity-60",
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </motion.button>
  );
}
