# Sightlab Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Sightlab as an independently runnable React application under the existing fstwon pnpm/Turborepo workspace and establish the agreed frontend source boundaries without implementing product UI.

**Architecture:** `apps/sightlab` is a Vite + React application that reuses fstwon shared configuration packages. Phase 1 creates only the application bootstrap and directory boundaries (`app`, `pages`, `features`, `entities`, `shared`); routing, Query providers, design tokens, and screen UI remain later phases.

**Tech Stack:** React 19, TypeScript, Vite 7, pnpm workspace, Turborepo

**Spec:** Sightlab frontend handoff context supplied on 2026-09-07 and the Phase 1 decisions approved in chat.

## Global Constraints

- Add Sightlab at `apps/sightlab`.
- Do not modify the existing Portfolio implementation.
- Reuse `../../libs/ts-config/tsconfig.json` and `../../libs/vite-base-config/vite.config.mjs`.
- Do not copy Portfolio's Tailwind 3 dependency mismatch into Sightlab.
- Do not implement Figma tokens, Router, TanStack Query, API client, shared UI, or page designs in this phase.
- Keep source domains ready for `public` and `admin` page groups and note/project/review/auth/settings features.

---

### Task 1: Create the Sightlab workspace app

**Files:**
- Create: `apps/sightlab/package.json`
- Create: `apps/sightlab/index.html`
- Create: `apps/sightlab/tsconfig.json`
- Create: `apps/sightlab/vite.config.mjs`
- Create: `apps/sightlab/.prettierrc.cjs`

**Interfaces:**
- Consumes: existing workspace glob `apps/*`, shared TypeScript config, shared Vite base config.
- Produces: workspace package `sightlab` with `dev`, `build`, and `preview` scripts.

- [ ] Create the app package metadata with React 19 and Vite 7 only.
- [ ] Reuse the existing TypeScript base config and define the `@/*` alias.
- [ ] Reuse the existing Vite base config, output to `dist`, bind `@` to `src`, and use port `3001` to avoid Portfolio's `3000`.
- [ ] Add a minimal HTML root element and shared Prettier config.

### Task 2: Create the application bootstrap

**Files:**
- Create: `apps/sightlab/src/main.tsx`
- Create: `apps/sightlab/src/app/App.tsx`
- Create: `apps/sightlab/src/main.css`

**Interfaces:**
- Consumes: React root rendering.
- Produces: a buildable placeholder application proving the package is wired correctly.

- [ ] Render `App` under `React.StrictMode`.
- [ ] Keep `App` intentionally minimal with a Sightlab foundation placeholder only.
- [ ] Add only reset/base CSS required for a stable blank application canvas; defer design tokens to Phase 2.

### Task 3: Establish source boundaries

**Files:**
- Create: `apps/sightlab/src/app/router/.gitkeep`
- Create: `apps/sightlab/src/app/providers/.gitkeep`
- Create: `apps/sightlab/src/pages/public/.gitkeep`
- Create: `apps/sightlab/src/pages/admin/.gitkeep`
- Create: `apps/sightlab/src/features/notes/.gitkeep`
- Create: `apps/sightlab/src/features/projects/.gitkeep`
- Create: `apps/sightlab/src/features/review/.gitkeep`
- Create: `apps/sightlab/src/features/auth/.gitkeep`
- Create: `apps/sightlab/src/features/settings/.gitkeep`
- Create: `apps/sightlab/src/entities/note/.gitkeep`
- Create: `apps/sightlab/src/entities/project/.gitkeep`
- Create: `apps/sightlab/src/entities/tag/.gitkeep`
- Create: `apps/sightlab/src/shared/api/.gitkeep`
- Create: `apps/sightlab/src/shared/ui/.gitkeep`
- Create: `apps/sightlab/src/shared/styles/.gitkeep`
- Create: `apps/sightlab/src/shared/lib/.gitkeep`
- Create: `apps/sightlab/src/shared/types/.gitkeep`

**Interfaces:**
- Consumes: approved Sightlab frontend layering.
- Produces: explicit locations for later product code without prematurely defining APIs.

- [ ] Add empty tracked directories only; do not add speculative barrel files or types.

### Task 4: Verify Phase 1

**Files:**
- Verify only; no planned source changes.

**Interfaces:**
- Consumes: Tasks 1-3.
- Produces: evidence that the new app is recognized and internally consistent.

- [ ] Inspect the branch tree and each generated configuration file.
- [ ] Confirm `apps/sightlab` is matched by the existing `apps/*` workspace glob.
- [ ] Run available repository/CI verification if the execution environment supports dependency installation; otherwise report that runtime build verification is blocked and distinguish it from static configuration verification.
