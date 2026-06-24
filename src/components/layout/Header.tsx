"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-gold/10 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container as="div" className="flex h-20 items-center justify-between">
        <a href="#home" className="inline-flex shrink-0 items-center">
          <Logo priority className="h-16 w-auto sm:h-[4.5rem] lg:h-[4.75rem]" />
        </a>

        <nav className="hidden items-center gap-8 xl:gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.15em] text-beige-muted uppercase transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden border border-gold/40 px-5 py-2.5 text-xs tracking-[0.15em] text-beige uppercase transition-colors hover:border-gold hover:bg-gold/10 hover:text-gold lg:inline-flex"
        >
          Оставить заявку
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          className="text-2xl text-beige lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-20 z-40 bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col items-center gap-7 pt-14">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-base tracking-[0.2em] text-beige uppercase"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="mt-4 border border-gold/50 px-8 py-3 text-xs tracking-[0.2em] text-gold uppercase"
                onClick={() => setMenuOpen(false)}
              >
                Оставить заявку
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
