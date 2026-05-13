import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/tokens.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "Page",
      values: [
        { name: "Page",    value: "#FFFFFF" },
        { name: "Surface", value: "#F2F4F5" },
        { name: "Dark",    value: "#141414" }
      ]
    },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    options: {
      storySort: {
        order: ["Welcome", "Foundations", "Primitives", "Agentic", "Composites", "Templates", "States", "Kits"]
      }
    }
  },
  decorators: [
    withThemeByDataAttribute({
      themes: { Light: "light", Dark: "dark" },
      defaultTheme: "Light",
      attributeName: "data-theme"
    })
  ],
  tags: ["autodocs"]
};
export default preview;
