"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { useLocale } from "@/components/providers/LocaleProvider";
import { TEAM_FEATURED_GALLERY } from "@/lib/data/about";
import { IMAGE_SIZES } from "@/lib/image";
import TeamGalleryLightbox from "@/components/sections/TeamGalleryLightbox";

const slideFrameClass =
  "group relative aspect-[16/10] w-full cursor-zoom-in select-none overflow-hidden rounded-xl border border-gold/15 bg-dark transition-[border-color] hover:border-gold/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50";

export default function TeamFeaturedGrid() {
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
        current !== null && current < TEAM_FEATURED_GALLERY.length - 1 ? current + 1 : current,
      ),
    [],
  );

  return (
    <>
      <div className="-mx-1 mt-4 overflow-hidden sm:-mx-3 sm:mt-5 lg:-mx-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[14px]">
          {TEAM_FEATURED_GALLERY.map((src, index) => (
            <div
              key={src}
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
              className={slideFrameClass}
            >
              <Image
                src={src}
                alt={`${t("about.teamGalleryAlt")} ${index + 1}`}
                fill
                unoptimized
                priority
                sizes={IMAGE_SIZES.teamFeaturedGrid}
                className="pointer-events-none object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null ? (
        <TeamGalleryLightbox
          images={TEAM_FEATURED_GALLERY}
          index={activeIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
          unoptimized
        />
      ) : null}
    </>
  );
}
