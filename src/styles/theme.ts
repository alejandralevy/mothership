import { palette, MuiButton, shape, typography, shadows } from "./index";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { MuiTypography } from "./MuiTypography";

const MothershipTheme: ThemeOptions = {
  palette,
  typography,
  shadows,
  shape,
  components: {
    ...MuiButton,
    ...MuiTypography,
  },
};

export default createTheme(MothershipTheme);
