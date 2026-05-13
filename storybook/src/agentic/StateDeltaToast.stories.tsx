import type { Meta, StoryObj } from "@storybook/react";
import { StateDeltaToast } from "./StateDeltaToast";

const meta: Meta<typeof StateDeltaToast> = {
  title: "Agentic/StateDeltaToast",
  component: StateDeltaToast,
  tags: ["autodocs"],
  argTypes: {
    field: { control: "text" },
    subject: { control: "text" },
    oldValue: { control: "text" },
    newValue: { control: "text" },
    context: { control: "text" },
    tone: { control: "radio", options: ["positive", "warm"] },
    actions: { control: "object" }
  }
};
export default meta;

export const TrustScore: StoryObj<typeof StateDeltaToast> = {
  args: { field: "trust_score", subject: "Trust score recomputed", oldValue: "62%", newValue: "58%", context: "payments domain", tone: "warm", actions: ["Why?", "Open"] }
};
export const StaleCount: StoryObj<typeof StateDeltaToast> = {
  args: { field: "stale_cis", subject: "Filter applied - severity >= Warning", oldValue: "312 rows", newValue: "94 rows", context: "per your earlier instruction", actions: ["Undo"] }
};

export const OwnerUpdated: StoryObj<typeof StateDeltaToast> = {
  args: { field: "owner", subject: "payments-svc owner", oldValue: "unassigned", newValue: "A. Ortiz", context: "confidence 0.78", actions: ["Undo", "Why?"] }
};
