import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Headlines",
  component: Typography,
};

export const XL = () => (
  <>
    <Typography variant="h2" className="light">
      Headline xl light
    </Typography>

    <Typography variant="h2">Headline xl regular</Typography>

    <Typography variant="h2" className="semibold">
      Headline xl semibold
    </Typography>

    <Typography variant="h2" className="bold">
      Headline xl bold
    </Typography>
  </>
);
