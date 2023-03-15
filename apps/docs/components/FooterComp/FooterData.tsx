// Types
import { TNavigationType, TSocialDataType } from "../../types/types";

// Utils

// Assets
import FooterIcons from "../assets/FooterIcons";
import externalLinks from "../../helpers/externalLinks";

const { twitter, insta, linkedin, youTube } = FooterIcons;

export const NavigationData: TNavigationType = {
  solutions: [
    { id: 1, name: "Documentation", href: "https://huddle01.com/docs" },
    // { id: 2, name: "API Reference", href: "/docs" },
    { id: 3, name: "Blog", href: "https://huddle01.hashnode.dev/" },
  ],
  support: [
    {
      id: 4,
      name: "GitHub",
      href: "https://github.com/Huddle01/",
    },
    {
      id: 5,
      name: "Discord",
      href: "https://discord.gg/MgR5wqd3J7",
    },
    {
      id: 6,
      name: "Twitter",
      href: "https://twitter.com/huddle01com",
    },
  ],
  company: [
    { id: 7, name: "About Us", href: "https://huddle01.com/about" },
    {
      id: 8,
      name: "Terms & Conditions",
      href: "https://huddle01.com/terms",
    },
    {
      id: 9,
      name: "Privacy Policy",
      href: "https://huddle01.com/privacy",
    },
    // { id: 10, name: "Cookies", href: "https://twitter.com/huddle01com" },
  ],
};

export const SocialData: TSocialDataType[] = [
  { id: 1, icon: twitter, link: externalLinks.twitterLink },
  { id: 2, icon: insta, link: externalLinks.instaLink },
  { id: 3, icon: linkedin, link: externalLinks.linkedinLink },
  { id: 4, icon: youTube, link: externalLinks.ytLink },
];
