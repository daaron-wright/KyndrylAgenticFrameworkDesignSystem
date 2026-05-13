---
name: Kyndryl CMDB Design System
description: Design tokens, voice, and composite patterns for the Kyndryl Agentic Framework CMDB Data Quality workspace. Aligned to Shidoka (Kyndryl's foundation DS) — Warm Red `#FF462D` brand accent, Spruce `#29707A` interactive, TWK Everett (display) + Roboto (body) + Geist Mono (code). Calm, evidence-first operational UI.
---

# Kyndryl CMDB Design System

Use this skill any time you build UI for the Kyndryl Agentic Framework CMDB Data Quality product or adjacent surfaces (posture dashboards, triage tables, agentic recommendations, knowledge-graph investigation, change/correction-request review).

## Core rules

- **Brand accent = Warm Red 50 `#FF462D`** (Shidoka) — logo, brand moments, destructive attention. Not a surface colour.
- **Interactive primary = Spruce 60 `#29707A`** — primary buttons, links, selected state, focus rings, primary chart series. Spruce 70 hover, Spruce 80 pressed.
- **Neutrals are three-ramp.** Dark Stone (default UI, text, borders), Cool Gray (dashboard chrome, tables, charts), Warm Gray (marketing only). Don't mix ramps in one surface.
- **Status = Shidoka RAG.** Critical / Error / Warning / Success / Information, stops 10 (bg) · 20 (border) · 100 (solid) · 110 (dark fg). Always pair with icon + label; colour alone is forbidden.
- **Type pairing.** TWK Everett for **display** (20px+) — headings, KPIs. Roboto for **body** (14–18px) — paragraphs, tables, form labels. Geist Mono for IDs, timestamps, code.
- **Sentence case** for titles, buttons, nav. `UPPERCASE + 0.14em tracking` only for eyebrow/kicker labels.
- **No emoji. No exclamation points. No gradients** (except the rare brand-red login splash and trust-gauge gap-fill).
- **Icons = Shidoka Icon Library.** Inline SVG sprite at `assets/icons/sprite.svg`, loaded via `assets/icons/ki.js`. Use `<svg class="ki ki-16"><use href="#icon-<name>"/></svg>`. Size scale: `.ki-14/16/20/24/32/48`. Color follows `currentColor`. No lucide, no Carbon, no heroicons.
- **Borders over shadows.** Cards use `1px solid Dark Stone 20` + `border-radius 8px` (md). Dialogs/drawers step up to `16px` (lg). Inputs/buttons/chips stay at `4px` (sm).
- **Every number needs a reason.** Confidence → agent-reason paragraph. Trust score → target + gap. Recommendation → Signals + Impact-rollup **before** Execute.
- **Three-action pattern** for any agent output: `Execute` / `Send for review` / `Dismiss`. Permission-gated primary.
- **AI surfaces** use Opacity.AI tints — `--k-ai-spruce-12`, `--k-ai-warm-red-12` — to mark agent-generated content.
- **Progressive disclosure.** Card summary → row/node detail → drawer or inspector. Always three layers.
- **Dates** `dd-mm-yyyy HH:mm`. **Tickets** `bINC#######`. **Priorities** `1- Immediate / 2- Urgent / 3- High / 4- Medium / 5- Low`.

## Token reference

Pull all tokens from `colors_and_type.css`. Shidoka-native names (`--k-*`) and short aliases are both exported.

```
/* Brand */
--k-warm-red-50: #FF462D        /* brand accent (alias --kyn-accent) */
--k-spruce-60:   #29707A        /* interactive primary (alias --primary) */
--k-spruce-70:   #1F5A63        /* hover */
--k-spruce-80:   #17444B        /* pressed */

/* Neutrals */
--k-dark-stone-90: #141414      /* body text, heading (alias --fg-1) */
--k-cool-gray-70:  #3A434B      /* body (alias --fg-2) */
--k-cool-gray-50:  #6B7780      /* muted (alias --fg-muted) */
--k-cool-gray-10:  #F2F4F5      /* page tint (alias --bg-2) */
--k-dark-stone-20: #E6E6E6      /* default border (alias --border-1) */

/* RAG */
--k-status-critical-100: #A8001F
--k-status-error-100:    #D62E2E
--k-status-warning-100:  #E68A00
--k-status-success-100:  #1F8F4A
--k-status-info-100:     #29707A   /* = spruce-60 */

/* Type */
--font-display: 'TWK Everett'   /* 20px+ */
--font-sans:    'Roboto'        /* 14–18px body */
--font-mono:    'Geist Mono'    /* IDs, code */

/* Space (Shidoka space-set-*) */
--k-space-quarter-x: 4   --k-space-half-x: 8   --k-space-1-x: 16
--k-space-1-and-half-x: 24   --k-space-2-x: 32   --k-space-3-x: 48

/* Radii */
--k-radius-sm: 4   --k-radius-md: 8   --k-radius-lg: 16
```

## Composite patterns

| Pattern | Live example | Key primitives |
|---|---|---|
| **Trust gauge** | `preview/components-gauge.html` | Spruce fill + target marker + hatched Warning gap |
| **KPI tile** | `preview/components-kpi.html` | TWK Everett number + delta + sub + severity strip |
| **Recommendation card** | `preview/components-recommendation.html` | confidence + lift + agent-reason + Signals + Impact rollup + 3-action footer + "Powered by agentic AI" |
| **Status banner** | `preview/components-status-banner.html` | RAG top strip + headline + Investigate CTA |
| **Execution timeline** | `preview/components-execution.html` | post-action steps + pulsing "Agent is now monitoring" |
| **Triage table** | `preview/components-table.html` | Geist Mono tickets + RAG priority pills + Investigate link |
| **Knowledge graph** | `ui_kits/cmdb/index.html` → Investigation | Domain → BU → Process → App → CI, status-coloured, inspector with rollup |
| **Data viz** | `ui_kits/shidoka-charts/index.html` | Chart.js 4 · categorical (10) / sequential01 (spruce) / divergent01 (red↔spruce) / RAG palettes · tabular-nums · source line pattern |
| **Agentic primitive** | `preview/primitives-confidence.html` | dotted underline + `•••` chevron + popover with 2–4 actions |

## Agentic primitives

Every badge is a control point. Dotted underline on the primary value, trailing `•••` chevron on hover, click opens a popover with 2–4 actions. Destructive actions require an in-popover confirm step naming the blast radius. Every override writes to `preview/agentic-inbox.html`. Shared surface lives in `colors_and_type.css` (`.agentic` / `.agentic-pop`) and controller in `preview/agentic.js`.

## Tone cheat-sheet

**Do:** "Severity rolls up from active impacted nodes." "Investigate with AI." "62% of CIs verified in last 30 days." "Agent is now monitoring."

**Don't:** "⚠️ URGENT!" "AI-powered ✨" "Let's get started!" "Oops, something went wrong!"

## Files in this system

- `colors_and_type.css` — all tokens + agentic primitive styles + icon helpers
- `assets/icons/sprite.svg` + `assets/icons/ki.js` — Shidoka icon sprite + loader
- `preview/agentic.js` — shared agentic popover/inbox controller
- `preview/*.html` — token and component preview cards (incl. `brand-icons.html` for the icon set)
- `ui_kits/cmdb/index.html` — clickable recreation: Login, Dashboard, Access review, Recommendations, Investigation graph, Change queue
- `ui_kits/shidoka-components/index.html` — Shidoka component reference (buttons, inputs, dropdown, badges, cards, table, accordion, notifications, modal/drawer, progress, tooltips, AI primitives)
- `ui_kits/shidoka-shell/index.html` — Shidoka global shell demo (header, workspace switcher, apps flyout, collapsible local nav, footer) with Dashboard + Triage screens
- `ui_kits/shidoka-charts/index.html` — Shidoka charts kit (Chart.js 4): categorical / sequential01 / divergent01 / RAG palettes, bar family, line & area, scatter & bubble, doughnut & pie, radar & polar, meter-gauges, sankey, tree, heatmap, choropleth, boxplot
- `fonts/` — TWK Everett (OTF + web TTF); Roboto + Geist Mono via Google Fonts CDN
- `assets/kyndryl-logo.png` — wordmark

## When stuck

Open `ui_kits/cmdb/index.html` as canonical reference. Compose new screens from existing primitives — don't invent new colour meanings, new radii, or new action verbs. Never add decorative illustration: a placeholder beats an invented illustration.
