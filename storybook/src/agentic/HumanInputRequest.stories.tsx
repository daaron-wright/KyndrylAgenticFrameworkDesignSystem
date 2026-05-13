import type { Meta, StoryObj } from "@storybook/react";
import { HumanInputRequest } from "./HumanInputRequest";

const meta: Meta<typeof HumanInputRequest> = {
  title: "Agentic/HumanInputRequest",
  component: HumanInputRequest,
  tags: ["autodocs"],
  argTypes: {
    agent: { control: "text" },
    timestamp: { control: "text" },
    question: { control: "text" },
    context: { control: "text" },
    options: { control: "object" },
    primaryOption: { control: "text" },
    blockingLabel: { control: "text" }
  }
};
export default meta;

export const TieBreak: StoryObj<typeof HumanInputRequest> = {
  args: {
    agent: "Reconciliation Agent - needs your call",
    timestamp: "14:08:22",
    question: "The orphan has two plausible owners. Which one should I assign?",
    context: "CI web-gateway-02 was last touched by A. Ortiz on deploy and K. Patel on config. The deploy edit is structural, the config edit is cosmetic.",
    options: ["Assign to A. Ortiz (structural)", "Assign to K. Patel (recency)", "Leave unassigned - escalate"],
    blockingLabel: "blocking - agent paused"
  }
};

export const BlastRadius: StoryObj<typeof HumanInputRequest> = {
  args: {
    agent: "Triage Agent - confirmation",
    timestamp: "14:09:01",
    question: "I'm about to retire 47 CIs. The blast radius extends past your usual threshold - should I proceed?",
    context: "Threshold: <= 25 CIs per batch. This batch: 47 CIs across 4 BUs. Past 30 days you've approved 3 batches over threshold.",
    options: ["Proceed (47)", "Split into 2 batches", "Lower threshold and cancel"],
    primaryOption: "Proceed (47)",
    blockingLabel: "blocking - 14m at this prompt"
  }
};
