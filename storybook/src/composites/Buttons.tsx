import React from "react";
import "./composites.css";

const Buttons: React.FC = () => (
  <div className="cmp-buttons">
    <button className="cmp-primary">
      Execute
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </button>
    <button className="cmp-outline">Send for review</button>
    <button className="cmp-ghost">Dismiss</button>
    <button className="cmp-brand">Investigate</button>
    <button className="cmp-destructive">Reject</button>
    <button className="cmp-outline cmp-sm">Filter</button>
    <button className="cmp-primary cmp-sm">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
      Ask AI
    </button>
  </div>
);

export default Buttons;
