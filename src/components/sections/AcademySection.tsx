"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { ACADEMY_CARDS } from "@/lib/data/academy";
import { fadeUp } from "@/lib/animations";

export default function AcademySection() {
  return (
    <Section id="academy" className="relative overflow-hidden py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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
              03
            </span>

            <motion.p custom={0} variants={fadeUp} className="relative mb-4 text-xs tracking-[0.4em] text-gold uppercase">
              Академия
            </motion.p>

            <motion.h2
              custom={1}
              variants={fadeUp}
              className="relative font-display text-3xl leading-tight font-light tracking-wide text-beige sm:text-4xl lg:text-5xl"
            >
              ОБУЧАЕМ
              <br />
              И РАСКРЫВАЕМ
              <br />
              <span className="text-gradient-gold">ПОТЕНЦИАЛ</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="relative mt-6 max-w-lg text-base leading-relaxed text-beige-muted"
            >
              Практические курсы по SMM, съёмке, монтажу и продвижению от профессионалов.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="relative mt-8">
              <Button href="#contact" variant="outline">
                Узнать больше
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-4 sm:gap-5"
          >
            {ACADEMY_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  custom={i}
                  variants={fadeUp}
                  className="card-hover group rounded-2xl border border-gold/10 bg-dark p-6 hover:shadow-[0_0_40px_rgba(200,155,92,0.12)] sm:p-8"
                >
                  <Icon className="mb-5 text-4xl text-gold transition-transform duration-300 group-hover:scale-110 sm:text-5xl" />
                  <h3 className="font-display text-xl text-beige sm:text-2xl">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-beige-muted sm:text-base">
                    {card.description}
                  </p>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
