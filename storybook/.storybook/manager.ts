import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

const kyndryl = create({
  base: "light",
  brandTitle: "Kyndryl Agentic Framework",
  brandUrl: "/",
  colorPrimary: "#FF462D",
  colorSecondary: "#29707A",
  appBg: "#F2F4F5",
  appContentBg: "#FFFFFF",
  appBorderColor: "#E6E6E6",
  appBorderRadius: 8,
  textColor: "#141414",
  textInverseColor: "#FFFFFF",
  barTextColor: "#5C5C5C",
  barSelectedColor: "#29707A",
  barBg: "#FFFFFF",
  fontBase: '"Roboto", system-ui, sans-serif',
  fontCode: '"Geist Mono", ui-monospace, monospace'
});

addons.setConfig({ theme: kyndryl });
