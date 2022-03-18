import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/UI Text/Underline",
  component: Typography,
};

export const LG = () => (
  <>
    <Typography variant="h1" className="ui-text ui-text-light ui-text-lg ui-text-underline">
      Text LG Regular
    </Typography>

    <Typography variant="h1" className="ui-text ui-text-regular ui-text-lg ui-text-underline">
      Text LG Medium
    </Typography>

    <Typography variant="h1" className="ui-text ui-text-medium ui-text-lg ui-text-underline">
      Text LG Semibold
    </Typography> 

    <Typography variant="h1" className="ui-text ui-text-bold ui-text-lg ui-text-underline">
      Text LG Bold
    </Typography>
  </>
);