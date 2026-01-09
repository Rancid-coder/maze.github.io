import type { IconType } from "react-icons";
import { FaBriefcase } from "react-icons/fa";

export interface ExperienceItem {
  id: string;
  name: string;
  institution: string;
  period: string;
  description: string;
  url: string;
  icon: IconType;
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "schoolarship",
    name: "Schoolarship Holder",
    institution: "CEDRI · Bragança",
    period: "2022-2023",
    description:
      "As a result of my bachelor’s final project I started working on a scholarship for my university where I researched and started development of a factory’s 3D replica (Digital Twin) capable of handling user interactions and equipped with animations for the engine assets, where i worked with both Unity and Unreal Engine, as well as Blender.",
    url: "https://cedri.ipb.pt/",
    icon: FaBriefcase,
  },
  {
    id: "master",
    name: "Internship As Software Developer",
    institution: "BALVIA ECOSYSTEMS · Bragança",
    period: "2025-2025",
    description:
      "While working on my Master’s dissertation in IT, I secured a professional opportunity at the same company where I began my thesis. I was responsible for developing several software applications, including a wearable device, a smartphone app, and a web platform",
    url: "https://balviaecosystems.com/",
    icon: FaBriefcase,
  },
];
