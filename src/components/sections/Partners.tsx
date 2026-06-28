"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { useLocale } from "@/components/providers/LocaleProvider";
import { PARTNERS } from "@/lib/data/partners";
import { fadeUp } from "@/lib/animations";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/image";

function PartnerLogo({ name, file }: { name: string; file: string }) {
  return (
    <div className="flex h-[117px] items-center justify-center sm:h-[129px] lg:h-[137px]">
      <Image
        src={`/images/partners/${file}`}
        alt={name}
        width={512}
        height={640}
        loading="lazy"
        quality={IMAGE_QUALITY}
        sizes={IMAGE_SIZES.partner}
        className="h-full w-auto max-w-full rounded-md object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
      />
    </div>
  );
}

export default function Partners() {
  const { t } = useLocale();

  return (
    <Section className="border-b border-gold/10 py-10 sm:py-12">
      <Container>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-7 text-center text-sm font-bold tracking-[0.28em] text-beige/85 uppercase sm:mb-8 sm:text-base lg:text-lg"
        >
          {t("partners.heading")}
        </motion.p>

        <div className="partners-marquee overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={12}
            loop
            grabCursor
            simulateTouch
            allowTouchMove
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: false }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 14 },
              1024: { slidesPerView: 5, spaceBetween: 16 },
            }}
            className="partners-swiper"
          >
            {PARTNERS.map((partner) => (
              <SwiperSlide key={partner.file}>
                <PartnerLogo name={partner.name} file={partner.file} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Section>
  );
}
