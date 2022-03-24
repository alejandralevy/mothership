import { monster as monst, display as dis, typography, ui_text as ui, paragraph as para, italic as ita, underline as underl, strikeThrough as strike } from "./index";

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

export const display = {
  "&.display": {
    fontFamily: dis.fontFamily
  },
  "&.display-light": {
    fontWeight: dis.fontWeightLight
  },
  "&.display-regular": {
    fontWeight: dis.fontWeightRegular
  },
  "&.display-medium": {
    fontWeight: dis.fontWeightMedium
  },
  "&.display-bold": {
    fontWeight: dis.fontWeightBold
  },
  "&.display-2xl": {
    fontSize: dis.h1?.fontSize,
    lineHeight: dis.h1?.lineHeight,
    letterSpacing: dis.h1?.letterSpacing
  },
  "&.display-xl": {
    fontSize: dis.h2?.fontSize,
    lineHeight: dis.h2?.lineHeight,
    letterSpacing: dis.h2?.letterSpacing
  },
  "&.display-lg": {
    fontSize: dis.h3?.fontSize,
    lineHeight: dis.h3?.lineHeight,
    letterSpacing: dis.h3?.letterSpacing
  },
  "&.display-md": {
    fontSize: dis.h4?.fontSize,
    lineHeight: dis.h4?.lineHeight,
    letterSpacing: dis.h4?.letterSpacing
  },
  "&.display-sm": {
    fontSize: dis.h5?.fontSize,
    lineHeight: dis.h5?.lineHeight,
    letterSpacing: dis.h5?.letterSpacing
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

export const paragraph = {
  "$.paragraph": {
    fontFamily: para.fontFamily
  },
  "&.paragraph-regular": {
    fontWeight: para.fontWeightLight,
  },
  "&.paragraph-medium": {
    fontWeight: para.fontWeightRegular,
  },
  "&.paragraph-bold": {
    fontWeight: para.fontWeightBold,
  },
  "&.paragraph-2xl": {
    fontSize: "32px",
    letterSpacing: "-0.02em"
  },
  "&.paragraph-xl": {
    fontSize: "24px",
    letterSpacing: "-0.01em"
  },
  "&.paragraph-lg": {
    fontSize: "20px",
    letterSpacing: "-0.008em"
  },
  "&.paragraph-md": {
    fontSize: "18px",
    letterSpacing: "-0.004em"
  },
  "&.paragraph-sm": {
    fontSize: "16px"
  },
  "&.paragraph-xs": {
    fontSize: "14px",
    letterSpacing: "0.015em"
  },
  "&.paragraph-2xs": {
    fontSize: "12px",
    letterSpacing: "0.015em"
  },
  "&.paragraph-lh52": {
    lineHeight: "52px"
  },
  "&.paragraph-lh48": {
    lineHeight: "48px"
  },
  "&.paragraph-lh44": {
    lineHeight: "44px"
  },
  "&.paragraph-lh40": {
    lineHeight: "40px"
  },
  "&.paragraph-lh36": {
    lineHeight: "36px"
  },
  "&.paragraph-lh32": {
    lineHeight: "32px"
  },
  "&.paragraph-lh28": {
    lineHeight: "28px"
  },
  "&.paragraph-lh24": {
    lineHeight: "24px"
  },
  "&.paragraph-lh20": {
    lineHeight: "20px"
  },
  "&.paragraph-lh18": {
    lineHeight: "18px"
  },
  "&.paragraph-lh16": {
    lineHeight: "16px"
  },
}

export const italic = {
  "&.italic": {
    fontFamily: ita.fontFamily,
    fontStyle: "italic"
  },
  "&.italic-2xl": {
    fontSize: "32px",
    letterSpacing: "-0.02em"
  },
  "&.italic-xl": {
    fontSize: "24px",
    letterSpacing: "-0.01em"
  },
  "&.italic-lh52": {
    lineHeight: "52px"
  },
  "&.italic-lh48": {
    lineHeight: "48px"
  },
  "&.italic-lh44": {
    lineHeight: "44px"
  },
  "&.italic-lh40": {
    lineHeight: "40px"
  },
  "&.italic-lh36": {
    lineHeight: "36px"
  },
  "&.italic-lh32": {
    lineHeight: "32px"
  },
}

export const underline = {
  "&.underline": {
    fontFamily: underl.fontFamily,
    textDecoration: "underline"
  },
  "&.underline-2xl": {
    fontSize: "32px",
    letterSpacing: "-0.02em"
  },
  "&.underline-xl": {
    fontSize: "24px",
    letterSpacing: "-0.01em"
  },
  "&.underline-lh52": {
    lineHeight: "52px"
  },
  "&.underline-lh48": {
    lineHeight: "48px"
  },
  "&.underline-lh44": {
    lineHeight: "44px"
  },
  "&.underline-lh40": {
    lineHeight: "40px"
  },
  "&.underline-lh36": {
    lineHeight: "36px"
  },
  "&.underline-lh32": {
    lineHeight: "32px"
  },
}

export const strikeThrough = {
  "&.strikeThrough": {
    fontFamily: strike.fontFamily,
    textDecorationLine: "line-through"
  },
  "&.strikeThrough-2xl": {
    fontSize: "32px",
    letterSpacing: "-0.02em"
  },
  "&.strikeThrough-xl": {
    fontSize: "24px",
    letterSpacing: "-0.01em"
  },
  "&.strikeThrough-lh52": {
    lineHeight: "52px"
  },
  "&.strikeThrough-lh48": {
    lineHeight: "48px"
  },
  "&.strikeThrough-lh44": {
    lineHeight: "44px"
  },
  "&.strikeThrough-lh40": {
    lineHeight: "40px"
  },
  "&.strikeThrough-lh36": {
    lineHeight: "36px"
  },
  "&.strikeThrough-lh32": {
    lineHeight: "32px"
  },
}

export const MuiTypography = {
  MuiTypography: {
    styleOverrides: {
      root: {
        ...monster,
        ...display,
        ...headline,
        ...ui_text,
        ...paragraph,
        ...italic,
        ...underline,
        ...strikeThrough,
      },
    },
  },
};
