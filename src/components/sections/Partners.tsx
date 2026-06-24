"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { PARTNERS } from "@/lib/data/partners";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

function PartnerLogo({ name, file, scale = 1 }: { name: string; file: string; scale?: number }) {
  return (
    <div className="flex h-[70px] items-center px-3 sm:h-[78px] sm:px-4 lg:h-[94px]">
      <Image
        src={`/images/partners/${file}`}
        alt={name}
        width={400}
        height={94}
        loading="lazy"
        style={{ height: `calc(var(--partner-logo-h) * ${scale})`, width: "auto" }}
        className={cn(
          "w-auto max-w-none object-contain opacity-85 transition-opacity duration-300 hover:opacity-100",
          "[--partner-logo-h:70px] sm:[--partner-logo-h:78px] lg:[--partner-logo-h:94px]"
        )}
      />
    </div>
  );
}

export default function Partners() {
  return (
    <Section className="border-b border-gold/10 py-14 sm:py-16">
      <Container>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10 text-center text-xs tracking-[0.35em] text-beige-muted uppercase sm:mb-12"
        >
          Нам доверяют
        </motion.p>

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={40}
          loop
          freeMode={{ momentum: false }}
          speed={5000}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          className="partners-swiper"
        >
          {PARTNERS.map((partner) => (
            <SwiperSlide key={partner.file} className="!w-auto">
              <PartnerLogo name={partner.name} file={partner.file} scale={partner.scale} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
}
