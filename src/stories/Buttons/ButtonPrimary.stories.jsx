import { Button, Box } from "@mui/material";
import { PrimaryButtonTemplate } from "./PrimaryButton";
import { PrimaryButtonDisabledTemplate } from "./PrimaryButtonDisabled";
import { PrimaryButtonOutlinedTemplate } from "./PrimaryButtonOutlined";
import { PrimaryButtonOutlinedDisabledTemplate } from "./PrimaryButtonOutlinedDisabled";
import { PrimaryButtonTextTemplate } from "./PrimaryButtonText";
import { PrimaryButtonTextDisabledTemplate } from "./PrimaryButtonTextDisabled";

export default {
  title: "DesignSystem/PrimaryButton",
  component: Button,
};

export const PrimaryButton = PrimaryButtonTemplate.bind({});
export const PrimaryButtonDisabled = PrimaryButtonDisabledTemplate.bind({});
export const PrimaryButtonOutlined = PrimaryButtonOutlinedTemplate.bind({});
export const PrimaryButtonOutlinedDisabled =
  PrimaryButtonOutlinedDisabledTemplate.bind({});
export const PrimaryButtonText = PrimaryButtonTextTemplate.bind({});
export const PrimaryButtonTextDisabled = PrimaryButtonTextDisabledTemplate.bind(
  {}
);
