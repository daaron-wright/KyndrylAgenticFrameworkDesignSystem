import React from "react";

type HtmlEmbedProps = {
  src: string;
  height?: number;
  title?: string;
  [key: string]: unknown;
};

const withArgs = (src: string, args: Record<string, unknown>) => {
  const query = new URLSearchParams();

  Object.entries(args).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    query.set(key, String(value));
  });

  const suffix = query.toString();
  if (!suffix) return src;

  return `${src}${src.includes("?") ? "&" : "?"}${suffix}`;
};

/** Reference-only iframe wrapper for static HTML source-of-truth pages. */
export const HtmlEmbed: React.FC<HtmlEmbedProps> = ({ src, height = 600, title = "Embedded preview", ...args }) => (
  <iframe
    title={title}
    src={withArgs(src, args)}
    style={{
      width: "100%",
      height,
      border: "1px solid var(--border-1, #D9DEE3)",
      borderRadius: 8,
      background: "#fff"
    }}
  />
);
