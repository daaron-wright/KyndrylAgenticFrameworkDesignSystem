/* =============================================================
   Storybook host â€” Kyndryl Agentic Framework
   ============================================================= */
(function () {
  const STORIES = window.STORIES || [];
  const $ = (id) => document.getElementById(id);

  // ---- State ----
  const state = {
    storyId: null,
    tab: "canvas",
    zoom: 1,
    bg: "dotted",
    theme: "light",
    addonTab: "controls",
    args: {},
    actions: []
  };

  // ---- URL hash ----
  function readHash() {
    const m = location.hash.match(/^#\/(?:story|docs)\/([^?]+)/);
    if (m) state.storyId = decodeURIComponent(m[1]);
    if (location.hash.startsWith("#/docs/")) state.tab = "docs";
  }
  function writeHash() {
    if (!state.storyId) return;
    const prefix = state.tab === "docs" ? "docs" : "story";
    history.replaceState(null, "", `#/${prefix}/${state.storyId}`);
  }

  // ---- Tree ----
  function groupBy(arr, key) {
    const out = {};
    arr.forEach((s) => { (out[s[key]] = out[s[key]] || []).push(s); });
    return out;
  }
  function renderTree(filter) {
    const tree = $("sb-tree");
    tree.innerHTML = "";
    const f = (filter || "").trim().toLowerCase();
    let visible = STORIES;
    if (f) {
      visible = STORIES.filter((s) =>
        (s.group + s.component + s.name).toLowerCase().includes(f)
      );
    }
    if (!visible.length) {
      tree.innerHTML = '<div class="sb-empty">No stories match.</div>';
      return;
    }
    const byGroup = groupBy(visible, "group");
    const groupOrder = ["Welcome","Foundations","Primitives","Agentic","Composites","Templates","States","Kits"];
    const groups = Object.keys(byGroup).sort((a, b) => {
      const ai = groupOrder.indexOf(a), bi = groupOrder.indexOf(b);
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });
    groups.forEach((g) => {
      const groupEl = document.createElement("div");
      groupEl.className = "sb-group";
      const head = document.createElement("button");
      head.className = "sb-group-header";
      head.innerHTML = `<span class="sb-caret">â–¾</span><span>${g}</span>`;
      head.addEventListener("click", () => {
        groupEl.dataset.collapsed = groupEl.dataset.collapsed === "true" ? "false" : "true";
      });
      groupEl.appendChild(head);
      const body = document.createElement("div");
      body.className = "sb-group-body";
      const byComp = groupBy(byGroup[g], "component");
      Object.keys(byComp).forEach((c) => {
        const compEl = document.createElement("div");
        compEl.className = "sb-component";
        const ch = document.createElement("button");
        ch.className = "sb-component-header";
        ch.innerHTML = `<span class="sb-caret">â–¾</span>
          <svg class="sb-component-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <rect x="2.5" y="2.5" width="11" height="11" rx="2"/>
            <path d="M2.5 6.5h11M6.5 2.5v11"/>
          </svg>
          <span>${c}</span>`;
        ch.addEventListener("click", () => {
          compEl.dataset.collapsed = compEl.dataset.collapsed === "true" ? "false" : "true";
        });
        compEl.appendChild(ch);
        const compBody = document.createElement("div");
        compBody.className = "sb-component-body";
        byComp[c].forEach((s) => {
          const btn = document.createElement("button");
          btn.className = "sb-story" + (s.id === state.storyId ? " is-active" : "");
          btn.dataset.id = s.id;
          btn.innerHTML = `<span class="sb-story-dot"></span><span>${s.name}</span>`;
          btn.addEventListener("click", () => selectStory(s.id));
          compBody.appendChild(btn);
        });
        compEl.appendChild(compBody);
        body.appendChild(compEl);
      });
      groupEl.appendChild(body);
      tree.appendChild(groupEl);
    });
  }

  function selectStory(id) {
    state.storyId = id;
    state.actions = [];
    const story = STORIES.find((s) => s.id === id);
    state.args = Object.assign({}, story && story.args);
    writeHash();
    document.querySelectorAll(".sb-story").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.id === id);
    });
    renderStage();
    renderAddons();
  }

  // ---- Stage ----
  function renderStage() {
    const story = STORIES.find((s) => s.id === state.storyId);
    if (!story) return;
    if (state.tab === "canvas") {
      $("sb-canvas-wrap").hidden = false;
      $("sb-docs").hidden = true;
      const url = withArgs(story.iframe, state.args);
      const frame = $("sb-canvas");
      if (frame.dataset.url !== url) {
        frame.dataset.url = url;
        frame.src = url;
      }
      const scaler = $("sb-canvas-scaler");
      scaler.style.maxWidth = "100%";
      scaler.style.width = "100%";
      scaler.style.height = "100%";
      scaler.style.minHeight = "100%";
      $("sb-canvas").style.width = "100%";
      $("sb-canvas").style.height = "100%";
      scaler.style.transform = `scale(${state.zoom})`;
      scaler.style.transformOrigin = "top left";
    } else {
      $("sb-canvas-wrap").hidden = true;
      $("sb-docs").hidden = false;
      $("sb-docs").innerHTML = renderDocs(story);
    }
    $("sb-zoom-readout").textContent = Math.round(state.zoom * 100) + "%";
    document.querySelectorAll(".sb-tab").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.tab === state.tab);
    });
  }

  function withArgs(url, args) {
    if (!args || !Object.keys(args).length) return url;
    const u = new URL(url, location.href);
    Object.entries(args).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== "") u.searchParams.set(k, v);
    });
    return u.pathname + u.search + u.hash;
  }

  // ---- Docs ----
  function renderDocs(story) {
    const d = story.docs || {};
    const eyebrow = d.eyebrow || (story.group || "").toUpperCase();
    const title = `${story.component} Â· ${story.name}`;
    const lead = d.lead || "";
    const overview = (d.overview || []).map((p) => `<p>${p}</p>`).join("");
    const when = (d.whenToUse || []).map((p) => `<li>${p}</li>`).join("");
    const dont = (d.dont || []).map((p) => `<div class="sb-dont"><strong>Don't</strong>${p}</div>`).join("");
    const dos  = (d.do   || []).map((p) => `<div class="sb-do"><strong>Do</strong>${p}</div>`).join("");
    const a11y = (d.a11y || []).map((p) => `<div class="sb-a11y-row">${p}</div>`).join("");
    const argRows = Object.entries(story.argTypes || {}).map(([k, t]) => {
      const opts = (t.options || []).join(" Â· ");
      return `<tr><td><code>${k}</code></td><td>${t.control}${opts ? " â€” " + opts : ""}</td><td><code>${t.default ?? ""}</code></td></tr>`;
    }).join("");
    return `
      <div class="sb-docs-inner">
        <div class="sb-docs-eyebrow">${eyebrow}</div>
        <h1>${title}</h1>
        ${lead ? `<p class="sb-docs-lead">${lead}</p>` : ""}
        ${overview ? `<h2>Overview</h2>${overview}` : ""}
        <h2>Canvas</h2>
        <div class="sb-docs-canvas"><iframe src="${withArgs(story.iframe, story.args || {})}" style="height:${(story.height || 600)}px"></iframe></div>
        ${when ? `<h2>When to use</h2><ul>${when}</ul>` : ""}
        ${(dos || dont) ? `<h2>Do / Don't</h2><div class="sb-docs-grid">${dos}${dont}</div>` : ""}
        ${a11y ? `<h2>Accessibility</h2>${a11y}` : ""}
        ${argRows ? `<h2>API</h2><table style="width:100%;border-collapse:collapse;font-size:12.5px">
          <thead><tr style="text-align:left;color:var(--fg-muted);font-weight:500;border-bottom:1px solid var(--border-1)"><th style="padding:6px 8px">Prop</th><th>Type</th><th>Default</th></tr></thead>
          <tbody>${argRows}</tbody>
        </table>` : ""}
      </div>`;
  }

  // ---- Addons ----
  function renderAddons() {
    const story = STORIES.find((s) => s.id === state.storyId);
    if (!story) return;
    // Controls
    const controlsPane = $("sb-addon-controls");
    const argTypes = story.argTypes || {};
    if (!Object.keys(argTypes).length) {
      controlsPane.innerHTML = '<div class="sb-empty-pane">This story has no controls. Stories with variants expose controls here â€” try a Primitive (e.g. SeverityPill, ConfidenceBadge).</div>';
    } else {
      controlsPane.innerHTML = Object.entries(argTypes).map(([k, t]) => renderControl(k, t, state.args[k])).join("");
      controlsPane.querySelectorAll("[data-control]").forEach((el) => {
        const name = el.dataset.control;
        const kind = el.dataset.kind;
        if (kind === "radio") {
          el.querySelectorAll(".sb-radio-pill").forEach((p) => {
            p.addEventListener("click", () => updateArg(name, p.dataset.value));
          });
        } else if (kind === "toggle") {
          el.addEventListener("click", () => updateArg(name, el.getAttribute("aria-checked") !== "true"));
        } else {
          el.addEventListener("input", () => updateArg(name, el.type === "number" ? Number(el.value) : el.value));
          el.addEventListener("change", () => updateArg(name, el.type === "number" ? Number(el.value) : el.value));
        }
      });
    }
    // Source
    $("sb-addon-source").innerHTML = '<pre><code>' +
      escapeHtml(`<iframe src="${story.iframe}"></iframe>\n\n// Args:\n${JSON.stringify(state.args, null, 2)}`) +
      '</code></pre>';
    // A11y
    const a = (story.docs && story.docs.a11y) || [
      "Color is paired with text or icon â€” no color-only signalling.",
      "Focus rings inherit the Spruce ring token (`--ring`)."
    ];
    $("sb-addon-a11y").innerHTML = a.map((x) => `<div class="sb-a11y-row">${x}</div>`).join("");
    // Actions
    renderActions();
  }

  function renderControl(name, type, value) {
    const v = value ?? type.default ?? "";
    if (type.control === "radio" || type.control === "select") {
      if (type.control === "select") {
        return `<div class="sb-control-row"><span class="sb-control-label">${name}</span>
          <select data-control="${name}" data-kind="select">
            ${type.options.map((o) => `<option value="${o}" ${o == v ? "selected" : ""}>${o || "(none)"}</option>`).join("")}
          </select></div>`;
      }
      return `<div class="sb-control-row"><span class="sb-control-label">${name}</span>
        <span class="sb-radio-group" data-control="${name}" data-kind="radio">
          ${type.options.map((o) => `<button class="sb-radio-pill ${o == v ? "is-active" : ""}" data-value="${o}">${o}</button>`).join("")}
        </span></div>`;
    }
    if (type.control === "range") {
      return `<div class="sb-control-row"><span class="sb-control-label">${name}</span>
        <input data-control="${name}" data-kind="range" type="range" min="${type.min}" max="${type.max}" step="${type.step || 1}" value="${v}"></div>`;
    }
    if (type.control === "number") {
      return `<div class="sb-control-row"><span class="sb-control-label">${name}</span>
        <input data-control="${name}" data-kind="number" type="number" value="${v}"></div>`;
    }
    if (type.control === "boolean") {
      return `<div class="sb-control-row"><span class="sb-control-label">${name}</span>
        <button class="sb-toggle" data-control="${name}" data-kind="toggle" aria-checked="${v ? "true" : "false"}"></button></div>`;
    }
    // text
    return `<div class="sb-control-row"><span class="sb-control-label">${name}</span>
      <input data-control="${name}" data-kind="text" type="text" value="${v ?? ""}"></div>`;
  }

  function updateArg(name, value) {
    state.args[name] = value;
    logAction(name, value);
    renderStage();
    renderAddons();
  }

  function logAction(name, value) {
    state.actions.unshift({ t: new Date().toLocaleTimeString(), name, value });
    state.actions = state.actions.slice(0, 12);
  }

  function renderActions() {
    const pane = $("sb-addon-actions");
    if (!state.actions.length) {
      pane.innerHTML = '<div class="sb-empty-pane">Actions will log here as you change controls. e.g. <code>severity = "HIGH"</code></div>';
      return;
    }
    pane.innerHTML = state.actions.map((a) =>
      `<div class="sb-action-row">
         <span class="sb-action-time">${a.t}</span>
         <span class="sb-action-name">${a.name}</span>
         <span>= ${escapeHtml(JSON.stringify(a.value))}</span>
       </div>`
    ).join("");
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  // ---- Wiring ----
  function wire() {
    $("sb-search").addEventListener("input", (e) => renderTree(e.target.value));
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== $("sb-search")) {
        e.preventDefault(); $("sb-search").focus();
      }
    });
    document.querySelectorAll(".sb-tab").forEach((b) => {
      b.addEventListener("click", () => {
        state.tab = b.dataset.tab;
        writeHash();
        renderStage();
      });
    });
    $("sb-zoom-in").addEventListener("click", () => { state.zoom = Math.min(2, state.zoom + 0.1); renderStage(); });
    $("sb-zoom-out").addEventListener("click", () => { state.zoom = Math.max(0.4, state.zoom - 0.1); renderStage(); });
    $("sb-zoom-reset").addEventListener("click", () => { state.zoom = 1; renderStage(); });
    $("sb-bg-toggle").addEventListener("click", () => {
      const order = ["dotted","grid","white","dark"];
      state.bg = order[(order.indexOf(state.bg) + 1) % order.length];
      $("sb-canvas-wrap").dataset.bg = state.bg;
    });
    $("sb-grid-toggle").addEventListener("click", () => {
      $("sb-canvas-wrap").dataset.bg = $("sb-canvas-wrap").dataset.bg === "grid" ? "dotted" : "grid";
      state.bg = $("sb-canvas-wrap").dataset.bg;
    });
    $("sb-theme-toggle").addEventListener("click", () => {
      state.theme = state.theme === "light" ? "dark" : "light";
      document.body.dataset.theme = state.theme;
      $("sb-theme-readout").textContent = state.theme === "light" ? "Light" : "Dark";
    });
    $("sb-fullscreen").addEventListener("click", () => {
      const story = STORIES.find((s) => s.id === state.storyId);
      if (story) window.open(withArgs(story.iframe, state.args), "_blank");
    });
    document.querySelectorAll(".sb-addon-tab").forEach((b) => {
      b.addEventListener("click", () => {
        state.addonTab = b.dataset.addon;
        document.querySelectorAll(".sb-addon-tab").forEach((x) => x.classList.toggle("is-active", x === b));
        document.querySelectorAll(".sb-addon-pane").forEach((p) => {
          p.classList.toggle("is-active", p.id === "sb-addon-" + state.addonTab);
        });
      });
    });
    $("sb-addons-collapse").addEventListener("click", () => {
      const m = $("sb-main");
      m.dataset.addonsCollapsed = m.dataset.addonsCollapsed === "true" ? "false" : "true";
    });
    window.addEventListener("hashchange", () => { readHash(); selectStory(state.storyId); });
  }

  // ---- Boot ----
  readHash();
  if (!state.storyId) state.storyId = "welcome--introduction";
  renderTree("");
  selectStory(state.storyId);
  wire();
})();
