import type { Meta, StoryObj } from "@storybook/react";
import { AgentStatusBar } from "./AgentStatusBar";

const meta: Meta<typeof AgentStatusBar> = {
  title: "Agentic/AgentStatusBar",
  component: AgentStatusBar,
  tags: ["autodocs"],
  argTypes: {
    state: { control: "radio", options: ["started", "thinking", "streaming", "waiting", "paused", "done"] },
    agent: { control: "text" },
    label: { control: "text" },
    meta: { control: "text" },
    stepThrough: { control: "boolean" },
    showStepThrough: { control: "boolean" },
    primaryAction: { control: "text" },
    secondaryAction: { control: "text" }
  },
  parameters: { docs: { description: { component: "Sticky bar above any agentic surface. Surfaces run state, the active step, and per-session controls (pause/resume, branch, step-through)." } } }
};
export default meta;
type Story = StoryObj<typeof AgentStatusBar>;

export const Thinking: Story  = { args: { state: "thinking", agent: "Reconciliation Agent", meta: "step 2 of 6 - 4.2s", showStepThrough: true, stepThrough: true } };
export const Streaming: Story = { args: { state: "streaming", agent: "Reconciliation Agent", meta: "142 tokens - 18 t/s", secondaryAction: "Inject correction", primaryAction: "Stop" } };
export const Waiting: Story   = { args: { state: "waiting", agent: "Reconciliation Agent", meta: "on step 3 - drop-table impact", secondaryAction: "Skip step", primaryAction: "Review" } };
export const Paused: Story    = { args: { state: "paused", agent: "Reconciliation Agent", meta: "at 14:08:22 - 3 steps remaining", secondaryAction: "Discard", primaryAction: "Resume" } };
export const Done: Story      = { args: { state: "done", agent: "Reconciliation Agent", meta: "2 tools - 1 handoff - 0 errors", secondaryAction: "Branch from end", primaryAction: "View trace" } };
