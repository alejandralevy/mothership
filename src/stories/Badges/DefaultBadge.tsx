import { Badge, Box } from "@mui/material";
import { Mail } from "react-feather";
import React from "react";

export const DefaultBadge = () => (
  <>
    <Box marginBottom="8px">
      <Badge badgeContent={100} color="secondary">
        <Mail />
      </Badge>
    </Box>
  </>
);
