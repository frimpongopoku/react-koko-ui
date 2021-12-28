import React from "react";
import FormGenerator from "./../form generator";

export default {
  component: FormGenerator,
  title: "Form Generator",
};

const Template = (args) => <FormGenerator {...args} />;

export const Default = Template.bind({});

// Default.args = {
//   onFileSelected: (data) => console.log("I am the content bro", data),
// };
