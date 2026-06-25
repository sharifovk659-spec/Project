"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useLocale } from "@/components/providers/LocaleProvider";
import { DIGITAL_SERVICES, DIGITAL_VALUES } from "@/lib/data/digital";
import { fadeUp } from "@/lib/animations";
import { IMAGE_QUALITY } from "@/lib/image";

export default function DigitalSolutionsBlock() {
  const { t } = useLocale();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="relative mt-12 overflow-hidden rounded-2xl border border-gold/15 sm:mt-14 lg:mt-16"
    >
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 opacity-30 sm:opacity-40">
        <Image
          src="/images/digital-solutions-bg.jpg"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          quality={IMAGE_QUALITY}
          className="object-cover object-right"
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-background/92 lg:bg-gradient-to-r lg:from-background lg:via-background/95 lg:to-background/80" />

      <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <motion.p
          custom={0}
          variants={fadeUp}
          className="mb-3 text-[10px] font-bold tracking-[0.35em] text-gold uppercase sm:text-xs sm:tracking-[0.4em]"
        >
          {t("about.digital.eyebrow")}
        </motion.p>

        <motion.h3
          custom={1}
          variants={fadeUp}
          className="max-w-3xl font-display text-2xl leading-tight font-bold tracking-wide uppercase sm:text-3xl lg:text-4xl"
        >
          <span className="text-gradient-gold">{t("about.digital.title1")}</span>
          <br />
          <span className="text-beige">{t("about.digital.title2")}</span>
        </motion.h3>

        <motion.p
          custom={2}
          variants={fadeUp}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-beige-muted sm:mt-5 sm:text-base"
        >
          {t("about.digital.description")}
        </motion.p>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {DIGITAL_SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.id}
                href="#contact"
                custom={i + 3}
                variants={fadeUp}
                className="card-hover group flex min-h-[168px] flex-col rounded-xl border border-gold/15 bg-dark/70 p-4 backdrop-blur-sm sm:min-h-[180px] sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 shrink-0 text-xl text-gold transition-transform duration-300 group-hover:scale-110 sm:text-2xl" />
                  <p className="text-sm font-bold leading-snug text-beige sm:text-base">{t(service.titleKey)}</p>
                </div>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-beige-muted sm:text-sm">
                  {t(service.descriptionKey)}
                </p>
                <HiOutlineArrowRight className="mt-3 ml-auto text-base text-gold transition-transform duration-300 group-hover:translate-x-1 sm:text-lg" />
              </motion.a>
            );
          })}
        </div>

        <motion.div custom={9} variants={fadeUp} className="mt-8 lg:mt-10">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8 xl:gap-x-12">
            {DIGITAL_VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.id} className="flex flex-col items-center px-1 text-center sm:px-2">
                  <Icon className="mb-2 text-2xl text-gold sm:mb-3 sm:text-3xl" />
                  <p className="text-[11px] font-bold leading-snug text-gold sm:text-xs">{t(value.titleKey)}</p>
                  <p className="mt-1 max-w-[9rem] text-[10px] leading-snug text-beige-muted sm:max-w-none sm:text-[11px]">
                    {t(value.descriptionKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
