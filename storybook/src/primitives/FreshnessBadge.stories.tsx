import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

interface FreshnessArgs {
  ageDays: number;
  threshold: number;
}

const meta: Meta<FreshnessArgs> = {
  title: "Primitives/FreshnessBadge",
  tags: ["autodocs"],
  argTypes: {
    ageDays: { control: { type: "range", min: 0, max: 60, step: 1 } },
    threshold: { control: { type: "range", min: 1, max: 30, step: 1 } }
  },
  parameters: { layout: "fullscreen" }
};
export default meta;
type Story = StoryObj<FreshnessArgs>;

const renderSingle = (args: FreshnessArgs) => <StaticHtmlSurface id="primitives-freshnessbadge--default" args={args} />;

export const Today: Story = { args: { ageDays: 0, threshold: 7 }, render: renderSingle };
export const Fresh: Story = { args: { ageDays: 3, threshold: 7 }, render: renderSingle };
export const Stale: Story = { args: { ageDays: 34, threshold: 7 }, render: renderSingle };
export const DynamicSurface: Story = {
  render: () => <StaticHtmlSurface id="primitives-freshness--matrix" />
};
