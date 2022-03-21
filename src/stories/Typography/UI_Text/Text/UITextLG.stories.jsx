import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/UI Text/Text",
  component: Typography,
};

export const LG = () => (
  <>
    <Typography variant="h1" className="ui-text ui-text-light ui-text-lg">
      Text LG Regular
    </Typography>

    <Typography variant="h1" className="ui-text ui-text-regular ui-text-lg">
      Text LG Medium
    </Typography>

    <Typography variant="h1" className="ui-text ui-text-medium ui-text-lg">
      Text LG Semibold
    </Typography> 

    <Typography variant="h1" className="ui-text ui-text-bold ui-text-lg">
      Text LG Bold
    </Typography>
  </>
);