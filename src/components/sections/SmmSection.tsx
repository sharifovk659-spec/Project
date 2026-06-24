"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useLocale } from "@/components/providers/LocaleProvider";
import { SMM_SERVICES } from "@/lib/data/smm";
import { fadeUp } from "@/lib/animations";

export default function SmmSection() {
  const { t } = useLocale();

  return (
    <Section id="smm" className="relative overflow-hidden py-14 sm:py-16">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-8 -left-4 font-display text-[8rem] leading-none font-light text-white/[0.03] select-none sm:-left-8 sm:text-[10rem] lg:text-[12rem]"
            >
              01
            </span>

            <motion.p custom={0} variants={fadeUp} className="relative mb-4 text-xs tracking-[0.4em] text-gold uppercase">
              {t("smm.eyebrow")}
            </motion.p>

            <motion.h2
              custom={1}
              variants={fadeUp}
              className="relative font-display text-3xl leading-tight font-light tracking-wide text-beige sm:text-4xl lg:text-5xl"
            >
              {t("smm.title1")}
              <br />
              <span className="text-gradient-gold">{t("smm.title2")}</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="relative mt-5 max-w-lg text-base leading-relaxed text-beige-muted"
            >
              {t("smm.description")}
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="relative mt-6">
              <Button href="#contact" variant="outline">
                {t("smm.cta")}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[1024/587] w-full overflow-hidden rounded-2xl border border-gold/20 bg-dark">
              <Image
                src="/images/smm-dashboard.png"
                alt={t("smm.imageAlt")}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 560px"
                quality={90}
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
        >
          {SMM_SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.titleKey}
                custom={i}
                variants={fadeUp}
                className="card-hover group rounded-xl border border-gold/10 bg-dark p-5 sm:p-6"
              >
                <Icon className="mb-4 text-xl text-gold transition-transform duration-300 group-hover:scale-110 sm:text-2xl" />
                <p className="text-sm leading-snug text-beige sm:text-base">{t(service.titleKey)}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
