import { defineConfig } from "tsup";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

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
    // Bundle all CSS into a single styles.css
    const { readFileSync, writeFileSync } = await import("node:fs");

    const tokens = readFileSync(resolve("colors_and_type.css"), "utf8");
    const dynamicCss = readFileSync(resolve("storybook/src/_shared/dynamic.css"), "utf8");
    const agenticCss = readFileSync(resolve("storybook/src/agentic/agentic.css"), "utf8");

    // Write tokens separately
    copyFileSync(resolve("colors_and_type.css"), resolve("dist/tokens.css"));

    // Write combined styles
    const combined = [
      "/* === Kyndryl Agentic Design System — All Styles === */",
      "",
      "/* --- Design Tokens --- */",
      tokens,
      "",
      "/* --- Component Styles --- */",
      dynamicCss,
      "",
      "/* --- Agentic Component Styles --- */",
      agenticCss
    ].join("\n");

    writeFileSync(resolve("dist/styles.css"), combined);
  }
});
