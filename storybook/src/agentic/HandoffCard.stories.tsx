import type { Meta, StoryObj } from "@storybook/react";
import { HandoffCard } from "./HandoffCard";

const meta: Meta<typeof HandoffCard> = { title: "Agentic/HandoffCard", component: HandoffCard, tags: ["autodocs"], argTypes: { kind: { control: "radio", options: ["agent", "human"] } } };
export default meta;

export const AgentToAgent: StoryObj<typeof HandoffCard> = {
  args: { from: "Reconciliation Agent", to: "Impact Agent", kind: "agent", reason: "Reconciliation complete — handing off impact analysis on 23 affected CIs." }
};
export const ToHuman: StoryObj<typeof HandoffCard> = {
  args: { from: "Reconciliation Agent", to: "Aaron Wright", kind: "human", reason: "Confidence below threshold (58%). Needs human review before write." }
};
