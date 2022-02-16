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
  title: "DesignSystem/Buttons/PrimaryButton",
  component: Button,
};

export const Contained = PrimaryContained.bind({});
export const ContainedDisabled = PrimaryContainedDisabled.bind({});
export const Outlined = PrimaryOutlined.bind({});
export const OutlinedDisable = PrimaryOutlinedDisabled.bind({});
export const Text = PrimaryText.bind({});
export const TextDisabled = PrimaryTextDisabled.bind({});
