import type { IconType } from "react-icons";
import {
  HiOutlineCalendar,
  HiOutlineFilm,
  HiOutlineLightBulb,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiOutlineVideoCamera,
} from "react-icons/hi";

export interface AboutValue {
  title: string;
  description: string;
  icon: IconType;
}

export interface AboutStat {
  value: string;
  label: string;
  icon: IconType;
}

export const ABOUT_VALUES: AboutValue[] = [
  {
    title: "Профессионализм",
    description: "Опытная команда и современное оборудование для достижения лучших результатов.",
    icon: HiOutlineFilm,
  },
  {
    title: "Креативность",
    description: "Креативные решения и индивидуальный подход к каждому проекту.",
    icon: HiOutlineLightBulb,
  },
  {
    title: "Надёжность",
    description: "Соблюдаем сроки и гарантируем высокое качество на всех этапах производства.",
    icon: HiOutlineUserGroup,
  },
];

export const ABOUT_STATS: AboutStat[] = [
  { value: "100+", label: "успешных проектов", icon: HiOutlineVideoCamera },
  { value: "20+", label: "профессионалов в команде", icon: HiOutlineUserGroup },
  { value: "5+", label: "лет опыта в индустрии", icon: HiOutlineCalendar },
  { value: "98%", label: "довольных клиентов", icon: HiOutlineStar },
];

/**
 * IMG/surati 1–7
 * 7 group | 4 creative | 1–3,6 team row | 5 partnership
 */
export const ABOUT_IMAGES = {
  teamGroup: "/images/about/team-group.png",
  portraitCreative: "/images/about/portrait-creative.jpg",
  team: [
    "/images/about/team-1.png",
    "/images/about/team-2.jpg",
    "/images/about/team-3.png",
    "/images/about/team-4.jpg",
  ],
  partnership: "/images/about/handshake.jpg",
} as const;
