import React from "react";
import Dropdown from "./../form generator/dropdown/Dropdown";
export default {
  title: "Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
export const Legacy = Template.bind({});

Legacy.args = {
  type: "legacy",
};
