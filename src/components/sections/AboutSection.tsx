"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useLocale } from "@/components/providers/LocaleProvider";
import { ABOUT_IMAGES, ABOUT_STATS, ABOUT_VALUES } from "@/lib/data/about";
import { fadeUp } from "@/lib/animations";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/image";
import { cn } from "@/lib/utils";

const TEAM_GALLERY_SOURCES = [
  { src: ABOUT_IMAGES.team[4], overlay: true },
  { src: ABOUT_IMAGES.team[0] },
  { src: ABOUT_IMAGES.team[1] },
  { src: ABOUT_IMAGES.team[2] },
  { src: ABOUT_IMAGES.team[3] },
  { src: ABOUT_IMAGES.portraitCreative },
] as const;

function AboutImage({
  src,
  alt,
  overlay,
  className,
  aspectClass = "aspect-[4/3]",
  priority = false,
  objectPosition = "center",
  objectFit = "cover",
  imageSizes = IMAGE_SIZES.teamPortrait,
}: {
  src: string;
  alt: string;
  overlay?: string;
  className?: string;
  aspectClass?: string;
  priority?: boolean;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  imageSizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-gold/15 bg-dark",
        aspectClass,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes={imageSizes}
        quality={IMAGE_QUALITY}
        className={objectFit === "contain" ? "object-contain" : "object-cover"}
        style={{ objectPosition }}
      />
      {overlay ? (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent px-4 py-4 sm:px-4 sm:py-4">
          <p className="whitespace-pre-line text-[10px] leading-snug font-semibold tracking-[0.14em] text-gold uppercase sm:text-[9px] sm:tracking-[0.16em]">
            {overlay}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default function AboutSection() {
  const { t } = useLocale();
  const [mobileSlider, setMobileSlider] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const update = () => setMobileSlider(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <Section id="about" className="relative overflow-hidden border-t border-gold/10 py-12 sm:py-16">
      <Container>
        {/* Row 1: text + group photo */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p custom={0} variants={fadeUp} className="mb-3 text-xs tracking-[0.35em] text-gold uppercase">
              {t("about.eyebrow")}
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-display text-2xl leading-tight font-medium tracking-wide uppercase sm:text-3xl lg:text-[2rem] lg:leading-[1.15]"
            >
              <span className="text-gradient-gold">
                {t("about.title1")}
                <br />
                {t("about.title2")}
              </span>
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-4 max-w-lg text-sm leading-relaxed text-beige-muted sm:text-[15px]"
            >
              {t("about.description")}
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="mt-6">
              <Button href="#contact" variant="outline" className="px-5 py-2.5 text-[11px] sm:text-xs">
                {t("about.cta")}
                <HiOutlineArrowRight className="text-base" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <AboutImage
              src={ABOUT_IMAGES.teamGroup}
              alt={t("about.teamGroupAlt")}
              aspectClass="aspect-[3/2] sm:aspect-[16/10]"
              className="w-full"
              priority
              imageSizes={IMAGE_SIZES.teamGroup}
            />
          </motion.div>
        </div>

        {/* Row 2: values — 3 columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-6 lg:mt-14 lg:gap-8"
        >
          {ABOUT_VALUES.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                custom={i}
                variants={fadeUp}
                className={cn(
                  "min-w-0",
                  i < ABOUT_VALUES.length - 1 && "sm:border-r sm:border-gold/15 sm:pr-6 lg:pr-8"
                )}
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 bg-gold/10 sm:h-11 sm:w-11">
                  <Icon className="text-lg text-gold sm:text-xl" />
                </span>
                <p className="text-[11px] font-semibold tracking-[0.14em] text-gold uppercase sm:text-xs">
                  {t(`about.values.${item.id}.title`)}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-beige-muted sm:text-sm">
                  {t(`about.values.${item.id}.description`)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Row 3: team header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 flex flex-wrap items-center justify-between gap-3 sm:mt-12 lg:mt-14"
        >
          <motion.p custom={0} variants={fadeUp} className="text-xs tracking-[0.35em] text-gold uppercase">
            {t("about.teamHeading")}
          </motion.p>
          <motion.a
            custom={1}
            variants={fadeUp}
            href="#showreel"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-gold uppercase transition-colors hover:text-beige sm:text-xs"
          >
            {t("about.portfolioLink")}
            <HiOutlineArrowRight className="text-base" />
          </motion.a>
        </motion.div>

        {/* Row 4: team portraits — 1 per slide on mobile, 6 in a row on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="team-gallery-swiper mt-4 overflow-hidden lg:mt-5"
        >
          <Swiper
            key={mobileSlider ? "team-mobile" : "team-desktop"}
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={12}
            loop={mobileSlider}
            autoplay={
              mobileSlider
                ? { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }
                : false
            }
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 12 },
              1024: { slidesPerView: 6, spaceBetween: 12 },
            }}
            className="pb-8 sm:pb-9"
          >
            {TEAM_GALLERY_SOURCES.map((member, index) => (
              <SwiperSlide key={member.src}>
                <AboutImage
                  src={member.src}
                  alt={t("about.memberAlt")}
                  overlay={"overlay" in member && member.overlay ? t("about.overlay") : undefined}
                  aspectClass="aspect-[3/4]"
                  objectPosition="center top"
                  priority={index < 2}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Handshake — bottom of Our Team, not in gallery carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex justify-start sm:mt-10"
        >
          <AboutImage
            src={ABOUT_IMAGES.handshake}
            alt={t("about.handshakeAlt")}
            overlay={t("about.handshakeOverlay")}
            aspectClass="aspect-[3/4]"
            objectPosition="center"
            imageSizes="(max-width: 640px) 160px, 220px"
            className="w-full max-w-[160px] sm:max-w-[190px] lg:max-w-[220px]"
          />
        </motion.div>

        {/* Row 5: stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 rounded-lg border border-gold/15 bg-dark/80 p-5 sm:mt-12 sm:p-6 lg:mt-14"
        >
          <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 sm:gap-6">
            {ABOUT_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.labelKey}
                  custom={i}
                  variants={fadeUp}
                  className="flex min-w-0 items-start gap-2.5 sm:items-center sm:gap-4"
                >
                  <Icon className="mt-0.5 shrink-0 text-lg text-gold sm:mt-0 sm:text-2xl" />
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-xl font-medium leading-none text-gold sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-pretty text-beige-muted sm:mt-0.5 sm:text-xs">
                      {t(stat.labelKey)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
