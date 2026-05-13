import type { Meta, StoryObj } from "@storybook/react";
import { ConfidenceBadge } from "./ConfidenceBadge";
import { PrimitivesConfidence } from "./PrimitivesConfidence";

const meta: Meta<typeof ConfidenceBadge> = {
  title: "Primitives/ConfidenceBadge",
  component: ConfidenceBadge,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    role: { control: "radio", options: ["full", "review", "readonly"] }
  },
  parameters: { layout: "centered" }
};
export default meta;
type Story = StoryObj<typeof ConfidenceBadge>;

export const Default: Story = { args: { value: 92, role: "full" } };
export const Low: Story = { args: { value: 58, role: "full" } };
export const Readonly: Story = { args: { value: 92, role: "readonly" } };
export const NoScore: Story = { args: { value: null, role: "full" } };

export const Showcase: Story = {
  render: () => <PrimitivesConfidence />,
  parameters: { layout: "fullscreen" },
};
