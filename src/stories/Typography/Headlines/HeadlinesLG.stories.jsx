import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Headlines",
  component: Typography,
};

export const LG = () => (
  <>
    <Typography variant="h3" className="headlines headline-light headline-lg">
      Headline LG Regular
    </Typography>

    <Typography variant="h3" className="headlines headline-regular headline-lg">
      Headline LG Medium
    </Typography>

    <Typography variant="h3" className="headlines headline-medium headline-lg">
      Headline LG Semibold
    </Typography>

    <Typography variant="h3" className="headlines headline-bold headline-lg">
      Headline LG Bold
    </Typography>
  </>
);
