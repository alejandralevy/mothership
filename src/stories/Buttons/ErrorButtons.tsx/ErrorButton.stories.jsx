import { Button } from "@mui/material";
import { ErrorContained, ErrorContainedDisabled } from ".";

export default {
  title: "DesignSystem/ErrorButton",
  component: Button,
};

export const ErrorContainedButton = ErrorContained.bind({});
export const ErrorContainedDisabledButton = ErrorContainedDisabled.bind({});
// export const ErrorButtonDisabled = ErrorContainedDisabled.bind({});
// export const PrimaryButtonOutlined = PrimaryOutlined.bind({});
// export const PrimaryButtonOutlinedDisabled =
//   PrimaryOutlinedDisabled.bind({});
// export const PrimaryButtonText = PrimaryText.bind({});
// export const PrimaryButtonTextDisabled = PrimaryTextDisabled.bind(
//   {}
// );
