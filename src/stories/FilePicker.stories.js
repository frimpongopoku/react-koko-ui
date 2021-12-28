import React from "react";
import FilePicker from "./../form generator/file picker/ImageSelector";

export default {
  component: FilePicker,
  title: "File Picker",
};

const Template = (args) => <FilePicker {...args} />;

export const Default = Template.bind({});

Default.args = {
  onFileSelected: (data) => console.log("I am the content bro", data),
};
