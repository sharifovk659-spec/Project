"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";
import PlayButton from "@/components/ui/PlayButton";
import { SHOWREEL_VIDEOS, vimeoEmbedUrl } from "@/lib/data/showreel";

export default function ShowreelSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const activeVideo = SHOWREEL_VIDEOS[activeIndex];
  const slideNumber = String(activeIndex + 1).padStart(2, "0");
  const slideTotal = String(SHOWREEL_VIDEOS.length).padStart(2, "0");

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setPlaying(false);
  };

  useEffect(() => {
    const autoplay = swiperRef.current?.autoplay;
    if (!autoplay) return;
    if (playing) autoplay.stop();
    else autoplay.start();
  }, [playing]);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-dark shadow-[0_0_60px_rgba(200,155,92,0.06)] ring-1 ring-gold/10">
      <div className="relative aspect-[21/9] min-h-[200px] w-full sm:min-h-[240px] lg:min-h-[280px]">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 10000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          className="showreel-video-swiper absolute inset-0 h-full w-full"
        >
          {SHOWREEL_VIDEOS.map((video, index) => {
            const isActive = index === activeIndex;
            const showVideo = playing && isActive;

            return (
              <SwiperSlide key={video.id} className="!h-full">
                <div className="relative h-full w-full">
                  <Image
                    src={video.poster}
                    alt={video.title}
                    fill
                    priority={index === 0}
                    loading={index === 0 ? undefined : "lazy"}
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    quality={92}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/25 to-background/10" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,5,4,0.55)_100%)]" />

                  {showVideo && (
                    <iframe
                      src={vimeoEmbedUrl(video.id, true)}
                      title={video.title}
                      className="absolute inset-0 z-20 h-full w-full"
                      allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                      allowFullScreen
                    />
                  )}

                  {isActive && !playing && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                      <PlayButton
                        size="sm"
                        label="Смотреть"
                        onClick={() => setPlaying(true)}
                      />
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          type="button"
          aria-label="Предыдущее видео"
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-1/2 left-3 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-background/60 text-gold/90 opacity-100 backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold md:opacity-0 md:group-hover:opacity-100 sm:left-4 sm:h-9 sm:w-9"
        >
          <HiChevronLeft className="text-lg" />
        </button>

        <button
          type="button"
          aria-label="Следующее видео"
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-1/2 right-3 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-background/60 text-gold/90 opacity-100 backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold md:opacity-0 md:group-hover:opacity-100 sm:right-4 sm:h-9 sm:w-9"
        >
          <HiChevronRight className="text-lg" />
        </button>

        {playing && (
          <button
            type="button"
            aria-label="Закрыть видео"
            onClick={() => setPlaying(false)}
            className="absolute top-3 right-3 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-background/60 text-beige backdrop-blur-md transition-colors hover:border-gold hover:text-gold sm:top-4 sm:right-4"
          >
            <HiX className="text-base" />
          </button>
        )}

        {!playing && activeVideo && (
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-20 flex items-end justify-between gap-4 px-4 pb-3 sm:px-5 sm:pb-4">
            <p className="truncate text-[10px] tracking-[0.2em] text-beige/90 uppercase sm:text-xs">
              {activeVideo.title}
            </p>
            <p className="shrink-0 font-display text-xs tracking-[0.3em] text-gold/80 sm:text-sm">
              {slideNumber}
              <span className="text-gold/40"> / </span>
              {slideTotal}
            </p>
          </div>
        )}

      </div>

      <div className="gold-line opacity-60" />
    </div>
  );
}
