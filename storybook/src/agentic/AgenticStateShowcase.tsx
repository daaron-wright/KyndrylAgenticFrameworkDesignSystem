import React from "react";
import { AgentStatusBar } from "./AgentStatusBar";
import { HandoffCard } from "./HandoffCard";
import { HumanInputRequest } from "./HumanInputRequest";
import { StateDeltaToast } from "./StateDeltaToast";
import { StepTimeline } from "./StepTimeline";
import { ToolCallCard } from "./ToolCallCard";
import "./agentic.css";

export const AgenticStateShowcase: React.FC = () => (
  <div className="ka-showcase">
    <section className="ka-showcase-card ka-showcase-card-full">
      <div className="ka-eyebrow"><span className="ka-glyph" />Agentic interaction states</div>
      <h2>Agentic interaction states</h2>
      <p className="ka-sub">
        Six live primitives surface what the agent is doing right now: thinking, calling tools, asking for input,
        walking a plan, handing off, and updating shared state. They are dynamic Storybook components now, with the
        static reference styling preserved.
      </p>
    </section>

    <section className="ka-showcase-card ka-showcase-card-full">
      <div className="ka-eyebrow"><span className="ka-glyph" />AgentStatusBar</div>
      <div className="ka-demo-grid">
        <AgentStatusBar state="thinking" />
        <AgentStatusBar state="streaming" />
        <AgentStatusBar state="waiting" />
        <AgentStatusBar state="paused" />
        <AgentStatusBar state="done" />
      </div>
    </section>

    <section className="ka-showcase-card ka-showcase-card-full">
      <div className="ka-eyebrow"><span className="ka-glyph" />ToolCallCard</div>
      <div className="ka-demo-grid">
        <ToolCallCard
          toolName="cmdb.query"
          state="pending"
          args={{ filter: "status:orphaned AND domain:payments", window: "24h", limit: 50 }}
          editableKeys={["filter", "window", "limit"]}
        />
        <ToolCallCard toolName="graph.expand" state="running" args={{ depth: "upstream-1" }} meta="step 3 of 6 - 1.4s elapsed" />
        <ToolCallCard toolName="cmdb.query" state="ok" args={{ rows: 22 }} resultSummary="22 rows" />
        <ToolCallCard toolName="graph.write" state="err" args={{ operation: "mutate" }} />
      </div>
    </section>

    <section className="ka-showcase-card ka-showcase-card-full">
      <div className="ka-eyebrow"><span className="ka-glyph" />HumanInputRequest</div>
      <HumanInputRequest
        question="The orphan has two plausible owners. Which one should I assign?"
        context="CI web-gateway-02 was last touched by A. Ortiz on deploy and K. Patel on config. The deploy edit is structural, the config edit is cosmetic."
        options={["Assign to A. Ortiz", "Assign to K. Patel", "Leave unassigned - escalate"]}
      />
    </section>

    <section className="ka-showcase-card">
      <div className="ka-eyebrow"><span className="ka-glyph" />StepTimeline</div>
      <StepTimeline
        steps={[
          { title: "Identified 22 orphans in payments-svc", state: "done", note: "via cmdb.query - 230ms", timestamp: "+0.4s" },
          { title: "Expanded upstream graph", state: "done", note: "checkout-api impacted", timestamp: "+1.8s" },
          { title: "Inferring most likely owners", state: "active", note: "cross-checking deploy history" },
          { title: "Draft owner-assignment plan", state: "pending", note: "requires approval before write" }
        ]}
      />
    </section>

    <section className="ka-showcase-card">
      <div className="ka-eyebrow"><span className="ka-glyph" />HandoffCard</div>
      <div className="ka-demo-grid">
        <HandoffCard from="Triage" to="Reconciliation" toKind="specialist" reason="Handing off - needs SQL skill" />
        <HandoffCard from="Reconciliation" to="D. Aaron" kind="human" reason="Handing back - review needed" />
      </div>
    </section>

    <section className="ka-showcase-card ka-showcase-card-full">
      <div className="ka-eyebrow"><span className="ka-glyph" />StateDeltaToast</div>
      <div className="ka-toast-grid">
        <StateDeltaToast field="owner" subject="payments-svc owner" oldValue="unassigned" newValue="A. Ortiz" context="confidence 0.78" actions={["Undo", "Why?"]} />
        <StateDeltaToast field="trust_score" subject="Trust score recomputed" oldValue="62%" newValue="58%" context="payments domain" tone="warm" actions={["Why?", "Open"]} />
        <StateDeltaToast field="filter" subject="severity >= Warning" oldValue="312 rows" newValue="94 rows" context="per your earlier instruction" actions={["Undo"]} />
        <StateDeltaToast field="stale_window" subject="stale window" oldValue="24h" newValue="72h" context="proposed, not applied" actions={["Apply", "Dismiss"]} />
      </div>
    </section>
  </div>
);
