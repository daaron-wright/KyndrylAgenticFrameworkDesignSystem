import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = {
  title: "Primitives/DeltaIndicator",
  component: HtmlEmbed,
  tags: ["autodocs"],
  argTypes: {
    delta: { control: "number" },
    unit:  { control: "select", options: ["%", "pts", "CIs", ""] },
    direction: { control: "radio", options: ["up", "down"] }
  },
  parameters: { docs: { description: { component: "Signed delta vs a reference period. Always prefixed with + or − and an arrow icon. Color is driven by whether the direction is desirable (use `invertSemantics` for metrics where 'down is good')." } } }
};
export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const Up: Story    = { args: { src: "/storybook-static/stories/primitive-delta-indicator.html", height: 220, delta: 3.4, unit: "%", direction: "up" } };
export const Down: Story  = { args: { src: "/storybook-static/stories/primitive-delta-indicator.html", height: 220, delta: -180, unit: "CIs", direction: "down" } };
export const FullSurface: Story = { args: { src: "/preview/primitives-delta.html", height: 420 }, name: "Full static surface" };
