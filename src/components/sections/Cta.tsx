"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/sections/ContactForm";
import { useLocale } from "@/components/providers/LocaleProvider";
import { fadeUp } from "@/lib/animations";

export default function Cta() {
  const { t } = useLocale();

  return (
    <Section id="contact" className="py-12 sm:py-14">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative overflow-hidden rounded-2xl border border-gold/25 shadow-[0_0_60px_rgba(201,169,98,0.08)]"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/cta-studio.svg"
              alt={t("contact.imageAlt")}
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/85" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(200,155,92,0.12)_0%,transparent_50%)]" />
          </div>

          <div className="relative grid gap-8 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-2 lg:gap-10 lg:px-12 lg:py-14">
            <div>
              <motion.p
                custom={0}
                variants={fadeUp}
                className="mb-4 text-xs tracking-[0.35em] text-gold uppercase"
              >
                {t("contact.eyebrow")}
              </motion.p>

              <motion.h2
                custom={1}
                variants={fadeUp}
                className="font-display text-3xl leading-tight font-light tracking-wide text-beige sm:text-4xl"
              >
                {t("contact.title1")}
                <br />
                <span className="text-gradient-gold">{t("contact.title2")}</span>
              </motion.h2>

              <motion.p
                custom={2}
                variants={fadeUp}
                className="mt-4 max-w-md text-sm leading-relaxed text-beige-muted sm:text-base lg:max-w-lg"
              >
                {t("contact.description")}
              </motion.p>
            </div>

            <motion.div custom={3} variants={fadeUp}>
              <ContactForm />
            </motion.div>
          </div>

          <div className="gold-line opacity-60" />
        </motion.div>
      </Container>
    </Section>
  );
}
