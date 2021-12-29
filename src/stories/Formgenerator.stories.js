import React from "react";
import FormGenerator from "./../form generator";

export default {
  component: FormGenerator,
  title: "Form Generator",
};

const Template = (args) => <FormGenerator {...args} />;

export const Default = Template.bind({});

Default.args = {
  onSubmit: (data) => console.log("FORM ON SUBMIT: ", data),
  title: "This is the form",
  subtitle: "So please enter your things, thank you",
  fields: [
    {
      fieldType: "DROPDOWN",
      label: "Choose your dropdown item",
      placeholder: "Anything from the dropdown",
      data: ["boy", "girl", "Shoe", "Grapes"],
      defaultValue: ["girl"],
      name: "dropdown",
      type: "full",
      // multiple: true,
    },
    {
      fieldType: "AUTOCOMPLETE",
      label: "Select your pet name",
      placeholder: "Enter pet name...",
      defaultValue: ["police"],
      name: "auto_complete",
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
      defaultValue: "Orange",
      name: "radio",
      // required: true,
    },
    {
      fieldType: "MEDIA_UPLOAD",
      label: "Upload an image for you BS",
      placeholder: "Enter animal...",
      defaultValue: "https://i.pravatar.cc/200",
      name: "image",
      // required: true,
    },

    {
      fieldType: "TEXTBOX",
      label: "What is your bestfriend's name?",
      placeholder: "Textbox you know",
      defaultValue: "You gotta chat shit here bro",
      name: "input",
    },
    {
      fieldType: "CHECKBOXGROUP",
      label: "Choose your checkbox group item",
      placeholder: "Textbox you know",
      data: ["boy", "girl", "Shoe", "Grapes"],
      defaultValue: ["girl", "grapes"],
      checked: true,
      name: "checkbox_group",
    },
    {
      fieldType: "TEXTAREA",
      label: "Write something small about yourself bro",
      placeholder: "Tell us about yourself",
      checked: true,
      defaultValue: "This is a whole essay about yourself bruh",
      name: "textarea",
    },
  ],
};
