import React, { useState } from "react";
import "./composites.css";

const SparkSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" /></svg>
);

export const AiLaunchButton: React.FC = () => {
  const [dark, setDark] = useState(false);

  const states: Array<{
    label: string;
    cls: string;
    meta: string;
    disabled?: boolean;
  }> = [
    { label: "Default", cls: "", meta: "spruce-60 \u2194 warm-red-50 \u00b7 1.5px" },
    { label: "Hover", cls: "cmp-hover", meta: "+ ring rgba(warm-red, .12) \u00b7 3px" },
    { label: "Focused", cls: "cmp-focused", meta: "ring rgba(spruce, .30) \u00b7 3px" },
    { label: "Pressed", cls: "cmp-pressed", meta: "scale .96 \u00b7 inset shadow + glow" },
    { label: "Disabled", cls: "cmp-disabled", meta: "opacity .4 \u00b7 grayscale .4", disabled: true },
  ];

  return (
    <div className="cmp-launch-wrap">
      {/* COMPONENT CARD */}
      <section className="cmp-card">
        <div className="cmp-eyebrow">
          <SparkSvg />
          AI Launch Button &middot; Component
        </div>
        <h2 className="cmp-h2">Launch Button</h2>
        <div className="cmp-sub">
          Single entry point that hands control to the AI assistant. Always circular,
          gradient-bordered, and stamped with the AI &#x2756; glyph.
        </div>

        <div className="cmp-toggle-row">
          <button
            className={`cmp-toggle ${!dark ? "cmp-on" : ""}`}
            type="button"
            onClick={() => setDark(false)}
          >
            Light surface
          </button>
          <button
            className={`cmp-toggle ${dark ? "cmp-on" : ""}`}
            type="button"
            onClick={() => setDark(true)}
          >
            Dark surface
          </button>
        </div>

        <div className={`cmp-matrix ${dark ? "cmp-dark-matrix" : ""}`}>
          {states.map((s) => (
            <React.Fragment key={s.label}>
              <div className="cmp-lab">{s.label}</div>
              <div className="cmp-cell">
                <button
                  className={`cmp-ai-launch ${dark ? "cmp-dark" : ""} ${s.cls}`}
                  aria-label="Launch AI"
                  type="button"
                  disabled={s.disabled}
                >
                  <span className="cmp-glyph" />
                </button>
                <span className="cmp-meta">{s.meta}</span>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="cmp-kicker">In context</div>
        <div className="cmp-preview">
          <div className="cmp-frame">
            <button className="cmp-ai-launch" aria-label="Launch AI" type="button">
              <span className="cmp-glyph" />
            </button>
          </div>
          <div className="cmp-frame cmp-dk">
            <button className="cmp-ai-launch cmp-dark" aria-label="Launch AI" type="button">
              <span className="cmp-glyph" />
            </button>
          </div>
          <div className="cmp-specs">
            Drop the launcher into <strong>app shell headers</strong>, table-row trailing
            slots, or floating dock — never inline with primary CTAs.
            <br />
            Pair with tooltip <code>Ask Bridge Assist</code> when not contextually obvious.
          </div>
        </div>
      </section>

      {/* CORE CARD */}
      <section className="cmp-card">
        <div className="cmp-eyebrow">
          <SparkSvg />
          AI Launch Button &middot; Core
        </div>
        <h2 className="cmp-h2">Glyph (Core)</h2>
        <div className="cmp-sub">
          The bare &#x2756; AI mark. Fill is always the Spruce&#x2194;Warm-Red gradient.
          Use anywhere AI authorship needs to be flagged.
        </div>

        <div className="cmp-kicker">Sizes</div>
        <div className="cmp-var-row">
          <div className="cmp-v">
            <span className="cmp-ai-glyph cmp-sm" />
            <span className="cmp-tag">16px &middot; inline label / chip</span>
          </div>
          <div className="cmp-v">
            <span className="cmp-ai-glyph" />
            <span className="cmp-tag">24px &middot; default UI</span>
          </div>
          <div className="cmp-v">
            <span className="cmp-ai-glyph cmp-lg" />
            <span className="cmp-tag">32px &middot; feature / empty state</span>
          </div>
        </div>

        <div className="cmp-kicker">When to use</div>
        <div className="cmp-specs">
          <ul>
            <li>
              <strong>Eyebrow</strong> on AI-authored sections (titles, panels, modals)
            </li>
            <li>
              <strong>Avatar</strong> on agent chat messages — never user messages
            </li>
            <li>
              <strong>Trailing badge</strong> on suggestions, generated values, AI-only fields
            </li>
          </ul>
        </div>

        <div className="cmp-kicker">Don&apos;t</div>
        <div className="cmp-specs">
          <ul>
            <li>Don&apos;t recolor the gradient (no solid fills, no brand accent swaps)</li>
            <li>Don&apos;t pair with secondary chrome — the glyph IS the moment</li>
            <li>Don&apos;t animate spin/pulse permanently — only during a generating state</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AiLaunchButton;
