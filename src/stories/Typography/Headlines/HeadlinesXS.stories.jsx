import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Headlines",
  component: Typography,
};

export const XS = () => (
  <>
    <Typography variant="h6" className="light">
      Headline xs light
    </Typography>

    <Typography variant="h6">Headline xs regular</Typography>

    <Typography variant="h6" className="semibold">
      Headline xs semibold
    </Typography>

    <Typography variant="h6" className="bold">
      Headline xs bold
    </Typography>
  </>
);
