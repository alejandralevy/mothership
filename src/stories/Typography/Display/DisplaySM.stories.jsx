import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Display",
  component: Typography,
};

export const SM = () => (
  <>
    <Typography variant="h1" className="display display-light display-sm">
      Display SM Regular
    </Typography>

    <Typography variant="h1" className="display display-regular display-sm">
      Display SM Medium
    </Typography>

    <Typography variant="h1" className="display display-medium display-sm">
      Display SM Semibold
    </Typography>

    <Typography variant="h1" className="display display-bold display-sm">
      Display SM Bold
    </Typography>
  </>
);
