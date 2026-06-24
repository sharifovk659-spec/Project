"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PlayButton from "@/components/ui/PlayButton";
import Section from "@/components/ui/Section";
import { useLocale } from "@/components/providers/LocaleProvider";
import { gsap } from "@/lib/gsap";
import { fadeUp } from "@/lib/animations";

export default function Hero() {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const scrollToShowreel = () => {
    document.getElementById("showreel")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="home" ref={sectionRef} className="relative min-h-screen overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 z-0 scale-110">
        <Image
          src="/images/hero-bg.png"
          alt={t("hero.imageAlt")}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={92}
        />
        <div className="cinematic-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(200,155,92,0.14)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/35 to-background/15" />
      </div>

      <Container className="relative z-10 flex min-h-[100dvh] items-center pt-20 pb-14 sm:min-h-screen sm:pt-24 sm:pb-16">
        <div className="flex w-full min-w-0 items-center justify-between gap-4 sm:gap-8">
          <div className="min-w-0 max-w-3xl">
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-5 text-xs tracking-[0.35em] text-gold uppercase sm:text-sm"
            >
              {t("hero.eyebrow")}
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-display text-[clamp(2.5rem,11vw,7.5rem)] leading-[0.95] font-light tracking-[0.06em] text-beige sm:tracking-[0.08em]"
            >
              {t("hero.title1")}
              <br />
              <span className="text-gradient-gold">{t("hero.title2")}</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-beige-muted sm:mt-8 sm:text-lg"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-4 sm:mt-10"
            >
              <Button href="#production">{t("hero.ctaCases")}</Button>
              <Button href="#contact" variant="outline">
                {t("nav.cta")}
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="hidden lg:block"
          >
            <PlayButton
              size="lg"
              label={t("hero.playLabel")}
              onClick={scrollToShowreel}
              animated
              className="translate-y-0.5"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="absolute right-4 bottom-20 sm:right-5 sm:bottom-24 lg:hidden"
        >
          <PlayButton
            size="sm"
            label={t("hero.playLabel")}
            onClick={scrollToShowreel}
            animated
            className="translate-y-0.5"
          />
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] text-beige-muted uppercase">{t("hero.scroll")}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-10 w-px bg-gradient-to-b from-gold to-transparent"
          />
        </div>
      </motion.div>
    </Section>
  );
}
