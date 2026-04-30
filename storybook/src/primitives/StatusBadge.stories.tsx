import type { Meta, StoryObj } from "@storybook/react";
import { StatusBadge } from "./StatusBadge";
import "../_shared/dynamic.css";

const meta: Meta<typeof StatusBadge> = {
  title: "Primitives/StatusBadge",
  component: StatusBadge,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "radio", options: ["Pending", "Approved", "Executed", "Rejected", "Healthy", "Degraded", "Impacted", "Unknown"] }
  }
};
export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Pending: Story = { args: { status: "Pending" } };
export const Approved: Story = { args: { status: "Approved" } };
export const Executed: Story = { args: { status: "Executed" } };
export const Healthy: Story = { args: { status: "Healthy" } };
export const Impacted: Story = { args: { status: "Impacted" } };
export const DynamicSurface: Story = {
  render: () => (
    <div className="kds-story-surface is-white">
      <div className="kds-surface-card">
        <div className="kds-row">
          {["Pending", "Approved", "Executed", "Rejected", "Monitoring"].map((status) => (
            <div className="kds-primitive-cell" key={status}>
              <StatusBadge status={(status === "Monitoring" ? "Degraded" : status) as Parameters<typeof StatusBadge>[0]["status"]} />
              <span className="kds-mono">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};
