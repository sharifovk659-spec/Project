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
  handshake: "/images/about/handshake.jpg",
  portraitCreative: "/images/about/portrait-creative.jpg",
  team: [
    "/images/about/team-1.jpg",
    "/images/about/team-2.jpg",
    "/images/about/team-3.jpg",
    "/images/about/team-4.jpg",
    "/images/about/team-5.jpg",
  ],
} as const;

/** Sync order: 8906, 8904, 8910 first, then remaining photos from `3 галеря`. */
export const TEAM_GALLERY_IMAGES = Array.from(
  { length: 22 },
  (_, i) => `/images/about/team-gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
) as const;

export const TEAM_GALLERY_PRIORITY = [
  "5325537861547268906.jpg",
  "5325537861547268904.jpg",
  "5325537861547268910.jpg",
] as const;
