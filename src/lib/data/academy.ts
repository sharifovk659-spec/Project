import type { IconType } from "react-icons";
import { HiOutlineBookOpen, HiOutlineClipboardList, HiOutlineDocumentText } from "react-icons/hi";

export interface AcademyCard {
  title: string;
  description: string;
  icon: IconType;
  href: string;
}

export const ACADEMY_CARDS: AcademyCard[] = [
  {
    title: "Бесплатное обучение",
    description: "Мини-курсы и уроки для старта в профессии",
    icon: HiOutlineBookOpen,
    href: "#contact",
  },
  {
    title: "Программа",
    description: "Пошаговая система обучения с практикой",
    icon: HiOutlineClipboardList,
    href: "#contact",
  },
  {
    title: "Анкета",
    description: "Заполни анкету и стань частью команды",
    icon: HiOutlineDocumentText,
    href: "#contact",
  },
];
