import { Button, Box } from "@mui/material";
import React from "react";

export const PrimaryButtonOutlinedDisabledTemplate = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="outlined" disabled size="extraSmall">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" disabled size="small">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" disabled>
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" disabled size="large">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" disabled size="extraLarge">
        CTA Button
      </Button>
    </Box>
  </>
);
