"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ContactInfo from "@/components/ui/ContactInfo";
import Logo from "@/components/ui/Logo";
import { useLocale } from "@/components/providers/LocaleProvider";
import { NAV_LINKS } from "@/lib/constants";
import { FOOTER_SERVICES } from "@/lib/data/footer";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/image";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="relative border-t border-gold/10 bg-dark">
      <Container className="py-5 sm:py-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:gap-y-0">
          <div className="col-span-2 min-w-0 lg:col-span-3">
            <Link href="/" className="inline-flex items-center">
              <Logo className="h-8 sm:h-11" />
            </Link>
            <p className="mt-2 hidden max-w-xs text-xs leading-relaxed text-beige-muted sm:mt-3 sm:block sm:text-sm">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="min-w-0 lg:col-span-2">
            <p className="mb-2 text-[10px] tracking-[0.2em] text-gold uppercase sm:mb-3 sm:text-xs sm:tracking-[0.25em]">
              {t("footer.navigation")}
            </p>
            <ul className="space-y-1.5 sm:space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-beige-muted transition-colors hover:text-beige sm:text-sm"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-2">
            <p className="mb-2 text-[10px] tracking-[0.2em] text-gold uppercase sm:mb-3 sm:text-xs sm:tracking-[0.25em]">
              {t("footer.services")}
            </p>
            <ul className="space-y-1.5 sm:space-y-2">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.labelKey}>
                  <a
                    href={item.href}
                    className="block text-xs leading-snug text-beige-muted transition-colors hover:text-beige sm:text-sm"
                  >
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 min-w-0 lg:col-span-3">
            <p className="mb-3 text-[10px] tracking-[0.2em] text-gold uppercase sm:mb-4 sm:text-xs sm:tracking-[0.25em]">
              {t("footer.contacts")}
            </p>
            <ContactInfo className="space-y-4" />
          </div>

          <div className="hidden min-w-0 lg:col-span-2 lg:block">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg border border-gold/20">
              <Image
                src="/images/footer-studio.png"
                alt={t("footer.imageAlt")}
                fill
                loading="lazy"
                sizes={IMAGE_SIZES.footer}
                quality={IMAGE_QUALITY}
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="gold-line mt-5 mb-3 sm:mt-6 sm:mb-4" />

        <div className="flex flex-col items-center justify-between gap-2 text-center text-[10px] text-beige-muted lg:flex-row lg:gap-4 lg:text-left lg:text-xs">
          <p className="tracking-wide">{t("footer.copyright")}</p>
          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-end lg:gap-5">
            <Link href="/privacy" className="transition-colors hover:text-beige">
              {t("footer.privacy")}
            </Link>
            <span className="hidden text-gold/30 lg:inline">|</span>
            <a
              href="https://yadgarov.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-beige"
            >
              {t("footer.credits")}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
