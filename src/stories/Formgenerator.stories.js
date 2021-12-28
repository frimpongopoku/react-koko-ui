import React from "react";
import FormGenerator from "./../form generator";

export default {
  component: FormGenerator,
  title: "Form Generator",
};

const Template = (args) => <FormGenerator {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "This is the formo",
  subtitle: "So please enter your things, thank you",
  fields: [
    {
      fieldType: "RADIO",
      label: "Enter they ieys",
      placeholder: "Textbox you know",
    },
  ],
};
