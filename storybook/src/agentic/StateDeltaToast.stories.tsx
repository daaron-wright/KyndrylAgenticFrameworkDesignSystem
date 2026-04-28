import type { Meta, StoryObj } from "@storybook/react";
import { StateDeltaToast } from "./StateDeltaToast";

const meta: Meta<typeof StateDeltaToast> = { title: "Agentic/StateDeltaToast", component: StateDeltaToast, tags: ["autodocs"] };
export default meta;

export const TrustScore: StoryObj<typeof StateDeltaToast> = {
  args: { field: "trust_score", oldValue: 76, newValue: 82 }
};
export const StaleCount: StoryObj<typeof StateDeltaToast> = {
  args: { field: "stale_cis", oldValue: 1843, newValue: 1663 }
};
