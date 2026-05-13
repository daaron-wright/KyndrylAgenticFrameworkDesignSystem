import type { Meta, StoryObj } from "@storybook/react";
import { BrandIcons } from "./BrandIcons";

const meta: Meta = {
  title: "Foundations/Icons",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};
export default meta;

export const Library: StoryObj = { render: () => <BrandIcons /> };
