import type { IconType } from "react-icons";
import { HiOutlineBookOpen, HiOutlineClipboardList, HiOutlineDocumentText } from "react-icons/hi";

export interface AcademyCard {
  id: "free" | "program" | "form";
  icon: IconType;
  href: string;
}

export const ACADEMY_CARDS: AcademyCard[] = [
  { id: "free", icon: HiOutlineBookOpen, href: "#contact" },
  { id: "program", icon: HiOutlineClipboardList, href: "#contact" },
  { id: "form", icon: HiOutlineDocumentText, href: "#contact" },
];
