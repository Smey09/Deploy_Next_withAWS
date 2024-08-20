// components/CardSelections.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CardSelections, { CardSelectionsProps } from "./CardSeletions";

const meta: Meta<typeof CardSelections> = {
  component: CardSelections,
};
export default meta;

const Template: StoryFn<CardSelectionsProps> = (args) => (
  <CardSelections {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "1",
  title: "Choose Pages",
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ],
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  },
};

export const WithCustomText = Template.bind({});
WithCustomText.args = {
  id: "2",
  title: "Choose Custom Pages",
  options: [
    { value: "custom1", label: "Custom Option 1" },
    { value: "custom2", label: "Custom Option 2" },
  ],
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  },
};
