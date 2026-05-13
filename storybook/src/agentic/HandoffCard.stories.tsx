import type { Meta, StoryObj } from "@storybook/react";
import { HandoffCard } from "./HandoffCard";

const meta: Meta<typeof HandoffCard> = {
  title: "Agentic/HandoffCard",
  component: HandoffCard,
  tags: ["autodocs"],
  argTypes: {
    kind: { control: "radio", options: ["agent", "human"] },
    fromKind: { control: "radio", options: ["agent", "specialist", "human"] },
    toKind: { control: "radio", options: ["agent", "specialist", "human"] },
    from: { control: "text" },
    to: { control: "text" },
    fromRole: { control: "text" },
    toRole: { control: "text" },
    reason: { control: "text" },
    context: { control: "text" },
    showActions: { control: "boolean" }
  }
};
export default meta;

export const AgentToAgent: StoryObj<typeof HandoffCard> = {
  args: {
    from: "Triage",
    to: "Reconciliation",
    kind: "agent",
    fromRole: "general agent",
    toRole: "specialist agent",
    fromKind: "agent",
    toKind: "specialist",
    reason: "Handing off - needs SQL skill",
    context: "Carrying: 22 orphan CI list - payments-svc context - user threshold <= 25"
  }
};
export const ToHuman: StoryObj<typeof HandoffCard> = {
  args: {
    from: "Reconciliation",
    to: "D. Aaron",
    kind: "human",
    fromRole: "specialist agent",
    toRole: "CMDB owner",
    fromKind: "agent",
    toKind: "human",
    reason: "Handing back - review needed",
    context: "Plan ready - 47 retire actions - over batch threshold - awaiting your sign-off",
    showActions: true
  }
};
