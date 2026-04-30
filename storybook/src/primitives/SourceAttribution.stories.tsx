import type { Meta, StoryObj } from "@storybook/react";
import { SourceAttribution } from "./SourceAttribution";
import "../_shared/dynamic.css";

const meta: Meta<typeof SourceAttribution> = {
  title: "Primitives/SourceAttribution",
  component: SourceAttribution,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Dynamic provenance footer with agentic source actions."
      }
    }
  }
};
export default meta;
type Story = StoryObj<typeof SourceAttribution>;

export const Default: Story = {
  args: {
    dataset: "servicenow.cmdb_ci",
    timestamp: "derived 14:08:22",
    confidence: 82,
    rationale: "View rationale"
  }
};

export const DynamicSurface: Story = {
  render: () => (
    <div className="kds-story-surface is-white">
      <div className="kds-panel" style={{ maxWidth: 760 }}>
        <p className="kds-copy" style={{ marginBottom: 16 }}>Recommendation card body content sits above the provenance footer.</p>
        <SourceAttribution dataset="servicenow.cmdb_ci" timestamp="derived 14:08:22" confidence={82} rationale="View rationale" />
      </div>
    </div>
  )
};
