import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

interface DeltaArgs {
  delta: number;
  unit: string;
  direction: "up" | "down";
}

const meta: Meta<DeltaArgs> = {
  title: "Primitives/DeltaIndicator",
  tags: ["autodocs"],
  argTypes: {
    delta: { control: "number" },
    unit: { control: "select", options: ["%", "pts", "CIs", "pp", ""] },
    direction: { control: "radio", options: ["up", "down"] }
  },
  parameters: { layout: "fullscreen" }
};
export default meta;
type Story = StoryObj<DeltaArgs>;

const renderSingle = (args: DeltaArgs) => <StaticHtmlSurface id="primitives-deltaindicator--default" args={args} />;

export const Up: Story = { args: { delta: 2.1, unit: "pp", direction: "up" }, render: renderSingle };
export const Down: Story = { args: { delta: -14, unit: "", direction: "down" }, render: renderSingle };
export const Stable: Story = { args: { delta: 0, unit: "%", direction: "up" }, render: renderSingle };
export const DynamicSurface: Story = {
  render: () => <StaticHtmlSurface id="primitives-delta--matrix" />
};
