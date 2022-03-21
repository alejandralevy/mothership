import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/UI Text/Text",
  component: Typography,
};

export const XS = () => (
  <>
    <Typography variant="h1" className="ui-text ui-text-light ui-text-xs">
      Text XS Regular
    </Typography>

    <Typography variant="h1" className="ui-text ui-text-regular ui-text-xs">
      Text XS Medium
    </Typography>

    <Typography variant="h1" className="ui-text ui-text-medium ui-text-xs">
      Text XS Semibold
    </Typography> 

    <Typography variant="h1" className="ui-text ui-text-bold ui-text-xs">
      Text XS Bold
    </Typography>
  </>
);