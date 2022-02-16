import { typography } from "./index";

export const MuiTypography = {
  MuiTypography: {
    styleOverrides: {
      root: {
        fontWeight: typography.fontWeightRegular,
        "&.light": { fontWeight: typography.fontWeightLight },
        "&.semibold": { fontWeight: typography.fontWeightMedium },
        "&.bold": { fontWeight: typography.fontWeightBold },
      },
    },
  },
};
