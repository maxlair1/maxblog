---
name: maxblog design system setup
description: Design tokens, fonts, and component conventions established for maxblog Next.js blog project
type: project
---

## Design Tokens (globals.css)

**Colors (oklch):**
- Background: `oklch(0.98 0.006 83)` — warm cream (from `hsla(36, 29%, 97%, 1)`)
- Card: `oklch(0.985 0.003 83)` — near-white (from `#FBFAF8`)
- Accent: `oklch(0.945 0.008 82)` — neutral bg-family (NOT amber — used for accordion hover/expanded states)
- Secondary: `oklch(0.865 0.05 74)` — warm amber, used for article/topic badge backgrounds
- Muted: `oklch(0.932 0.010 80)`
- Border: `oklch(0.888 0.010 80)`

**Why:** User explicitly wanted accent to follow the bg/card progression (not amber). Secondary stays amber for tags. Dark mode accent: `oklch(0.255 0.012 58)`.

## Fonts
- `--font-heading` → **Castoro** (serif, weight 400 only) — used ONLY on h1 and h2
- `--font-sans` → **Inter** — body/UI text
- `--font-narrow` → **Inter Tight** — tags, badges, metadata, uppercase labels

**How to apply:** `font-heading` class for headings, `font-narrow` for Inter Tight, `font-sans` for body.

## Radius Scale (base: 0.5rem = 8px)
- `rounded-sm` = 4px, `rounded-md` = 6px, `rounded-lg` = 8px (default)
- `rounded-xl` = 12px, `rounded-2xl` = 16px (larger cards/containers)
- `rounded-3xl` = 20px, `rounded-4xl` = 24px

## Component Conventions
- **ShapeProvider** is in `ThemeProvider` with `defaultShape="rounded"` — this fixes accordion border radius (without it, falls back to pill/20px)
- **Theme hotkey:** Press `D` to toggle dark/light mode
- **Shape hotkey:** Press `R` to cycle border radius shapes

## Badge Usage
- Article/topic tags: `variant="secondary"` + `font-narrow uppercase tracking-widest`
- Card metadata tags: `variant="outline"` + `font-narrow uppercase`
