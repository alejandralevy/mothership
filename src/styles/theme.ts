import { palette, MuiButton } from './index'
import { createTheme, ThemeOptions } from '@mui/material/styles'
const MothershipTheme: ThemeOptions = {
  palette,
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 400
    }
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    // Each customized component destructured assignment here.
    ...MuiButton
  }
}

export default createTheme(MothershipTheme);
