import type { IconType } from "react-icons";
import { FaUser } from "react-icons/fa";

export interface SkillsItem {
  id: string;
  name: string;
  icon: IconType;
}

export const skillsItems: SkillsItem[] = [
  { id: "problem-solving", name: "Problem-Solving", icon: FaUser },
  { id: "analytical-thinking", name: "Analytical Thinking", icon: FaUser },
  { id: "adaptability", name: "Adaptability", icon: FaUser },
  {
    id: "research-critical-thinking",
    name: "Research & Critical Thinking",
    icon: FaUser,
  },
  { id: "time-management", name: "Time Management", icon: FaUser },
  {
    id: "collaboration-teamwork",
    name: "Collaboration & Teamwork",
    icon: FaUser,
  },
  { id: "continuous-learning", name: "Continuous Learning", icon: FaUser },
  { id: "communication-skills", name: "Communication Skills", icon: FaUser },
  { id: "attention-to-detail", name: "Attention to Detail", icon: FaUser },
  {
    id: "self-motivation-initiative",
    name: "Self-Motivation & Initiative",
    icon: FaUser,
  },
];
