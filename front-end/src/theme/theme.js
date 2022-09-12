import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    Gunmetal: "#1f282f",
    LapisLazuli: "#2f648e",
    Aero: "#76b9e3",
    BlizzardBlue: "#A3EAEC",
    LightCyan: "#d2eaee",
  },
  generic: {
    White: "#ffffff",
    Black: "#000000",
  },
};

export default extendTheme({ colors });
