"use client";

import { motion } from "framer-motion";
import type { SectionProps } from "@/types";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

interface AnimatedSectionProps extends SectionProps {
  animate?: boolean;
}

export default function AnimatedSection({
  id,
  className,
  children,
  animate = true,
}: AnimatedSectionProps) {
  if (!animate) {
    return (
      <section id={id} className={cn("relative w-full", className)}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={cn("relative w-full", className)}
    >
      {children}
    </motion.section>
  );
}
