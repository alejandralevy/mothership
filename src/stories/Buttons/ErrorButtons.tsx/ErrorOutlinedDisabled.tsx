import { Button, Box } from "@mui/material";
import React from "react";

export const ErrorOutlinedDisabled = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="outlined" color="error" disabled size="extraSmall">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" color="error" disabled size="small">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" color="error" disabled>
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" color="error" disabled size="large">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" color="error" disabled size="extraLarge">
        CTA Button
      </Button>
    </Box>
  </>
);
