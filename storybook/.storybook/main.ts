import type { StorybookConfig } from "@storybook/react-vite";
import type { Plugin } from "vite";
import { readFileSync } from "node:fs";

const colorsCss = new URL("../../colors_and_type.css", import.meta.url);

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
  staticDirs: [
    { from: "../../public", to: "/" },
    { from: "../../assets", to: "/assets" },
    { from: "../../fonts", to: "/fonts" },
    { from: "../../preview", to: "/preview" },
    { from: "../../ui_kits", to: "/ui_kits" },
    { from: "../../storybook-static/stories", to: "/storybook-static/stories" }
  ],
  docs: { autodocs: "tag" },
  async viteFinal(config) {
    const rootAssetPlugin: Plugin = {
      name: "kyndryl-design-system-root-assets",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const path = req.url?.split("?")[0];
          if (path !== "/colors_and_type.css") {
            next();
            return;
          }

          res.setHeader("Content-Type", "text/css; charset=utf-8");
          res.end(readFileSync(colorsCss, "utf8"));
        });
      },
      generateBundle() {
        this.emitFile({
          type: "asset",
          fileName: "colors_and_type.css",
          source: readFileSync(colorsCss, "utf8")
        });
      }
    };

    return {
      ...config,
      plugins: [...(config.plugins ?? []), rootAssetPlugin]
    };
  }
};
export default config;
