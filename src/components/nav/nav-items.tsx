import { generateUniqueId } from "src/utils/methods/randomizer";
import { NavItemType } from "src/utils/types";
export const navItems: NavItemType[] = [
  {
    id: generateUniqueId(),
    label: "Home",
    route: "/",
  },
  {
    id: generateUniqueId(),
    label: "Blogs",
    route: "/blogs",
  },
  {
    id: generateUniqueId(),
    label: "Pricing",
    route: "/pricing",
  },
];
