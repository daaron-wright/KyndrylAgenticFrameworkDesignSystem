import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

interface ConfidenceArgs {
  value: number | null;
  role: "full" | "review" | "readonly";
}

const meta: Meta<ConfidenceArgs> = {
  title: "Primitives/ConfidenceBadge",
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    role: { control: "radio", options: ["full", "review", "readonly"] }
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Source-derived React rendering of the correct static ConfidenceBadge HTML, with controls passed into the static parity adapter."
      }
    }
  }
};
export default meta;
type Story = StoryObj<ConfidenceArgs>;

const renderSingle = (args: ConfidenceArgs) => <StaticHtmlSurface id="primitives-confidencebadge--default" args={args} />;

export const Default: Story = { args: { value: 92, role: "full" }, render: renderSingle };
export const Low: Story = { args: { value: 58, role: "full" }, render: renderSingle };
export const Readonly: Story = { args: { value: 92, role: "readonly" }, render: renderSingle };
export const NoScore: Story = { args: { value: null, role: "full" }, render: renderSingle };

export const DynamicSurface: Story = {
  name: "Dynamic surface",
  render: () => <StaticHtmlSurface id="primitives-confidence--matrix" />
};
