import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = { title: "Foundations/Colors", component: HtmlEmbed, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const Brand: Story    = { args: { src: "/colors-brand.html",    height: 600 } };
export const Neutrals: Story = { args: { src: "/colors-slate.html",    height: 600 } };
export const Severity: Story = { args: { src: "/colors-severity.html", height: 500 } };
export const StatusRAG: Story= { args: { src: "/colors-status.html",   height: 500 } };
export const Chart: Story    = { args: { src: "/colors-chart.html",    height: 600 } };
