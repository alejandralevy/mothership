import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/UI Text",
  component: Typography,
};

export const LG = () => (
  <>
    <Typography variant="h1" className="light ui-text-lg">
      Text LG regular
    </Typography>

    <Typography variant="h1" className="ui-text-lg">
      Text LG medium
    </Typography>

    <Typography variant="h1" className="semibold ui-text-lg">
      Text LG semibold
    </Typography> 

    <Typography variant="h1" className="bold ui-text-lg">
      Text LG bold
    </Typography>
  </>
);