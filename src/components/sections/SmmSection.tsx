"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineChartBar } from "react-icons/hi";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { SMM_SERVICES } from "@/lib/data/smm";
import { fadeUp } from "@/lib/animations";

export default function SmmSection() {
  return (
    <Section id="smm" className="relative overflow-hidden py-20 sm:py-28">
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
              01
            </span>

            <motion.p custom={0} variants={fadeUp} className="relative mb-4 text-xs tracking-[0.4em] text-gold uppercase">
              SMM
            </motion.p>

            <motion.h2
              custom={1}
              variants={fadeUp}
              className="relative font-display text-3xl leading-tight font-light tracking-wide text-beige sm:text-4xl lg:text-5xl"
            >
              SMM ПРОДВИЖЕНИЕ,
              <br />
              <span className="text-gradient-gold">КОТОРОЕ РАБОТАЕТ</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="relative mt-6 max-w-lg text-base leading-relaxed text-beige-muted"
            >
              Разрабатываем стратегии, создаём контент и запускаем рекламу, которая
              приносит охваты, заявки и продажи.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="relative mt-8">
              <Button href="#contact" variant="outline">
                Подробнее о SMM
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
            <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-dark">
              <Image
                src="/images/smm-dashboard.svg"
                alt="SMM analytics dashboard on smartphone"
                width={560}
                height={640}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-xl border border-gold/30 bg-background/90 px-4 py-3 backdrop-blur-md sm:left-6 sm:px-5 sm:py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/30 bg-gold/10">
                <HiOutlineChartBar className="text-lg text-gold" />
              </div>
              <p className="text-sm font-medium text-beige sm:text-base">
                Рост охватов <span className="text-gold">+300%</span>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
        >
          {SMM_SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={fadeUp}
                className="card-hover group rounded-xl border border-gold/10 bg-dark p-5 sm:p-6"
              >
                <Icon className="mb-4 text-xl text-gold transition-transform duration-300 group-hover:scale-110 sm:text-2xl" />
                <p className="text-sm leading-snug text-beige sm:text-base">{service.title}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
