import type { Meta, StoryObj } from "@storybook/react";
import { CmdbWorkspace } from "./CmdbWorkspace";
import { ShidokaShell } from "./ShidokaShell";
import { ShidokaComponents } from "./ShidokaComponents";
import { ShidokaCharts } from "./ShidokaCharts";

const meta: Meta = { title: "Kits", tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;

export const CMDB_Workspace: StoryObj = { name: "CMDB - Workspace", render: () => <CmdbWorkspace /> };
export const Shidoka_Components: StoryObj = { name: "Shidoka - Components", render: () => <ShidokaComponents /> };
export const Shidoka_Shell: StoryObj = { name: "Shidoka - Shell", render: () => <ShidokaShell /> };
export const Shidoka_Charts: StoryObj = { name: "Shidoka - Charts", render: () => <ShidokaCharts /> };
