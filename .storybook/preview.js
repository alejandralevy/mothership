import React from 'react';
import theme from '../src/styles/theme'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { ThemeProvider } from 'emotion-theming'
export const decorators = [
  (Story) => {
    return (
      <MUIThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </MUIThemeProvider>
    )
  },
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
