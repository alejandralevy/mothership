import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Headlines",
  component: Typography,
};

export const MD = () => (
  <>
    <Typography variant="h4" className="headlines headline-light headline-md">
      Headline MD Regular
    </Typography>

    <Typography variant="h4" className="headlines headline-regular headline-md">
      Headline MD Medium
    </Typography>

    <Typography variant="h4" className="headlines headline-medium headline-md">
      Headline MD Semibold
    </Typography>

    <Typography variant="h4" className="headlines headline-bold headline-md">
      Headline MD Bold
    </Typography>
  </>
);
