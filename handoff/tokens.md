# Tokens

The single source of truth is **`colors_and_type.css`**. Copy that file into your repo and consume it as CSS variables. This document is the human-readable index — what each token is for, when to use it, when **not** to use it.

> **Rule of thumb.** If you're typing a hex code, font name, or spacing pixel anywhere outside `colors_and_type.css`, you are doing it wrong. Use a token.

---

## 1 · Brand color

Two brand hues, each with one job. Don't swap them.

| Token | Hex | Use for | Don't use for |
|---|---|---|---|
| `--k-warm-red-50` | `#FF462D` | **Brand accent.** Logo, brand moments, destructive attention. | Primary buttons, links, default selected state. |
| `--k-spruce-60` | `#29707A` | **Interactive workhorse.** Primary buttons, links, focus rings, selected rows, primary chart series. | Brand surfaces, marketing hero, error states. |

### Warm Red ramp — brand accent

| Token | Hex | Role |
|---|---|---|
| `--k-warm-red-10` | `#FFE8E0` | bg tint |
| `--k-warm-red-20` | `#FFB8A3` | border |
| `--k-warm-red-30` | `#FF8766` | hover surface |
| `--k-warm-red-40` | `#FF6647` | — |
| `--k-warm-red-50` | `#FF462D` | **brand** (default solid) |
| `--k-warm-red-60` | `#E63A22` | hover solid |
| `--k-warm-red-70` | `#B82915` | pressed solid |
| `--k-warm-red-80` | `#8A1E0D` | dark fg on tint |
| `--k-warm-red-90` | `#5C1408` | — |
| `--k-warm-red-100` | `#2E0A04` | — |
| `--k-warm-red-110` | `#1A0602` | — |

### Spruce ramp — interactive

| Token | Hex | Role |
|---|---|---|
| `--k-spruce-10` | `#E8F2F4` | AI-surface tint, bg |
| `--k-spruce-20` | `#BEDDE2` | border |
| `--k-spruce-30` | `#91C4CC` | hover |
| `--k-spruce-40` | `#5BA2AE` | secondary chart |
| `--k-spruce-50` | `#3D8590` | — |
| `--k-spruce-60` | `#29707A` | **default interactive** |
| `--k-spruce-70` | `#1F5A63` | hover / pressed |
| `--k-spruce-80` | `#17444B` | dark fg on tint |
| `--k-spruce-90` | `#0F2E33` | — |
| `--k-spruce-100` | `#07191C` | — |

### Kyndryl Blue — data-viz only

| Token | Hex | Role |
|---|---|---|
| `--k-blue-40` | `#5BA2D6` | chart slot 3 |
| `--k-blue-50` | `#3E8AC2` | chart secondary |
| `--k-blue-60` | `#2C6FA0` | — |
| `--k-blue-70` | `#1F5580` | — |

> Blue is **not** a UI primary. It exists for charts and a single brand-moment login background.

---

## 2 · Neutrals — three gray ramps

| Ramp | Use for |
|---|---|
| **Dark Stone** (`--k-dark-stone-*`) | Default UI gray — text, borders, surfaces. |
| **Cool Gray** (`--k-cool-gray-*`) | Dashboards, charts, secondary chrome. |
| **Warm Gray** (`--k-warm-gray-*`) | Marketing / brand surfaces only. **Never** for app UI. |

### Dark Stone

| Token | Hex |
|---|---|
| `--k-dark-stone-10` | `#F5F5F5` |
| `--k-dark-stone-20` | `#E6E6E6` |
| `--k-dark-stone-30` | `#CFCFCF` |
| `--k-dark-stone-40` | `#A8A8A8` |
| `--k-dark-stone-50` | `#808080` |
| `--k-dark-stone-60` | `#5C5C5C` |
| `--k-dark-stone-70` | `#3D3D3D` |
| `--k-dark-stone-80` | `#242424` |
| `--k-dark-stone-90` | `#141414` |
| `--k-dark-stone-100` | `#000000` |

### Cool Gray

