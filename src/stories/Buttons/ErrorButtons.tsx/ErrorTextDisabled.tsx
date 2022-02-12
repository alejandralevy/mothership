import { Button, Box } from "@mui/material";
import React from "react";

export const ErrorTextDisabled = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="text" disabled color="error" size="extraSmall">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" color="error" disabled size="small">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" color="error" disabled>
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" color="error" disabled size="large">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" color="error" disabled size="extraLarge">
        CTA Button
      </Button>
    </Box>
  </>
);
