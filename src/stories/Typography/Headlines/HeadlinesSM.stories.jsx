import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Headlines",
  component: Typography,
};

export const SM = () => (
  <>
    <Typography variant="h5" className="light">
      Headline sm light
    </Typography>

    <Typography variant="h5">Headline sm regular</Typography>

    <Typography variant="h5" className="semibold">
      Headline sm semibold
    </Typography>

    <Typography variant="h5" className="bold">
      Headline sm bold
    </Typography>
  </>
);
3;
