"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
    onScroll();
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
      <Container as="div" className="flex h-16 items-center justify-between gap-3 sm:h-20 sm:gap-4">
        <Link href="/" className="inline-flex shrink-0 items-center">
          <Logo priority className="h-9 w-auto sm:h-11 lg:h-12" />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.15em] text-beige-muted uppercase transition-colors hover:text-gold xl:text-xs"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/#contact"
            className="hidden border border-gold/40 px-4 py-2 text-[10px] tracking-[0.15em] text-beige uppercase transition-colors hover:border-gold hover:bg-gold/10 hover:text-gold lg:inline-flex xl:px-5 xl:py-2.5 xl:text-xs"
          >
            Оставить заявку
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-2xl text-beige lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-background/98 backdrop-blur-xl sm:top-20 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6 px-5 py-10">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm tracking-[0.2em] text-beige uppercase"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/#contact"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="mt-2 border border-gold/50 px-8 py-3 text-xs tracking-[0.2em] text-gold uppercase"
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
