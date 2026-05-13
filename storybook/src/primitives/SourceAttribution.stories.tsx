import type { Meta, StoryObj } from "@storybook/react";
import { SourceAttribution } from "./SourceAttribution";
import { PrimitivesSource } from "./PrimitivesSource";

const meta: Meta<typeof SourceAttribution> = {
  title: "Primitives/SourceAttribution",
  component: SourceAttribution,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};
export default meta;
type Story = StoryObj<typeof SourceAttribution>;

export const Default: Story = {
  args: {
    dataset: "servicenow.cmdb_ci",
    timestamp: "derived 14:08:22",
    confidence: 92,
    rationale: "View rationale"
  }
};

export const WriteExecuted: Story = {
  name: "Write executed",
  args: {
    dataset: "servicenow.cmdb_ci",
    timestamp: "write executed 14:12:04",
    confidence: 100,
    rationale: "View rationale"
  }
};

export const Showcase: Story = {
  render: () => <PrimitivesSource />,
  parameters: { layout: "fullscreen" },
};
