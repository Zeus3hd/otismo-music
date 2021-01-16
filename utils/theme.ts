import { BreakPoints, FontSizes, Space, Theme } from "../types";

export const fontSizes: FontSizes = {
  xs: "10px",
  sm: "12px",
  md: "16px",
  lg: "24px",
  xl: "32px",
};

export const breakpoints: BreakPoints = {
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1800px",
};

export const spaces: Space = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "32px",
  xl: "48px",
};

export const colors = {
  primary: "#4A4A4A",
  secondary: "#FE6F61",
  grey: "#F5F5F5",
  white: "#ffffff",
};

const theme: Theme = {
  colors,
  fontSizes,
  breakpoints,
  spaces,
};

export default theme;