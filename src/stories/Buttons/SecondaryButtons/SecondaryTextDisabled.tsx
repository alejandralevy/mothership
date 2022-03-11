import { Button, Box } from "@mui/material";
import React from "react";

export const SecondaryTextDisabled = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="text" disabled size="extraSmall" color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" disabled size="small" color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" disabled color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" disabled size="large" color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" disabled size="extraLarge" color="secondary">
        CTA Button
      </Button>
    </Box>
  </>
);
