import type { Meta, StoryObj } from "@storybook/react";
import { ToolCallCard } from "./ToolCallCard";

const meta: Meta<typeof ToolCallCard> = {
  title: "Agentic/ToolCallCard",
  component: ToolCallCard,
  tags: ["autodocs"],
  argTypes: {
    state: { control: "radio", options: ["pending", "running", "ok", "err", "requested", "executing", "completed", "failed"] },
    destructive: { control: "boolean" },
    toolName: { control: "text" },
    stepLabel: { control: "text" },
    meta: { control: "text" },
    resultSummary: { control: "text" },
    gateLabel: { control: "text" },
    editableKeys: { control: "object" },
    args: { control: "object" }
  }
};
export default meta;
type Story = StoryObj<typeof ToolCallCard>;

export const Pending: Story = {
  args: {
    toolName: "cmdb.query",
    args: { filter: "status:orphaned AND domain:payments", window: "24h", limit: 50 },
    editableKeys: ["filter", "window", "limit"],
    state: "pending",
    stepLabel: "step 2 of 6"
  }
};
export const Destructive: Story = {
  args: { toolName: "cmdb.write", args: { ci: "bINC4429181", action: "decommission" }, state: "pending", destructive: true, gateLabel: "destructive write - approval required" }
};
export const Running: Story = {
  args: { toolName: "graph.expand", args: { ci: "bINC4429181", depth: 2 }, state: "running", meta: "step 3 of 6 - upstream-1 - 1.4s elapsed" }
};
export const Completed: Story = {
  args: { toolName: "cmdb.query", args: { ci: "bINC4429181", depth: 2 }, state: "ok", resultSummary: "22 rows" }
};
export const Failed: Story = {
  args: { toolName: "graph.write", args: { operation: "mutate", target: "payments-svc" }, state: "err" }
};
