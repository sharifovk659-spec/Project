"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";
import { useLocale } from "@/components/providers/LocaleProvider";
import { IMAGE_QUALITY_HIGH } from "@/lib/image";

export default function TeamGalleryLightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
  unoptimized = false,
}: {
  images: readonly string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  unoptimized?: boolean;
}) {
  const { t } = useLocale();
  const [mounted, setMounted] = useState(false);
  const src = images[index];
  const alt = `${t("about.teamGalleryAlt")} ${index + 1}`;
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && hasPrev) onPrev();
      if (event.key === "ArrowRight" && hasNext) onNext();
    },
    [onClose, onNext, onPrev, hasPrev, hasNext],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
        aria-label={t("production.modalClose")}
      />

      <button
        type="button"
        onClick={onClose}
        aria-label={t("production.modalClose")}
        className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-black/60 text-beige backdrop-blur-md transition-colors hover:border-gold hover:text-gold sm:top-6 sm:right-6"
      >
        <HiX className="text-lg" />
      </button>

      {hasPrev ? (
        <button
          type="button"
          onClick={onPrev}
          aria-label={t("about.teamGalleryPrev")}
          className="absolute top-1/2 left-2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-black/60 text-beige backdrop-blur-md transition-colors hover:border-gold hover:text-gold sm:left-4 sm:h-11 sm:w-11"
        >
          <HiChevronLeft className="text-xl" />
        </button>
      ) : null}

      {hasNext ? (
        <button
          type="button"
          onClick={onNext}
          aria-label={t("about.teamGalleryNext")}
          className="absolute top-1/2 right-2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-black/60 text-beige backdrop-blur-md transition-colors hover:border-gold hover:text-gold sm:right-4 sm:h-11 sm:w-11"
        >
          <HiChevronRight className="text-xl" />
        </button>
      ) : null}

      <div
        className="relative z-10 h-[min(85vh,900px)] w-[min(95vw,1280px)]"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          unoptimized={unoptimized}
          quality={IMAGE_QUALITY_HIGH}
          sizes="95vw"
          priority
          className="object-contain"
        />
      </div>
    </div>,
    document.body,
  );
}
