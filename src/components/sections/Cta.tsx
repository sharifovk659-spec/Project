"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";

export default function Cta() {
  return (
    <Section id="contact" className="py-16 sm:py-24">
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
              alt="Cinematic production studio"
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/75" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(200,155,92,0.15)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(200,155,92,0.1)_0%,transparent_45%)]" />
          </div>

          <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
            <motion.h2
              custom={0}
              variants={fadeUp}
              className="font-display text-3xl leading-tight font-light tracking-wide text-beige sm:text-4xl lg:text-5xl"
            >
              ГОТОВЫ К НОВОМУ
              <br />
              <span className="text-gradient-gold">ПРОЕКТУ?</span>
            </motion.h2>

            <motion.p
              custom={1}
              variants={fadeUp}
              className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-beige-muted sm:mt-6 sm:text-lg"
            >
              Оставьте заявку и мы свяжемся с вами в ближайшее время
            </motion.p>

            <motion.div custom={2} variants={fadeUp} className="mt-8 sm:mt-10">
              <Button href="#contact" className="px-10 py-4 text-xs sm:text-sm">
                Оставить заявку
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
