"use client";

import { motion } from "framer-motion";
import { HiPlay } from "react-icons/hi";
import { cn } from "@/lib/utils";

interface PlayButtonProps {
  size?: "sm" | "lg";
  label?: string;
  className?: string;
  onClick?: () => void;
}

const sizes = {
  sm: "h-14 w-14",
  lg: "h-20 w-20",
};

const iconSizes = {
  sm: "text-xl",
  lg: "text-2xl",
};

export default function PlayButton({ size = "lg", label, className, onClick }: PlayButtonProps) {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <motion.button
        type="button"
        aria-label={label ?? "Play"}
        onClick={onClick}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "group relative flex items-center justify-center rounded-full border border-gold/50 bg-background/30 backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold/10",
          sizes[size]
        )}
      >
        <span className="absolute inset-0 rounded-full border border-gold/20 animate-ping" />
        <HiPlay
          className={cn(
            "relative text-gold transition-transform group-hover:scale-110",
            iconSizes[size]
          )}
        />
      </motion.button>
      {label && (
        <span className="max-w-[100px] text-center text-[10px] leading-relaxed tracking-[0.2em] text-beige-muted uppercase">
          {label}
        </span>
      )}
    </div>
  );
}
