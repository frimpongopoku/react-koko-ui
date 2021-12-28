import React from "react";
import FormGenerator from "./../form generator";

export default {
  component: FormGenerator,
  title: "Form Generator",
};

const Template = (args) => <FormGenerator {...args} />;

export const Default = Template.bind({});

Default.args = {
  onSubmit: (data) => console.log("I am the content bruh", data),
  title: "This is the formo",
  subtitle: "So please enter your things, thank you",
  fields: [
    {
      fieldType: "DROPDOWN",
      label: "Choose your dropdown item",
      placeholder: "Anything from the dropdown",
      values: ["boy", "girl", "Shoe", "Grapes"],
      name: "dropdown",
      type: "full",
      // multiple: true,
    },
    {
      fieldType: "CHECKBOX",
      label: "I am the checkbox buda",
      placeholder: "Textbox you know",
      checked: true,
      name: "checkbox",
    },
    {
      fieldType: "RADIOGROUP",
      label: "What is your favorite animal?",
      placeholder: "Enter animal...",

      name: "radio",
    },

    {
      fieldType: "TEXTBOX",
      label: "What is your bestfriend's name?",
      placeholder: "Textbox you know",
      name: "input",
    },
    {
      fieldType: "CHECKBOXGROUP",
      label: "Choose your checkbox group item",
      placeholder: "Textbox you know",
      data: ["boy", "girl", "Shoe", "Grapes"],
      checked: true,
      name: "checkbox_group",
    },
    {
      fieldType: "TEXTAREA",
      label: "Write something small about yourself bro",
      placeholder: "Tell us about yourself",
      checked: true,
      name: "textarea",
    },
  ],
};
