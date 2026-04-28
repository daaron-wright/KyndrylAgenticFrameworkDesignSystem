import type { Meta, StoryObj } from "@storybook/react";
import { SourceAttribution } from "./SourceAttribution";

const meta: Meta<typeof SourceAttribution> = {
  title: "Primitives/SourceAttribution",
  component: SourceAttribution,
  tags: ["autodocs"],
  argTypes: {
    dataset: { control: "text" },
    timestamp: { control: "text" },
    confidence: { control: { type: "range", min: 0, max: 100, step: 1 } },
    rationale: { control: "text" }
  },
  parameters: { docs: { description: { component: "Provenance footer that lives at the bottom of any agent-derived card. Dataset · timestamp · confidence. Don't bury this — provenance is first-class." } } }
};
export default meta;
type Story = StoryObj<typeof SourceAttribution>;

export const Default: Story = {
  args: {
    dataset: "cmdb_ci_v3",
    timestamp: "27-04-2026 14:32",
    confidence: 92,
    rationale: "View provenance →"
  }
};
export const NoConfidence: Story = {
  args: { dataset: "incident_log_v2", timestamp: "27-04-2026 09:14" }
};
