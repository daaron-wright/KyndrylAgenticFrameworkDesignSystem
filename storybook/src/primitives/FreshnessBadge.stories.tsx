import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = {
  title: "Primitives/FreshnessBadge",
  component: HtmlEmbed,
  tags: ["autodocs"],
  argTypes: {
    ageDays:   { control: { type: "range", min: 0, max: 60, step: 1 } },
    threshold: { control: { type: "range", min: 1, max: 30, step: 1 } },
    label:     { control: "text" }
  },
  parameters: {
    docs: {
      description: {
        component:
          "Data freshness indicator. Crosses to a warning state when `ageDays > threshold`. " +
          "Pair with a `FreshnessBadge` on every card backed by data — never approximate (\"recent\")."
      }
    }
  }
};
export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const Today: Story = { args: { src: "/storybook-static/stories/primitive-freshness-badge.html", height: 240, ageDays: 0, threshold: 7 } };
export const Fresh: Story = { args: { src: "/storybook-static/stories/primitive-freshness-badge.html", height: 240, ageDays: 3, threshold: 7 } };
export const Stale: Story = { args: { src: "/storybook-static/stories/primitive-freshness-badge.html", height: 240, ageDays: 14, threshold: 7 } };
export const FullSurface: Story = { args: { src: "/preview/primitives-freshness.html", height: 460 }, name: "Full static surface" };
