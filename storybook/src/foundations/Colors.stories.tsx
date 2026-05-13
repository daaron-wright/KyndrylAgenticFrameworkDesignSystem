import type { Meta, StoryObj } from "@storybook/react";
import { ColorsBrand } from "./ColorsBrand";
import { ColorsSlate } from "./ColorsSlate";
import { ColorsSeverity } from "./ColorsSeverity";
import { ColorsStatus } from "./ColorsStatus";
import { ColorsChart } from "./ColorsChart";

const meta: Meta = {
  title: "Foundations/Colors",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" }
};
export default meta;

export const Brand: StoryObj = { render: () => <ColorsBrand /> };
export const Neutrals: StoryObj = { render: () => <ColorsSlate /> };
export const Severity: StoryObj = { render: () => <ColorsSeverity /> };
export const StatusRAG: StoryObj = { name: "Status RAG", render: () => <ColorsStatus /> };
export const Chart: StoryObj = { render: () => <ColorsChart /> };
