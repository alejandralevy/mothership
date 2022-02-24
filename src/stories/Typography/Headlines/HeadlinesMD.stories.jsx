import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Headlines",
  component: Typography,
};

export const MD = () => (
  <>
    <Typography variant="h4" className="light">
      Headline md light
    </Typography>

    <Typography variant="h4">Headline md regular</Typography>

    <Typography variant="h4" className="semibold">
      Headline md semibold
    </Typography>

    <Typography variant="h4" className="bold">
      Headline md bold
    </Typography>
  </>
);
