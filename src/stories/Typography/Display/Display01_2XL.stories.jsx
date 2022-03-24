import { Typography } from "@mui/material";

export default {
  title: "DesignSystem/Typography/Display",
  component: Typography,
};

export const XL2 = () => (
  <>
    <Typography variant="h1" className="display display-light display-2xl">
      Display 2XL Regular
    </Typography>

    <Typography variant="h1" className="display display-regular display-2xl">
      Display 2XL Medium
    </Typography>

    <Typography variant="h1" className="display display-medium display-2xl">
      Display 2XL Semibold
    </Typography>

    <Typography variant="h1" className="display display-bold display-2xl">
      Display 2XL Bold
    </Typography>
  </>
);
