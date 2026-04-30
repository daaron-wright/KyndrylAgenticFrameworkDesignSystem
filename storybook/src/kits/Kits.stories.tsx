import type { Meta, StoryObj } from "@storybook/react";
import { StaticHtmlSurface } from "../_shared/StaticHtmlSurface";

const meta: Meta = { title: "Kits", tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;

export const CMDB_Workspace: StoryObj = { name: "CMDB - Workspace", render: () => <StaticHtmlSurface id="kits-cmdb--workspace" /> };
export const Shidoka_Components: StoryObj = { name: "Shidoka - Components", render: () => <StaticHtmlSurface id="kits-shidoka--components" /> };
export const Shidoka_Shell: StoryObj = { name: "Shidoka - Shell", render: () => <StaticHtmlSurface id="kits-shidoka--shell" /> };
export const Shidoka_Charts: StoryObj = { name: "Shidoka - Charts", render: () => <StaticHtmlSurface id="kits-shidoka--charts" /> };
