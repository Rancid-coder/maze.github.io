import type { IconType } from "react-icons";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export interface ContactItem {
  type: string;
  value: string;
  icon: IconType;
}

export const contactItems: ContactItem[] = [
  {
    type: "phone",
    value: "+351 930 567 910",
    icon: FaPhone,
  },
  {
    type: "email",
    value: "mpat_001@proton.me",
    icon: FaEnvelope,
  },
  {
    type: "location",
    value: "Bragança, Portugal",
    icon: FaMapMarkerAlt,
  },
];
