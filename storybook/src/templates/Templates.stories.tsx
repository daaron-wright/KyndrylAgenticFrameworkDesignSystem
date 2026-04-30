import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = { title: "Templates", component: HtmlEmbed, tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const Dashboard: Story     = { args: { src: "/preview/template-dashboard.html",     height: 1100 } };
export const Triage: Story        = { args: { src: "/preview/template-triage.html",        height: 1100 } };
export const Investigation: Story = { args: { src: "/preview/template-investigation.html", height: 1100 } };
export const ReviewQueue: Story   = { args: { src: "/preview/template-review.html",        height: 1100 } };
export const Conversation: Story  = { args: { src: "/preview/template-conversation.html",  height: 1100 } };
