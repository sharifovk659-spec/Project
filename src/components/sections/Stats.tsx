"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { STATS } from "@/lib/data/home";
import { fadeUp } from "@/lib/animations";

export default function Stats() {
  return (
    <Section className="relative -mt-16 z-20 pb-4">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                className="card-hover group rounded-xl border border-gold/20 bg-white/[0.04] p-5 backdrop-blur-md hover:bg-white/[0.06] sm:p-6"
              >
                <Icon className="mb-4 text-lg text-beige-muted transition-colors group-hover:text-gold" />
                <p className="font-display text-3xl font-medium text-gold sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-beige-muted sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
