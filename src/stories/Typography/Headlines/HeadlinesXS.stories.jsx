import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Headlines",
  component: Typography,
};

export const XS = () => (
  <>
    <Typography variant="h6" className="headlines headline-light headline-xs">
      Headline XS Regular
    </Typography>

    <Typography variant="h6" className="headlines headline-regular headline-xs">
      Headline XS Medium
    </Typography>

    <Typography variant="h6" className="headlines headline-medium headline-xs">
      Headline XS Semibold
    </Typography>

    <Typography variant="h6" className="headlines headline-bold headline-xs">
      Headline XS Bold
    </Typography>
  </>
);
