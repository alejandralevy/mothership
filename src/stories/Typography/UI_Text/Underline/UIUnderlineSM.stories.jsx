import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/UI Text/Underline",
  component: Typography,
};

export const SM = () => (
  <>
    <Typography variant="h1" className="ui-text ui-text-light ui-text-sm ui-text-underline">
      Text SM Regular
    </Typography>

    <Typography variant="h1" className="ui-text ui-text-regular ui-text-sm ui-text-underline">
      Text SM Medium
    </Typography>

    <Typography variant="h1" className="ui-text ui-text-medium ui-text-sm ui-text-underline">
      Text SM Semibold
    </Typography> 

    <Typography variant="h1" className="ui-text ui-text-bold ui-text-sm ui-text-underline">
      Text SM Bold
    </Typography>
  </>
);