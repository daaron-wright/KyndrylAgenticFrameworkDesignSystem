# Kyndryl CMDB Design System — Developer Handoff

**Audience:** engineers shipping production code against this design system.
**Status:** v1 reference. Tokens are stable; component contracts in this folder are the source of truth.

This folder is the developer-facing entry point. It is intentionally static, Markdown-first, and lives alongside the design previews so the docs and the visuals can never drift.

---

## What lives where

| File / folder | Purpose | When to look here |
|---|---|---|
| `handoff/index.html` | **Start here.** Landing site that links every preview, the deck, and these docs. | First load. Browse components by group, open any preview fullscreen. |
| `handoff/tokens.md` | Every CSS variable: hex, font stack, spacing step, radius. Use rules per token. | Implementing a component. Theming. Mapping to Shidoka or Tailwind. |
| `handoff/components.md` | Per-composite contract: anatomy, props, slots, do/don't, edge cases. | Building a component. Code review. PR checklist. |
| `handoff/states-checklist.md` | The 8-state matrix as a hard PR contract. | Before opening a PR. Reviewing a PR. |
| `../colors_and_type.css` | The single source of truth for tokens. Copy this file into your repo. | Setup. Treat as read-only — file an issue, don't fork. |
| `../preview/*.html` | 45 static reference pages, one per primitive / composite / template. | Implementation reference. Match what you see, pixel for pixel. |
| `../design-system-deck.html` | The narrative spec. 19 slides covering principles, taxonomy, themes. | Onboarding. Stakeholder review. Understanding *why* before *how*. |

---

## Implementation order (recommended)

1. **Copy `colors_and_type.css` into your repo.** Don't refactor it yet. Get it loading globally (or imported into your design-tokens layer). All hex values, font stacks, spacing, radii, and motion durations live here.
2. **Wire the icon sprite.** `assets/icons/sprite.svg` is loaded once per page by `assets/icons/ki.js`. In a React app, inject the sprite at app boot.
3. **Build primitives first**, in this order: `SeverityPill` → `StatusBadge` → `ConfidenceBadge` → `FreshnessBadge` → `DeltaIndicator` → `SourceAttribution`. Each is documented in `components.md`. Open the matching `preview/primitives-*.html` for the visual.
4. **Then composites**, grouped by archetype: posture (`KpiTile`, `KpiGrid`, `TrustScoreGauge`) → triage (`FindingCard`, `InspectorDrawer`) → action (`RecommendationCard`, `ScenarioProjectionCard`) → graph (`GraphCanvas`, `GraphInspector`) → conversation (`ChatMessage`, `SnapshotCard`).
5. **Templates last.** Five page shells in `preview/template-*.html`. New pages compose existing components — no novel layouts unless approved.
6. **Run the states-checklist.md against every component before merge.** Eight states, every one.

---

## Non-negotiable rules

These are the rules everything else hangs off. If a PR violates one of these, it gets bounced.

1. **Tokens only.** Never hardcode a hex value, font name, spacing px, or radius. If you need a value not in `colors_and_type.css`, file an issue — don't invent one.
2. **Severity is never color-only.** Every severity / status surface pairs the color with an icon and a text label. Color-blindness, screen readers, print — all covered by this rule.
3. **Sentence case for UI copy.** "Change requests", not "Change Requests" and never "CHANGE REQUESTS". UPPERCASE is reserved for eyebrows / kickers, with the `.t-caption` class.
4. **No emoji.** Ever. Use the Shidoka icon set.
5. **No invented confidence.** A `ConfidenceBadge` always carries a rationale slot. If the model doesn't have a reason, don't render the badge.
6. **All eight states.** Every component renders `loading`, `empty`, `filtered-empty`, `error`, `stale`, `unauthorized`, `executing`, `success-after-action`. See `states-checklist.md`.
7. **Permission-aware.** Every action-bearing composite accepts a `role` or `capabilities` prop. Fallback chain is `full → review → readonly`, enforced by the DS layer, not the consumer.
8. **Agentic primitives are control points.** A `ConfidenceBadge` isn't decorative — it opens a popover with override / teach / dispute actions. See `components.md` § Agentic primitives.

---

## Stack assumptions

- **CSS** — vanilla CSS variables in `colors_and_type.css`. Works in any framework. Tailwind users: the `--*` variables map cleanly to Tailwind theme extensions; ask DS for the bridge file.
- **Components** — implementation-agnostic. The contracts in `components.md` describe props and behavior, not React vs Lit vs Vue. Production target is Shidoka Lit components; the previews are HTML/CSS only.
- **Icons** — Shidoka Icon Library only. Inline SVG sprite, currentColor, sizes 14/16/20/24/32/48.
- **Charts** — Chart.js 4 with Shidoka palette tokens. See `ui_kits/shidoka-charts/` in the parent project.

---

## Conventions for code review

When reviewing a PR against this DS:

- [ ] Reads tokens, never hex.
- [ ] Renders all eight states — link the screenshots in the PR description.
- [ ] Severity surfaces include icon + label, not just color.
- [ ] Sentence case copy. UPPERCASE only on `.t-caption` eyebrows.
- [ ] Permission prop wired (`role` or `capabilities`).
- [ ] Agentic primitives wired to `agentic.js` — popover, confirm step on destructive, toast on apply.
- [ ] Numbers use `font-variant-numeric: tabular-nums`.
- [ ] No emoji, no gradients (except sanctioned brand moments), no hand-rolled spinners.
- [ ] Reduced-motion fallback present.
- [ ] RTL renders without manual flips.

---

## Questions, escalations

Open an issue tagged `design-system`. Tokens, contracts, and the states matrix are owned by the DS team. Component variants outside this set need a written exception.
