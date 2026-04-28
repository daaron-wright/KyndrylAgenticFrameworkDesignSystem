/* =========================================================
   Per-component spec registry.
   Keyed by preview filename. Used by handoff/component.html.
   Schema:
     name           — display name
     tag            — category tag (Type/Color/Component/Composite/...)
     group          — comma-list: foundation,primitive,component,composite,agentic,template,state,brand
     summary        — one-paragraph elevator pitch
     anatomy        — short prose describing parts
     props          — array of {name, type, default, notes} (omit for foundations)
     tokens         — array of {name, role} — token usage
     states         — array of states the surface implements (subset of 8)
     do             — array of strings
     dont           — array of strings
     edgeCases      — array of strings
     related        — array of preview filenames
   ========================================================= */
window.SPECS = {

  /* ---------- Foundations ---------- */
  'type-display.html': {
    name: 'Display type', tag: 'Type', group: 'foundation',
    summary: 'TWK Everett (light/regular) is the display family. Reserved for hero numbers, page titles, and major statement text. Never used for body copy or UI labels.',
    anatomy: 'Six tiers from `.t-hero` (96px) down to `.t-h3` (24px). Letter-spacing tightens as size grows; line-height is fixed at `--lh-tight` for headers.',
    tokens: [
      { name: '--font-display', role: 'TWK Everett family stack' },
      { name: '--lh-tight', role: 'Line height for h1–h3' },
      { name: '--tracking-display', role: 'Negative tracking for hero numbers' },
    ],
    do: [
      'Use `.t-hero` for the single most important number on a screen.',
      'Pair with `.t-caption` (uppercase eyebrow) above the display number.',
      'Use light/regular weights only — never bold.',
    ],
    dont: [
      'Use TWK Everett for body or labels.',
      'Mix display weights inside a single tile.',
      'Apply `text-transform: uppercase` — display type is sentence/title case.',
    ],
    related: ['type-body.html'],
  },

  'type-body.html': {
    name: 'Body type', tag: 'Type', group: 'foundation',
    summary: 'Roboto for UI copy, Geist Mono for IDs, timestamps, and any tabular value. Body type carries the operator UI; weight + size do all the hierarchy work.',
    anatomy: 'Body classes: `.t-body` (14px), `.t-body-sm` (12px), `.t-caption` (11px UPPERCASE eyebrow with `--tracking-eyebrow`). Mono classes: `.t-mono`, `.t-mono-sm`.',
    tokens: [
      { name: '--font-sans', role: 'Roboto family stack' },
      { name: '--font-mono', role: 'Geist Mono family stack' },
      { name: '--tracking-eyebrow', role: 'Letter-spacing for uppercase eyebrows' },
    ],
    do: [
      'Use mono for IDs, timestamps, hex codes, percentages in dense tables.',
      'Use `.t-caption` for category labels above primary content.',
      'Apply `font-variant-numeric: tabular-nums` on any column of numbers.',
    ],
    dont: [
      'Use mono for prose.',
      'Use `.t-caption` as a regular subhead — it is reserved for eyebrows.',
      'Lower the body size below 12px; that is the floor.',
    ],
    related: ['type-display.html'],
  },

  'colors-brand.html': {
    name: 'Brand color', tag: 'Color', group: 'foundation',
    summary: 'Warm Red and Spruce are the two brand ramps. Warm Red is reserved for brand moments and critical state; Spruce is the workhorse interactive accent.',
    anatomy: 'Each ramp has 10 stops (10–110). Stops 50–60 are the brand mid; 80–110 are the dark variants used for text on tinted surfaces.',
    tokens: [
      { name: '--k-warm-red-50', role: 'Brand red mid; critical state border' },
      { name: '--k-spruce-60', role: 'Primary interactive accent' },
      { name: '--k-spruce-110', role: 'Text on spruce-tinted surfaces' },
    ],
    do: [
      'Use Spruce for primary buttons, active states, and AI gradient borders.',
      'Reserve Warm Red for brand moments and critical severity.',
      'Pair brand fills with brand-100/110 text (never neutral).',
    ],
    dont: [
      'Use Warm Red for high-severity (use the severity tokens instead).',
      'Mix Spruce and Warm Red as adjacent fills — they vibrate.',
      'Tint UI chrome with brand colors; chrome stays neutral.',
    ],
    related: ['colors-slate.html', 'colors-status.html'],
  },

  'colors-slate.html': {
    name: 'Neutrals', tag: 'Color', group: 'foundation',
    summary: 'Three neutral families: Dark Stone (true black ramp), Cool Gray (UI chrome), Warm Gray (paper / surfaces). Picking the right neutral is the single biggest taste move in the system.',
    anatomy: '9-stop ramps. Cool Gray for borders, dividers, table chrome. Warm Gray for canvas backgrounds. Dark Stone for type and high-contrast surfaces.',
    tokens: [
      { name: '--bg-1', role: 'Page background — Warm Gray 10' },
      { name: '--bg-2', role: 'Surface — Warm Gray 20' },
      { name: '--border-1', role: 'Default border — Cool Gray 30' },
      { name: '--fg-1', role: 'Primary text — Dark Stone 110' },
    ],
    do: [
      'Use Warm Gray for canvases (paper feel).',
      'Use Cool Gray for chrome (rails, borders, table headers).',
      'Use Dark Stone only for type and dark mode surfaces.',
    ],
    dont: [
      'Mix Warm Gray and Cool Gray on the same surface — pick one.',
      'Use pure white; surfaces are always tinted neutral.',
    ],
    related: ['colors-brand.html'],
  },

  'colors-status.html': {
    name: 'Status taxonomy', tag: 'Color', group: 'foundation',
    summary: 'Four status colors (success / warning / danger / info), each with four stops (10/20/100/110) for surface, border, fg, and emphasis. The taxonomy is closed — do not invent new status families.',
    anatomy: 'Stop 10 = surface tint, 20 = border, 100 = foreground/icon, 110 = emphasis text on tint. The four families never blend.',
    tokens: [
      { name: '--k-status-success-10/20/100/110', role: 'Healthy / OK' },
      { name: '--k-status-warning-10/20/100/110', role: 'Stale / approaching' },
      { name: '--k-status-danger-10/20/100/110', role: 'Critical / impacted' },
      { name: '--k-status-info-10/20/100/110', role: 'Notices, neutral signals' },
    ],
    do: [
      'Always pair status fill with the matching icon and label.',
      'Use stop 10 for surface tint, 110 for text on that tint.',
    ],
    dont: [
      'Invent a fifth status family.',
      'Use status colors for chrome or branding.',
    ],
    related: ['colors-severity.html', 'colors-brand.html'],
  },

  'colors-severity.html': {
    name: 'Severity scale', tag: 'Color', group: 'foundation',
    summary: 'Five-stop severity ramp (Critical → High → Medium → Low → OK). Maps to severity-{level} tokens for fill, border, fg. Severity is "how bad"; status is "where in the lifecycle". Never conflate.',
    anatomy: 'Severity tokens are an alias layer over status tokens, with Critical pulled distinct from Danger to allow Warm Red brand differentiation.',
    tokens: [
      { name: '--sev-critical-bg/fg/border', role: 'Critical' },
      { name: '--sev-high-bg/fg/border', role: 'High' },
      { name: '--sev-medium-bg/fg/border', role: 'Medium' },
      { name: '--sev-low-bg/fg/border', role: 'Low' },
      { name: '--sev-ok-bg/fg/border', role: 'OK' },
    ],
    do: [
      'Use severity tokens on `<SeverityPill>` only.',
      'Always pair color with the icon + uppercase label.',
    ],
    dont: [
      'Use severity color to convey workflow status.',
      'Render severity by color alone, no label.',
    ],
    related: ['components-badges.html', 'colors-status.html'],
  },

  'colors-chart.html': {
    name: 'Chart palette', tag: 'Color', group: 'foundation',
    summary: 'Categorical 10-slot palette, order-locked. Slot 1 is always Spruce 60 (primary accent); subsequent slots ordered for max chromatic separation. Order is part of the contract.',
    anatomy: '10 slots tested for color-blind separation (deuteranopia, protanopia). Sequential and diverging ramps live in their own files.',
    tokens: Array.from({length: 10}, (_, i) => ({ name: `--k-chart-${i+1}`, role: `Slot ${i+1}` })),
    do: [
      'Use slot 1 for the primary series only.',
      'Use slots in order; do not reshuffle.',
      'Test with the color-blind simulator before shipping a new chart.',
    ],
    dont: [
      'Pick chart colors by hand outside the palette.',
      'Use severity or status colors as series colors.',
    ],
    related: ['colors-brand.html'],
  },

  'spacing-scale.html': {
    name: 'Spacing scale', tag: 'Spacing', group: 'foundation',
    summary: '4pt base scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64. Every gap, padding, and margin in the system snaps to this scale.',
    anatomy: 'Tokens `--space-1` through `--space-10`. Large jumps after `--space-6` (24px) reflect that bigger gaps need more visual difference, not arithmetic continuation.',
    tokens: [
      { name: '--space-1', role: '4px — tight inline gap' },
      { name: '--space-2', role: '8px — default chip padding' },
      { name: '--space-3', role: '12px — control padding y' },
      { name: '--space-4', role: '16px — card inner gap' },
      { name: '--space-5', role: '20px' },
      { name: '--space-6', role: '24px — section gap' },
      { name: '--space-7', role: '32px — major rhythm' },
      { name: '--space-8', role: '40px' },
    ],
    do: ['Snap every spacing value to a token.'],
    dont: ['Hardcode pixel values outside the scale.'],
    related: ['spacing-radii.html', 'spacing-elevation.html'],
  },

  'spacing-radii.html': {
    name: 'Radii', tag: 'Spacing', group: 'foundation',
    summary: 'Four corner radii: 2 / 4 / 8 / 16. Form controls = 2/4, cards = 8, large surfaces / drawers = 16. Pills override to fully rounded.',
    anatomy: 'Tokens `--radius-1` through `--radius-4`. Pills use `border-radius: 999px` directly.',
    tokens: [
      { name: '--radius-1', role: '2px — inputs, table cells' },
      { name: '--radius-2', role: '4px — buttons, chips' },
      { name: '--radius-3', role: '8px — cards, banners' },
      { name: '--radius-4', role: '16px — drawers, modals' },
    ],
    do: ['Use pill radius for severity/status badges only.'],
    dont: ['Mix radii inside a single composite.'],
    related: ['spacing-scale.html'],
  },

  'spacing-elevation.html': {
    name: 'Elevation', tag: 'Spacing', group: 'foundation',
    summary: 'Borders + tint, not shadow. The system uses one subtle shadow token (`--shadow-card`) for hover/active lift; default elevation is conveyed by border + surface tint.',
    anatomy: 'Three levels: flat (border only), raised (border + bg-2), floating (border + bg-2 + `--shadow-card`).',
    tokens: [
      { name: '--shadow-card', role: 'Subtle 1px shadow for hover/floating' },
      { name: '--border-1', role: 'Default border' },
    ],
    do: ['Convey hierarchy with borders + tint.'],
    dont: ['Stack heavy drop shadows for "depth".'],
    related: ['spacing-scale.html'],
  },

  /* ---------- Primitives ---------- */
  'primitives-confidence.html': {
    name: 'ConfidenceBadge', tag: 'Agentic', group: 'primitive,agentic',
    summary: 'Shows the agent\'s confidence in a value. Always agentic — it represents a model decision the user can push back on.',
    anatomy: '`[ value% ] [•••]` — value in monospace with dotted underline; trailing chevron opens the rationale + actions popover.',
    props: [
      { name: 'value', type: 'number (0–100)', default: 'required', notes: 'Render as integer. Clamp at 99.' },
      { name: 'rationale', type: 'string', default: 'required', notes: 'No rationale → don\'t render the badge.' },
      { name: 'evidence', type: 'string[]', default: '—', notes: 'Source IDs in popover.' },
      { name: 'onOverride', type: '(newValue) => void', default: '—', notes: 'User sets a new value.' },
      { name: 'onTeach', type: '(signal) => void', default: '—', notes: 'Writes to "Learned from you" inbox.' },
      { name: 'onDispute', type: '() => void', default: '—' },
    ],
    tokens: [
      { name: '--fg-1', role: 'Value text' },
      { name: 'font-variant-numeric: tabular-nums', role: 'Value rendering' },
      { name: '.agentic-pop', role: 'Popover surface' },
    ],
    states: ['default', 'hover', 'active', 'loading', 'error'],
    do: [
      'Always show rationale in the popover header.',
      'Log every override to the agentic inbox via `onTeach`.',
      'Use mono for the value with tabular-nums.',
    ],
    dont: [
      'Render without a `rationale`.',
      'Show > 99 — clamp to avoid implying certainty.',
      'Use color alone to convey confidence level.',
    ],
    edgeCases: [
      'No rationale yet: do not render the badge — render a SkeletonChip.',
      'Override pending sync: show `--k-status-warning-110` underline.',
      'Disputed: replace value with em-dash, show `disputed` chip.',
    ],
    related: ['primitives-source.html', 'agentic-inbox.html'],
  },

  'primitives-freshness.html': {
    name: 'FreshnessBadge', tag: 'Agentic', group: 'primitive,agentic',
    summary: 'How old is this data. Switches to warning tint when older than `staleThresholdDays`. Always shows a banner at the surface level when stale — never silently re-fetches.',
    anatomy: 'Pill with leading dot (status color), label like "Last verified 14d ago", trailing chevron for popover.',
    props: [
      { name: 'lastVerifiedAt', type: 'Date | ISOString', default: 'required' },
      { name: 'staleThresholdDays', type: 'number', default: '7' },
      { name: 'source', type: 'string', default: '—', notes: 'e.g. "CMDB.discovery"' },
      { name: 'onRefresh', type: '() => void', default: '—' },
      { name: 'onChangeThreshold', type: '(days) => void', default: '—' },
      { name: 'onPin', type: '() => void', default: '—', notes: 'Marks "trusted as-is".' },
    ],
    tokens: [
      { name: '--fg-muted', role: 'Fresh text' },
      { name: '--k-status-warning-110', role: 'Approaching stale' },
      { name: '--k-status-warning-10', role: 'Stale tint surface' },
    ],
    states: ['fresh', 'approaching', 'stale', 'loading', 'error'],
    do: [
      'Show a surface-level banner when data is stale.',
      'Use `lastVerifiedAt` as the source of truth, not render time.',
    ],
    dont: [
      'Compute staleness from render time.',
      'Hide stale data — keep it visible behind the banner.',
      'Auto-refresh silently.',
    ],
    related: ['primitives-source.html', 'components-status-banner.html'],
  },

  'primitives-delta.html': {
    name: 'DeltaIndicator', tag: 'Agentic', group: 'primitive,agentic',
    summary: 'Period-over-period change with explanatory popover. Up isn\'t always green — direction must be specified per metric.',
    anatomy: 'Arrow icon + signed value + period label. Popover offers Explain / Set threshold / Compare periods / Teach.',
    props: [
      { name: 'value', type: 'number', default: 'required', notes: 'Signed.' },
      { name: 'unit', type: "'pct' | 'abs' | 'count'", default: "'pct'" },
      { name: 'period', type: 'string', default: 'required', notes: 'WoW, 30d, custom.' },
      { name: 'direction', type: "'up-good' | 'up-bad' | 'neutral'", default: 'required', notes: 'Drives color semantics.' },
      { name: 'onExplain', type: '() => void', default: '—' },
    ],
    tokens: [
      { name: '--k-status-success-100', role: 'Up + up-good' },
      { name: '--k-warm-red-50', role: 'Down + up-good' },
      { name: '--fg-muted', role: 'Neutral' },
    ],
    do: ['Spec the direction explicitly per metric.', 'Use arrow icons, not + / − glyphs.'],
    dont: ['Assume up = good.', 'Render without a period label.'],
    related: ['primitives-confidence.html', 'components-kpi.html'],
  },

  'primitives-source.html': {
    name: 'SourceAttribution', tag: 'Agentic', group: 'primitive,agentic',
    summary: 'Footer line on agent-generated cards. Names the dataset, timestamp, and confidence. Replaces "AI sparkle" decoration.',
    anatomy: '`[ki-chip] dataset · timestamp · confidence% [•••]` — timestamp in mono.',
    props: [
      { name: 'dataset', type: 'string', default: 'required' },
      { name: 'timestamp', type: 'Date', default: 'required' },
      { name: 'confidence', type: 'number', default: '—' },
      { name: 'provenance', type: 'ProvenanceNode[]', default: '—', notes: 'Lineage tree in popover.' },
    ],
    tokens: [
      { name: '--font-mono', role: 'Timestamp' },
      { name: '--fg-muted', role: 'Footer text' },
    ],
    do: ['Always present on agent-generated content.', 'Use mono for the timestamp.'],
    dont: ['Skip on cards with a model recommendation.', 'Show "AI" or sparkle emoji as a stand-in.'],
    related: ['primitives-confidence.html', 'components-recommendation.html'],
  },

  'primitives-status.html': {
    name: 'StatusBadge', tag: 'Primitive', group: 'primitive',
    summary: 'Sentence-case chip for operational or workflow status. Distinct from severity: severity is "how bad", status is "where in the lifecycle".',
    anatomy: 'Pill with leading dot in status color, sentence-case label, optional trailing chevron for the agentic popover.',
    props: [
      { name: 'status', type: "'healthy' | 'degraded' | 'impacted' | 'unknown' | 'pending' | 'approved' | 'executed' | 'rejected'", default: 'required' },
      { name: 'label', type: 'string', default: 'derived' },
      { name: 'role', type: "'full' | 'review' | 'readonly'", default: "'full'", notes: '`readonly` removes the chevron.' },
    ],
    tokens: [
      { name: '--k-status-success-10/100/110', role: 'Healthy' },
      { name: '--k-status-warning-10/100/110', role: 'Pending / Degraded' },
      { name: '--k-status-danger-10/100/110', role: 'Impacted / Rejected' },
    ],
    states: ['default', 'hover', 'loading', 'unauthorized'],
    do: ['Sentence case (Healthy, Pending).', 'Pair with a colored dot — never color-only background.'],
    dont: ['Use status to indicate severity.', 'Strip the chevron unless `role=\'readonly\'`.'],
    related: ['components-badges.html'],
  },

  /* ---------- Components ---------- */
  'components-badges.html': {
    name: 'Badges', tag: 'Component', group: 'component',
    summary: 'SeverityPill is the canonical severity surface — uppercase pill with icon + label. Status chips render alongside but use sentence case.',
    anatomy: '`[icon] [LABEL]` for SeverityPill (10–11px, `--tracking-eyebrow`); `[•] [Label]` for StatusBadge (sentence case).',
    props: [
      { name: 'severity', type: "'critical' | 'high' | 'medium' | 'low' | 'ok'", default: 'required' },
      { name: 'label', type: 'string', default: 'severity.toUpperCase()' },
      { name: 'density', type: "'default' | 'compact'", default: "'default'", notes: 'Compact for table cells.' },
    ],
    tokens: [
      { name: '--sev-{severity}-bg', role: 'Background' },
      { name: '--sev-{severity}-fg', role: 'Foreground' },
      { name: '--sev-{severity}-border', role: 'Border' },
      { name: '--tracking-eyebrow', role: 'Letter-spacing' },
    ],
    states: ['default', 'hover', 'compact'],
    do: ['Always pair color with icon and uppercase label.', 'Use compact variant inside table cells.'],
    dont: ['Use SeverityPill for workflow state — use StatusBadge.', 'Render with color only and no label.'],
    related: ['primitives-status.html', 'colors-severity.html'],
  },

  'components-buttons.html': {
    name: 'Buttons', tag: 'Component', group: 'component',
    summary: 'Three button kinds: primary (Spruce 60 fill), secondary (white + border), ghost (Spruce text, no chrome). Destructive = primary + Warm Red 50.',
    anatomy: '36px height default, 4px radius (`--radius-2`), 14px label. Icon + label or label alone.',
    props: [
      { name: 'kind', type: "'primary' | 'secondary' | 'ghost' | 'destructive'", default: "'secondary'" },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'" },
      { name: 'icon', type: 'IconName', default: '—' },
      { name: 'loading', type: 'boolean', default: 'false' },
      { name: 'disabled', type: 'boolean', default: 'false' },
    ],
    tokens: [
      { name: '--k-spruce-60', role: 'Primary fill' },
      { name: '--k-warm-red-50', role: 'Destructive fill' },
      { name: '--radius-2', role: 'Corner radius' },
    ],
    states: ['default', 'hover', 'active', 'loading', 'disabled'],
    do: ['One primary per surface.', 'Use ghost for tertiary navigation.'],
    dont: ['Stack two primaries side by side.', 'Use destructive for non-destructive actions.'],
    related: ['components-recommendation.html'],
  },

  'components-kpi.html': {
    name: 'KPI tiles', tag: 'Component', group: 'component',
    summary: 'Single KPI surface. Number + label + delta + freshness + optional source line. Composes the primitives.',
    anatomy: 'Label (caption eyebrow) → VALUE (display type) → delta + freshness on the same baseline → optional source footer.',
    props: [
      { name: 'label', type: 'string', default: 'required', notes: 'Sentence case.' },
      { name: 'value', type: 'number | string', default: 'required' },
      { name: 'unit', type: 'string', default: '—', notes: '%, CIs, $, none.' },
      { name: 'delta', type: 'DeltaIndicatorProps', default: '—' },
      { name: 'freshness', type: 'FreshnessBadgeProps', default: '—' },
      { name: 'source', type: 'SourceAttributionProps', default: '—' },
      { name: 'tone', type: "'default' | 'attention' | 'success'", default: "'default'", notes: 'Drives left-border accent only.' },
      { name: 'onClick', type: '() => void', default: '—', notes: 'Whole tile becomes a button if provided.' },
    ],
    tokens: [
      { name: '--card', role: 'Surface' },
      { name: '--border-1', role: 'Border' },
      { name: '.t-kpi-lg / .t-kpi', role: 'Number type' },
      { name: '.t-caption', role: 'Eyebrow label' },
    ],
    states: ['default', 'loading', 'empty', 'error', 'stale'],
    do: ['Use `attention` tone only when value crosses a threshold.', 'Always include freshness when data is mutable.'],
    dont: ['Stack two KPI numbers in one tile.', 'Use display type for the label.'],
    related: ['primitives-delta.html', 'primitives-freshness.html', 'primitives-source.html'],
  },

  'components-gauge.html': {
    name: 'Trust score gauge', tag: 'Component', group: 'component',
    summary: 'Semi-circular gauge for the CMDB trust score 0–100. Pairs with FreshnessBadge and DeltaIndicator. Bands convey RAG.',
    anatomy: 'Half-arc from -90° to +90°. Track in `--bg-3`, fill in band-tinted gradient, value text centered below.',
    props: [
      { name: 'value', type: 'number (0–100)', default: 'required' },
      { name: 'target', type: 'number', default: '—', notes: 'Optional target marker.' },
      { name: 'bands', type: '[{from, to, tone}]', default: 'required', notes: 'RAG bands.' },
      { name: 'freshness', type: 'FreshnessBadgeProps', default: '—' },
      { name: 'delta', type: 'DeltaIndicatorProps', default: '—' },
    ],
    tokens: [
      { name: '--bg-3', role: 'Track' },
      { name: '--sev-*', role: 'Band fills' },
    ],
    states: ['default', 'loading', 'empty', 'stale'],
    do: ['Always render with bands — value alone is meaningless.'],
    dont: ['Use a full-circle gauge — semi-circle only.'],
    related: ['components-kpi.html'],
  },

  'components-table.html': {
    name: 'Data table', tag: 'Component', group: 'component',
    summary: 'Dense operator table with severity row accents, tabular numerals, and hover-row affordances. The default for every list view.',
    anatomy: '32px row height, 12px cell padding x, 4px severity accent on the left of severity-bearing rows.',
    props: [
      { name: 'rows', type: 'Row[]', default: 'required' },
      { name: 'columns', type: 'Column[]', default: 'required' },
      { name: 'density', type: "'comfortable' | 'compact'", default: "'comfortable'" },
      { name: 'sortBy', type: 'ColumnId', default: '—' },
      { name: 'onSelect', type: '(rowId) => void', default: '—' },
    ],
    tokens: [
      { name: 'font-variant-numeric: tabular-nums', role: 'Number columns' },
      { name: '--bg-2', role: 'Header row' },
      { name: '--sev-{severity}-border', role: 'Row accent' },
    ],
    states: ['default', 'loading', 'empty', 'filtered', 'error'],
    do: ['Right-align numeric columns.', 'Use tabular-nums on every numeric column.'],
    dont: ['Use full borders between every cell — rely on row hover.'],
    related: ['components-badges.html'],
  },

  'components-status-banner.html': {
    name: 'Status banner', tag: 'Component', group: 'component',
    summary: 'Surface-level banner above the main content. Used for stale data, unauthorized state, and execution success/failure.',
    anatomy: 'Full-width strip, status-tinted bg, leading icon, message, optional action button on the right.',
    props: [
      { name: 'tone', type: "'info' | 'warning' | 'danger' | 'success'", default: 'required' },
      { name: 'title', type: 'string', default: 'required' },
      { name: 'message', type: 'string', default: '—' },
      { name: 'action', type: '{ label, onClick }', default: '—' },
      { name: 'dismissible', type: 'boolean', default: 'false' },
    ],
    tokens: [
      { name: '--k-status-{tone}-10', role: 'Tint background' },
      { name: '--k-status-{tone}-20', role: 'Border' },
      { name: '--k-status-{tone}-110', role: 'Text' },
    ],
    states: ['default', 'dismissed', 'loading-action'],
    do: ['Use for stale data above the surface.', 'Pair with a Refresh action when stale.'],
    dont: ['Use for transient toasts — use StateDeltaToast.', 'Stack more than two banners.'],
    related: ['primitives-freshness.html'],
  },

  'components-recommendation.html': {
    name: 'Recommendation card', tag: 'Component', group: 'component',
    summary: 'The agent\'s proposed action. Title (imperative) + rationale + projected impact + 3-way CTA. Role-gated.',
    anatomy: 'Spruce-tinted top border, title, rationale paragraph, embedded ScenarioProjectionCard, footer with Execute / Send for review / Dismiss.',
    props: [
      { name: 'title', type: 'string', default: 'required', notes: 'Imperative: "Reconcile 14 stale CIs".' },
      { name: 'rationale', type: 'string', default: 'required' },
      { name: 'signals', type: 'SignalsPanelProps', default: '—' },
      { name: 'projection', type: 'ScenarioProjectionCardProps', default: '—' },
      { name: 'confidence', type: 'number', default: '—' },
      { name: 'role', type: "'full' | 'review' | 'readonly'", default: 'required' },
      { name: 'onExecute', type: '() => void', default: 'required for role=full' },
      { name: 'onSendForReview', type: '() => void', default: 'required' },
      { name: 'onDismiss', type: '() => void', default: 'required' },
    ],
    tokens: [
      { name: '--k-spruce-60', role: 'Top border accent' },
      { name: '--card', role: 'Surface' },
    ],
    states: ['default', 'executing', 'success', 'error', 'unauthorized'],
    do: ['Render the projection before allowing Execute.', 'Use imperative title voice.'],
    dont: ['Render without a `rationale`.', 'Allow Execute without first showing the projection.'],
    edgeCases: [
      'role=review → Execute hidden, Send for review primary.',
      'role=readonly → all CTAs hidden, "Request access" banner instead.',
    ],
    related: ['composite-scenario.html', 'primitives-confidence.html'],
  },

  'components-execution.html': {
    name: 'Execution timeline', tag: 'Component', group: 'component',
    summary: 'Vertical timeline of execution steps. Two variants: in-flight (live) with Approve once / Approve all gates, and completed (audit).',
    anatomy: 'Vertical track, status dots per step (success/active/pending/failed), label and timestamps to the right.',
    props: [
      { name: 'steps', type: '[{label, status, startedAt, completedAt, error?}]', default: 'required' },
      { name: 'mode', type: "'live' | 'completed'", default: "'completed'" },
      { name: 'onApproveOnce', type: '() => void', default: '—', notes: 'Live mode only.' },
      { name: 'onApproveAll', type: '() => void', default: '—', notes: 'Live mode only.' },
    ],
    tokens: [
      { name: '--k-status-success-100', role: 'Completed dot' },
      { name: '--k-spruce-60', role: 'Active dot' },
    ],
    states: ['live', 'completed', 'error', 'paused'],
    do: ['Show failed steps in completed view — never hide them.'],
    dont: ['Re-order steps after start.'],
    related: ['agentic-flow.html'],
  },

  /* ---------- Composites ---------- */
  'composite-chat.html': {
    name: 'Chat (composite)', tag: 'Composite', group: 'composite,agentic',
    summary: 'Conversation surface composed of ChatMessage + AgentStatusBar (sticky top) + inline ToolCallCards + SnapshotCards. The agentic primary surface.',
    anatomy: 'Sticky AgentStatusBar, scrollable message list, inline tool calls, embedded snapshot cards, composer at the bottom.',
    props: [
      { name: 'messages', type: 'ChatMessageProps[]', default: 'required' },
      { name: 'agentState', type: "'thinking' | 'streaming' | 'paused' | 'done'", default: "'done'" },
      { name: 'onSend', type: '(text) => void', default: 'required' },
      { name: 'onPause', type: '() => void', default: '—' },
      { name: 'role', type: "'full' | 'review' | 'readonly'", default: "'full'" },
    ],
    tokens: [
      { name: 'AI gradient border', role: 'Spruce-60 ↔ Warm-Red-50, 28% α' },
    ],
    states: ['idle', 'streaming', 'paused', 'awaiting-input', 'error'],
    do: ['Single moving element — pulsing dot, not spinner.', 'Use third person in agent messages.'],
    dont: ['First person in agent voice.', 'Append exclamation marks.'],
    related: ['agentic-states.html', 'ai-modal-chat.html'],
  },

  'composite-exec-summary.html': {
    name: 'Executive summary', tag: 'Composite', group: 'composite',
    summary: 'Narrative + sources + 3-tile KPI row. The default top-of-page composite for executive dashboards.',
    anatomy: 'Title, paragraph (with HighlightLinks to underlying data), 3 KpiTiles below, SourceAttribution footer.',
    props: [
      { name: 'title', type: 'string', default: 'required' },
      { name: 'narrative', type: 'RichContent', default: 'required', notes: 'Supports HighlightLink inlines.' },
      { name: 'kpis', type: 'KpiTileProps[]', default: 'required', notes: 'Exactly 3.' },
      { name: 'source', type: 'SourceAttributionProps', default: 'required' },
    ],
    states: ['default', 'loading', 'empty', 'stale'],
    do: ['Always 3 KPIs — never 2 or 4.', 'Inline HighlightLinks to enable drill-down.'],
    dont: ['Render without SourceAttribution.'],
    related: ['components-kpi.html', 'primitives-source.html'],
  },

  'composite-impact-rollup.html': {
    name: 'Impact rollup', tag: 'Composite', group: 'composite',
    summary: 'Tree-style rollup: CIs → apps → processes → BUs → domains. Counts and severity flow up the tree.',
    anatomy: 'Tree with collapsible levels, count badges per level, severity tint flowing from leaves to root.',
    props: [
      { name: 'tree', type: 'RollupNode', default: 'required' },
      { name: 'collapsedLevels', type: 'number[]', default: '[]' },
      { name: 'onSelect', type: '(nodeId) => void', default: '—' },
    ],
    states: ['default', 'loading', 'empty', 'filtered'],
    do: ['Show counts at every level.'],
    dont: ['Render without a configured rollup hierarchy.'],
    related: ['dag-graph-kit.html'],
  },

  'composite-scenario.html': {
    name: 'Scenario projection', tag: 'Composite', group: 'composite',
    summary: '"If we run this, here\'s what changes." Before / after pair on KPIs with affected entity counts.',
    anatomy: 'Two KpiTiles side by side, arrow between, breakdown row underneath (CIs / apps / processes / BUs / domains).',
    props: [
      { name: 'before', type: 'KpiTileProps', default: 'required' },
      { name: 'after', type: 'KpiTileProps', default: 'required' },
      { name: 'affectedCount', type: 'number', default: 'required' },
      { name: 'breakdown', type: '{CIs, apps, processes, BUs, domains}', default: 'required' },
    ],
    states: ['default', 'loading', 'empty'],
    do: ['Always show the breakdown of affected entities.'],
    dont: ['Show projection without scenario assumptions.'],
    related: ['components-recommendation.html'],
  },

  /* ---------- Agentic ---------- */
  'agentic-states.html': {
    name: 'Agentic states', tag: 'Live', group: 'agentic',
    summary: 'The six live interaction primitives shown in isolation: AgentStatusBar, StepTimeline, ToolCallCard, HumanInputRequest, HandoffCard, StateDeltaToast.',
    anatomy: 'Each renders independently with the AI gradient border (`spruce-60 ↔ warm-red-50`, 28% α) on white. Single moving element only.',
    states: ['idle', 'thinking', 'streaming', 'awaiting-input', 'paused', 'done', 'error'],
    do: ['One AgentStatusBar per surface.', 'Use the pulsing dot — never a spinner.'],
    dont: ['Stack multiple moving elements.', 'Use the AI gradient on non-agentic surfaces.'],
    related: ['agentic-flow.html', 'composite-chat.html'],
  },

  'agentic-flow.html': {
    name: 'Agentic flow', tag: 'Live', group: 'agentic',
    summary: 'A composed live run end-to-end: AgentStatusBar streaming, StepTimeline progressing, ToolCallCard with editable args, HumanInputRequest gate, HandoffCard.',
    anatomy: 'Top: status bar. Right rail: step timeline. Center: tool calls + responses. Modal-blocking: HumanInputRequest when triggered.',
    states: ['streaming', 'awaiting-input', 'paused', 'done'],
    do: ['Gate destructive tools (graph.write, cmdb.write) behind HumanInputRequest.'],
    dont: ['Run destructive tools without a gate.'],
    related: ['agentic-states.html'],
  },

  'agentic-states-deck.html': {
    name: 'Agentic deck', tag: 'Live', group: 'agentic',
    summary: 'Deck-style reference of all live states. Useful for review meetings and engineering handoff.',
    related: ['agentic-states.html'],
  },

  'agentic-inbox.html': {
    name: '"Learned from you" inbox', tag: 'Agentic', group: 'agentic',
    summary: 'Audit trail of every override the user made on agent decisions. The system\'s commitment to explainability.',
    anatomy: 'List of override entries: (timestamp, surface, before → after, rationale). Filter by surface and date.',
    props: [
      { name: 'entries', type: 'OverrideEntry[]', default: 'required' },
      { name: 'filterBy', type: "'surface' | 'date' | 'kind'", default: 'date' },
      { name: 'onUndo', type: '(entryId) => void', default: '—' },
    ],
    states: ['default', 'empty', 'filtered'],
    do: ['Every override surfaces here — without exception.'],
    dont: ['Allow agent decisions to bypass the inbox.'],
    related: ['primitives-confidence.html'],
  },

  'ai-launch-button.html': {
    name: 'AI launch button', tag: 'Agentic', group: 'agentic',
    summary: 'Entry point to agentic surfaces. Pill-shaped, Spruce border, pulsing dot, "Ask agent" label.',
    anatomy: '40px height, fully rounded, leading pulsing dot, label, optional shortcut hint on the right.',
    props: [
      { name: 'label', type: 'string', default: '"Ask agent"' },
      { name: 'shortcut', type: 'string', default: '—' },
      { name: 'onLaunch', type: '() => void', default: 'required' },
    ],
    states: ['default', 'hover', 'active', 'unauthorized'],
    do: ['Place in the global header, top-right.'],
    dont: ['Use a sparkle icon.'],
    related: ['ai-modal-chat.html'],
  },

  'ai-modal-chat.html': {
    name: 'AI modal chat', tag: 'Agentic', group: 'agentic',
    summary: 'Modal-form chat surface with tool calls. Used as the entry experience from the AI launch button.',
    related: ['composite-chat.html', 'ai-launch-button.html'],
  },

  'ai-loader.html': {
    name: 'AI loader', tag: 'Agentic', group: 'agentic',
    summary: 'Drifting dot-field with Warm Red + Spruce blob morph. The system\'s canonical "agent is working" loader. Replaces all spinners on agentic surfaces.',
    anatomy: 'Two large radial gradient blobs (Warm Red 50 + Spruce 60, 28% α) animating position; dot-field overlay drifting at 0.5x.',
    states: ['idle', 'active'],
    do: ['Use on agentic surfaces only.', 'Pair with a state label (Sketching it out / Drafting / Resolving).'],
    dont: ['Use as a generic page loader.', 'Stack with a spinner.'],
    related: ['agentic-states.html'],
  },

  'ai-chat-history.html': {
    name: 'AI chat history', tag: 'Agentic', group: 'agentic',
    summary: 'Past conversations rail. Pinned, recent, archived sections. Each entry shows title + last-active timestamp.',
    related: ['composite-chat.html', 'ai-modal-chat.html'],
  },

  'ai-feedback-sources.html': {
    name: 'AI feedback / sources', tag: 'Agentic', group: 'agentic',
    summary: 'Inline thumbs / sources affordance under agent messages. Clicking sources opens the SourceAttribution popover.',
    related: ['primitives-source.html', 'composite-chat.html'],
  },

  /* ---------- Graph ---------- */
  'dag-graph-kit.html': {
    name: 'DAG & graph kit', tag: 'Graph', group: 'composite',
    summary: 'Investigation surface kit: 3 LOD node atoms (pill / card / expanded), 9 semantic node types, 8 lifecycle states, 4 edge styles, 4 layouts (DAG-h, DAG-v, radial, force).',
    anatomy: 'Canvas with pan/zoom, minimap, legend, left action rail, top/bottom chrome, right Workflow Event Log. Layout switcher in the toolbar.',
    props: [
      { name: 'nodes', type: 'GraphNode[]', default: 'required' },
      { name: 'edges', type: 'GraphEdge[]', default: 'required' },
      { name: 'layout', type: "'dag-h' | 'dag-v' | 'radial' | 'force'", default: "'dag-h'" },
      { name: 'lod', type: "'pill' | 'card' | 'expanded'", default: 'auto-by-zoom' },
      { name: 'dataset', type: "'workflow' | 'ontology'", default: "'workflow'" },
      { name: 'onSelect', type: '(nodeId) => void', default: '—' },
    ],
    states: ['default', 'loading', 'empty', 'error', 'filtered'],
    do: ['Auto-switch LOD at zoom thresholds.', 'Show the minimap on canvases > 8 nodes.'],
    dont: ['Bake layout into nodes.', 'Hide the minimap on big canvases.'],
    related: ['template-investigation.html', 'composite-impact-rollup.html'],
  },

  /* ---------- Templates ---------- */
  'template-dashboard.html': {
    name: 'Dashboard template', tag: 'Template', group: 'template',
    summary: 'Page shell: header + KpiGrid + 2-column composite area + ExecutionTimeline rail.',
    anatomy: 'Header (60px) → KpiGrid (3 tiles) → 2-col grid (composites) → right rail (timeline).',
    related: ['components-kpi.html'],
  },

  'template-triage.html': {
    name: 'Triage template', tag: 'Template', group: 'template',
    summary: 'Page shell: filter rail (left) + FindingCard list (center) + InspectorDrawer (right).',
    anatomy: 'Filter rail (240px) → finding list (flex) → drawer (320–480px).',
    related: ['components-badges.html'],
  },

  'template-investigation.html': {
    name: 'Investigation template', tag: 'Template', group: 'template',
    summary: 'Page shell: GraphCanvas centerpiece + GraphInspector right + WorkflowEventLog.',
    related: ['dag-graph-kit.html'],
  },

  'template-review.html': {
    name: 'Review queue template', tag: 'Template', group: 'template',
    summary: 'One template, three uses: Access Review / Change Request / Correction Request. Filterable table + detail drawer + approve/reject/defer + audit trail.',
    related: ['components-table.html'],
  },

  'template-conversation.html': {
    name: 'Conversation template', tag: 'Template', group: 'template',
    summary: 'Full-height ChatMessage stream with embedded SnapshotCards. The agentic-first page.',
    related: ['composite-chat.html'],
  },

  /* ---------- States ---------- */
  'states-matrix.html': {
    name: 'States matrix', tag: 'States', group: 'state',
    summary: 'All 8 states for every component: default, loading, empty, filtered-empty, error, stale, unauthorized, in-flight. The system\'s hard contract — every component must implement all 8.',
    anatomy: 'Grid of (component × state). Skeleton loading, empty illustrations, error banner, stale tint, unauthorized fallback.',
    states: ['default', 'loading', 'empty', 'filtered-empty', 'error', 'stale', 'unauthorized', 'in-flight'],
    do: ['Implement all 8 states before merging a new component.'],
    dont: ['Ship without the unauthorized state — show what they CAN see.'],
    related: ['components-status-banner.html'],
  },

  /* ---------- Brand ---------- */
  'brand-logo.html': {
    name: 'Brand logo', tag: 'Brand', group: 'brand',
    summary: 'Kyndryl wordmark. Clear-space rules and minimum size codified.',
    anatomy: 'Lowercase wordmark. Clear-space = height of the "k". Minimum size = 16px on screen.',
    do: ['Use in the global header at 16–20px height.', 'Maintain clear-space.'],
    dont: ['Tint the wordmark.', 'Stack with a sparkle icon.'],
    related: ['brand-icons.html'],
  },

  'brand-icons.html': {
    name: 'Icon library', tag: 'Brand', group: 'brand',
    summary: '17 Shidoka symbols mapped to roles: severity, status, agentic, navigation, action.',
    anatomy: '24×24 stroke icons. Stroke 1.5px, no fill. Color comes from `currentColor`.',
    do: ['Use stroke icons only.', 'Inherit color from `currentColor`.'],
    dont: ['Mix stroke and fill icons.', 'Use emoji as a stand-in.'],
    related: ['brand-logo.html'],
  },

};
