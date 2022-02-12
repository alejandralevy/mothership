import { Button } from "@mui/material";
import {
  ErrorContained,
  ErrorContainedDisabled,
  ErrorOutlined,
  ErrorOutlinedDisabled,
  ErrorText,
  ErrorTextDisabled,
} from ".";

export default {
  title: "DesignSystem/ErrorButton",
  component: Button,
};

export const Contained = ErrorContained.bind({});
export const ContainedDisabled = ErrorContainedDisabled.bind({});
export const Outlined = ErrorOutlined.bind({});
export const OutlinedDisabled = ErrorOutlinedDisabled.bind({});
export const Text = ErrorText.bind({});
export const TextDisabled = ErrorTextDisabled.bind({});
