import { palette } from "./Palette";
import { shadows } from "./Shadows";
const { primary, error, grey } = palette;

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    extraSmall: true;
    extraLarge: true;
  }
}

const buttonSizes = {
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
};

const root = {
  fontSize: 14,
  padding: "10px 16px",
  boxShadow: shadows[1],
  "&:hover": {
    boxShadow: shadows[1],
  },
};

const primaryOutlined = {
  "&.MuiButton-outlinedPrimary": {
    color: primary,
    backgroundColor: primary[50],
    border: "none",
    "&:hover": {
      backgroundColor: primary[100],
    },
    "&.Mui-disabled": {
      color: primary[300],
      backgroundColor: primary[25],
    },
  },
};

const textButton = {
  "&.MuiButton-text": {
    boxShadow: shadows[0],
  },
  "&.MuiButton-textPrimary": {
    "&:hover": {
      backgroundColor: primary[50],
    },
    "&.Mui-disabled": {
      color: grey[300],
      backgroundColor: "white",
    },
  },
};

const containedButton = {
  "&.MuiButton-containedPrimary": {
    "&.Mui-disabled": {
      color: "white",
      backgroundColor: primary[200],
    },
  },
  "&.MuiButton-containedError": {
    "&.Mui-disabled": {
      color: "white",
      backgroundColor: error[200],
    },
  },
};

export const MuiButton = {
  MuiButton: {
    styleOverrides: {
      root: {
        ...root,
        ...primaryOutlined,
        ...textButton,
        ...containedButton,
      },
      ...buttonSizes,
    },
  },
};
