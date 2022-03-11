import { Button, Box } from "@mui/material";
import React from "react";

export const SecondaryContained = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="contained" size="extraSmall" color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" size="small" color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" size="large" color="secondary">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" size="extraLarge" color="secondary">
        CTA Button
      </Button>
    </Box>
  </>
);
