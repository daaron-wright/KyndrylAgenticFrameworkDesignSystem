import type { Meta, StoryObj } from "@storybook/react";
import { StepTimeline } from "./StepTimeline";

const meta: Meta<typeof StepTimeline> = { title: "Agentic/StepTimeline", component: StepTimeline, tags: ["autodocs"] };
export default meta;

export const InFlight: StoryObj<typeof StepTimeline> = {
  args: {
    steps: [
      { title: "Read CI graph", state: "done", note: "depth=2 · 147 nodes" },
      { title: "Detect stale records", state: "done", note: "23 candidates" },
      { title: "Resolve owners", state: "active", note: "4/23 unresolved" },
      { title: "Draft correction request", state: "pending" },
      { title: "Submit for review", state: "pending" }
    ]
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
