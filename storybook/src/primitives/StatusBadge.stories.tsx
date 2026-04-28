import type { Meta, StoryObj } from "@storybook/react";
import { StatusBadge } from "./StatusBadge";

const meta: Meta<typeof StatusBadge> = {
  title: "Primitives/StatusBadge",
  component: StatusBadge,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "radio", options: ["Pending","Approved","Executed","Rejected","Healthy","Degraded","Impacted","Unknown"] }
  }
};
export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Approved: Story = { args: { status: "Approved" } };
export const Pending: Story  = { args: { status: "Pending" } };
export const Executed: Story = { args: { status: "Executed" } };
export const Healthy: Story  = { args: { status: "Healthy" } };
export const Impacted: Story = { args: { status: "Impacted" } };
