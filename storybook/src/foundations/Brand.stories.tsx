import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = { title: "Foundations/Brand", component: HtmlEmbed, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const Logo: Story  = { args: { src: "/preview/brand-logo.html",  height: 360 } };
export const Icons: Story = { args: { src: "/preview/brand-icons.html", height: 600 } };
