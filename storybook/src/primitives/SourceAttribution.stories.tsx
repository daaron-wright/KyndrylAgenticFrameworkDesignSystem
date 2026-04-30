import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

const meta: Meta = {
  title: "Primitives/SourceAttribution",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Source-derived React rendering of the correct static provenance and source attribution surface."
      }
    }
  }
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <StaticHtmlSurface id="primitives-sourceattribution--default" />
};

export const DynamicSurface: Story = {
  render: () => <StaticHtmlSurface id="primitives-sourceattribution--default" />
};
