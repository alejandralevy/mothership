import { typography, ui_text as ui } from "./index";

export const ui_text = {
  "&.ui-text-xl": {
    fontSize: ui.h1?.fontSize,
    lineHeight: ui.h1?.lineHeight
  },
  "&.ui-text-lg": {
    fontSize: ui.h2?.fontSize,
    lineHeight: ui.h2?.lineHeight
  },
  "&.ui-text-md": {
    fontSize: ui.h2?.fontSize,
    lineHeight: ui.h2?.lineHeight
  },
  "&.ui-text-sm": {
    fontSize: ui.h2?.fontSize,
    lineHeight: ui.h2?.lineHeight
  },
  "&.ui-text-xs": {
    fontSize: ui.h2?.fontSize,
    lineHeight: ui.h2?.lineHeight
  },
}

export const MuiTypography = {
  MuiTypography: {
    styleOverrides: {
      root: {
        fontFamily: typography.fontFamily,
        fontWeight: typography.fontWeightRegular,
        "&.light": { fontWeight: typography.fontWeightLight },
        "&.semibold": { fontWeight: typography.fontWeightMedium },
        "&.bold": { fontWeight: typography.fontWeightBold },
        ...ui_text
      },
    },
  },
};
