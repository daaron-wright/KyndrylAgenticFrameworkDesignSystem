import type { Meta, StoryObj } from "@storybook/react";
import { DeltaIndicator } from "./DeltaIndicator";
import { PrimitivesDelta } from "./PrimitivesDelta";

const meta: Meta<typeof DeltaIndicator> = {
  title: "Primitives/DeltaIndicator",
  component: DeltaIndicator,
  tags: ["autodocs"],
  argTypes: {
    delta: { control: "number" },
    unit: { control: "select", options: ["%", "pts", "CIs", "pp", ""] },
    direction: { control: "radio", options: ["up", "down"] }
  },
  parameters: { layout: "centered" }
};
export default meta;
type Story = StoryObj<typeof DeltaIndicator>;

export const Up: Story = { args: { delta: 2.1, unit: "pp", direction: "up", referenceLabel: "vs last wk" } };
export const Down: Story = { args: { delta: -14, unit: "", direction: "down" } };
export const Stable: Story = { args: { delta: 0, unit: "%", direction: "up" } };

export const Showcase: Story = {
  render: () => <PrimitivesDelta />,
  parameters: { layout: "fullscreen" },
};
