import type { IconType } from "react-icons";
import {
  HiOutlineLightBulb,
  HiOutlineClipboardList,
  HiOutlineFilm,
  HiOutlineCursorClick,
  HiOutlineChartBar,
} from "react-icons/hi";

export interface SmmService {
  titleKey: string;
  icon: IconType;
}

export const SMM_SERVICES: SmmService[] = [
  { titleKey: "smm.services.strategy", icon: HiOutlineLightBulb },
  { titleKey: "smm.services.contentPlan", icon: HiOutlineClipboardList },
  { titleKey: "smm.services.reels", icon: HiOutlineFilm },
  { titleKey: "smm.services.target", icon: HiOutlineCursorClick },
  { titleKey: "smm.services.analytics", icon: HiOutlineChartBar },
];
