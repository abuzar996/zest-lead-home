import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { SiApmterminals } from "react-icons/si";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { LiaCookieSolid } from "react-icons/lia";

import { generateUniqueId } from "src/utils/methods/randomizer";
import { FooterType } from "src/utils/types";
export const footerData: FooterType[] = [
  {
    id: generateUniqueId(),
    label: "Social",
    children: [
      {
        id: generateUniqueId(),
        ItemIcon: FacebookOutlined,
        label: "Facebook",
      },
      {
        id: generateUniqueId(),
        ItemIcon: InstagramOutlined,
        label: "Instagram",
      },
      { id: generateUniqueId(), ItemIcon: TwitterOutlined, label: "Twitter" },
    ],
  },
  {
    id: generateUniqueId(),
    label: "Legal",
    children: [
      {
        id: generateUniqueId(),
        ItemIcon: SiApmterminals,
        label: "Terms",
      },
      {
        id: generateUniqueId(),
        ItemIcon: MdOutlinePrivacyTip,
        label: "Privacy",
      },
      { id: generateUniqueId(), ItemIcon: LiaCookieSolid, label: "Cookies" },
    ],
  },
];
