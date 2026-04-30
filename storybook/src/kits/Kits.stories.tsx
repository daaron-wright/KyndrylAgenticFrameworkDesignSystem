import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = { title: "Kits", component: HtmlEmbed, tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const CMDB_Workspace: Story  = { args: { src: "/ui_kits/cmdb/index.html",              height: 1200 }, name: "CMDB · Workspace" };
export const Shidoka_Components: Story = { args: { src: "/ui_kits/shidoka-components/index.html", height: 1200 }, name: "Shidoka · Components" };
export const Shidoka_Shell: Story   = { args: { src: "/ui_kits/shidoka-shell/index.html",     height: 1200 }, name: "Shidoka · Shell" };
export const Shidoka_Charts: Story  = { args: { src: "/ui_kits/shidoka-charts/index.html",    height: 1200 }, name: "Shidoka · Charts" };
