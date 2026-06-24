import type { IconType } from "react-icons";
import { HiOutlineClock, HiOutlineEye, HiOutlineBriefcase, HiOutlineUserGroup } from "react-icons/hi";

export interface StatItem {
  value: string;
  labelKey: string;
  icon: IconType;
}

export const STATS: StatItem[] = [
  { value: "7+", labelKey: "stats.experience", icon: HiOutlineClock },
  { value: "20M+", labelKey: "stats.views", icon: HiOutlineEye },
  { value: "100+", labelKey: "stats.projects", icon: HiOutlineBriefcase },
  { value: "30+", labelKey: "stats.partners", icon: HiOutlineUserGroup },
];

export { PARTNERS } from "./partners";
export type { Partner } from "./partners";
