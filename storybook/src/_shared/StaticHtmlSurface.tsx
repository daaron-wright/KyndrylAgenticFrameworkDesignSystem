import React, { useEffect, useMemo, useRef } from "react";
import {
  getStaticHtml,
  getStaticSurfaceSpec,
  type StaticScriptMode,
  type StaticSurfaceId
} from "../../static-html-registry";

type StaticArgs = object;

interface StaticScript {
  src?: string;
  text?: string;
}

interface ParsedStaticHtml {
  body: string;
  styles: string[];
  scripts: StaticScript[];
}

export interface StaticHtmlSurfaceProps {
  id: StaticSurfaceId;
  args?: StaticArgs;
  height?: number;
}

const runtimeBridgeCss = `
  body.kds-static-body-active #storybook-root,
  body.kds-static-body-active #storybook-root > *,
  body.kds-static-body-active .kds-static-html-surface {
    display: contents !important;
  }
`;

const isLocalAsset = (value: string) => {
  const trimmed = value.trim();
  return !(
    trimmed === "" ||
    trimmed.startsWith("#") ||
    trimmed.startsWith("data:") ||
    trimmed.startsWith("mailto:") ||
    trimmed.startsWith("tel:") ||
    trimmed.startsWith("javascript:") ||
    /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed)
  );
};

const baseUrlFor = (sourcePath: string) => {
  const sourceDir = sourcePath.split("/").slice(0, -1).join("/");
  return new URL(`/${sourceDir}/`, window.location.origin);
};

const resolveStaticUrl = (value: string, sourcePath: string) => {
  if (!isLocalAsset(value)) return value;
  const resolved = new URL(value, baseUrlFor(sourcePath));
  return `${resolved.pathname}${resolved.search}${resolved.hash}`;
};

const parseStaticHtml = (html: string, sourcePath: string): ParsedStaticHtml => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const styles = Array.from(doc.querySelectorAll("style")).map((style) => strengthenStaticBodySelectors(style.textContent ?? ""));
  const scripts = Array.from(doc.querySelectorAll("script")).map((script) => ({
    src: script.getAttribute("src") ? resolveStaticUrl(script.getAttribute("src") ?? "", sourcePath) : undefined,
    text: script.getAttribute("src") ? undefined : script.textContent ?? ""
  }));

  doc.querySelectorAll("link[rel='stylesheet'], style, script").forEach((node) => node.remove());
  doc.body.querySelectorAll<HTMLElement>("*").forEach((node) => {
    ["src", "href"].forEach((attr) => {
      const value = node.getAttribute(attr);
      if (value) node.setAttribute(attr, resolveStaticUrl(value, sourcePath));
    });
  });

  return { body: doc.body.innerHTML, styles, scripts };
};

const strengthenStaticBodySelectors = (css: string) => css
  .replace(/(^|})\s*html\s*,\s*body\s*\{/g, "$1\nhtml, body, body.sb-show-main, body.sb-main-fullscreen, .kds-static-html-body {")
  .replace(/(^|})\s*body\s*\{/g, "$1\nbody, body.sb-show-main, body.sb-main-fullscreen, .kds-static-html-body {");

const argsToSearch = (args?: StaticArgs) => {
  const query = new URLSearchParams();
  Object.entries(args ?? {}).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    query.set(key, String(value));
  });
  const value = query.toString();
  return value ? `?${value}` : "";
};

const loadedScripts = new Map<string, Promise<void>>();

const loadScript = (src: string) => {
  const existing = loadedScripts.get(src);
  if (existing) return existing;

  const promise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });

  loadedScripts.set(src, promise);
  return promise;
};

const runInlineScript = (text: string, mode: StaticScriptMode, search: string) => {
  if (mode === "global") {
    const script = document.createElement("script");
    script.textContent = text;
    document.body.appendChild(script);
    return;
  }

  if (search) {
    new Function("location", text)({ search });
    return;
  }

  new Function(`(function(){\n${text}\n}).call(window);`)();
};

const applyPrimitiveNullAdapter = (id: StaticSurfaceId, root: HTMLElement | null, args?: StaticArgs) => {
  const argRecord = args as Record<string, unknown> | undefined;
  if (id !== "primitives-confidencebadge--default" || argRecord?.value !== null || !root) return;

  const badge = root.querySelector("#badge");
  const value = root.querySelector("#v");
  const label = root.querySelector(".lbl");
  const meta = root.querySelector("#meta");

  value && (value.textContent = "-");
  label && (label.textContent = "no confidence");
  meta && (meta.textContent = `role: ${argRecord?.role ?? "full"}`);
  badge?.classList.add("low");
};

export const StaticHtmlSurface: React.FC<StaticHtmlSurfaceProps> = ({ id, args, height }) => {
  const spec = getStaticSurfaceSpec(id);
  const html = getStaticHtml(spec.sourcePath);
  const bodyRef = useRef<HTMLDivElement>(null);
  const parsed = useMemo(() => parseStaticHtml(html, spec.sourcePath), [html, spec.sourcePath]);
  const search = useMemo(() => argsToSearch(args), [args]);
  const scriptMode = spec.scriptMode ?? "iife";

  useEffect(() => {
    let cancelled = false;
    const previousBodyClass = document.body.className;
    document.body.classList.add("kds-static-body-active");

    const runScripts = async () => {
      for (const script of parsed.scripts) {
        if (cancelled) return;
        if (script.src) {
          await loadScript(script.src);
        } else if (script.text?.trim()) {
          runInlineScript(script.text, scriptMode, search);
        }
      }
      applyPrimitiveNullAdapter(id, bodyRef.current, args);
    };

    runScripts().catch((error) => {
      console.warn(`[storybook static parity] ${spec.title}`, error);
    });

    return () => {
      cancelled = true;
      document.body.className = previousBodyClass;
    };
  }, [args, id, parsed.scripts, scriptMode, search, spec.title]);

  return (
    <div className="kds-static-html-surface" data-static-source={id} style={{ minHeight: height ?? spec.height }}>
      <style>{runtimeBridgeCss}</style>
      {parsed.styles.map((style, index) => (
        <style key={`${id}-${index}`}>{style}</style>
      ))}
      <div
        ref={bodyRef}
        className="kds-static-html-body"
        dangerouslySetInnerHTML={{ __html: parsed.body }}
      />
    </div>
  );
};
