import { Button, Box } from "@mui/material";
import React from "react";

export const SecondaryOutlinedDisabled = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="outlined" disabled size="extraSmall" color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" disabled size="small" color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" disabled color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" disabled size="large" color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" disabled size="extraLarge" color="secondary">
        CTA Button
      </Button>
    </Box>
  </>
);
