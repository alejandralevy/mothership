import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Headlines",
  component: Typography,
};

export const XL = () => (
  <>
    <Typography variant="h2" className="headlines headline-light headline-xl">
      Headline XL Regular
    </Typography>

    <Typography variant="h2" className="headlines headline-regular headline-xl">
      Headline XL Medium
    </Typography>

    <Typography variant="h2" className="headlines headline-medium headline-xl">
      Headline XL Semibold
    </Typography>

    <Typography variant="h2" className="headlines headline-bold headline-xl">
      Headline XL Bold
    </Typography>
  </>
);
