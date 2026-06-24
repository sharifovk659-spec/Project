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
  id: "professionalism" | "creativity" | "reliability";
  icon: IconType;
}

export interface AboutStat {
  value: string;
  labelKey: string;
  icon: IconType;
}

export const ABOUT_VALUES: AboutValue[] = [
  { id: "professionalism", icon: HiOutlineFilm },
  { id: "creativity", icon: HiOutlineLightBulb },
  { id: "reliability", icon: HiOutlineUserGroup },
];

export const ABOUT_STATS: AboutStat[] = [
  { value: "100+", labelKey: "about.stats.projects", icon: HiOutlineVideoCamera },
  { value: "20+", labelKey: "about.stats.team", icon: HiOutlineUserGroup },
  { value: "5+", labelKey: "about.stats.experience", icon: HiOutlineCalendar },
  { value: "98%", labelKey: "about.stats.clients", icon: HiOutlineStar },
];

export const ABOUT_IMAGES = {
  teamGroup: "/images/about/team-group.png",
  portraitCreative: "/images/about/portrait-creative.jpg",
  team: [
    "/images/about/team-1.jpg",
    "/images/about/team-2.jpg",
    "/images/about/team-3.jpg",
    "/images/about/team-4.jpg",
    "/images/about/team-5.jpg",
  ],
} as const;
