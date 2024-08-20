// components/ButtonGradient.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ButtonGradient, { ButtonGradientProps } from "./ButtonGradient";

const meta: Meta<typeof ButtonGradient> = {
  component: ButtonGradient,
};
export default meta;

const Template: StoryFn<ButtonGradientProps> = (args) => (
  <ButtonGradient {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "Click Me",
};

export const WithCustomText = Template.bind({});
WithCustomText.args = {
  text: "Custom Text",
};
