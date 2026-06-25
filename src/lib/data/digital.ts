import type { IconType } from "react-icons";
import {
  HiOutlineCode,
  HiOutlineChatAlt2,
  HiOutlineViewGrid,
  HiOutlineOfficeBuilding,
  HiOutlineDeviceMobile,
  HiOutlineCog,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineSupport,
  HiOutlineTrendingUp,
} from "react-icons/hi";

export interface DigitalService {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: IconType;
}

export const DIGITAL_SERVICES: DigitalService[] = [
  { id: "web", titleKey: "about.digital.services.web.title", descriptionKey: "about.digital.services.web.description", icon: HiOutlineCode },
  { id: "telegram", titleKey: "about.digital.services.telegram.title", descriptionKey: "about.digital.services.telegram.description", icon: HiOutlineChatAlt2 },
  { id: "qrMenu", titleKey: "about.digital.services.qrMenu.title", descriptionKey: "about.digital.services.qrMenu.description", icon: HiOutlineViewGrid },
  { id: "crm", titleKey: "about.digital.services.crm.title", descriptionKey: "about.digital.services.crm.description", icon: HiOutlineOfficeBuilding },
  { id: "mobile", titleKey: "about.digital.services.mobile.title", descriptionKey: "about.digital.services.mobile.description", icon: HiOutlineDeviceMobile },
  { id: "support", titleKey: "about.digital.services.support.title", descriptionKey: "about.digital.services.support.description", icon: HiOutlineCog },
];

export interface DigitalValue {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: IconType;
}

export const DIGITAL_VALUES: DigitalValue[] = [
  { id: "reliability", titleKey: "about.digital.values.reliability.title", descriptionKey: "about.digital.values.reliability.description", icon: HiOutlineShieldCheck },
  { id: "speed", titleKey: "about.digital.values.speed.title", descriptionKey: "about.digital.values.speed.description", icon: HiOutlineLightningBolt },
  { id: "support", titleKey: "about.digital.values.support.title", descriptionKey: "about.digital.values.support.description", icon: HiOutlineSupport },
  { id: "result", titleKey: "about.digital.values.result.title", descriptionKey: "about.digital.values.result.description", icon: HiOutlineTrendingUp },
];
