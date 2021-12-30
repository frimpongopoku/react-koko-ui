import React from "react";
import TabView from "../components/TabView/TabView";

export default {
  component: TabView,
  title: "TabView",
};

const Template = (args) => <TabView {...args} />;
export const Default = Template.bind({});

Default.args = {
  headerRender: (tab, s, sele) => (
    <small onClick={() => sele()}>{tab?.name}</small>
  ),
};
