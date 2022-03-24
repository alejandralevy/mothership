import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Display",
  component: Typography,
};

export const LG = () => (
  <>
    <Typography variant="h1" className="display display-light display-lg">
      Display LG Regular
    </Typography>

    <Typography variant="h1" className="display display-regular display-lg">
      Display LG Medium
    </Typography>

    <Typography variant="h1" className="display display-medium display-lg">
      Display LG Semibold
    </Typography>

    <Typography variant="h1" className="display display-bold display-lg">
      Display LG Bold
    </Typography>
  </>
);