| Token | Hex |
|---|---|
| `--k-cool-gray-10` | `#F2F4F5` |
| `--k-cool-gray-20` | `#E1E5E8` |
| `--k-cool-gray-30` | `#C1C8CD` |
| `--k-cool-gray-40` | `#98A3AB` |
| `--k-cool-gray-50` | `#6B7780` |
| `--k-cool-gray-60` | `#4F5A63` |
| `--k-cool-gray-70` | `#3A434B` |
| `--k-cool-gray-80` | `#252B31` |
| `--k-cool-gray-90` | `#161A1E` |

### Warm Gray (marketing only)

| Token | Hex |
|---|---|
| `--k-warm-gray-10` | `#F5F3F0` |
| `--k-warm-gray-20` | `#E7E3DD` |
| `--k-warm-gray-30` | `#CFC8BD` |
| `--k-warm-gray-50` | `#857E73` |
| `--k-warm-gray-70` | `#40382D` |

---

## 3 · Semantic surface tokens

These are the tokens you'll actually consume in component CSS. They alias the ramps above.

| Token | Maps to | Use for |
|---|---|---|
| `--background` | `#FFFFFF` | Page background |
| `--foreground` | `#141414` | Primary text |
| `--card` | `#FFFFFF` | Card surface |
| `--card-foreground` | `#141414` | Card text |
| `--popover` | `#FFFFFF` | Popover/menu surface |
| `--primary` | `--k-spruce-60` | Primary CTA, links, focus |
| `--primary-foreground` | `#FFFFFF` | Text on primary |
| `--secondary` | `--k-dark-stone-10` | Secondary button bg, chip bg |
| `--muted` | `--k-dark-stone-10` | Muted surface |
| `--muted-foreground` | `--k-dark-stone-60` | Muted text |
| `--accent` | `--k-warm-red-50` | Brand moment, destructive attention |
| `--destructive` | `#D62E2E` | Destructive button bg |
| `--border` | `--k-dark-stone-20` | Default border |
| `--ring` | `--k-spruce-60` | Focus ring |

### Foreground / background ramps (preview-friendly aliases)

| Token | Use for |
|---|---|
| `--fg-1` | Titles, KPI numbers, body heading |
| `--fg-2` | Body copy |
| `--fg-muted` | Helper, captions |
| `--fg-subtle` | Idle icons, disabled glyphs |
| `--fg-inverse` | Text on dark surfaces |
| `--bg-1` | White card surface |
| `--bg-2` | Page bg, table stripe |
| `--bg-3` | Hover, secondary chip |
| `--border-1` | Default border |
| `--border-2` | Emphasized border |

### AI surface tints

Use these to mark **agent-generated** content. Never use them for non-AI UI.

| Token | Value |
|---|---|
| `--k-ai-spruce-06` | `rgba(41, 112, 122, 0.06)` |
| `--k-ai-spruce-12` | `rgba(41, 112, 122, 0.12)` |
| `--k-ai-spruce-20` | `rgba(41, 112, 122, 0.20)` |
| `--k-ai-warm-red-06` | `rgba(255, 70, 45, 0.06)` |
| `--k-ai-warm-red-12` | `rgba(255, 70, 45, 0.12)` |
| `--k-ai-warm-red-20` | `rgba(255, 70, 45, 0.20)` |

---

## 4 · Status taxonomy (RAG)

Five canonical states. Stops 10 (bg), 20 (border), 100 (solid), 110 (dark fg). **Always pair with icon and label** — never color-only.

| State | bg | border | solid | dark fg | Icon |
|---|---|---|---|---|---|
| Critical | `--k-status-critical-10` `#F9E3E8` | `--k-status-critical-20` `#F0B4C0` | `--k-status-critical-100` `#A8001F` | `--k-status-critical-110` `#6B0014` | `error-filled` |
| Error | `--k-status-error-10` `#FDE7E2` | `--k-status-error-20` `#FBB8AB` | `--k-status-error-100` `#D62E2E` | `--k-status-error-110` `#8A1E0D` | `error-filled` |
| Warning | `--k-status-warning-10` `#FEF3CF` | `--k-status-warning-20` `#FCE38F` | `--k-status-warning-100` `#E68A00` | `--k-status-warning-110` `#7A4800` | `warning-alt` |
| Success | `--k-status-success-10` `#E0F2E8` | `--k-status-success-20` `#A8DDBF` | `--k-status-success-100` `#1F8F4A` | `--k-status-success-110` `#0D5C2E` | `checkmark-filled` |
| Information | `--k-status-info-10` (Spruce 10) | `--k-status-info-20` (Spruce 20) | `--k-status-info-100` (Spruce 60) | `--k-status-info-110` (Spruce 80) | `information` |

