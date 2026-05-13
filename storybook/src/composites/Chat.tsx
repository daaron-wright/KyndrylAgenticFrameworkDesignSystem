import React, { useState } from "react";
import "./composites.css";

const Chat: React.FC = () => {
  const [highlightKey, setHighlightKey] = useState<string | null>("orphans");

  const handleHighlight = (key: string) => {
    setHighlightKey(key);
  };

  return (
    <div className="cmp-chat-page">
      <div className="cmp-chat-wrap">
        <section className="cmp-chat-card">
          <div className="cmp-chat-eyebrow">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" />
            </svg>
            ChatMessage &amp; SnapshotCard
          </div>
          <h2>ChatMessage &middot; SnapshotCard</h2>
          <div className="cmp-chat-sub">
            The two CMDB chat primitives, refreshed against the Shidoka AI vocabulary. Every AI
            bubble uses the gradient border, every user bubble uses the warm-red fill, and every
            embedded card carries the Bridge AI mark. Inline AG-UI states (AgentStatusBar above,
            ToolCallCard between messages) show the agent&#39;s live work without breaking the rhythm.
          </div>

          {/* AgentStatusBar */}
          <div className="cmp-chat-asb">
            <span className="cmp-chat-asb-dot" />
            <span className="cmp-chat-asb-label">Investigating &middot; payments domain trust</span>
            <span className="cmp-chat-asb-meta">step 2 of 3 &middot; 4.2s</span>
            <div className="cmp-chat-asb-controls">
              <button className="cmp-chat-ab">Pause</button>
              <button className="cmp-chat-ab">Inject correction</button>
              <button className="cmp-chat-ab cmp-chat-danger">Cancel</button>
            </div>
          </div>

          <div className="cmp-chat-stream">
            {/* USER */}
            <div className="cmp-chat-msg cmp-chat-user">
              <div className="cmp-chat-bubble">Why did payments trust drop overnight?</div>
            </div>

            {/* INLINE TOOL CALL */}
            <span className="cmp-chat-ev">tool.completed &middot; cmdb.query</span>
            <div className="cmp-chat-tcc">
              <div className="cmp-chat-tcc-head">
                <div className="cmp-chat-tcc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <div className="cmp-chat-tcc-title">
                    Returned <span className="cmp-chat-tool">cmdb.query</span> &middot; 22 rows
                  </div>
                  <div className="cmp-chat-tcc-meta">230ms &middot; 22 orphaned CIs &middot; window 02:00–04:00</div>
                </div>
                <div className="cmp-chat-tcc-status">
                  <span className="cmp-chat-sd" />
                  OK
                </div>
              </div>
            </div>

            {/* AI */}
            <div className="cmp-chat-msg">
              <div className="cmp-chat-av" />
              <div>
                <div className="cmp-chat-bubble">
                  Between 02:00 and 04:00 the discovery scan flagged{" "}
                  <span
                    className="cmp-chat-hl"
                    onMouseEnter={() => handleHighlight("orphans")}
                  >
                    22 new orphaned CIs
                  </span>{" "}
                  in <code>payments-svc</code>. These pushed domain trust from{" "}
                  <strong>62% &rarr; 58%</strong>. The upstream app{" "}
                  <span
                    className="cmp-chat-hl"
                    onMouseEnter={() => handleHighlight("app")}
                  >
                    checkout-api
                  </span>{" "}
                  is Degraded as a consequence.
                </div>

                {/* Snapshot card: orphans */}
                <div
                  className={`cmp-chat-snap${highlightKey === "orphans" ? " cmp-chat-highlight" : ""}`}
                  data-key="orphans"
                >
                  <div className="cmp-chat-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="cmp-chat-snap-t">22 orphaned CIs &middot; payments-svc</p>
                    <p className="cmp-chat-snap-s">First seen 02:14 &middot; no upstream owner</p>
                  </div>
                  <span className="cmp-chat-arr">Inspect &rarr;</span>
                </div>

                {/* Snapshot card: app */}
                <div
                  className={`cmp-chat-snap${highlightKey === "app" ? " cmp-chat-highlight" : ""}`}
                  data-key="app"
                >
                  <div
                    className="cmp-chat-ico"
                    style={{ background: "rgba(41,112,122,.08)", color: "var(--k-spruce-60)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 9h6v6H9z" />
                    </svg>
                  </div>
                  <div>
                    <p className="cmp-chat-snap-t">checkout-api &middot; Degraded</p>
                    <p className="cmp-chat-snap-s">1 of 6 downstream CIs impacted</p>
                  </div>
                  <span className="cmp-chat-arr">Open graph &rarr;</span>
                </div>

                {/* Actions */}
                <div className="cmp-chat-actions">
                  <button className="cmp-chat-ico-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15V5a2 2 0 012-2h10" />
                    </svg>
                    Copy
                  </button>
                  <button className="cmp-chat-ico-btn" aria-label="Regenerate">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="23 4 23 10 17 10" />
                      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10" />
                    </svg>
                  </button>
                  <button className="cmp-chat-ico-btn" aria-label="Thumbs up">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13h6v14H5a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1Z" />
                      <path d="M11 13l4-9a1 1 0 0 1 .9-.5 3 3 0 0 1 3 3v6h7.5a2 2 0 0 1 1.97 2.34l-1.83 11A2 2 0 0 1 24.58 27H11V13Z" />
                    </svg>
                  </button>
                  <button className="cmp-chat-ico-btn" aria-label="Thumbs down">
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M27 19h-6V5h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Z" />
                      <path d="M21 19l-4 9a1 1 0 0 1-.9.5 3 3 0 0 1-3-3v-6H5.6a2 2 0 0 1-1.97-2.34l1.83-11A2 2 0 0 1 7.42 5H21V19Z" />
                    </svg>
                  </button>
                  <button className="cmp-chat-ico-btn">
                    Sources used (4){" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Chat;
