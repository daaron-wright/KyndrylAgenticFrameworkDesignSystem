import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

const meta: Meta = { title: "Foundations/Icons", tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;

export const Library: StoryObj = { render: () => <StaticHtmlSurface id="foundations-icons--library" /> };