### Graph node statuses

| Token | Hex | Meaning |
|---|---|---|
| `--status-healthy` | `#1F8F4A` | Operating normally |
| `--status-degraded` | `#E68A00` | Reduced capacity |
| `--status-impacted` | `#FF462D` | Downstream of incident |
| `--status-unknown` | `#98A3AB` | No telemetry |

### Workflow states

| Token | Hex | Meaning |
|---|---|---|
| `--wf-pending` | `#E68A00` | Awaiting decision |
| `--wf-approved` | `#29707A` | Approved, not yet executed |
| `--wf-executed` | `#1F5A63` | Applied to system |
| `--wf-rejected` | `#6B7780` | Declined |

---

## 5 · Typography

### Stacks

| Token | Stack | Use for |
|---|---|---|
| `--font-display` | `"TWK Everett", ui-sans-serif, system-ui, …` | Display type **20px and above** — page titles, section heads, card titles, KPI numbers. |
| `--font-sans` | `"Roboto", ui-sans-serif, system-ui, …` | Body copy 14–18px, dense UI, table cells, form labels. |
| `--font-mono` | `"Geist Mono", ui-monospace, …` | Code, ticket IDs, CI names, JSON, timestamps. |
| `--font-arabic` | `"Noto Kufi Arabic", "Noto Naskh Arabic", …` | RTL — first-class, not retrofit. |

### Scale

| Token | Size | Use for |
|---|---|---|
| `--t-display` | 28px | Page title, KPI hero |
| `--t-h1` | 22px | Section heading |
| `--t-h2` | 18px | Card title |
| `--t-h3` | 14px | Small card title, strong label |
| `--t-body` | 14px | Default body |
| `--t-small` | 12px | Supporting copy |
| `--t-micro` | 11px | Meta, badge, table micro |
| `--t-caption` | 10px | UPPERCASE eyebrow (with `--tracking-eyebrow`) |
| `--t-kpi` | 28px | Standard KPI number |
| `--t-kpi-lg` | 36px | Hero KPI number |

### Line-height & tracking

| Token | Value | Use for |
|---|---|---|
| `--lh-tight` | 1.15 | Display, KPI |
| `--lh-snug` | 1.35 | Headings |
| `--lh-normal` | 1.5 | Body |
| `--tracking-eyebrow` | 0.14em | UPPERCASE eyebrow labels |
| `--tracking-wide` | 0.04em | Wider tracking on small caps |

### Helper classes

`.t-display`, `.t-h1`, `.t-h2`, `.t-h3`, `.t-body`, `.t-small`, `.t-micro`, `.t-caption`, `.t-kpi`, `.t-kpi-lg`, `.t-mono` — apply directly to elements when semantic tag isn't appropriate.

> Numbers in tables and KPIs **must** carry `font-variant-numeric: tabular-nums` so columns align.

---

## 6 · Spacing — 4pt base

| Token | Px | Shidoka name |
|---|---|---|
| `--space-1` | 4 | space-set-quarter-x |
| `--space-2` | 8 | space-set-half-x |
| `--space-3` | 12 | space-set-three-quarter-x |
| `--space-4` | 16 | space-set-1-x |
| `--space-5` | 20 | — |
| `--space-6` | 24 | space-set-1-and-half-x |
| `--space-8` | 32 | space-set-2-x |
| `--space-10` | 40 | — |
| `--space-12` | 48 | space-set-3-x |

### Component-level spacing rules

- **Page gutter** — `--space-6` (24px)
- **Card padding** — `--space-4` (16px) standard, `--space-6` (24px) on dense KPI cards
- **KPI tile** — `px-6 py-4` (24/16)
- **Table row height** — `--space-10` (40px) total; cell padding `py-2.5 px-3`
- **Stack between cards** — `--space-4` (16px)
- **Inline icon ↔ label** — `--space-2` (8px)

---

## 7 · Radii

