import {ChevronRightIcon} from "@heroicons/react/outline";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Breadcrumb from "./Breadcrumb";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  icon: <ChevronRightIcon className="h-5 w-5 mt-2 ml-1" />,
  building: "SampleBuilding",
  number: "999",
  onClick: () => console.log("clicked"),
};

export const BreadcrumbNoIcon = Template.bind({});
BreadcrumbNoIcon.args = {...Primary.args, icon: null};
