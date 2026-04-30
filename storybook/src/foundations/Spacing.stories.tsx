import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

const meta: Meta = {
  title: "Foundations/Spacing",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};
export default meta;
type Story = StoryObj;

export const Scale: Story = { render: () => <StaticHtmlSurface id="foundations-spacing--scale" /> };
export const Radii: Story = { render: () => <StaticHtmlSurface id="foundations-spacing--radii" /> };
export const Elevation: Story = { render: () => <StaticHtmlSurface id="foundations-spacing--elevation" /> };
