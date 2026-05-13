import React from "react";
import "./composites.css";

const SparkSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" /></svg>
);

export const AiLoader: React.FC = () => (
  <div className="cmp-loader-wrap">
    {/* BASE */}
    <section className="cmp-card">
      <div className="cmp-eyebrow">
        <SparkSvg />
        AI Loader &middot; Base
      </div>
      <h2 className="cmp-h2">AI Loader</h2>
      <div className="cmp-sub">
        Spinning ring composed of two opposite arcs — Warm Red 50 and Spruce 60.
        Used whenever the agent is actively thinking.
      </div>

      <div className="cmp-loader-matrix">
        <span className="cmp-ai-loader cmp-xl" />
        <span className="cmp-ai-loader" />
        <span className="cmp-ai-loader cmp-md" />
        <span className="cmp-ai-loader cmp-sm" />
      </div>

      <div className="cmp-kicker">Sizes</div>
      <div className="cmp-specs">
        <ul>
          <li><code>.sm</code> 16px — inside chips, inline labels</li>
          <li><code>.md</code> 32px — input fields, table rows</li>
          <li><code>.ai-loader</code> 64px — page-level / panel</li>
          <li><code>.xl</code> 96px — full-screen blocking</li>
        </ul>
      </div>
    </section>

    {/* IN CONTEXT */}
    <section className="cmp-card">
      <div className="cmp-eyebrow">
        <SparkSvg />
        AI Loader &middot; In Context
      </div>
      <h2 className="cmp-h2">Loading patterns</h2>
      <div className="cmp-sub">
        Three places the loader appears: input field, suggested chips, and streaming response.
      </div>

      <div className="cmp-kicker">Suggested-prompt chips (loading)</div>
      <div className="cmp-chips">
        <span className="cmp-chip">Cloud Services <span className="cmp-x">&times;</span></span>
        <span className="cmp-chip">CMDB Drift Q3 <span className="cmp-x">&times;</span></span>
        <span className="cmp-chip">Hybrid IT Mod <span className="cmp-x">&times;</span></span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--fg-muted)" }}>
          <span className="cmp-ai-loader cmp-sm" /> Generating more&hellip;
        </span>
      </div>

      <div className="cmp-kicker">Composer (AI thinking)</div>
      <div className="cmp-lozenges">
        <div className="cmp-ai-input">
          <span style={{ opacity: 0.7 }}>Type your message&hellip;</span>
          <span className="cmp-ai-loader cmp-sm" style={{ marginLeft: "auto" }} />
          <button className="cmp-send" aria-label="send" type="button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="cmp-kicker">Response load (streaming)</div>
      <div className="cmp-resp-load">
        <div className="cmp-dot" />
        <div className="cmp-bars">
          <div className="cmp-bar" />
          <div className="cmp-bar" />
          <div className="cmp-bar" />
        </div>
      </div>

      <div className="cmp-kicker">Rules</div>
      <div className="cmp-specs">
        <ul>
          <li>Never show a generic spinner inside an AI surface — always this ring.</li>
          <li>If the wait exceeds 4s, swap to the streaming skeleton above with a status line.</li>
          <li>Reduced-motion clients: rotation slows to 6s instead of stopping.</li>
        </ul>
      </div>
    </section>

    {/* PANEL RENDER */}
    <section className="cmp-card cmp-full-span">
      <div className="cmp-eyebrow">
        <SparkSvg />
        AI Loader &middot; Panel render
      </div>
      <h2 className="cmp-h2">Panel render</h2>
      <div className="cmp-sub">
        For full-panel generative work — sketching a graph, drafting a diagram, rendering an image.
        A soft dot grid where Warm Red and Spruce clusters drift across the canvas. Always paired
        with a status label (&ldquo;Sketching it out&rdquo;, &ldquo;Creating image&rdquo;, etc.).
      </div>

      <div className="cmp-panel-grid">
        {["Sketching it out", "Creating image", "Drafting topology"].map((label) => (
          <div className="cmp-panel-load" key={label}>
            <span className="cmp-label">{label}</span>
            <div className="cmp-grid" />
            <div className="cmp-grid cmp-tint" />
            <div className="cmp-grid cmp-spruce" />
          </div>
        ))}
      </div>

      <div className="cmp-kicker">Rules</div>
      <div className="cmp-specs">
        <ul>
          <li>Use only when the AI is generating something <strong>visual and bounded</strong> — never as a generic page loader.</li>
          <li>Status label is required, top-left, with a blinking caret. Update the label as the agent moves through stages.</li>
          <li>Three drift layers (neutral &middot; Warm Red &middot; Spruce) at 5.5 / 7 / 8.5s — slow on purpose. Never speed them up.</li>
          <li>Reduced-motion clients: drift slows to 14&ndash;20s but never stops.</li>
        </ul>
      </div>
    </section>
  </div>
);

export default AiLoader;
