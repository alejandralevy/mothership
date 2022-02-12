import { Button, Box } from "@mui/material";
import React from "react";

export const PrimaryButtonDisabledTemplate = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="contained" disabled size="extraSmall">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" disabled size="small">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" disabled>
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" disabled size="large">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" disabled size="extraLarge">
        CTA Button
      </Button>
    </Box>
  </>
);
