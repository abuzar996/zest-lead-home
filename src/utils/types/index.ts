import Icon from "@ant-design/icons";
import { IconType } from "react-icons/lib";
export enum Color {
  PRIMARY = "#3D52A1",
  SECONDARY = "#7091e6",
  SECONDARY100 = "#8697C4",
  TEXT = "#ADBBDA",
  SHADE = "#FFFFFF",
  ACTIVE = "#ff2e2e",
  CHILDACTIVE = "#ff2e21",
  CHILDTEXT = "#d9d9d8",
}

export interface FooterSubType {
  ItemIcon: typeof Icon | IconType;
  label: string;
  id: string;
}
export interface FooterType {
  id: string;
  label: string;
  children: FooterSubType[];
}

export enum BannerType {
  Default = "default",
  Transparent = "transparent",
}

export enum TitleType {
  Main = "main",
  Secondary = "secondary",
}

export interface FeatureType {
  id: string;
  heading: string;
  Image: string;
  subHeading: string[];
  // icon: typeof Icon | IconType;
}

export interface NavItemType {
  id: string;
  label: string;
  route: string;
}
