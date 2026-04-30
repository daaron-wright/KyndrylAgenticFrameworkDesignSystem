import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = {
  title: "Reference/Static library",
  component: HtmlEmbed,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};

export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const Welcome: Story = {
  args: { src: "/storybook-static/stories/welcome.html", height: 1200 }
};

export const DesignSystemDeck: Story = {
  args: { src: "/preview/design-system-deck.html", height: 900 },
  name: "Design system deck"
};
