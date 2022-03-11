import { Button } from "@mui/material";
import {
  SecondaryContained,
  SecondaryContainedDisabled,
  SecondaryOutlined,
  SecondaryOutlinedDisabled,
  SecondaryText,
  SecondaryTextDisabled,
} from ".";

export default {
  title: "DesignSystem/Buttons/SecondaryButton",
  component: Button,
};

export const Contained = SecondaryContained.bind({});
export const ContainedDisabled = SecondaryContainedDisabled.bind({});
export const Outlined = SecondaryOutlined.bind({});
export const OutlinedDisable = SecondaryOutlinedDisabled.bind({});
export const Text = SecondaryText.bind({});
export const TextDisabled = SecondaryTextDisabled.bind({});
