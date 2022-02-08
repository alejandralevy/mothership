import Button from "@mui/material/Button/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

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

const MothershipButton = () => {
  return (
    <>
      <ThemeProvider
        theme={createTheme({
          palette: {
            primary: {
              50: "#F1F7FD",
              100: "#E4EEFC",
              200: "#CCE1FA",
              300: "#99C4F4",
              main: "#4a00fa",
            },
          },
        })}
      >
        <Button color="secondary" variant="contained">
          Normal button
        </Button>
      </ThemeProvider>
    </>
  );
};

export default MothershipButton;
