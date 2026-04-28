import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = { title: "Foundations/Type", component: HtmlEmbed, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const Display: Story = { args: { src: "/type-display.html", height: 500 } };
export const Body: Story    = { args: { src: "/type-body.html",    height: 500 } };
