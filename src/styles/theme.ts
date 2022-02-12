import { palette, MuiButton, shape, typography, shadows } from "./index";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const MothershipTheme: ThemeOptions = {
  palette,
  typography,
  shadows,
  shape,
  components: {
    ...MuiButton,
  },
};

export default createTheme(MothershipTheme);
