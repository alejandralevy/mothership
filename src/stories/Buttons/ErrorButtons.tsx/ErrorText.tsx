import { Button, Box } from "@mui/material";
import React from "react";

export const ErrorText = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="text" color="error" size="extraSmall">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" color="error" size="small">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" color="error">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" color="error" size="large">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="text" color="error" size="extraLarge">
        CTA Button
      </Button>
    </Box>
  </>
);
