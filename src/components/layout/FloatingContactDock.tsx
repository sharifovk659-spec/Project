"use client";

import type { IconType } from "react-icons";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight, HiOutlinePhone } from "react-icons/hi2";
import { useLocale } from "@/components/providers/LocaleProvider";
import { FOOTER_CONTACTS, SOCIAL_LINKS } from "@/lib/data/footer";

interface DockLink {
  href: string;
  labelKey: "whatsapp" | "phone" | "message";
  icon: IconType;
  accent: "gold" | "beige";
  external?: boolean;
}

const whatsappLink = SOCIAL_LINKS.find((link) => link.icon === "whatsapp");
const phoneHref = `tel:${FOOTER_CONTACTS.phone.replace(/\s/g, "")}`;

const DOCK_LINKS: DockLink[] = [
  {
    href: whatsappLink?.href ?? "https://wa.me/992119010000",
    labelKey: "whatsapp",
    icon: FaWhatsapp,
    accent: "gold",
    external: true,
  },
  {
    href: phoneHref,
    labelKey: "phone",
    icon: HiOutlinePhone,
    accent: "gold",
  },
  {
    href: "/#contact",
    labelKey: "message",
    icon: HiOutlineChatBubbleLeftRight,
    accent: "beige",
  },
];

function FloatingActionButton({
  href,
  label,
  icon: Icon,
  accent,
  external,
  delay,
}: {
  href: string;
  label: string;
  icon: IconType;
  accent: DockLink["accent"];
  external?: boolean;
  delay: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className={`floating-fab floating-fab--${accent}`}
      style={{ ["--fab-delay" as string]: delay }}
    >
      <span className="floating-fab__ring" aria-hidden />
      <span className="floating-fab__panel">
        <span className="floating-fab__shimmer" aria-hidden />
        <Icon className="floating-fab__icon" aria-hidden />
      </span>
    </a>
  );
}

export default function FloatingContactDock() {
  const { t } = useLocale();
  const delays = ["0s", "-0.95s", "-1.9s"];

  return (
    <div className="floating-contact-dock" aria-label={t("floatingContact.groupLabel")}>
      {DOCK_LINKS.map((link, index) => (
        <FloatingActionButton
          key={link.labelKey}
          href={link.href}
          label={t(`floatingContact.${link.labelKey}`)}
          icon={link.icon}
          accent={link.accent}
          external={link.external}
          delay={delays[index] ?? "0s"}
        />
      ))}
    </div>
  );
}
