import type { IconType } from "react-icons";
import { FaSchool } from "react-icons/fa";

export interface EducationItem {
  id: string;
  name: string;
  institution: string;
  year: number;
  isInstitute: boolean;
  url: string;
  icon: IconType;
}

export const educationItems: EducationItem[] = [
  {
    id: "bachelor",
    name: "Bachelor’s in Informatics Engineering",
    institution: "Polytechnic University of Bragança",
    year: 2023,
    isInstitute: true,
    url: "https://ipb.pt/pt",
    icon: FaSchool,
  },
  {
    id: "outsystems",
    name: "Associative Reactive Developer (Outsystems 11)",
    institution: "Outsystems",
    year: 2023,
    isInstitute: false,
    url: "outsystems/outsystems.pdf",
    icon: FaSchool,
  },
  {
    id: "masters",
    name: "Master’s in Informatics",
    institution: "Polytechnic University of Bragança",
    year: 2025,
    isInstitute: true,
    url: "https://ipb.pt/pt",
    icon: FaSchool,
  },
];
