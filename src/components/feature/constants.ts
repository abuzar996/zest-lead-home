import { generateUniqueId } from "src/utils/methods/randomizer";
import { FeatureType } from "src/utils/types";
import Chat from "src/public/vectors/chat.svg";
import Mail from "src/public/vectors/mail.svg";
import Command from "src/public/vectors/command.svg";
import Favourites from "src/public/vectors/favourites.svg";
import Zap from "src/public/vectors/zap.svg";
import Smile from "src/public/vectors/smile.svg";
export const featureData: FeatureType[][] = [
  [
    {
      Image: Mail,
      id: generateUniqueId(),
      heading: "Quality Leads",
      subHeading: [
        "Access a steady stream of high-quality leads tailored to your specific criteria",
      ],
    },
    {
      Image: Zap,
      id: generateUniqueId(),
      heading: "Streamlined Process",
      subHeading: [
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
      ],
    },
    {
      Image: Favourites,
      id: generateUniqueId(),
      heading: "Cost-Effective Solutions",
      subHeading: [
        "Gain insights into your lead generation and conversion performance with our comprehensive analytics dashboard. Track key metrics and optimize your strategies for better results.",
      ],
    },
  ],
  [
    {
      Image: Smile,
      id: generateUniqueId(),
      heading: "Proven Success",
      subHeading: [
        "Join countless satisfied real estate professionals who have achieved success with ZestLead.",
      ],
    },
    {
      Image: Command,
      id: generateUniqueId(),
      heading: "Exclusive Leads",
      subHeading: [
        "Receive leads that are exclusive, reducing competition and increasing your chances of closing deals. Our lead generation process ensures you get the first opportunity to connect with potential clients.",
      ],
    },
    {
      Image: Chat,
      id: generateUniqueId(),
      heading: "Advanced Analytics",
      subHeading: [
        "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
      ],
    },
  ],
];
