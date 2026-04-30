import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = {
  title: "Primitives/SourceAttribution",
  component: HtmlEmbed,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Provenance footer that lives at the bottom of any agent-derived card. Dataset · timestamp · confidence. Don't bury this — provenance is first-class." } } }
};
export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const Default: Story = {
  args: { src: "/preview/primitives-source.html", height: 280 }
};
