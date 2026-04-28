import type { Meta, StoryObj } from "@storybook/react";
import { AgentStatusBar } from "./AgentStatusBar";

const meta: Meta<typeof AgentStatusBar> = {
  title: "Agentic/AgentStatusBar",
  component: AgentStatusBar,
  tags: ["autodocs"],
  argTypes: {
    state: { control: "radio", options: ["started", "thinking", "streaming", "paused", "done"] },
    agent: { control: "text" },
    step:  { control: "text" },
    stepThrough: { control: "boolean" }
  },
  parameters: { docs: { description: { component: "Sticky bar above any agentic surface. Surfaces run state, the active step, and per-session controls (pause/resume, branch, step-through)." } } }
};
export default meta;
type Story = StoryObj<typeof AgentStatusBar>;

export const Thinking: Story  = { args: { state: "thinking",  agent: "Reconciliation Agent", step: "Step 2/5 · Resolving stale CIs" } };
export const Streaming: Story = { args: { state: "streaming", agent: "Reconciliation Agent", step: "Step 3/5 · Drafting recommendation" } };
export const Paused: Story    = { args: { state: "paused",    agent: "Reconciliation Agent", step: "Step 3/5 · Awaiting input" } };
export const Done: Story      = { args: { state: "done",      agent: "Reconciliation Agent", step: "5/5 complete" } };
