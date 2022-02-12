import { Button, Box } from "@mui/material";
import React from "react";

export const PrimaryButtonTextDisabledTemplate = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="text" disabled size="extraSmall">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" disabled size="small">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" disabled>
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" disabled size="large">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" disabled size="extraLarge">
        CTA Button
      </Button>
    </Box>
  </>
);
