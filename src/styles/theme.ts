import { createTheme } from "@mui/system";

const MothershipTheme = createTheme({
  palette: {
    primary: {
      50: "#F1F7FD",
      100: "#E4EEFC",
      200: "#CCE1FA",
      300: "#99C4F4",
      main: "#4a00fa",
    },
    secondary: {
      main: "#CCE1FA",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default MothershipTheme;
