"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import PlayButton from "@/components/ui/PlayButton";
import { PRODUCTION_ITEMS } from "@/lib/data/production";
import { fadeUp } from "@/lib/animations";

export default function ProductionSection() {
  return (
    <Section id="production" className="relative overflow-hidden py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative lg:sticky lg:top-28"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-8 -left-4 font-display text-[8rem] leading-none font-light text-white/[0.03] select-none sm:-left-8 sm:text-[10rem] lg:text-[12rem]"
            >
              02
            </span>

            <motion.p custom={0} variants={fadeUp} className="relative mb-4 text-xs tracking-[0.4em] text-gold uppercase">
              Production
            </motion.p>

            <motion.h2
              custom={1}
              variants={fadeUp}
              className="relative font-display text-3xl leading-tight font-light tracking-wide text-beige sm:text-4xl lg:text-5xl"
            >
              СОЗДАЁМ
              <br />
              КОНТЕНТ, КОТОРЫЙ
              <br />
              <span className="text-gradient-gold">ВПЕЧАТЛЯЕТ</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="relative mt-6 max-w-md text-base leading-relaxed text-beige-muted"
            >
              Снимаем видео, которые передают атмосферу, усиливают бренд и вызывают эмоции.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="relative mt-8">
              <Button href="#showreel">Смотреть портфолио</Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
          >
            {PRODUCTION_ITEMS.map((item, i) => (
              <motion.article
                key={item.slug}
                custom={i}
                variants={fadeUp}
                className="card-hover group relative aspect-[4/5] overflow-hidden rounded-xl border border-gold/10 sm:aspect-[3/4]"
              >
                <Image
                  src={`/images/production/${item.slug}.svg`}
                  alt={item.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-background/10" />
                <p className="absolute right-0 bottom-0 left-0 p-3 text-xs tracking-wide text-beige sm:p-4 sm:text-sm">
                  {item.title}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          id="showreel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="group relative mt-16 overflow-hidden rounded-2xl border border-gold/20 sm:mt-20"
        >
          <div className="relative aspect-[21/9] min-h-[200px] sm:min-h-[280px]">
            <Image
              src="/images/production/showreel-bg.svg"
              alt="Production showreel background"
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <PlayButton size="lg" label="Смотреть Showreel" />
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
