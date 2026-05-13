import React, { useState } from "react";
import "./agentic-showcase.css";

/* ======================== SVG HELPERS ======================== */

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--kyn-primary)" }}>
    <path d="M12 2l2.4 5.2L20 8l-4 4 1 5.6L12 15l-5 2.6L8 12l-4-4 5.6-.8z" />
  </svg>
);

const BookIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v16" />
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
  </svg>
);

const ListIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

const LineIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M3 12h18" />
  </svg>
);

const AlertIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

/* ======================== DATA ======================== */

type RowType = "teach" | "override" | "dispute";

interface InboxRow {
  type: RowType;
  title: string;
  meta: string;
  impact: string;
  time: string;
}

const rows: InboxRow[] = [
  {
    type: "teach",
    title: "Taught the agent to lower confidence for AWS auto-scaling group records",
    meta: "From <b>64% confidence</b> on <b>CI-8421</b> · you confirmed this pattern applies to all ASG-derived CIs.",
    impact: "applied to 147 similar items · avg confidence −0.18",
    time: "2h ago",
  },
  {
    type: "override",
    title: "Overrode confidence · web-gateway-02",
    meta: "Agent said <b>82%</b>, you set <b>40%</b>. Agent is monitoring for drift.",
    impact: "isolated override · not generalised",
    time: "5h ago",
  },
  {
    type: "dispute",
    title: "Disputed derivation · payment-svc owner",
    meta: "You marked <b>Reconciliation Agent</b>'s owner inference as wrong. Priors updated for the <b>payments</b> BU.",
    impact: "23 similar inferences re-derived · 4 changed",
    time: "yesterday",
  },
  {
    type: "teach",
    title: "Labeled change cause · Q3 migration wave",
    meta: "DeltaIndicator <b>+2.1 pp</b> on Data Quality score tagged as \"migration-driven\". Detector now recognises the pattern.",
    impact: "will auto-annotate similar future moves",
    time: "2 days ago",
  },
  {
    type: "override",
    title: "Pinned as trusted · svc-inventory-primary",
    meta: "Freshness checks bypassed. Agent will still warn at <b>> 60 days</b>.",
    impact: "1 item pinned · auto-review in 90 days",
    time: "3 days ago",
  },
  {
    type: "override",
    title: "Stale threshold changed · observability sources",
    meta: "Raised from <b>24h</b> to <b>72h</b> across 8 source connectors.",
    impact: "freshness alerts −62%",
    time: "5 days ago",
  },
  {
    type: "teach",
    title: "Reassigned reviewer pattern · change-queue APAC",
    meta: "Agent now auto-routes APAC-tagged changes to <b>A. Ortiz</b> when primary is out-of-hours.",
    impact: "routing rule active · 12 changes affected",
    time: "1 week ago",
  },
];

const iconForType = (type: RowType) => {
  switch (type) {
    case "teach": return <BookIcon />;
    case "override": return type === "override" ? <ListIcon /> : <LineIcon />;
    case "dispute": return <AlertIcon />;
  }
};

const tabs = [
  { label: "All · 7", filter: null as RowType | null },
  { label: "Teach signals · 3", filter: "teach" as RowType },
  { label: "Overrides · 3", filter: "override" as RowType },
  { label: "Disputes · 1", filter: "dispute" as RowType },
];

/* ======================== COMPONENT ======================== */

export const AgenticInbox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<RowType | null>(null);
  const visibleRows = activeTab ? rows.filter((r) => r.type === activeTab) : rows;

  return (
    <div className="agsc-inbox">
      <div className="agsc-inbox-head">
        <StarIcon />
        <div>
          <h2>Learned from you</h2>
          <div className="agsc-inbox-head-sub">Every override is a teaching signal. The agent applied these to future decisions.</div>
        </div>
        <span className="agsc-inbox-count">7 this week</span>
      </div>

      <div className="agsc-inbox-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`agsc-inbox-tab ${activeTab === tab.filter ? "agsc-inbox-tab-on" : ""}`}
            onClick={() => setActiveTab(tab.filter)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {visibleRows.map((row) => (
        <div className={`agsc-inbox-row agsc-inbox-row-${row.type}`} key={row.title}>
          <div className="agsc-inbox-icon">
            {row.type === "teach" && <BookIcon />}
            {row.type === "override" && <LineIcon />}
            {row.type === "dispute" && <AlertIcon />}
          </div>
          <div>
            <div className="agsc-inbox-title">{row.title}</div>
            <div className="agsc-inbox-meta" dangerouslySetInnerHTML={{ __html: row.meta }} />
            <div className="agsc-inbox-impact">{row.impact}</div>
          </div>
          <div className="agsc-inbox-time">{row.time}</div>
        </div>
      ))}

      <div className="agsc-inbox-footer">
        <span>Every row here came from a single primitive interaction.</span>
        <a href="#">See how the agent changed →</a>
      </div>
    </div>
  );
};
