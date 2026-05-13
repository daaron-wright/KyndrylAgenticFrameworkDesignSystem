import { defineConfig } from "tsup";
import { copyFileSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const readCss = (path: string) => existsSync(resolve(path)) ? readFileSync(resolve(path), "utf8") : "";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  outDir: "dist",
  esbuildOptions(options) {
    options.loader = { ...options.loader, ".css": "empty" };
  },
  onSuccess: async () => {
    // Write tokens separately
    copyFileSync(resolve("colors_and_type.css"), resolve("dist/tokens.css"));

    // Bundle ALL CSS into a single styles.css
    const sections = [
      ["Design Tokens", "colors_and_type.css"],
      ["Shared Component Styles", "storybook/src/_shared/dynamic.css"],
      ["Agentic Component Styles", "storybook/src/agentic/agentic.css"],
      ["Agentic Showcase Styles", "storybook/src/agentic/agentic-showcase.css"],
      ["Foundation Styles", "storybook/src/foundations/foundations.css"],
      ["Primitive Showcase Styles", "storybook/src/primitives/primitives-showcase.css"],
      ["Composite Styles", "storybook/src/composites/composites.css"],
      ["Template Styles", "storybook/src/templates/templates.css"],
      ["States Styles", "storybook/src/states/states.css"],
      ["Kit Styles", "storybook/src/kits/kits.css"],
    ];

    const combined = sections
      .map(([label, path]) => `/* --- ${label} --- */\n${readCss(path)}`)
      .join("\n\n");

    writeFileSync(resolve("dist/styles.css"), `/* === Kyndryl Agentic Design System — All Styles === */\n\n${combined}`);
  }
});
