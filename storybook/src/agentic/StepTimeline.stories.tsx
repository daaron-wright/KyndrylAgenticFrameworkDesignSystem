import type { Meta, StoryObj } from "@storybook/react";
import { StepTimeline } from "./StepTimeline";

const meta: Meta<typeof StepTimeline> = {
  title: "Agentic/StepTimeline",
  component: StepTimeline,
  tags: ["autodocs"],
  argTypes: {
    steps: { control: "object" },
    showActiveControls: { control: "boolean" }
  }
};
export default meta;

export const InFlight: StoryObj<typeof StepTimeline> = {
  args: {
    steps: [
      { title: "Read CI graph", state: "done", note: "depth=2 · 147 nodes" },
      { title: "Detect stale records", state: "done", note: "23 candidates" },
      { title: "Resolve owners", state: "active", note: "4/23 unresolved", timestamp: "running..." },
      { title: "Draft correction request", state: "pending", timestamp: "queued" },
      { title: "Submit for review", state: "pending", timestamp: "queued" }
    ],
    showActiveControls: true
  }
};

export const Completed: StoryObj<typeof StepTimeline> = {
  args: {
    steps: [
      { title: "Read CI graph",          state: "done" },
      { title: "Detect stale records",   state: "done" },
      { title: "Resolve owners",         state: "done" },
      { title: "Draft correction request", state: "done" },
      { title: "Submit for review",      state: "done" }
    ]
  }
};

export const FailedGate: StoryObj<typeof StepTimeline> = {
  args: {
    steps: [
      { title: "Read CI graph", state: "done", note: "147 nodes", timestamp: "+0.4s" },
      { title: "Attempt graph write", state: "failed", note: "role can read but not mutate graph", timestamp: "+2.1s" },
      { title: "Retry as reviewer", state: "active", note: "waiting for reviewer context" },
      { title: "Branch readonly summary", state: "pending" }
    ],
    showActiveControls: true
  }
};
