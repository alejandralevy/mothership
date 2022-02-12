import { Button, Box } from "@mui/material";
import React from "react";

export const PrimaryOutlined = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="outlined" size="extraSmall">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" size="small">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined">CTA Button</Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" size="large">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="outlined" size="extraLarge">
        CTA Button
      </Button>
    </Box>
  </>
);
