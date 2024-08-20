import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ProductDetails, { ProductDetailsProps } from "../CardDetail";
import CardDetail from "../CardDetail";

// export default {
//   title: "UI/Card/ProductDetails",
//   component: ProductDetails,
// } as Meta;

const meta: Meta<typeof CardDetail> = {
  component: CardDetail,
};
export default meta;

const Template: StoryFn<ProductDetailsProps> = (args) => (
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
