import React, { useState } from "react";
import "./composites.css";

const SparkSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" /></svg>
);

const todayThreads = [
  "Why did payments trust drop overnight?",
  "Tell me more about Hybrid IT Modernization",
  "How do I prioritise applications to modernise?",
];

const yesterdayThreads = [
  "Walk me through the orphan-CI policy v4",
];

export const AiChatHistory: React.FC = () => {
  const [query, setQuery] = useState("");
  const [activeThread, setActiveThread] = useState(todayThreads[0]);
  const [detailTab, setDetailTab] = useState<"Chat" | "Chat History" | "Settings">("Chat History");
  const [listTab, setListTab] = useState<"Chat" | "Chat History" | "Settings">("Chat History");

  const filteredToday = todayThreads.filter((t) =>
    t.toLowerCase().includes(query.toLowerCase())
  );
  const filteredYesterday = yesterdayThreads.filter((t) =>
    t.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="cmp-history-wrap">
      {/* LEFT — Chat History list */}
      <section className="cmp-card">
        <div className="cmp-eyebrow">
          <SparkSvg />
          Chat List
        </div>
        <div className="cmp-hist-tabs">
          {(["Chat", "Chat History", "Settings"] as const).map((t) => (
            <button
              className={`cmp-hist-tab ${listTab === t ? "cmp-on" : ""}`}
              type="button"
              key={t}
              onClick={() => setListTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <h2 className="cmp-h2">Chat History</h2>
        <div className="cmp-search" style={{ marginTop: 12 }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="cmp-optional-text">Optional text</div>

        {filteredToday.length > 0 && (
          <>
            <div className="cmp-group">Today &middot; 26 Apr 2026</div>
            {filteredToday.map((thread) => (
              <button
                className={`cmp-hist-row ${activeThread === thread ? "cmp-active" : ""}`}
                type="button"
                key={thread}
                onClick={() => setActiveThread(thread)}
              >
                {thread}
                <span className="cmp-ai-glyph-sm" />
              </button>
            ))}
          </>
        )}

        {filteredYesterday.length > 0 && (
          <>
            <div className="cmp-group">Yesterday &middot; 25 Apr 2026</div>
            {filteredYesterday.map((thread) => (
              <button
                className={`cmp-hist-row ${activeThread === thread ? "cmp-active" : ""}`}
                type="button"
                key={thread}
                onClick={() => setActiveThread(thread)}
              >
                {thread}
                <span className="cmp-ai-glyph-sm" />
              </button>
            ))}
          </>
        )}

        <button className="cmp-show-older" type="button">
          Show older
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
        </button>
      </section>

      {/* RIGHT — Chat Detail (Response load) */}
      <section className="cmp-detail-card">
        <div className="cmp-d-tabs">
          {(["Chat", "Chat History", "Settings"] as const).map((t) => (
            <button
              className={`cmp-hist-tab ${detailTab === t ? "cmp-on" : ""}`}
              type="button"
              key={t}
              onClick={() => setDetailTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="cmp-d-head">
          <div className="cmp-eyebrow">
            <SparkSvg />
            Response load
          </div>
          <h3>Chat History</h3>
          <div className="cmp-q">What are the benefits of adopting Hybrid IT Modernization?</div>
        </div>

        {/* user prompt */}
        <div className="cmp-hist-stream">
          <div className="cmp-user-msg">How do we prioritise which applications to modernise first?</div>
        </div>

        {/* AI response loading */}
        <div className="cmp-hist-resp-load">
          <div className="cmp-dot" />
          <div className="cmp-bars">
            <div className="cmp-bar" />
            <div className="cmp-bar" />
            <div className="cmp-bar" />
          </div>
        </div>

        <div className="cmp-hist-specs">
          Reuses the <strong>AI Loader &middot; response load</strong> skeleton — Warm Red dot
          avatar + 3 shimmer bars sized 62 / 88 / 74 %. Swap to streamed Markdown when first
          token arrives.
        </div>

        {/* Composer */}
        <div className="cmp-hist-composer">
          <div className="cmp-hist-input-row">
            <input placeholder="Type your message\u2026" />
            <button className="cmp-hist-send" aria-label="Send" type="button">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></svg>
            </button>
          </div>
          <div className="cmp-hist-tools">
            <button className="cmp-tbtn" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            </button>
            <button className="cmp-tbtn" type="button">Option <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></button>
            <button className="cmp-tbtn" type="button">Option <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></button>
          </div>
          <div className="cmp-hist-disclaimer">
            Bridge Assist may occasionally generate incorrect or misleading information.
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiChatHistory;
