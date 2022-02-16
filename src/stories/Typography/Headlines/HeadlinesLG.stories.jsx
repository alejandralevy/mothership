import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Headlines",
  component: Typography,
};

export const LG = () => (
  <>
    <Typography variant="h3" className="light">
      Headline lg light
    </Typography>

    <Typography variant="h3">Headline lg regular</Typography>

    <Typography variant="h3" className="semibold">
      Headline lg semibold
    </Typography>

    <Typography variant="h3" className="bold">
      Headline lg bold
    </Typography>
  </>
);
3;
