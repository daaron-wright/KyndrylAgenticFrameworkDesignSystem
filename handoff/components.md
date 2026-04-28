# Components

Per-composite contract. Anatomy, props, slots, do/don't, edge cases. Pair each entry with the matching `preview/*.html` for the visual.

> **Convention.** Props are described in TypeScript-ish syntax for clarity; the actual production target is Shidoka Lit components. The contract is what matters, not the framework.

---

## Quick index

**Primitives** — atomic, opinionated badges and indicators.
- [SeverityPill](#severitypill)
- [StatusBadge](#statusbadge)
- [ConfidenceBadge](#confidencebadge) · agentic
- [FreshnessBadge](#freshnessbadge) · agentic
- [DeltaIndicator](#deltaindicator) · agentic
- [SourceAttribution](#sourceattribution) · agentic

**Composites** — multi-part patterns.
- [KpiTile](#kpitile)
- [KpiGrid](#kpigrid)
- [TrustScoreGauge](#trustscoregauge)
- [FindingCard](#findingcard)
- [InspectorDrawer](#inspectordrawer)
- [SignalsPanel](#signalspanel)
- [RecommendationCard](#recommendationcard)
- [ScenarioProjectionCard](#scenarioprojectioncard)
- [ExecutionTimeline](#executiontimeline)
- [GraphCanvas](#graphcanvas)
- [GraphInspector](#graphinspector)
- [ImpactRollup](#impactrollup)
- [ChatMessage](#chatmessage)
- [SnapshotCard](#snapshotcard)

**Live (interaction-state) primitives** — the real-time agentic surface.
- [AgentStatusBar](#agentstatusbar)
- [StepTimeline](#steptimeline)
- [ToolCallCard](#toolcallcard)
- [HumanInputRequest](#humaninputrequest)
- [HandoffCard](#handoffcard)
- [StateDeltaToast](#statedeltatoast)

**Templates** — page shells.
- [DashboardTemplate](#dashboardtemplate)
- [TriageTemplate](#triagetemplate)
- [InvestigationTemplate](#investigationtemplate)
- [ReviewQueueTemplate](#reviewqueuetemplate)
- [ConversationTemplate](#conversationtemplate)

---

# Primitives

The primitives layer is where the system's opinions live. Every primitive carries an opinion: what it represents, what actions it permits, and what feedback it gives the user. Don't strip the affordances thinking they're decoration — they are the system.

## SeverityPill

> **Preview** — `preview/components-badges.html`

Compact uppercase pill that conveys severity. Used in tables, finding cards, queue rows.

### Anatomy
`[icon] [LABEL]` — uppercase 10–11px, `--tracking-eyebrow`, fully pill-shaped.

### Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `severity` | `'critical' \| 'high' \| 'medium' \| 'low' \| 'ok'` | required | Maps to `--sev-*` tokens. |
| `label` | `string` | `severity.toUpperCase()` | Override allowed for i18n. |
| `density` | `'default' \| 'compact'` | `'default'` | Compact removes left padding; for table cells. |

### Tokens
- bg → `--sev-{severity}-bg`
- fg → `--sev-{severity}-fg`
- border → `--sev-{severity}-border`
- icon → matching status icon (`error-filled` / `warning-alt` / etc.)

### Do
- Always pair color with the icon and uppercase label.
- Use compact variant inside table cells.

### Don't
- Use `<SeverityPill>` to convey workflow state. Use `<StatusBadge>` for that.
- Render with color only and no label.

---

## StatusBadge

> **Preview** — `preview/primitives-status.html`

Sentence-case chip for **operational or workflow status**. Distinct from severity: severity is "how bad", status is "where in the lifecycle".

### Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `status` | `'healthy' \| 'degraded' \| 'impacted' \| 'unknown' \| 'pending' \| 'approved' \| 'executed' \| 'rejected'` | required | |
| `label` | `string` | derived from status | |
| `role` | `'full' \| 'review' \| 'readonly'` | `'full'` | `'readonly'` removes the chevron. |

### Agentic actions (popover)
- `Advance / approve` — moves to next state.
- `Reassign reviewer`
- `Add note`
- `Reject / rollback` — destructive, requires confirm.

### Do
- Sentence case (`Healthy`, `Pending`).
- Pair with a colored dot, never color-only background.

### Don't
- Use status to indicate severity.
- Strip the chevron unless `role='readonly'`.

---

## ConfidenceBadge · agentic

> **Preview** — `preview/primitives-confidence.html`

Shows the agent's confidence in a value. Always agentic — it represents a model decision the user can push back on.

### Anatomy
`[ value% ] [•••]` — value in monospace, dotted underline, trailing chevron on hover.

### Props

| Prop | Type | Notes |
|---|---|---|
| `value` | `number` (0–100) | Required. Render as integer. |
| `rationale` | `string` | **Required.** No rationale → don't render the badge. |
| `evidence` | `string[]` | Source IDs displayed in popover. |
| `onOverride` | `(newValue: number) => void` | |
| `onTeach` | `(signal: TeachSignal) => void` | Writes to "Learned from you" inbox. |
| `onDispute` | `() => void` | |

### Popover actions
- **Override** — user sets a new value; non-destructive, applies instantly.
- **Ask for more evidence** — non-destructive, triggers re-derivation.
- **Snooze** — hide for 24h; non-destructive.
- **Teach the agent** — destructive (changes future agent behavior); requires confirm.

### Tokens
- value text → `--fg-1`, `font-variant-numeric: tabular-nums`
- underline → 1px dotted `currentColor`
- popover surface → `colors_and_type.css` `.agentic-pop`

### Do
- Always show rationale in the popover header.
- Log every override to the agentic inbox via `onTeach`.

### Don't
- Render without a `rationale`.
- Show a confidence value > 99 — clamp to 99 to avoid implying certainty.

---

## FreshnessBadge · agentic

> **Preview** — `preview/primitives-freshness.html`

How old is this data. Switches to warning tint when older than `staleThresholdDays`.

### Props

| Prop | Type | Default |
|---|---|---|
| `lastVerifiedAt` | `Date \| ISOString` | required |
| `staleThresholdDays` | `number` | `7` |
| `source` | `string` | optional, e.g. `'CMDB.discovery'` |
| `onRefresh` | `() => void` | |
| `onChangeThreshold` | `(days: number) => void` | |
| `onPin` | `() => void` | Marks "trusted as-is". |

### Popover actions
- **Force refresh**
- **Change stale threshold** (slider)
- **Notify owner** when stale
- **Pin as trusted** — destructive, requires confirm.

### States
- Fresh — `--fg-muted`, no banner.
- Approaching stale (within 1 day) — `--k-status-warning-110` text, no banner.
- Stale — warning tint background, surface-level banner mandated.

### Don't
- Compute staleness from render time. Use `lastVerifiedAt`.
- Hide stale data — keep it visible behind the banner.

---

## DeltaIndicator · agentic

> **Preview** — `preview/primitives-delta.html`

Period-over-period change with explanatory popover.

### Props

| Prop | Type | Notes |
|---|---|---|
| `value` | `number` | Signed. Sign drives icon direction. |
| `unit` | `'pct' \| 'abs' \| 'count'` | |
| `period` | `string` | "WoW", "30d", custom. |
| `direction` | `'up-good' \| 'up-bad' \| 'neutral'` | Drives color semantics — up isn't always green. |
| `onExplain` | `() => void` | |

### Popover actions
- **Explain this change**
- **Set alert threshold**
- **Compare periods**
- **Teach what caused this** — destructive.

### Tokens
- Up + `up-good` → `--k-status-success-100` + `arrow-up-right`
- Down + `up-good` → `--k-warm-red-50` + `arrow-down-right`
- `up-bad` inverts.
- `neutral` always `--fg-muted`.

### Don't
- Use `+` / `−` glyphs alone. Use the icons.
- Assume up = good. Spec the direction explicitly.

---

## SourceAttribution · agentic

> **Preview** — `preview/primitives-source.html`

Footer line on agent-generated cards. Names the dataset, timestamp, confidence.

### Anatomy
`[ki-chip] dataset · timestamp · confidence% [•••]`

### Props

| Prop | Type | Notes |
|---|---|---|
| `dataset` | `string` | Required. |
| `timestamp` | `Date` | Required. |
| `confidence` | `number` | Optional. |
| `provenance` | `ProvenanceNode[]` | Lineage tree shown in popover. |

### Popover actions
- **Open source**
- **View provenance** (lineage tree)
- **Request re-derivation**
- **Dispute** — destructive.

### Do
- Always present on agent-generated content.
- Use `--font-mono` for the timestamp.

### Don't
- Skip on cards that include a model recommendation.
- Show "AI" or sparkle emoji as a stand-in.

---

# Composites

## KpiTile

> **Preview** — `preview/components-kpi.html`

Single KPI surface. Number + label + delta + freshness + optional source line.

### Props

| Prop | Type | Notes |
|---|---|---|
| `label` | `string` | Sentence case. |
| `value` | `number \| string` | |
| `unit` | `string` | "%", "CIs", "$", or none. |
| `delta` | `DeltaIndicatorProps` | Optional. |
| `freshness` | `FreshnessBadgeProps` | Optional but recommended. |
| `source` | `SourceAttributionProps` | Optional. |
| `tone` | `'default' \| 'attention' \| 'success'` | Drives left-border accent only. |
| `onClick` | `() => void` | Whole tile becomes a button if provided. |

### Anatomy
```
[label]
[VALUE]            [delta]
[freshness]        [source]
```

### Tokens
- bg → `--card`
- border → `--border-1`
- value → `.t-kpi-lg` for hero tiles, `.t-kpi` otherwise
- label → `.t-caption` (UPPERCASE eyebrow)

### Don't
- Stack two KPI numbers in one tile.
- Use the `attention` tone unless the value crosses a threshold.

---

## KpiGrid

Container. Lays out 2/3/4 KpiTiles responsively.

### Props
- `columns` — `2 | 3 | 4`, default `3`.
- `gap` — `--space-4` default.

> Just a layout primitive. All real logic lives in `KpiTile`.

---

## TrustScoreGauge

> **Preview** — `preview/components-gauge.html`

Semi-circular gauge showing CMDB trust score 0–100. Pairs with FreshnessBadge and DeltaIndicator.

### Props
- `value` — required, 0–100.
- `target` — optional target marker.
- `bands` — `[{ from, to, tone }, …]` — RAG bands.
- `freshness`, `delta` — passed through.

### Don't
- Render without bands; the value alone is meaningless.
- Use a full-circle gauge — semi-circle only.

---

## FindingCard

> **Preview** — `preview/states-matrix.html`

Triage row for stale/orphaned/anomalous CIs.

### Props

| Prop | Type | Notes |
|---|---|---|
| `severity` | required | drives left-border tint. |
| `title` | `string` | CI name. |
| `summary` | `string` | One sentence. |
| `signals` | `Signal[]` | Renders as chips. |
| `actions` | `Action[]` | 3-way: investigate / dismiss / route. |
| `role` | permissions prop | |

### Layout
- Left-border accent in severity tint.
- Right rail with signals + agentic affordance.

### Don't
- Have more than 4 signals visible. Overflow into a "+N more" chip.

---

## InspectorDrawer

Right-side drawer 320–480px wide. Tabs for Overview / Signals / History / Provenance.

### Props
- `ciId` — required.
- `defaultTab` — `'overview'`.
- `role` — gates which tabs render.

### Don't
- Open as a modal. It must allow the user to keep the underlying surface visible.

---

## SignalsPanel

> **Preview** — `preview/composite-impact-rollup.html`

Rolled-up list of signals contributing to a finding. Signals are `(metric, threshold, currentValue, contribution)`.

### Don't
- Render confidence per signal — surface confidence at the finding level.

---

## RecommendationCard

> **Preview** — `preview/components-recommendation.html`

The agent's proposed action. Title + rationale + projected impact + 3-way CTA.

### Props

| Prop | Type | Notes |
|---|---|---|
| `title` | `string` | Imperative: "Reconcile 14 stale CIs". |
| `rationale` | `string` | One paragraph. |
| `signals` | `SignalsPanelProps` | |
| `projection` | `ScenarioProjectionCardProps` | Embedded. |
| `confidence` | `number` | Renders ConfidenceBadge. |
| `onExecute` | required for `role='full'` | |
| `onSendForReview` | required | |
| `onDismiss` | required | |
| `role` | required | `'full' \| 'review' \| 'readonly'` |

### CTA matrix
| role | Execute | Send for review | Dismiss |
|---|---|---|---|
| full | ✓ | ✓ | ✓ |
| review | ✗ | ✓ | ✓ |
| readonly | ✗ | ✗ | ✗ (Request access banner) |

### Don't
- Render without a `rationale`.
- Allow Execute without first showing the projection.

---

## ScenarioProjectionCard

> **Preview** — `preview/composite-scenario.html`

"If we run this, here's what changes." Before / after pair on KPIs.

### Props
- `before` — KpiTile data.
- `after` — KpiTile data with delta highlights.
- `affectedCount` — total entities touched.
- `breakdown` — { CIs, apps, processes, BUs, domains }.

### Don't
- Show projection without the underlying scenario assumptions.

---

## ExecutionTimeline

> **Preview** — `preview/components-execution.html`

Vertical timeline of execution steps. Two variants: in-flight (live) and completed.

### Props
- `steps` — `[{ label, status, startedAt, completedAt, error? }]`
- `mode` — `'live' \| 'completed'`
- `onApproveOnce` / `onApproveAll` — only in `live`.

### Don't
- Re-order steps after start.
- Hide failed steps from the completed view.

---

## GraphCanvas

> **Preview** — `preview/dag-graph-kit.html`

The investigation surface. Nodes + edges, pan/zoom, minimap, layout switcher.

### Props

| Prop | Type | Notes |
|---|---|---|
| `nodes` | `GraphNode[]` | See type-system in `dag-graph-kit.html`. |
| `edges` | `GraphEdge[]` | |
| `layout` | `'dag-h' \| 'dag-v' \| 'radial' \| 'force'` | |
| `lod` | `'pill' \| 'card' \| 'expanded'` | LOD switches at zoom thresholds. |
| `onSelect` | `(id) => void` | |
| `dataset` | `'workflow' \| 'ontology'` | Drives node taxonomy. |

### Don't
- Bake layout into nodes. Layout is a render concern.
- Hide the minimap on canvases > 8 nodes.

---

## GraphInspector

Same as `InspectorDrawer` but with a Path tab (downstream/upstream).

---

## ImpactRollup

> **Preview** — `preview/composite-impact-rollup.html`

Tree-style view: CI → apps → processes → BUs → domains. Counts per layer.

### Don't
- Render without a configured rollup hierarchy.

---

## ChatMessage

> **Preview** — `preview/composite-chat.html`

Single message in the conversation surface.

### Props

| Prop | Type | Notes |
|---|---|---|
| `author` | `'user' \| 'agent'` | |
| `content` | `RichContent` | Supports highlight-link inlines. |
| `snapshots` | `SnapshotCardProps[]` | Cards rendered below the message. |
| `timestamp` | `Date` | |

### Don't
- Use first person ("I", "we") in agent messages. Third person.
- Append exclamation marks.

---

## SnapshotCard

Compact card linked from a `<HighlightLink>` in chat. Same data shape as the underlying composite (KPI / FindingCard / Recommendation), rendered in compact mode.

---

# Live (interaction-state) primitives

These render **while the agent is working**. Visual contract: AI gradient border (`spruce-60 ↔ warm-red-50`, 28% α) on white, single moving element (pulsing dot, streaming caret).

## AgentStatusBar

Sticky top of any agentic surface. Shows: agent name, current state (`thinking` / `streaming` / `paused` / `done`), step count, controls (pause/resume, branch, step-through toggle).

### Don't
- Render more than one per surface.
- Use a spinner — use the pulsing dot.

## StepTimeline

Right-rail or inline. Live state of the run. Each row supports Approve once / Approve all in step-through mode.

## ToolCallCard

Inline card for a tool invocation. In step-through mode, shows args (dashed underline = editable), Approve / Cancel.

### Don't
- Run destructive tools (`graph.write`, `cmdb.write`, `incident.create`) without a gate, ever.

## HumanInputRequest

The single visual exception: amber surface, breaks the AI gradient on purpose so the user catches it on a long scroll. Blocking.

## HandoffCard

Agent → agent or agent → human. Names the source, target, payload, timestamp.

## StateDeltaToast

Bottom-left ambient toast when the agent updated a value visible elsewhere. Non-blocking. 4-second timeout, paused on hover.

---

# Templates

Five page shells. Compose, don't fork.

## DashboardTemplate
> **Preview** — `preview/template-dashboard.html`

Header + KpiGrid + 2-column composite area + ExecutionTimeline rail.

## TriageTemplate
> **Preview** — `preview/template-triage.html`

Filter rail + FindingCard list + InspectorDrawer.

## InvestigationTemplate
> **Preview** — `preview/template-investigation.html`

GraphCanvas centerpiece + GraphInspector right + WorkflowEventLog.

## ReviewQueueTemplate
> **Preview** — `preview/template-review.html`

One template, three uses: Access Review / Change Request / Correction Request. Filterable table + detail drawer + approve/reject/defer + audit trail.

## ConversationTemplate
> **Preview** — `preview/template-conversation.html`

Full-height ChatMessage stream with embedded SnapshotCards.

---

## Anti-patterns (codified)

These come up in PRs. They're banned.

1. **Inventing a new card variant.** Use one of the 14 composites. If you can't, file an issue.
2. **Hardcoded hex / px / font names** outside `colors_and_type.css`.
3. **Severity by color alone.** Pair with icon + label.
4. **Confidence without rationale.** No rationale, no badge.
5. **Action without permission gate.** Every action-bearing surface takes `role` / `capabilities`.
6. **Spinners as the empty state.** Skeleton matching final shape.
7. **"Oops!" / "Let's get started!" / exclamation marks.** Plain operational language.
8. **Emoji.** Ever.
9. **Sparkle / "AI-powered ✨".** Use SourceAttribution.
10. **Title case on UI copy.** Sentence case.
11. **Re-fetching silently when stale.** Always show a banner + Refresh.
12. **Rendering 403 instead of `unauthorized` state.** Show what they can see.
