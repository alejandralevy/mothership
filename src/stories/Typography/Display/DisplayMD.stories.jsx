import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Display",
  component: Typography,
};

export const MD = () => (
  <>
    <Typography variant="h1" className="display display-light display-md">
      Display MD Regular
    </Typography>

    <Typography variant="h1" className="display display-regular display-md">
      Display MD Medium
    </Typography>

    <Typography variant="h1" className="display display-medium display-md">
      Display MD Semibold
    </Typography>

    <Typography variant="h1" className="display display-bold display-md">
      Display MD Bold
    </Typography>
  </>
);
