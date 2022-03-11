import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/UI Text",
  component: Typography,
};

export const XL = () => (
  <>
    <Typography variant="h1" className="light ui-text-xl">
      Text XL regular
    </Typography>

    <Typography variant="h1" className="ui-text-xl">
      Text XL medium
    </Typography>

    <Typography variant="h1" className="semibold ui-text-xl">
      Text XL semibold
    </Typography> 

    <Typography variant="h1" className="bold ui-text-xl">
      Text XL bold
    </Typography>
  </>
);