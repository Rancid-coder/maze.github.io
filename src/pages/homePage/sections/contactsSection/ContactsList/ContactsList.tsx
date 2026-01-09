import type { IconType } from "react-icons";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export interface ContactItem {
  id: string,
  type: string;
  value: string;
  icon: IconType;
}

export const contactItems: ContactItem[] = [
  {
    id:"phone",
    type: "phone",
    value: "+351 930 567 910",
    icon: FaPhone,
  },
  {
    id:"email",
    type: "email",
    value: "mpat_001@proton.me",
    icon: FaEnvelope,
  },
  {
    id:"location",
    type: "location",
    value: "Bragança, Portugal",
    icon: FaMapMarkerAlt,
  },
];
