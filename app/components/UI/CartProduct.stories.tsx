import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CartProduct, { CartProductProps } from "../CardProduct";

// export default {
//   title: "UI/Card/CartProduct",
//   component: CartProduct,
// } as Meta;

const meta: Meta<typeof CartProduct> = {
  component: CartProduct,
};
export default meta;

const Template: StoryFn<CartProductProps> = (args) => <CartProduct {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    id: "1",
    name: "Simple Product",
    model: "XYZ123",
    brand: "Sample Brand",
    price: 99.99,
    description: "This is a sample product description.",
    about: "Details about the product.",
    image:
      "https://fdn.gsmarena.com/imgroot/news/23/09/apple-iphone-15-pro-what-to-expect/-822/gsmarena_001.jpg",
  },
};
