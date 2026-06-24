"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { ABOUT_IMAGES, ABOUT_STATS, ABOUT_VALUES } from "@/lib/data/about";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

function AboutImage({
  src,
  alt,
  overlay,
  className,
  aspectClass = "aspect-[4/3]",
  priority = false,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  overlay?: string;
  className?: string;
  aspectClass?: string;
  priority?: boolean;
  objectPosition?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-gold/15 bg-dark",
        aspectClass,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 480px"
        quality={92}
        className="object-cover"
        style={{ objectPosition }}
      />
      {overlay ? (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent px-3 py-3 sm:px-4 sm:py-4">
          <p className="text-[9px] leading-snug font-semibold tracking-[0.14em] text-gold uppercase sm:text-[10px] sm:tracking-[0.18em]">
            {overlay}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default function AboutSection() {
  return (
    <Section id="about" className="relative overflow-hidden border-t border-gold/10 py-12 sm:py-16">
      <Container>
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-4 lg:gap-y-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-3 lg:row-start-1"
          >
            <motion.p custom={0} variants={fadeUp} className="mb-3 text-xs tracking-[0.35em] text-gold uppercase">
              О нас
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-display text-2xl leading-tight font-medium tracking-wide uppercase sm:text-3xl lg:text-[2rem] lg:leading-[1.15]"
            >
              <span className="text-gradient-gold">
                Мы создаём
                <br />
                ваши истории
              </span>
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-4 text-sm leading-relaxed text-beige-muted sm:text-[15px]"
            >
              Eterna Production — это команда профессионалов, объединённых страстью к визуальному
              искусству и стремлением создавать качественный контент, который вдохновляет и продаёт.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="min-w-0 lg:col-span-6 lg:row-start-1"
          >
            <AboutImage
              src={ABOUT_IMAGES.teamGroup}
              alt="Команда Eterna Production"
              aspectClass="aspect-[3/2] sm:aspect-[16/10]"
              className="h-full w-full"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="min-w-0 lg:col-span-3 lg:row-start-1"
          >
            <AboutImage
              src={ABOUT_IMAGES.portraitCreative}
              alt="Креативный подход к каждому проекту"
              overlay="Креативный подход к каждому проекту"
              aspectClass="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] lg:min-h-full"
              objectPosition="center top"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-lg border border-gold/15 bg-white/[0.03] p-4 sm:p-5 lg:col-span-3 lg:row-start-2"
          >
            <ul className="space-y-4 sm:space-y-5">
              {ABOUT_VALUES.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.li key={item.title} custom={i} variants={fadeUp} className="flex gap-3 sm:gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/25 bg-gold/10 sm:h-10 sm:w-10">
                      <Icon className="text-base text-gold sm:text-lg" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold tracking-[0.14em] text-gold uppercase sm:text-xs">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-beige-muted sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="min-w-0 lg:col-span-6 lg:row-start-2"
          >
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {ABOUT_IMAGES.team.map((src, i) => (
                <AboutImage
                  key={src}
                  src={src}
                  alt={`Член команды ${i + 1}`}
                  aspectClass="aspect-[3/4]"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="min-w-0 lg:col-span-3 lg:row-start-2"
          >
            <AboutImage
              src={ABOUT_IMAGES.partnership}
              alt="Доверие и партнёрство"
              overlay="Доверие и партнёрство на долгие годы"
              aspectClass="aspect-[4/3] sm:aspect-[4/5] lg:aspect-square"
              objectPosition="center 25%"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-lg border border-gold/15 bg-dark/80 p-4 sm:p-6 lg:col-span-12 lg:row-start-3"
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {ABOUT_STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    custom={i}
                    variants={fadeUp}
                    className="flex min-w-0 items-center gap-3 sm:gap-4"
                  >
                    <Icon className="shrink-0 text-xl text-gold sm:text-2xl" />
                    <div className="min-w-0">
                      <p className="font-display text-xl font-medium text-gold sm:text-2xl">{stat.value}</p>
                      <p className="mt-0.5 text-[11px] leading-snug text-beige-muted sm:text-xs">{stat.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
