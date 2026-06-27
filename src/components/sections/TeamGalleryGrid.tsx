"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useLocale } from "@/components/providers/LocaleProvider";
import { TEAM_GALLERY_IMAGES } from "@/lib/data/about";
import { IMAGE_QUALITY_HIGH, IMAGE_SIZES } from "@/lib/image";

function TeamGalleryLightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const { t } = useLocale();
  const [mounted, setMounted] = useState(false);
  const src = TEAM_GALLERY_IMAGES[index];
  const alt = `${t("about.teamGalleryAlt")} ${index + 1}`;
  const hasPrev = index > 0;
  const hasNext = index < TEAM_GALLERY_IMAGES.length - 1;

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

export default function TeamGalleryGrid() {
  const { t } = useLocale();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((current) => (current !== null && current > 0 ? current - 1 : current)),
    [],
  );
  const showNext = useCallback(
    () =>
      setActiveIndex((current) =>
        current !== null && current < TEAM_GALLERY_IMAGES.length - 1 ? current + 1 : current,
      ),
    [],
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="team-gallery-swiper -mx-1 mt-8 overflow-hidden sm:-mx-3 sm:mt-10 lg:-mx-6 lg:mt-12"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={12}
          loop
          grabCursor
          simulateTouch
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 12 },
            1024: { slidesPerView: 3, spaceBetween: 14 },
          }}
          className="team-photos-swiper pb-9 sm:pb-10"
        >
          {TEAM_GALLERY_IMAGES.map((src, index) => (
            <SwiperSlide key={src}>
              <div
                role="button"
                tabIndex={0}
                onDoubleClick={() => setActiveIndex(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveIndex(index);
                  }
                }}
                aria-label={`${t("about.teamGalleryOpen")} ${index + 1}`}
                className="group relative aspect-[16/10] w-full select-none overflow-hidden rounded-xl border border-gold/15 bg-dark transition-[border-color] hover:border-gold/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
              >
                <Image
                  src={src}
                  alt={`${t("about.teamGalleryAlt")} ${index + 1}`}
                  fill
                  draggable={false}
                  priority={index < 3}
                  loading={index < 3 ? undefined : "lazy"}
                  sizes={IMAGE_SIZES.teamGallerySlide}
                  quality={IMAGE_QUALITY_HIGH}
                  className="pointer-events-none object-cover object-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {activeIndex !== null ? (
        <TeamGalleryLightbox
          index={activeIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      ) : null}
    </>
  );
}
