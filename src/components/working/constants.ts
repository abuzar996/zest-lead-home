import { generateUniqueId } from "src/utils/methods/randomizer";
import { FeatureType } from "src/utils/types";
import Mail from "src/public/vectors/mail.svg";
import Zap from "src/public/vectors/zap.svg";
import Favourite from "src/public/vectors/favourites.svg";
export const workingData: FeatureType[] = [
  {
    id: generateUniqueId(),
    Image: Mail,
    heading: "Sign Up",
    subHeading: [
      "Create your ZestLead account and customize your lead preferences.",
    ],
  },
  {
    id: generateUniqueId(),
    Image: Zap,
    heading: "Explore the Marketplace",
    subHeading: [
      "Once signed up, you will land on our dynamic marketplace where you can browse and purchase either buyer or seller leads tailored to your criteria.",
    ],
  },
  {
    id: generateUniqueId(),
    Image: Favourite,
    heading: "Manage Leads in Your Dashboard",
    subHeading: [
      "Access your personalized dashboard to find detailed information about the leads you’ve purchased.",
    ],
  },
  {
    id: generateUniqueId(),
    Image: Favourite,
    heading: "Add Leads to Favourites",
    subHeading: [
      "See a lead you like but aren’t ready to buy? No problem!",
      "Add leads to your favourites to keep track of potential future purchases and revisit them when you're ready.",
    ],
  },
];
