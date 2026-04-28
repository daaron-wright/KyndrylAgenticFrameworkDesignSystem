import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = { title: "Agentic/Reference flows", component: HtmlEmbed, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof HtmlEmbed>;

export const AllStates: Story  = { args: { src: "/agentic-states.html",      height: 1100 } };
export const FullRun: Story    = { args: { src: "/agentic-flow.html",        height: 900 } };
export const Inbox: Story      = { args: { src: "/agentic-inbox.html",       height: 800 } };
export const Reference: Story  = { args: { src: "/agentic-states-deck.html", height: 900 } };
