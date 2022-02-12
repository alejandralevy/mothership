import { Button, Box } from "@mui/material";
import React from "react";

export default {
  title: "DesignSystem/ErrorButton",
  component: Button,
};

const Template = () => (
  <>
    <Box marginBottom="8px">
      <Button variant="contained" color="error" size="extraSmall">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" color="error" size="small">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" color="error">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" color="error" size="large">
        CTA Button
      </Button>
    </Box>

    <Box marginBottom="8px">
      <Button variant="contained" color="error" size="extraLarge">
        CTA Button
      </Button>
    </Box>
  </>
);

export const ErrorButton = Template.bind({});
