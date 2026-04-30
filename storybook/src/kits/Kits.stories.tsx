import type { Meta, StoryObj } from "@storybook/react";
import {
  CMDBWorkspaceKit,
  ShidokaChartsKit,
  ShidokaComponentsKit,
  ShidokaShellKit
} from "../_shared/DynamicSurfaces";

const meta: Meta = { title: "Kits", tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;

export const CMDB_Workspace: StoryObj = { name: "CMDB - Workspace", render: () => <CMDBWorkspaceKit /> };
export const Shidoka_Components: StoryObj = { name: "Shidoka - Components", render: () => <ShidokaComponentsKit /> };
export const Shidoka_Shell: StoryObj = { name: "Shidoka - Shell", render: () => <ShidokaShellKit /> };
export const Shidoka_Charts: StoryObj = { name: "Shidoka - Charts", render: () => <ShidokaChartsKit /> };
