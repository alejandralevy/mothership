import { Button, Box } from "@mui/material";
import React from "react";

export const PrimaryText = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="text" size="extraSmall">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" size="small">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text">CTA Button</Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" size="large">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" size="extraLarge">
        CTA Button
      </Button>
    </Box>
  </>
);
