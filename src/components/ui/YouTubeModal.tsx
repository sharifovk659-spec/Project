"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";
interface YouTubeModalProps {
  embedUrl: string | null;
  title: string;
  onClose: () => void;
}

export default function YouTubeModal({ embedUrl, title, onClose }: YouTubeModalProps) {
  const [mounted, setMounted] = useState(false);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!embedUrl) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [embedUrl, handleKeyDown]);

  if (!mounted || !embedUrl) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Закрыть видео"
      />

      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-gold/30 bg-dark shadow-[0_0_80px_rgba(200,155,92,0.15)]">
        <div className="flex items-center justify-between gap-4 border-b border-gold/15 px-4 py-3 sm:px-5">
          <p className="truncate text-sm tracking-wide text-beige">{title}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-background/60 text-beige backdrop-blur-md transition-colors hover:border-gold hover:text-gold"
          >
            <HiX className="text-base" />
          </button>
        </div>

        <div className="relative aspect-video w-full bg-black">
          <iframe
            key={embedUrl}
            src={embedUrl}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
