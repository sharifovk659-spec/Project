"use client";

import { HiPlay } from "react-icons/hi";
import { cn } from "@/lib/utils";

interface PlayButtonProps {
  size?: "sm" | "lg";
  label?: string;
  className?: string;
  onClick?: () => void;
  animated?: boolean;
}

const sizes = {
  sm: { button: "h-16 w-16", inner: "h-10 w-10", icon: "text-lg" },
  lg: { button: "h-24 w-24", inner: "h-14 w-14", icon: "text-2xl" },
};

export default function PlayButton({
  size = "lg",
  label,
  className,
  onClick,
  animated = false,
}: PlayButtonProps) {
  const dim = sizes[size];

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <button
        type="button"
        aria-label={label ?? "Play"}
        onClick={onClick}
        className={cn(
          "group relative flex items-center justify-center rounded-full border border-gold/45 bg-black/45 shadow-[0_0_30px_rgba(200,155,92,0.15)] backdrop-blur-md transition-transform duration-300 hover:scale-105 active:scale-95",
          animated && "animate-play-pulse",
          dim.button,
        )}
      >
        {animated && (
          <>
            <span
              aria-hidden
              className="absolute inset-0 rounded-full border border-gold/25 animate-ping"
            />
            <span
              aria-hidden
              className="absolute inset-[-6px] rounded-full border border-gold/15 animate-play-ring"
            />
          </>
        )}

        <span
          className={cn(
            "relative flex items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:scale-105",
            dim.inner,
          )}
        >
          <HiPlay className={cn("ml-0.5 text-background/90", dim.icon)} />
        </span>
      </button>

      {label && (
        <span className="max-w-[120px] text-center text-[10px] leading-relaxed font-medium tracking-[0.28em] text-gold uppercase sm:text-[11px]">
          {label}
        </span>
      )}
    </div>
  );
}
