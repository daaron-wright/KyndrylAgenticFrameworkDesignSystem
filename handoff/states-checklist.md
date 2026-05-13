# States checklist

**Every component renders all eight of these states.** This is non-negotiable. Use this document as a PR checklist — copy it into your PR description and tick each box.

The visual reference for the matrix is `preview/states-matrix.html`.

---

## Why eight, not three

Most teams ship `default → loading → empty` and call it done. That ships components that crash on slow networks, lie when a query returns nothing, and leak permissions to readonly users. The eight states below are the floor that makes a component production-safe.

---

## The matrix

For each state: when it renders, what it must contain, and the common mistakes to avoid.

### 1 · `loading`

**When.** Data is in flight. First render after mount with no cached value.

**Must contain**
- A skeleton that **matches the final shape** (same boxes, same heights, same column count). Not a generic spinner.
- Stable layout — the skeleton occupies the same bounding box as the loaded state. Nothing reflows on data arrival.
- `aria-busy="true"` on the surface root.

**Don't**
- Use `<Spinner />` as the whole state.
- Show "Loading..." text without a layout placeholder.
- Animate the skeleton with anything other than the system shimmer.

---

### 2 · `empty`

**When.** The query succeeded; the result set is genuinely empty (not filtered).

**Must contain**
- One sentence in plain language naming what's missing: *"No findings yet."*
- A next-step CTA: *"Run a discovery scan"*, *"Connect a data source"*.
- Optional supporting icon at `.ki-32` or `.ki-48`.

**Don't**
- Render a blank card.
- Use generic copy like "No data" or "Nothing to show".
- Hide the surface entirely — keep the card so the layout stays stable.

---

### 3 · `filtered-empty`

**When.** Query succeeded, but the user's filters/search reduced the set to zero.

**Must contain**
- Copy that **names the filters**: *"No findings match Severity: Critical, Owner: Platform Eng."*
- A **Clear filters** button — always.
- The filter chips remain visible above the empty state.

**Don't**
- Conflate this with `empty`. They are different. `empty` means the dataset is empty; `filtered-empty` means the user narrowed too far.
- Lose the filter context when the user clears.

---

### 4 · `error`

**When.** The fetch / mutation failed. Network, 500, parse error, timeout.

**Must contain**
- A **human-readable cause**, not a stack trace: *"We couldn't reach the CMDB. The service is responding slowly."*
- A **Retry** button.
- An **Escalate / Get help** affordance — link to support, copy error ID to clipboard.
- Error code surfaced in monospace for the support team.

**Don't**
- Show raw error JSON.
- Use the word "Oops".
- Auto-retry without telling the user.
- Lose the error after a refresh — preserve the error ID so support can find it.

---

### 5 · `stale`

**When.** Data loaded successfully, but its `lastVerifiedAt` is older than the threshold for this surface (defaults to 7 days; tunable per component).

**Must contain**
- A `FreshnessBadge` switched to warning tint.
- A **banner** on the surface: *"This data is 14 days old. Refresh to see current values."*
- A **Refresh** action — never silently re-fetch.
- The stale data **stays visible** — the user can still triage it.

**Don't**
- Hide the data. Operators need to see what's there even if it's old.
- Mark stale based on render time. Use `lastVerifiedAt` from the source.

---

### 6 · `unauthorized`

**When.** The user lacks permission to view or act on this surface.

**Must contain**
- Plain-language explanation of **what they can see** and **what they can't**.
- A clear path to request access — link to the access-request flow, named approver.
- The surface chrome remains; the body is the unauthorized message.

**Don't**
- Show a 403 page.
- Reveal data shapes the user can't see (no "this card would have shown 12 critical findings").
- Hide the surface entirely — the user needs to know it exists.
- Silently fall back to readonly. Tell them.

---

### 7 · `executing`

**When.** A user-initiated action is running (recommendation execute, correction approve, batch operation).

**Must contain**
- Action CTAs disabled (`aria-disabled="true"`).
- Inline progress — `StepTimeline` for multi-step, progress bar for single long-running.
- A way to **cancel** if cancellation is safe; otherwise an explicit *"This action cannot be cancelled"* note.
- Optimistic UI on the affected row (greyed, marked "Executing…").

**Don't**
- Block the whole screen with a modal spinner.
- Re-enable the CTA before the result is confirmed.
- Show a generic "Processing…" without naming the step.

---

### 8 · `success-after-action`

**When.** An action completed successfully.

**Must contain**
- `ExecutionTimeline` on the surface OR a toast confirming the action.
- **Undo affordance** when the action is reversible (always preferred).
- Updated state visible **on the same surface** — no need to refresh to see the result.
- Audit-trail entry written.

**Don't**
- Just close the modal silently.
- Show "Success!" with an exclamation mark.
- Make the user navigate away to confirm the action took effect.

---

## PR checklist (copy into your PR description)

```markdown
## States rendered (DS contract)

- [ ] `loading` — skeleton matches final shape, `aria-busy` set
- [ ] `empty` — explanatory copy + next-step CTA
- [ ] `filtered-empty` — filter names called out + Clear filters
- [ ] `error` — human cause + Retry + Escalate + error ID
- [ ] `stale` — FreshnessBadge warning + banner + Refresh, data still visible
- [ ] `unauthorized` — what user can/can't see + request-access path
- [ ] `executing` — disabled CTAs + inline progress + cancel where safe
- [ ] `success-after-action` — confirmation surface + Undo (if reversible) + audit entry

## Non-negotiables

- [ ] Tokens only, no hex
- [ ] Severity paired with icon + label
- [ ] Sentence case copy
- [ ] Permission prop wired (`role` / `capabilities`)
- [ ] `font-variant-numeric: tabular-nums` on numbers
- [ ] Reduced-motion fallback
- [ ] RTL renders cleanly

## Screenshots

Attach one screenshot per state (8 total). Reviewers will not approve without these.
```

---

## Surface-specific notes

| Surface | Special-case states |
|---|---|
| `KpiTile` | `stale` shows the previous value with the FreshnessBadge — never hide the number. |
| `RecommendationCard` | `executing` runs through `StepTimeline`; `success-after-action` flips the card to a compact "Executed at HH:mm" row. |
| `GraphCanvas` | `loading` uses the dot-field drift animation, not skeleton. `empty` says "No relationships in this scope" with a Reset filters CTA. |
| `InspectorDrawer` | `unauthorized` shows the CI name + status only; everything else collapses to "You don't have access to inspect this CI." |
| `ChatMessage` | `error` reattempts inline; the failed user message stays visible with a retry chevron. |
| `ReviewQueue` | `filtered-empty` is far more common than `empty`; reviewers narrow heavily. The Clear filters button must be one-click. |

---

## What "done" looks like

A component is done when an SRE on a 3G mobile connection, in a region with high latency, with readonly permissions, can:
1. Open the page without staring at a blank screen.
2. Understand what they're seeing — even if it's empty, stale, or restricted.
3. Recover from a failure without contacting support.
4. Know whether their action took effect.

If any of those four conditions don't hold, the component isn't ready.
