import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(__dirname, "../parity-screenshots");
const storybookBase = process.env.STORYBOOK_URL ?? "http://127.0.0.1:6006";
const staticBase = process.env.STATIC_URL ?? storybookBase;

if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log(`Capture dynamic/static parity screenshots.

Usage:
  STORYBOOK_URL=http://127.0.0.1:6006 STATIC_URL=http://127.0.0.1:6006 npm run check:parity-screenshots

Output:
  storybook/parity-screenshots/*.dynamic.png
  storybook/parity-screenshots/*.static.png`);
  process.exit(0);
}

const checks = [
  ["primitive-confidence", "/iframe.html?id=primitives-confidencebadge--dynamic-surface&viewMode=story", "/preview/primitives-confidence.html", 1440, 900],
  ["agentic-states", "/iframe.html?id=agentic-states--dynamic-surface&viewMode=story", "/preview/agentic-states.html", 1440, 1100],
  ["ai-modal-chat", "/iframe.html?id=composites--ai-modal-chat&viewMode=story", "/preview/ai-modal-chat.html", 1440, 900],
  ["ai-chat-history", "/iframe.html?id=composites--ai-chat-history&viewMode=story", "/preview/ai-chat-history.html", 1440, 800],
  ["ai-feedback-sources", "/iframe.html?id=composites--ai-feedback-sources&viewMode=story", "/preview/ai-feedback-sources.html", 1440, 780],
  ["cmdb-workspace", "/iframe.html?id=kits--cmdb-workspace&viewMode=story", "/ui_kits/cmdb/index.html", 1440, 1000],
  ["dag-graph", "/iframe.html?id=composites--dag-graph&viewMode=story", "/preview/dag-graph-kit.html", 1440, 900],
  ["shidoka-shell", "/iframe.html?id=kits--shidoka-shell&viewMode=story", "/ui_kits/shidoka-shell/index.html", 1440, 1000],
  ["shidoka-charts", "/iframe.html?id=kits--shidoka-charts&viewMode=story", "/ui_kits/shidoka-charts/index.html", 1440, 900],
  ["templates-dashboard", "/iframe.html?id=templates--dashboard&viewMode=story", "/preview/template-dashboard.html", 1440, 1000],
  ["kits-components", "/iframe.html?id=kits--shidoka-components&viewMode=story", "/ui_kits/shidoka-components/index.html", 1440, 1000]
];

const urlFor = (base, route) => new URL(route, base).toString();

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();

for (const [name, dynamicRoute, staticRoute, width, height] of checks) {
  await page.setViewportSize({ width, height });

  await page.goto(urlFor(storybookBase, dynamicRoute), { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, `${name}.dynamic.png`), fullPage: true });

  await page.goto(urlFor(staticBase, staticRoute), { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outputDir, `${name}.static.png`), fullPage: true });
}

await browser.close();

console.log(`Wrote ${checks.length * 2} parity screenshots to ${outputDir}`);
