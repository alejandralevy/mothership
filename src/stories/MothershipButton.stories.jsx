import React from "react";
import MothershipButton from "./MothershipButton";

export default {
  title: "Example/MothershipButton",
  component: MothershipButton,
};

const Template = (args) => (
  <>
    <MothershipButton {...args} />
  </>
);

export const Primary = Template.bind({});
