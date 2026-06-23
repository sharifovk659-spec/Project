import Image from "next/image";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import Container from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { FOOTER_SERVICES, FOOTER_CONTACTS, SOCIAL_LINKS } from "@/lib/data/footer";

const socialIcons = {
  instagram: FaInstagram,
  telegram: FaTelegram,
  youtube: FaYoutube,
} as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-dark">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <a href="#home" className="inline-flex flex-col leading-none">
              <span className="font-display text-2xl tracking-[0.2em] text-beige">{SITE.name}</span>
              <span className="mt-1 text-[10px] tracking-[0.4em] text-gold uppercase">
                {SITE.tagline}
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-beige-muted">
              Продакшн и digital-команда полного цикла в Душанбе
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 text-xs tracking-[0.25em] text-gold uppercase">Навигация</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-beige-muted transition-colors hover:text-beige"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 text-xs tracking-[0.25em] text-gold uppercase">Услуги</p>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-beige-muted transition-colors hover:text-beige"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 text-xs tracking-[0.25em] text-gold uppercase">Контакты</p>
            <ul className="space-y-2.5 text-sm text-beige-muted">
              <li>
                <a href={`tel:${FOOTER_CONTACTS.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-beige">
                  {FOOTER_CONTACTS.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${FOOTER_CONTACTS.email}`} className="transition-colors hover:text-beige">
                  {FOOTER_CONTACTS.email}
                </a>
              </li>
              <li>{FOOTER_CONTACTS.address}</li>
            </ul>
            <div className="mt-5 flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-lg text-beige-muted transition-colors hover:text-gold"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-xl border border-gold/20">
              <Image
                src="/images/footer-studio.svg"
                alt="ETERNA production studio"
                width={280}
                height={200}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="gold-line mt-12 mb-6" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-beige-muted sm:flex-row sm:text-left">
          <p className="tracking-wide">© ETERNA PRODUCTION, 2024</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#" className="transition-colors hover:text-beige">
              Политика конфиденциальности
            </a>
            <span className="hidden text-gold/30 sm:inline">|</span>
            <p>Разработка сайта — ETERNA</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
