"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { useLocale } from "@/components/providers/LocaleProvider";
import { PARTNERS } from "@/lib/data/partners";
import { fadeUp } from "@/lib/animations";

function PartnerLogo({ name, file, priority }: { name: string; file: string; priority?: boolean }) {
  return (
    <div className="flex h-[122px] items-center justify-center sm:h-[146px] lg:h-[170px]">
      <Image
        src={`/images/partners/${file}`}
        alt={name}
        width={512}
        height={640}
        unoptimized
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="h-full w-auto max-w-none rounded-md object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
      />
    </div>
  );
}

export default function Partners() {
  const { t } = useLocale();
  const marqueeItems = [...PARTNERS, ...PARTNERS];

  return (
    <Section className="border-b border-gold/10 py-10 sm:py-12">
      <Container>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-6 text-center text-sm font-bold tracking-[0.28em] text-beige/85 uppercase sm:mb-7 sm:text-base lg:text-lg"
        >
          {t("partners.heading")}
        </motion.p>

        <div className="-mx-4 overflow-hidden sm:-mx-8 lg:-mx-12">
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView="auto"
            spaceBetween={8}
            loop
            grabCursor
            simulateTouch
            allowTouchMove
            speed={11000}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            freeMode={{ enabled: true, momentum: false }}
            breakpoints={{
              640: { spaceBetween: 10 },
              1024: { spaceBetween: 12 },
            }}
            className="partners-swiper"
          >
            {marqueeItems.map((partner, index) => (
              <SwiperSlide key={`${partner.file}-${index}`} className="!w-auto">
                <PartnerLogo
                  name={partner.name}
                  file={partner.file}
                  priority={index < 6}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Section>
  );
}
