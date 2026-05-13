import React from "react";
import "./templates.css";

export const ConversationTemplate: React.FC = () => (
  <div className="tpl-conversation">
    <div className="tpl-hdr tpl-hdr-full">
      <h2>ConversationTemplate</h2>
      <span>Message stream · composer · persistent snapshot rail</span>
    </div>

    {/* Left column: messages + composer */}
    <div className="tpl-col">
      <div className="tpl-slot" style={{ minHeight: 60, justifyContent: "flex-start" }}>
        ChatMessage · user
      </div>
      <div className="tpl-slot" style={{ minHeight: 120, justifyContent: "flex-start", flexDirection: "column", alignItems: "flex-start" }}>
        <div>ChatMessage · assistant · markdown + HighlightLinks</div>
        <div style={{ marginTop: 8, width: "100%" }}>
          <div className="tpl-slot" style={{ minHeight: 40 }}>
            SnapshotCard · highlight-link bound
          </div>
        </div>
      </div>
      <div className="tpl-slot" style={{ minHeight: 50 }}>
        composer · input + attach + send
      </div>
    </div>

    {/* Right column: context rail */}
    <div className="tpl-col">
      <div className="tpl-slot" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        Context rail
      </div>
      <div className="tpl-slot">
        pinned snapshots
      </div>
      <div className="tpl-slot">
        recent queries
      </div>
      <div className="tpl-slot">
        SourceAttribution footer
      </div>
    </div>
  </div>
);
