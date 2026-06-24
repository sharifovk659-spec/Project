"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlinePlay } from "react-icons/hi";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ShowreelSlider from "@/components/ui/ShowreelSlider";
import YouTubeModal from "@/components/ui/YouTubeModal";
import { PRODUCTION_ITEMS } from "@/lib/data/production";
import { fadeUp } from "@/lib/animations";
import { getVideoEmbedUrl } from "@/lib/youtube";

export default function ProductionSection() {
  const [activeVideo, setActiveVideo] = useState<{ embedUrl: string; title: string } | null>(null);

  const openVideo = (title: string, videoUrl: string) => {
    const embedUrl = getVideoEmbedUrl(videoUrl, true);
    if (embedUrl) setActiveVideo({ embedUrl, title });
  };
  return (
    <Section id="production" className="relative overflow-hidden py-14 sm:py-16">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.18fr] lg:gap-10">
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
              className="relative mt-5 max-w-md text-base leading-relaxed text-beige-muted"
            >
              Снимаем видео, которые передают атмосферу, усиливают бренд и вызывают эмоции.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="relative mt-6">
              <Button href="#showreel">Смотреть портфолио</Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full"
          >
            <div className="relative aspect-[1024/494] w-full overflow-hidden rounded-2xl border border-gold/20 bg-dark">
              <Image
                src="/images/production/production-grid.png"
                alt="Promo Video, Food Video, Commercial, Event, Drone, Podcast"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={92}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1.5 p-1.5 sm:gap-2 sm:p-2">
                {PRODUCTION_ITEMS.map((item) => (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => openVideo(item.title, item.videoUrl)}
                    aria-label={`${item.title} — смотреть видео`}
                    className="group relative cursor-pointer rounded-lg border-0 bg-transparent p-0 transition-colors hover:bg-black/20"
                  >
                    <span className="sr-only">{item.title}</span>
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-black/50 text-gold backdrop-blur-sm">
                        <HiOutlinePlay className="ml-0.5 text-xl" />
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          id="showreel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="mt-10 sm:mt-12"
        >
          <ShowreelSlider />
        </motion.div>
      </Container>

      <YouTubeModal
        embedUrl={activeVideo?.embedUrl ?? null}
        title={activeVideo?.title ?? ""}
        onClose={() => setActiveVideo(null)}
      />
    </Section>
  );
}
