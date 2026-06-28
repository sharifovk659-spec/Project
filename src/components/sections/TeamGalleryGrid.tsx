"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useLocale } from "@/components/providers/LocaleProvider";
import { TEAM_GALLERY_IMAGES } from "@/lib/data/about";
import { IMAGE_QUALITY_HIGH, IMAGE_SIZES } from "@/lib/image";
import TeamGalleryLightbox from "@/components/sections/TeamGalleryLightbox";

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
                className="group relative aspect-[16/10] w-full cursor-zoom-in select-none overflow-hidden rounded-xl border border-gold/15 bg-dark transition-[border-color] hover:border-gold/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
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
          images={TEAM_GALLERY_IMAGES}
          index={activeIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      ) : null}
    </>
  );
}
