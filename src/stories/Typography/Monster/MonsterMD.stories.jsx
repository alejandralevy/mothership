import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Monster",
  component: Typography,
};

export const MD = () => (
  <>
    <Typography variant="h2" className="monster monster-regular monster-md">
      Monster MD Regular
    </Typography>

    <Typography variant="h2" className="monster monster-bold monster-md">
      Monster MD ExtraBold
    </Typography>
  </>
);
