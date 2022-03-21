import { monster as monst, typography, ui_text as ui } from "./index";

export const monster = {
  "&.monster": {
    fontFamily: monst.fontFamily
  },
  "&.monster-regular": {
    fontWeight: monst.fontWeightRegular
  },
  "&.monster-bold": {
    fontWeight: monst.fontWeightBold
  },
  "&.monster-lg": {
    fontSize: monst.h1?.fontSize,
    lineHeight: monst.h1?.lineHeight,
    letterSpacing: monst.h1?.letterSpacing
  },
  "&.monster-md": {
    fontSize: monst.h2?.fontSize,
    lineHeight: monst.h2?.lineHeight,
    letterSpacing: monst.h1?.letterSpacing
  },
  "&.monster-sm": {
    fontSize: monst.h3?.fontSize,
    lineHeight: monst.h3?.lineHeight,
    letterSpacing: monst.h1?.letterSpacing
  }
}

export const headline = {
  "&.headlines": {
    fontFamily: typography.fontFamily,
  },
  "&.headline-light": {
    fontWeight: typography.fontWeightLight,
  },
  "&.headline-regular": {
    fontWeight: typography.fontWeightRegular,
  },
  "&.headline-medium": {
    fontWeight: typography.fontWeightMedium
  },
  "&.headline-bold": {
    fontWeight: typography.fontWeightBold
  },
  ".headline-2xl": {
    fontSize: typography.h1?.fontSize,
    lineHeight: typography.h1?.lineHeight
  },
  ".headline-xl": {
    fontSize: typography.h2?.fontSize,
    lineHeight: typography.h2?.lineHeight
  },
  ".headline-lg": {
    fontSize: typography.h3?.fontSize,
    lineHeight: typography.h3?.lineHeight
  },
  ".headline-md": {
    fontSize: typography.h4?.fontSize,
    lineHeight: typography.h4?.lineHeight
  },
  ".headline-sm": {
    fontSize: typography.h5?.fontSize,
    lineHeight: typography.h5?.lineHeight
  },
  ".headline-xs": {
    fontSize: typography.h6?.fontSize,
    lineHeight: typography.h6?.lineHeight
  },
}

export const ui_text = {
  "$.ui-text": {
    fontFamily: ui.fontFamily
  },
  "&.ui-text-light": {
    fontWeight: ui.fontWeightLight,
  },
  "&.ui-text-regular": {
    fontWeight: ui.fontWeightRegular,
  },
  "&.ui-text-medium": {
    fontWeight: ui.fontWeightMedium
  },
  "&.ui-text-bold": {
    fontWeight: ui.fontWeightBold
  },
  "&.ui-text-xl": {
    fontSize: ui.h1?.fontSize,
    lineHeight: ui.h1?.lineHeight
  },
  "&.ui-text-lg": {
    fontSize: ui.h2?.fontSize,
    lineHeight: ui.h2?.lineHeight
  },
  "&.ui-text-md": {
    fontSize: ui.h3?.fontSize,
    lineHeight: ui.h3?.lineHeight
  },
  "&.ui-text-sm": {
    fontSize: ui.h4?.fontSize,
    lineHeight: ui.h4?.lineHeight
  },
  "&.ui-text-xs": {
    fontSize: ui.h5?.fontSize,
    lineHeight: ui.h5?.lineHeight
  },
  "&.ui-text-underline": {
    textDecoration: ui.h1?.textDecorationLine
  }
}

export const MuiTypography = {
  MuiTypography: {
    styleOverrides: {
      root: {
        ...monster,
        ...headline,
        ...ui_text
      },
    },
  },
};
