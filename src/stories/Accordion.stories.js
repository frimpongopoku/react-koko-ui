import Accordion from "../components/Accordion/Accordion";
import { ACCORDION_DATA } from "../components/Accordion/values";

export default {
  title: "Accordion",
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: ACCORDION_DATA,
  style: {},
  icons: [],
  rootClass: "",
  contentContainerClass: "",
  iconsContainerClass: "",
};
