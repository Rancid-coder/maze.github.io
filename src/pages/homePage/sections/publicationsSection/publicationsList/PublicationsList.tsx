import type { IconType } from "react-icons";
import { FaNewspaper } from "react-icons/fa";

export interface PublicationsItem {
  id: string;
  name: string;
  date: string;
  url:string;
  icon: IconType;
}

export const publicationsItems: PublicationsItem[] = [
  {
    id: "clf",
    name: "An Augmented Reality Intelligent Guide for the Automotive Industry, Learning Factories of the Future. CFL 2024",
    date: "July. 2024",
    url: "https://xploreqa.ieee.org/document/10913956",
    icon: FaNewspaper,
  },
  {
    id: "iceet",
    name: "Unstructuring the Sequentiality of Commits into a Semantic Network with Higher Informational and Functional Quality, 2024 International Conference on Engineering and Emerging Technologies (ICEET), IEEE, Dubai, UAE.",
    date: "Dec. 2024",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-65400-8_23",
    icon: FaNewspaper,
  },
];
