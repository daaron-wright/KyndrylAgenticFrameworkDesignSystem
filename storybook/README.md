# Kyndryl Agentic Framework — Storybook source

React + TypeScript + Storybook 8 (Vite).

## Develop locally

```bash
cd storybook
npm install
npm run storybook        # http://localhost:6006
```

## Build for Netlify

```bash
npm run build-storybook  # outputs to ../storybook-build/
```

`storybook-build/` is what you deploy to Netlify (root `netlify.toml` already points to it).

## Static folders included

`.storybook/main.ts` mounts these as static dirs so stories can iframe-embed the existing previews:

- `../assets`  · brand assets (Kyndryl logo, icon sprite)
- `../fonts`   · TWK Everett OTF + web TTF
- `../preview` · 45+ preview cards (foundations, primitives, composites, templates)
- `../ui_kits` · CMDB workspace + Shidoka components/shell/charts kits

## Layout

```
storybook/
  .storybook/
    main.ts          ← framework + addons + staticDirs
    preview.ts       ← global decorators, theme switch, backgrounds
    manager.ts       ← Kyndryl-branded sidebar theme
  src/
    Welcome.mdx
    tokens.css       ← imports ../../colors_and_type.css
    _shared/HtmlEmbed.tsx
    foundations/     ← Colors, Type, Spacing, Brand stories
    primitives/      ← SeverityPill, ConfidenceBadge, StatusBadge (real React + .stories.tsx)
    agentic/         ← Agentic primitives & flows
    composites/      ← KPI, Recommendation, Scenario, Chat, etc.
    templates/       ← Dashboard, Triage, Investigation, Review, Conversation
    states/          ← States matrix
    kits/            ← CMDB + Shidoka kits
```
