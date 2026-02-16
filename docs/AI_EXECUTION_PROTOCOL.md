# AI_EXECUTION_PROTOCOL.md

## Purpose

This document governs how AI agents (Claude Code, ChatGPT, or others) operate on the flood-doctor repository to prevent drift, scope creep, broken builds, and SEO regressions.

## Core Principles

- Never modify URL structure without explicit instruction.
- Never reintroduce SPA fallback behavior.
- Never remove prerender pipeline.
- Never change canonical logic casually.
- Never add duplicate title or H1 patterns.
- Never expand scope beyond the requested task.
- Always preserve static HTML-first output.
- All major logical changes require a commit checkpoint.

## Current Architecture

- Vite + React
- Playwright-based static prerender
- Apache hosting
- Real 404 handling
- 301 canonical redirects for duplicate structures
- Subdomain city strategy
- 188 indexed routes
- 0 duplicate titles
- 0 duplicate H1
- 0 broken internal links
- All titles ≤ 60 characters

## Required Workflow For Any Change

1. Audit first. No blind edits.
2. Propose scoped change.
3. Implement in isolated logical batch.
4. Rebuild.
5. Re-run crawl or verification.
6. Commit with descriptive message.
7. Report metrics before/after.

## Forbidden Actions

- Reintroducing catch-all SPA fallback returning 200.
- Creating duplicate city path + subdomain structures.
- Adding new routes without adding them to config/routes.ts.
- Hardcoding URLs instead of using canonical route source.
- Injecting meta tags outside PageMeta system.
- Adding secrets to frontend code.

## SEO Guardrails

- One canonical per page.
- One H1 per page.
- Brand appears once in title.
- Primary keyword in first 45 characters of title.
- No indexable soft 404s.
- All internal links must resolve 200.
- All redirects must be single-hop 301.

## Deployment Rules

- Build must pass locally.
- prerender:verify must pass.
- Crawl must show 0 broken links.
- Production curl audit must confirm:
  - 200 for valid
  - 301 for canonical duplicates
  - 404 for fake routes

## AI State Continuity

Before starting new work:

1. Read PROJECT_STATE.md
2. Read AI_EXECUTION_PROTOCOL.md
3. Confirm understanding of constraints
4. Then proceed
