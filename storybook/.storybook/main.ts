import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@storybook/addon-themes"
  ],
  framework: { name: "@storybook/react-vite", options: {} },
  staticDirs: ["../public", "../../assets", "../../fonts", "../../preview", "../../ui_kits"],
  docs: { autodocs: "tag" }
};
export default config;
