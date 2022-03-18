import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Monster",
  component: Typography,
};

export const LG = () => (
  <>
    <Typography variant="h1" className="monster monster-regular monster-lg">
      Monster LG Regular
    </Typography>

    <Typography variant="h1" className="monster monster-bold monster-lg">
      Monster LG ExtraBold
    </Typography>
  </>
);
