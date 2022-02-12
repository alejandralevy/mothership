import { palette } from "./Palette";
const { primary, error } = palette;

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    extraSmall: true;
    extraLarge: true;
  }
}

export const MuiButton = {
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: 14,
        padding: "10px 16px",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        "&: hover": {
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        },
        "&.MuiButton-outlinedPrimary": {
          color: primary,
          backgroundColor: primary[50],
          border: "none",
          "&: hover": {
            backgroundColor: primary[100],
          },
        },
        "&.Mui-disabled": {
          color: "white",
          "&.MuiButton-containedPrimary": {
            backgroundColor: primary[200],
          },
          "&.MuiButton-containedError": {
            backgroundColor: error[200],
          },
        },
      },
      sizeExtraSmall: {
        padding: "8px 14px",
        lineHeight: "20px",
      },
      sizeSmall: {
        padding: "10px 16px",
        lineHeight: "20px",
      },
      sizeMedium: {
        padding: "10px 18px",
        fontSize: 16,
        lineHeight: "24px",
      },
      sizeLarge: {
        padding: "12px 20px",
        fontSize: 16,
        lineHeight: "24px",
      },
      sizeExtraLarge: {
        padding: "16px 28px",
        lineHeight: "28px",
        fontSize: 18,
      },
    },
  },
};
