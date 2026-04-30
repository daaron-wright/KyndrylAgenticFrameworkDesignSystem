import type { Meta, StoryObj } from "@storybook/react";
import { DeltaIndicator } from "./DeltaIndicator";
import "../_shared/dynamic.css";

const meta: Meta<typeof DeltaIndicator> = {
  title: "Primitives/DeltaIndicator",
  component: DeltaIndicator,
  tags: ["autodocs"],
  argTypes: {
    delta: { control: "number" },
    unit: { control: "select", options: ["%", "pts", "CIs", "pp", ""] },
    direction: { control: "radio", options: ["up", "down"] },
    invertSemantics: { control: "boolean" },
    referenceLabel: { control: "text" }
  }
};
export default meta;
type Story = StoryObj<typeof DeltaIndicator>;

export const Up: Story = { args: { delta: 2.1, unit: "pp", direction: "up", referenceLabel: "vs last wk" } };
export const Down: Story = { args: { delta: -14, unit: "", direction: "down", referenceLabel: "vs yesterday" } };
export const Stable: Story = { args: { delta: 0, unit: "%", referenceLabel: "stable" } };
export const DynamicSurface: Story = {
  render: () => (
    <div className="kds-story-surface is-white">
      <div className="kds-surface-card">
        <div className="kds-row">
          <DeltaIndicator delta={2.1} unit="pp" referenceLabel="vs last wk" />
          <DeltaIndicator delta={-14} unit="" direction="down" referenceLabel="vs yesterday" />
          <DeltaIndicator delta={0} unit="%" referenceLabel="stable" />
        </div>
      </div>
    </div>
  )
};
