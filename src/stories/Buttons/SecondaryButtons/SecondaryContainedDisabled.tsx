import { Button, Box } from "@mui/material";
import React from "react";

export const SecondaryContainedDisabled = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="contained" color="secondary" disabled size="extraSmall">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" color="secondary" disabled size="small">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" color="secondary" disabled>
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" color="secondary" disabled size="large">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" color="secondary" disabled size="extraLarge">
        CTA Button
      </Button>
    </Box>
  </>
);
