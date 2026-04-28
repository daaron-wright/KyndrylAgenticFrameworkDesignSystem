import type { Meta, StoryObj } from "@storybook/react";
import { HtmlEmbed } from "../_shared/HtmlEmbed";

const meta: Meta<typeof HtmlEmbed> = { title: "States/Matrix", component: HtmlEmbed, tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;
export const AllStates: StoryObj<typeof HtmlEmbed> = { args: { src: "/states-matrix.html", height: 1400 } };
