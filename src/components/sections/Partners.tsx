"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { PARTNERS } from "@/lib/data/partners";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

function PartnerLogo({
  name,
  file,
  scale = 1,
  maxWidth,
}: {
  name: string;
  file: string;
  scale?: number;
  maxWidth?: number;
}) {
  return (
    <div className="flex h-14 items-center px-2 sm:h-16 sm:px-3 lg:h-[72px]">
      <Image
        src={`/images/partners/${file}`}
        alt={name}
        width={280}
        height={72}
        loading="lazy"
        style={{
          height: `calc(var(--partner-logo-h) * ${scale})`,
          width: "auto",
          maxWidth: maxWidth ? `${maxWidth}px` : undefined,
        }}
        className={cn(
          "w-auto object-contain opacity-85 transition-opacity duration-300 hover:opacity-100",
          !maxWidth && "max-w-[120px] sm:max-w-[140px] lg:max-w-[150px]",
          "[--partner-logo-h:56px] sm:[--partner-logo-h:64px] lg:[--partner-logo-h:72px]"
        )}
      />
    </div>
  );
}

export default function Partners() {
  const marqueeItems = [...PARTNERS, ...PARTNERS];

  return (
    <Section className="border-b border-gold/10 py-8 sm:py-10">
      <Container>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-5 text-center text-xs tracking-[0.35em] text-beige-muted uppercase sm:mb-6"
        >
          Нам доверяют
        </motion.p>

        <div className="partners-marquee overflow-hidden">
          <div className="partners-marquee-track flex w-max items-center gap-8 sm:gap-10">
            {marqueeItems.map((partner, i) => (
              <div key={`${partner.file}-${i}`} className="flex shrink-0 items-center justify-center">
                <PartnerLogo
                  name={partner.name}
                  file={partner.file}
                  scale={partner.scale}
                  maxWidth={partner.maxWidth}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
