import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/UI Text/Underline",
  component: Typography,
};

export const XL = () => (
  <>
    <Typography variant="h1" className="ui-text ui-text-light ui-text-xl ui-text-underline">
      Text XL Regular
    </Typography>

    <Typography variant="h1" className="ui-text ui-text-regular ui-text-xl ui-text-underline">
      Text XL Medium
    </Typography>

    <Typography variant="h1" className="ui-text ui-text-medium ui-text-xl ui-text-underline">
      Text XL Semibold
    </Typography> 

    <Typography variant="h1" className="ui-text ui-text-bold ui-text-xl ui-text-underline">
      Text XL Bold
    </Typography>
  </>
);