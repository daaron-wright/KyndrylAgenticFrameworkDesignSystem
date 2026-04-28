import React from "react";

/** Wraps a static HTML preview from /preview/ as an embedded story. */
export const HtmlEmbed: React.FC<{ src: string; height?: number; title?: string }> = ({ src, height = 600, title = "Embedded preview" }) => (
  <iframe
    title={title}
    src={src}
    style={{
      width: "100%", height, border: "1px solid var(--border-1)", borderRadius: 8, background: "#fff"
    }}
  />
);
