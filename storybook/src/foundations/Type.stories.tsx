import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

const meta: Meta = {
  title: "Foundations/Type",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};
export default meta;
type Story = StoryObj;

export const Display: Story = { render: () => <StaticHtmlSurface id="foundations-type--display" /> };
export const Body: Story = { render: () => <StaticHtmlSurface id="foundations-type--body" /> };
