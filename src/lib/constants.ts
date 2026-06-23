const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://eterna.inovaauto.com"
).replace(/\/$/, "");

export const SITE = {
  name: "ETERNA",
  tagline: "PRODUCTION",
  title: "ETERNA PRODUCTION — SMM · Production · Academy",
  description:
    "Продакшн и digital-команда полного цикла в Душанбе. SMM, видеопродакшн и академия креатива.",
  url: siteUrl,
  locale: "ru_RU",
} as const;

export const NAV_LINKS = [
  { label: "О нас", href: "#about" },
  { label: "SMM", href: "#smm" },
  { label: "Production", href: "#production" },
  { label: "Академия", href: "#academy" },
  { label: "Контакты", href: "#contact" },
] as const;

export const COLORS = {
  black: "#060504",
  dark: "#0D0B08",
  gold: "#C89B5C",
  beige: "#E7C99A",
  muted: "#8B7A66",
} as const;
