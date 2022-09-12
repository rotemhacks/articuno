import { extendTheme } from "@chakra-ui/react";

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

// see why this doesn't work later
const components = {
  Input: {
    baseStyle: {
      focusBorderColor: "brand.BlizzardBlue",
    },
  },
};

export default extendTheme({ colors, components });
