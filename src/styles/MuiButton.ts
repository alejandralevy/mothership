import { palette } from './Palette'
const { primary } = palette

export const MuiButton = {
  MuiButton: {
    styleOverrides: {
      // The root styling.
      root: {
        fontSize: 14,
        padding: '10px 16px',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',

        '&:hover': {
          backgroundColor: primary[700]
        }
      },
      // Existing Variants.
      sizeSmall: {
        padding: '8px 14px'
      },
      sizeLarge: {
        fontSize: 16,
        padding: '12px 18px'
      }
    }
  }
}