| Token | Px | Use for |
|---|---|---|
| `--k-radius-xs` / `--radius` aliases | 2 | Hairline pills, micro chips |
| `--k-radius-sm` / `--radius-sm` | 4 | Buttons, inputs, chips, severity-border cards |
| `--k-radius-md` / `--radius` | 8 | **Default card radius** |
| `--k-radius-lg` / `--radius-lg` | 16 | Dialogs, drawers |
| `--k-radius-pill` / `--radius-pill` | 9999 | Status dots, avatars, severity pills |

> Data-table cells are the **only** sharp-cornered surface in the system.

---

## 8 · Elevation

The system leans on **borders + bg tint**, not shadow. Shadows are rare.

| Token | Value | Use for |
|---|---|---|
| `--shadow-none` | `none` | Default — most cards |
| `--shadow-sm` | `0 1px 2px rgba(15,23,42,.04)` | Subtle lift on hover |
| `--shadow-card` | `0 1px 2px …, 0 1px 3px …` | KPI tiles, snapshot cards |
| `--shadow-pop` | `0 4px 16px …, 0 1px 2px …` | Popover, agentic dropdown |
| `--shadow-drawer` | `0 20px 48px rgba(15,23,42,.18)` | Side drawer, modal |

---

## 9 · Motion

| Token | Value | Use for |
|---|---|---|
| `--motion-fast` | 120ms | Hover, popover open, chevron reveal |
| `--motion-base` | 200ms | Drawer slide, accordion |
| `--motion-slow` | 300ms | Toast slide, page-level transitions |
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Enter |

> Always wrap motion in `@media (prefers-reduced-motion: reduce)` and disable transitions.

---

## 10 · Iconography

Single source: **Shidoka Icon Library** at `assets/icons/sprite.svg`. No lucide, no Carbon, no heroicons, no emoji.

### Sizes

| Class | Size | Pairs with |
|---|---|---|
| `.ki-14` | 14px | 12–13px inline labels |
| `.ki-16` | 16px | **Default UI** (14pt body) |
| `.ki-20` | 20px | Card heads, standalone buttons |
| `.ki-24` | 24px | Section heads, toolbars |
| `.ki-32` | 32px | Feature tiles, empty states |
| `.ki-48` | 48px | Hero / empty-state moments |

### Tonal chips

| Class | Treatment |
|---|---|
| `.ki-chip` | Neutral wash on `#F1F5F9` |
| `.ki-chip.is-brand` | Warm-red wash |
| `.ki-chip.is-spruce` | Spruce wash |
| `.ki-chip.is-success` / `.is-warn` / `.is-critical` | RAG washes |

Color is **always** `currentColor`. Set the text color and the icon follows.

### Set shipped (17 symbols)

`dashboard`, `analytics`, `network`, `group`, `chat-bot`, `document-chart`, `recommend`, `lightbulb`, `anomaly`, `checkmark-filled`, `error-filled`, `warning-alt`, `information`, `filter`, `log-out`, `arrow-up-right`, `arrow-down-right`. Extend the sprite by adding `<symbol id="icon-<name>" viewBox="0 0 32 32">` blocks.

---

## 11 · Shidoka ↔ short alias map

For Shidoka-native consumers, the `$k-*` names are preserved. For preview markup, short aliases are exposed too. Both resolve to the same value.

| Shidoka native | Short alias | Resolves to |
|---|---|---|
| `--k-warm-red-50` | `--kyn-accent` / `--accent` | `#FF462D` |
| `--k-spruce-60` | `--kyn-primary` / `--primary` | `#29707A` |
| `--k-dark-stone-90` | `--fg-1` | `#141414` |
| `--k-cool-gray-10` | `--bg-2` | `#F2F4F5` |
| `--k-status-error-100` | `--sev-critical-solid` | `#D62E2E` |
| `--k-space-1-x` | `--space-4` | 16px |
| `--k-radius-md` | `--radius` | 8px |
| `--k-ai-spruce-12` | — | `rgba(41,112,122,.12)` |

---

## 12 · Tailwind users

If you're on Tailwind, extend the theme:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        border: 'var(--border)',
        // ...etc
      },
      fontFamily: {
        display: 'var(--font-display)',
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        lg: 'var(--radius-lg)',
      },
    },
  },
}
```

Ask the DS team for the maintained `tailwind.config.kyndryl.js` bridge file.
