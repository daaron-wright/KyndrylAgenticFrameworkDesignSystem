import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = { title: "Foundations/Spacing & Radii", component: HtmlEmbed, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const Scale: Story     = { args: { src: "/spacing-scale.html",     height: 400 } };
export const Radii: Story     = { args: { src: "/spacing-radii.html",     height: 320 } };
export const Elevation: Story = { args: { src: "/spacing-elevation.html", height: 320 } };
