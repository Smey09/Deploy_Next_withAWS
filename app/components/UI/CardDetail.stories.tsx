import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ProductDetails from "../CardDetail"; // Ensure the correct import path

const meta: Meta<typeof ProductDetails> = {
  component: ProductDetails,
};
export default meta;

const Template: StoryFn<typeof ProductDetails> = (args) => (
  <ProductDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  thumbnail:
    "https://fdn.gsmarena.com/imgroot/news/23/09/apple-iphone-15-pro-what-to-expect/-822/gsmarena_001.jpg",
  title: "Simple Product",
  price: 99.99,
  description: "This is a sample product description.",
};
