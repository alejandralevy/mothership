import { Button } from "@mui/material";
import {
  PrimaryContained,
  PrimaryContainedDisabled,
  PrimaryOutlined,
  PrimaryOutlinedDisabled,
  PrimaryText,
  PrimaryTextDisabled,
} from ".";

export default {
  title: "DesignSystem/PrimaryButton",
  component: Button,
};

export const PrimaryButton = PrimaryContained.bind({});
export const PrimaryButtonDisabled = PrimaryContainedDisabled.bind({});
export const PrimaryButtonOutlined = PrimaryOutlined.bind({});
export const PrimaryButtonOutlinedDisabled = PrimaryOutlinedDisabled.bind({});
export const PrimaryButtonText = PrimaryText.bind({});
export const PrimaryButtonTextDisabled = PrimaryTextDisabled.bind({});
