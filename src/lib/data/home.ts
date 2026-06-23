import type { IconType } from "react-icons";
import { HiOutlineClock, HiOutlineEye, HiOutlineBriefcase, HiOutlineUserGroup } from "react-icons/hi";

export interface StatItem {
  value: string;
  label: string;
  icon: IconType;
}

export const STATS: StatItem[] = [
  { value: "7+", label: "лет опыта", icon: HiOutlineClock },
  { value: "20M+", label: "просмотров в соцсетях", icon: HiOutlineEye },
  { value: "100+", label: "успешных проектов", icon: HiOutlineBriefcase },
  { value: "30+", label: "партнёров и брендов", icon: HiOutlineUserGroup },
];

export const PARTNERS = [
  { name: "Coca-Cola", slug: "coca-cola" },
  { name: "Somon Air", slug: "somon-air" },
  { name: "Hyatt Regency", slug: "hyatt-regency" },
  { name: "Royal", slug: "royal" },
  { name: "Kimchi", slug: "kimchi" },
  { name: "Amani", slug: "amani" },
  { name: "The Garden", slug: "the-garden" },
  { name: "Prime Technology", slug: "prime-technology" },
] as const;
