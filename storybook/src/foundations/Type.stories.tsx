import type { Meta, StoryObj } from "@storybook/react";
import { TypeDisplay } from "./TypeDisplay";
import { TypeBody } from "./TypeBody";

const meta: Meta = {
  title: "Foundations/Type",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};
export default meta;

export const Display: StoryObj = { render: () => <TypeDisplay /> };
export const Body: StoryObj = { render: () => <TypeBody /> };
