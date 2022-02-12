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

// export const PrimaryButton = PrimaryContained.bind({});
// export const PrimaryButtonDisabled = PrimaryContainedDisabled.bind({});
// export const PrimaryButtonOutlined = PrimaryOutlined.bind({});
// export const PrimaryButtonOutlinedDisabled = PrimaryOutlinedDisabled.bind({});
// export const PrimaryButtonText = PrimaryText.bind({});
// export const PrimaryButtonTextDisabled = PrimaryTextDisabled.bind({});

export const Contained = PrimaryContained.bind({});
export const ContainedDisabled = PrimaryContainedDisabled.bind({});
export const Outlined = PrimaryOutlined.bind({});
export const OutlinedDisable = PrimaryOutlinedDisabled.bind({});
export const Text = PrimaryText.bind({});
export const TextDisabled = PrimaryTextDisabled.bind({});
