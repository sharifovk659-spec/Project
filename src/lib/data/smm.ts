import type { IconType } from "react-icons";
import {
  HiOutlineLightBulb,
  HiOutlineClipboardList,
  HiOutlineFilm,
  HiOutlineCursorClick,
  HiOutlineChartBar,
} from "react-icons/hi";

export interface SmmService {
  title: string;
  icon: IconType;
}

export const SMM_SERVICES: SmmService[] = [
  { title: "Стратегия", icon: HiOutlineLightBulb },
  { title: "Контент-план", icon: HiOutlineClipboardList },
  { title: "Reels & Shorts", icon: HiOutlineFilm },
  { title: "Таргет реклама", icon: HiOutlineCursorClick },
  { title: "Аналитика", icon: HiOutlineChartBar },
];
