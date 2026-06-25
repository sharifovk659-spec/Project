"use client";

import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useLocale } from "@/components/providers/LocaleProvider";
import { FOOTER_CONTACTS, SOCIAL_LINKS } from "@/lib/data/footer";
import { cn } from "@/lib/utils";

const iconWrap =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 sm:h-10 sm:w-10";

const rowClass =
  "flex min-w-0 items-center gap-3 text-xs text-beige-muted transition-colors hover:text-beige sm:text-sm";

type ContactInfoProps = {
  className?: string;
};

export default function ContactInfo({ className }: ContactInfoProps) {
  const { t } = useLocale();
  const telegram = SOCIAL_LINKS.find((link) => link.icon === "telegram");
  const whatsapp = SOCIAL_LINKS.find((link) => link.icon === "whatsapp");
  const instagram = SOCIAL_LINKS.find((link) => link.icon === "instagram");

  return (
    <div className={cn("space-y-3.5 sm:space-y-4", className)}>
      <a href={`tel:${FOOTER_CONTACTS.phone.replace(/\s/g, "")}`} className={rowClass}>
        <span className={iconWrap}>
          <HiOutlinePhone className="text-base text-gold sm:text-lg" />
        </span>
        <span className="break-words sm:whitespace-nowrap">{FOOTER_CONTACTS.phone}</span>
      </a>
      {telegram ? (
        <a href={telegram.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
          <span className={iconWrap}>
            <FaTelegram className="text-base text-gold sm:text-lg" />
          </span>
          <span className="break-all">@PLANOVNET</span>
        </a>
      ) : null}
      {whatsapp ? (
        <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
          <span className={iconWrap}>
            <FaWhatsapp className="text-base text-gold sm:text-lg" />
          </span>
          <span className="break-words sm:whitespace-nowrap">{FOOTER_CONTACTS.phone}</span>
        </a>
      ) : null}
      {instagram ? (
        <a href={instagram.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
          <span className={iconWrap}>
            <FaInstagram className="text-base text-gold sm:text-lg" />
          </span>
          <span className="break-all">@planovnet</span>
        </a>
      ) : null}
      <a href={`mailto:${FOOTER_CONTACTS.email}`} className={rowClass}>
        <span className={iconWrap}>
          <HiOutlineMail className="text-base text-gold sm:text-lg" />
        </span>
        <span className="break-all">{FOOTER_CONTACTS.email}</span>
      </a>
      <p className={cn(rowClass, "hover:text-beige-muted")}>
        <span className={iconWrap}>
          <HiOutlineLocationMarker className="text-base text-gold sm:text-lg" />
        </span>
        {t(FOOTER_CONTACTS.addressKey)}
      </p>
    </div>
  );
}
