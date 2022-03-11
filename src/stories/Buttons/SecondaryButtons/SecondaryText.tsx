import { Button, Box } from "@mui/material";
import React from "react";

export const SecondaryText = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="text" size="extraSmall" color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" size="small" color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" size="large" color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" size="extraLarge" color="secondary">
        CTA Button
      </Button>
    </Box>
  </>
);
