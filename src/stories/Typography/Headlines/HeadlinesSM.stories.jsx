import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Headlines",
  component: Typography,
};

export const SM = () => (
  <>
    <Typography variant="h5" className="headlines headline-light headline-sm">
      Headline SM Regular
    </Typography>

    <Typography variant="h5" className="headlines headline-regular headline-sm">
      Headline SM Medium
    </Typography>

    <Typography variant="h5" className="headlines headline-medium headline-sm">
      Headline SM Semibold
    </Typography>

    <Typography variant="h5" className="headlines headline-bold headline-sm">
      Headline SM Bold
    </Typography>
  </>
);
