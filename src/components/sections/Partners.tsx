"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { useLocale } from "@/components/providers/LocaleProvider";
import { PARTNERS } from "@/lib/data/partners";
import { fadeUp } from "@/lib/animations";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/image";

function PartnerLogo({ name, file }: { name: string; file: string }) {
  return (
    <div className="flex shrink-0 items-center justify-center px-1 sm:px-1.5">
      <Image
        src={`/images/partners/${file}`}
        alt={name}
        width={512}
        height={640}
        loading="lazy"
        quality={IMAGE_QUALITY}
        sizes={IMAGE_SIZES.partner}
        className="h-[92px] w-auto rounded-md object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 sm:h-[104px] lg:h-[112px]"
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
          className="mb-7 text-center text-sm font-bold tracking-[0.28em] text-beige/85 uppercase sm:mb-8 sm:text-base lg:text-lg"
        >
          {t("partners.heading")}
        </motion.p>

        <div className="partners-marquee overflow-hidden">
          <div className="partners-marquee-track flex w-max items-center gap-6 sm:gap-8">
            {marqueeItems.map((partner, i) => (
              <PartnerLogo key={`${partner.file}-${i}`} name={partner.name} file={partner.file} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
