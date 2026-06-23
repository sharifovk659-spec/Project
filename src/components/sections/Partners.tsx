"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { PARTNERS } from "@/lib/data/home";
import { fadeUp } from "@/lib/animations";

function PartnerLogo({ name, slug }: { name: string; slug: string }) {
  return (
    <Image
      src={`/images/partners/${slug}.svg`}
      alt={name}
      width={140}
      height={48}
      loading="lazy"
      className="h-8 w-auto max-w-[120px] shrink-0 object-contain opacity-70 transition-opacity hover:opacity-100 sm:h-9 sm:max-w-[140px]"
    />
  );
}

export default function Partners() {
  const marqueeItems = [...PARTNERS, ...PARTNERS];

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

        <div className="overflow-hidden lg:hidden">
          <div className="animate-marquee flex w-max items-center gap-10">
            {marqueeItems.map((partner, i) => (
              <div key={`${partner.slug}-${i}`} className="flex shrink-0 items-center justify-center px-2">
                <PartnerLogo name={partner.name} slug={partner.slug} />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden items-center justify-between gap-6 lg:flex xl:gap-8">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <PartnerLogo name={partner.name} slug={partner.slug} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
