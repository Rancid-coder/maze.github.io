import type { IconType } from "react-icons";
import { FaInfoCircle } from "react-icons/fa";

export interface InterestItem {
  id: string;
  name: string;
  icon: IconType;
}

export const interestItems: InterestItem[] = [
  {
    id: "developer",
    name: "Full-stack & cross-Platform development",
    icon: FaInfoCircle,
  },
  {
    id: "enterprise",
    name: "Enterprise & low-code platforms (SAP, OutSystems)",
    icon: FaInfoCircle,
  },
  {
    id: "ia",
    name: "AI & data-driven applications",
    icon: FaInfoCircle,
  },
  {
    id: "backend",
    name: "Backend architectures & cloud systems",
    icon: FaInfoCircle,
  },
];
