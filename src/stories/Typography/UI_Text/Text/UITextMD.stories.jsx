import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/UI Text/Text",
  component: Typography,
};

export const MD = () => (
  <>
    <Typography className="ui-text ui-text-light ui-text-md">
      Text MD regular
    </Typography>

    <Typography variant="h1" className="ui-text ui-text-regular ui-text-md">
      Text MD medium
    </Typography>

    <Typography variant="h1" className="ui-text ui-text-medium ui-text-md">
      Text MD semibold
    </Typography> 

    <Typography variant="h1" className="ui-text ui-text-bold ui-text-md">
      Text MD bold
    </Typography>
  </>
);