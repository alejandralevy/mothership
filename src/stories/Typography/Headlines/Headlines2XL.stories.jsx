import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Headlines",
  component: Typography,
};

export const XL2 = () => (
  <>
    <Typography variant="h1" className="headlines headline-light headline-2xl">
      Headline 2XL Regular
    </Typography>

    <Typography variant="h1" className="headlines headline-regular headline-2xl">
      Headline 2xl Medium
    </Typography>

    <Typography variant="h1" className="headlines headline-medium headline-2xl">
      Headline 2XL Semibold
    </Typography>

    <Typography variant="h1" className="headlines headline-bold headline-2xl">
      Headline 2XL Bold
    </Typography>
  </>
);
