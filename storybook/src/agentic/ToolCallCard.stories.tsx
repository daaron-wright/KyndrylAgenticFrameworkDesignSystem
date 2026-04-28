import type { Meta, StoryObj } from "@storybook/react";
import { ToolCallCard } from "./ToolCallCard";

const meta: Meta<typeof ToolCallCard> = {
  title: "Agentic/ToolCallCard",
  component: ToolCallCard,
  tags: ["autodocs"],
  argTypes: {
    state: { control: "radio", options: ["requested", "executing", "completed", "failed"] },
    destructive: { control: "boolean" }
  }
};
export default meta;
type Story = StoryObj<typeof ToolCallCard>;

export const Requested: Story = {
  args: { toolName: "graph.read", args: { ci: "bINC4429181", depth: 2 }, state: "requested" }
};
export const Destructive: Story = {
  args: { toolName: "cmdb.write", args: { ci: "bINC4429181", action: "decommission" }, state: "requested", destructive: true }
};
export const Executing: Story = {
  args: { toolName: "graph.read", args: { ci: "bINC4429181", depth: 2 }, state: "executing" }
};
export const Completed: Story = {
  args: { toolName: "graph.read", args: { ci: "bINC4429181", depth: 2 }, state: "completed" }
};
