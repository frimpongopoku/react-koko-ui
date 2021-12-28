import React from "react";
import Textbox from "./../form generator/textbox/TextBox";
export default {
  title: "Textbox",
  component: Textbox,
};

const Template = (args) => <Textbox {...args} />;

export const Default = Template.bind({});
