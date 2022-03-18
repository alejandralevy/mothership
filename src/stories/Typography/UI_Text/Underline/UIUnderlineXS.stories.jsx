import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/UI Text/Underline",
  component: Typography,
};

export const XS = () => (
  <>
    <Typography variant="h1" className="ui-text ui-text-light ui-text-xs ui-text-underline">
      Text XS Regular
    </Typography>

    <Typography variant="h1" className="ui-text ui-text-regular ui-text-xs ui-text-underline">
      Text XS Medium
    </Typography>

    <Typography variant="h1" className="ui-text ui-text-medium ui-text-xs ui-text-underline">
      Text XS Semibold
    </Typography> 

    <Typography variant="h1" className="ui-text ui-text-bold ui-text-xs ui-text-underline">
      Text XS Bold
    </Typography>
  </>
);