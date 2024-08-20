import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SimpleCard, { SimpleCardProps } from "./SimpleCard";

const meta: Meta<typeof SimpleCard> = {
  component: SimpleCard,
};
export default meta;

const Template: StoryFn<SimpleCardProps> = (args) => <SimpleCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl:
    "https://fdn.gsmarena.com/imgroot/news/23/09/apple-iphone-15-pro-what-to-expect/-822/gsmarena_001.jpg",
  date: "Sun 18 Aug 12:00PM",
  title: "New Features in iPhone 15 Pro",
  description:
    "Explore the latest features and improvements in the new iPhone 15 Pro.",
  iconText: "Learn more",
};

export const ImageTitle = Template.bind({});
ImageTitle.args = {
  imageUrl:
    "https://fdn.gsmarena.com/imgroot/news/23/09/apple-iphone-15-pro-what-to-expect/-822/gsmarena_001.jpg",
  date: "",
  title: "New Features in iPhone 15 Pro",
  description: "",
  iconText: "Learn more",
};
