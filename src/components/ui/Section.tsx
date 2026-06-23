import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { SectionProps } from "@/types";

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className, children }, ref) => (
    <section id={id} ref={ref} className={cn("relative w-full", className)}>
      {children}
    </section>
  )
);

Section.displayName = "Section";

export default Section;
