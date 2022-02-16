import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Headlines",
  component: Typography,
};

export const XL2 = () => (
  <>
    <Typography variant="h1" className="light">
      Headline 2xl light
    </Typography>

    <Typography variant="h1">Headline 2xl regular</Typography>

    <Typography variant="h1" className="semibold">
      Headline 2xl semibold
    </Typography>

    <Typography variant="h1" className="bold">
      Headline 2xl bold
    </Typography>
  </>
);
