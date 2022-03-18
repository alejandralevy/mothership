import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Monster",
  component: Typography,
};

export const SM = () => (
  <>
    <Typography variant="h3" className="monster monster-regular monster-sm">
      Monster SM Regular
    </Typography>

    <Typography variant="h3" className="monster monster-bold monster-sm">
      Monster SM ExtraBold
    </Typography>
  </>
);
