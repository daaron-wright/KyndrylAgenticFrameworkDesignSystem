import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = {
  title: "Primitives/StatusBadge",
  component: HtmlEmbed,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "radio", options: ["Pending","Approved","Executed","Rejected","Healthy","Degraded","Impacted","Unknown"] }
  }
};
export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const Approved: Story = { args: { src: "/storybook-static/stories/primitive-status-badge.html", height: 240, status: "Approved" } };
export const Pending: Story  = { args: { src: "/storybook-static/stories/primitive-status-badge.html", height: 240, status: "Pending" } };
export const Executed: Story = { args: { src: "/storybook-static/stories/primitive-status-badge.html", height: 240, status: "Executed" } };
export const Healthy: Story  = { args: { src: "/storybook-static/stories/primitive-status-badge.html", height: 240, status: "Healthy" } };
export const Impacted: Story = { args: { src: "/storybook-static/stories/primitive-status-badge.html", height: 240, status: "Impacted" } };
export const FullSurface: Story = { args: { src: "/preview/primitives-status.html", height: 420 }, name: "Full static surface" };
