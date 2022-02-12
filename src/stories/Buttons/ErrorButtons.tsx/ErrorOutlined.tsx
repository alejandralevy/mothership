import { Button, Box } from "@mui/material";
import React from "react";

export const ErrorOutlined = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="outlined" color="error" size="extraSmall">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" color="error" size="small">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" color="error">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" color="error" size="large">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" color="error" size="extraLarge">
        CTA Button
      </Button>
    </Box>
  </>
);
