import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

const meta: Meta = {
  title: "Foundations/Colors",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};
export default meta;
type Story = StoryObj;

export const Brand: Story = { render: () => <StaticHtmlSurface id="foundations-colors--brand" /> };
export const Neutrals: Story = { render: () => <StaticHtmlSurface id="foundations-colors--slate" /> };
export const Severity: Story = { render: () => <StaticHtmlSurface id="foundations-colors--severity" /> };
export const StatusRAG: Story = { render: () => <StaticHtmlSurface id="foundations-colors--status" /> };
export const Chart: Story = { render: () => <StaticHtmlSurface id="foundations-colors--chart" /> };
