import type { Meta, StoryObj } from "@storybook/react";
import { DeltaIndicator } from "./DeltaIndicator";

const meta: Meta<typeof DeltaIndicator> = {
  title: "Primitives/DeltaIndicator",
  component: DeltaIndicator,
  tags: ["autodocs"],
  argTypes: {
    delta: { control: "number" },
    unit:  { control: "select", options: ["%", "pts", "CIs", ""] },
    direction: { control: "radio", options: ["up", "down"] },
    invertSemantics: { control: "boolean" },
    referenceLabel: { control: "text" }
  },
  parameters: { docs: { description: { component: "Signed delta vs a reference period. Always prefixed with + or − and an arrow icon. Color is driven by whether the direction is desirable (use `invertSemantics` for metrics where 'down is good')." } } }
};
export default meta;
type Story = StoryObj<typeof DeltaIndicator>;

export const Up: Story    = { args: { delta: 3.4, unit: "%", referenceLabel: "vs last week" } };
export const Down: Story  = { args: { delta: -180, unit: " CIs", referenceLabel: "stale CIs WoW" } };
export const Inverted: Story = { args: { delta: 12, unit: "%", invertSemantics: true, referenceLabel: "error rate WoW" } };
