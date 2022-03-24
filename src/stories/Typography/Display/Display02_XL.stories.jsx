import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Display",
  component: Typography,
};

export const XL = () => (
  <>
    <Typography variant="h1" className="display display-light display-xl">
      Display XL Regular
    </Typography>

    <Typography variant="h1" className="display display-regular display-xl">
      Display XL Medium
    </Typography>

    <Typography variant="h1" className="display display-medium display-xl">
      Display XL Semibold
    </Typography>

    <Typography variant="h1" className="display display-bold display-xl">
      Display XL Bold
    </Typography>
  </>
);
