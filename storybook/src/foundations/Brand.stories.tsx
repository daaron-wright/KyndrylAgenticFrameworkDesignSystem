import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

const meta: Meta = { title: "Foundations/Brand", tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;

export const Logo: StoryObj = { render: () => <StaticHtmlSurface id="foundations-brand--logo" /> };
