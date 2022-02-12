import { Button, Box } from "@mui/material";
import { PrimaryButtonTemplate } from "./PrimaryButton";
import { PrimaryButtonDisabledTemplate } from "./PrimaryButtonDisabled";
import { PrimaryButtonOutlinedTemplate } from "./PrimaryButtonOutlined";

export default {
  title: "DesignSystem/PrimaryButton",
  component: Button,
};

export const PrimaryButton = PrimaryButtonTemplate.bind({});
export const PrimaryButtonDisabled = PrimaryButtonDisabledTemplate.bind({});
export const PrimaryButtonOutlined = PrimaryButtonOutlinedTemplate.bind({});
