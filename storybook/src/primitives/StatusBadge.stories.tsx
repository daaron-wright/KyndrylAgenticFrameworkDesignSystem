import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

type StatusValue = "Pending" | "Approved" | "Executed" | "Rejected" | "Healthy" | "Degraded" | "Impacted" | "Unknown";
interface StatusArgs {
  status: StatusValue;
}

const meta: Meta<StatusArgs> = {
  title: "Primitives/StatusBadge",
  tags: ["autodocs"],
  argTypes: {
    status: { control: "radio", options: ["Pending", "Approved", "Executed", "Rejected", "Healthy", "Degraded", "Impacted", "Unknown"] }
  },
  parameters: { layout: "fullscreen" }
};
export default meta;
type Story = StoryObj<StatusArgs>;

const renderSingle = (args: StatusArgs) => <StaticHtmlSurface id="primitives-statusbadge--default" args={args} />;

export const Pending: Story = { args: { status: "Pending" }, render: renderSingle };
export const Approved: Story = { args: { status: "Approved" }, render: renderSingle };
export const Executed: Story = { args: { status: "Executed" }, render: renderSingle };
export const Healthy: Story = { args: { status: "Healthy" }, render: renderSingle };
export const Impacted: Story = { args: { status: "Impacted" }, render: renderSingle };
export const DynamicSurface: Story = {
  render: () => <StaticHtmlSurface id="primitives-status--matrix" />
};
