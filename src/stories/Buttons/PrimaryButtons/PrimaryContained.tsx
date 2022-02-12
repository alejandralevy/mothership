import { Button, Box } from "@mui/material";
import React from "react";

export const PrimaryContained = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="contained" size="extraSmall">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" size="small">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained">CTA Button</Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" size="large">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" size="extraLarge">
        CTA Button
      </Button>
    </Box>
  </>
);
