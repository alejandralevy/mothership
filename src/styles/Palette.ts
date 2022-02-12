import { PaletteColorOptions, PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    blueGray?: PaletteColorOptions;
  }
  interface SimplePaletteColorOptions {
    25?: string;
  }
  interface Color {
    25?: string;
  }
}

export const palette: PaletteOptions = {
  primary: {
    25: "#F6FAFE",
    50: "#F1F7FD",
    100: "#E4EEFC",
    200: "#CCE1FA",
    300: "#99C4F4",
    400: "#68A6F0",
    500: "#12b76a",
    600: "#3168DF",
    700: "#2A54CB",
    800: "#2743A0",
    900: "#263C7E",
    main: "#3168DF",
  },
  secondary: {
    25: "#F6FAFE",
    50: "#F7F3FF",
    100: "#F1EBFF",
    200: "#DED2F4",
    300: "#AC91DE",
    400: "#8963CF",
    500: "#6D3DC2",
    600: "#5529A3",
    700: "#481B92",
    800: "#351372",
    900: "#240754",
    main: "#5529A3",
  },
  error: {
    25: "#FFFBFA",
    50: "#FEF3F2",
    100: "#FEE4E2",
    200: "#FECDCA",
    300: "#FDA29B",
    400: "#F97066",
    500: "#F04438",
    600: "#D92D20",
    700: "#B42318",
    800: "#912018",
    900: "#7A271A",
    main: "#D92D20",
  },
  warning: {
    25: "#FFFCF5",
    50: "#FFFAEB",
    100: "#FEF0C7",
    200: "#FEDF89",
    300: "#FEC84B",
    400: "#FDB022",
    500: "#F79009",
    600: "#DC6803",
    700: "#B54708",
    800: "#93370D",
    900: "#7A2E0E",
    main: "#DC6803",
  },
  success: {
    25: "#F6FEF9",
    50: "#ECFDF3",
    100: "#D1FADF",
    200: "#A6F4C5",
    300: "#6CE9A6",
    400: "#32D583",
    500: "#12B76A",
    600: "#039855",
    700: "#027A48",
    800: "#05603A",
    900: "#054F31",
    main: "#039855",
  },
  grey: {
    50: "#F9FAFB",
    100: "#D1FADF",
    200: "#E4E7EC",
    300: "#D0D5DD",
    400: "#98A2B3",
    500: "#667085",
    600: "#475467",
    700: "#344054",
    800: "#1D2939",
    900: "#101828",
  },
  blueGray: {
    25: "#FCFCFD",
    50: "#F8F9FC",
    100: "#EAECF5",
    200: "#C8CCE5",
    300: "#9EA5D1",
    400: "#717BBC",
    500: "#4E5BA6",
    600: "#3E4784",
    700: "#363F72",
    800: "#293056",
    900: "#101323",
    main: "#3E4784",
  },
};
