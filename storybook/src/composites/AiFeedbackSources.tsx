import React, { useState } from "react";
import "./composites.css";

const SparkSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" /></svg>
);

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15V5a2 2 0 012-2h10" /></svg>
);

const RegenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" /></svg>
);

const ThumbsUpIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13h6v14H5a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1Z" /><path d="M11 13l4-9a1 1 0 0 1 .9-.5 3 3 0 0 1 3 3v6h7.5a2 2 0 0 1 1.97 2.34l-1.83 11A2 2 0 0 1 24.58 27H11V13Z" /></svg>
);

const ThumbsDownIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M27 19h-6V5h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Z" /><path d="M21 19l-4 9a1 1 0 0 1-.9.5 3 3 0 0 1-3-3v-6H5.6a2 2 0 0 1-1.97-2.34l1.83-11A2 2 0 0 1 7.42 5H21V19Z" /></svg>
);

const ChevDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
);

const ChevUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15" /></svg>
);

const sourceChips = [
  "CMDB-Trust-Q3.pdf",
  "orphan-policy-v4",
  "ServiceNow CR-2914",
  "payments-runbook",
];

export const AiFeedbackSources: React.FC = () => {
  const [mode, setMode] = useState<"idle" | "sources" | "feedback">("idle");

  return (
    <div className="cmp-feedback-wrap">
      {/* COMPONENT — collapsed/expanded states */}
      <section className="cmp-card">
        <div className="cmp-eyebrow">
          <SparkSvg />
          Feedback &amp; Sources &middot; Component
        </div>
        <h2 className="cmp-h2">Feedback &amp; Sources</h2>
        <div className="cmp-sub">
          Sits beneath every AI response. Three states: collapsed action row, expanded sources,
          expanded feedback form.
        </div>

        <div className="cmp-kicker">Collapsed (idle)</div>
        <div className="cmp-actions">
          <button className="cmp-ico-btn" type="button"><CopyIcon /> Copy</button>
          <button className="cmp-ico-btn" type="button" aria-label="Regenerate"><RegenIcon /></button>
          <button className="cmp-ico-btn" type="button" aria-label="Thumbs up"><ThumbsUpIcon /></button>
          <button className="cmp-ico-btn" type="button" aria-label="Thumbs down"><ThumbsDownIcon /></button>
          <button
            className="cmp-ico-btn"
            type="button"
            onClick={() => setMode(mode === "sources" ? "idle" : "sources")}
          >
            Sources used <ChevDown />
          </button>
        </div>

        <div className="cmp-kicker">Sources expanded</div>
        <div className="cmp-actions">
          <button className="cmp-ico-btn" type="button"><CopyIcon /> Copy</button>
          <button className="cmp-ico-btn" type="button" aria-label="Regenerate"><RegenIcon /></button>
          <button className="cmp-ico-btn" type="button">Sources used (10) <ChevUp /></button>
        </div>
        <div className="cmp-sources">
          <button className="cmp-close-src" type="button" onClick={() => setMode("idle")}>&times;</button>
          <span className="cmp-sources-label">Used 10</span>
          {sourceChips.map((chip, i) => (
            <span className="cmp-src-chip" key={chip}>
              <span className="cmp-num">{i + 1}</span> {chip}
            </span>
          ))}
          <button className="cmp-show-more-src" type="button">Show more &darr;</button>
        </div>

        <div className="cmp-kicker">Feedback expanded</div>
        <div className="cmp-actions">
          <button className="cmp-ico-btn" type="button"><CopyIcon /> Copy</button>
          <button className="cmp-ico-btn" type="button" aria-label="Regenerate"><RegenIcon /></button>
          <button
            className="cmp-ico-btn cmp-flag cmp-is-active"
            type="button"
            aria-label="Thumbs down"
            onClick={() => setMode(mode === "feedback" ? "idle" : "feedback")}
          >
            <ThumbsDownIcon />
          </button>
        </div>
        <div className="cmp-feedback">
          <button className="cmp-close-fb" type="button" onClick={() => setMode("idle")}>&times;</button>
          <h3>Could you tell us a little more? <span style={{ color: "var(--fg-muted)", fontWeight: 400 }}>(optional)</span></h3>
          <div className="cmp-opts">
            <label><input type="checkbox" /> Inaccurate</label>
            <label><input type="checkbox" /> Outdated source</label>
            <label><input type="checkbox" /> Missing context</label>
          </div>
          <textarea placeholder="Enter detailed feedback" />
          <div className="cmp-fb-row">
            <button className="cmp-fb-btn cmp-primary" type="button">Submit</button>
            <button className="cmp-fb-btn cmp-ghost" type="button">Cancel</button>
          </div>
        </div>
      </section>

      {/* BASE — anatomy */}
      <section className="cmp-card">
        <div className="cmp-eyebrow">
          <SparkSvg />
          Feedback &amp; Sources &middot; Base
        </div>
        <h2 className="cmp-h2">Anatomy</h2>
        <div className="cmp-sub">Tokens, slots, and the order actions appear in.</div>

        <div className="cmp-kicker">Action order (LTR)</div>
        <div className="cmp-anatomy-specs">
          <ol>
            <li><strong>Copy</strong> — primary, always present</li>
            <li><strong>Regenerate</strong> — only on AI messages, never on user</li>
            <li><strong>Thumbs up / down</strong> — capture qualitative signal</li>
            <li><strong>Flag / Report</strong> — escalation to human review</li>
            <li><strong>Sources used (n)</strong> — trailing, expands the rail below</li>
          </ol>
        </div>

        <div className="cmp-kicker">Source-chip variants</div>
        <div className="cmp-actions" style={{ flexWrap: "wrap" }}>
          <span className="cmp-src-chip"><span className="cmp-num">1</span> Source label</span>
          <span className="cmp-src-chip" style={{ borderColor: "var(--k-spruce-60)", background: "rgba(41,112,122,.06)" }}>
            <span className="cmp-num">2</span> Hovered
          </span>
          <span className="cmp-src-chip" style={{ borderStyle: "dashed" }}>
            <span className="cmp-num">3</span> Citing CMDB
          </span>
        </div>

        <div className="cmp-kicker">Feedback form</div>
        <div className="cmp-anatomy-specs">
          <ul>
            <li>Form opens INLINE, never in a modal — the response stays visible above.</li>
            <li>Checkboxes are a fixed taxonomy of <code>3&ndash;5</code> options — never freeform-only.</li>
            <li>Submit posts to the &ldquo;Learned from you&rdquo; inbox, mirroring agentic feedback signals.</li>
          </ul>
        </div>

        <div className="cmp-kicker">Don&apos;t</div>
        <div className="cmp-anatomy-specs">
          <ul>
            <li>Don&apos;t combine sources + feedback in the same expansion — keep one open at a time.</li>
            <li>Don&apos;t show feedback panel without a thumbs-down event first.</li>
            <li>Don&apos;t paginate sources beyond 10 — collapse with &ldquo;Show more&rdquo;.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AiFeedbackSources;
