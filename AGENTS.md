# AGENTS.md — AnchorageLabs/anchorage-labs-web

**Last updated:** 2026-05-11
**Visibility:** private
**Maintainers:** Valentin Torassa, Sol Soletti

> Read this first before making changes. This file is the contract between human and agent for *this* repo. The org-level contract lives in `anchorage-internal/AGENTS.md` and is the canonical authority for AnchorageLabs as a whole.

---

## §1. What this repo is

<!--
One paragraph. What problem does this repo solve, and for whom?
Avoid implementation details — those go in §3. This section should still be true after a year.
-->

- This repo contains the private portfolio and landing page for Anchorage Labs. It presents the organization, public open source projects, internal capability areas, and representative safe code excerpts for developers, contributors, and technical partners.

## §2. North star

<!--
One sentence — pulled from SOUL.md. The single outcome this repo's existence is meant to produce.
If you cannot answer "did this PR move us toward the north star?", the PR is probably out of scope.
-->

See `SOUL.md` for the locked north-star schema (mission, metric, non-goals, principles).

## §3. Architecture overview

<!--
The shape of the code. Module boundaries, key abstractions, why those boundaries exist.
Cite file paths. Not a tour — a map.
-->

- `app/` owns the Next.js App Router entrypoints, metadata, global styles, and the single-page landing composition.
- `components/` contains presentation components for sections, project cards, terminal/editor visuals, footer, and the lightweight technical hero visual.
- `data/site.ts` is the content boundary for repository analysis, project summaries, stack facts, links, and safe code snippets.
- Styling is Tailwind CSS plus a small `app/globals.css` layer for the dark technical background, grid treatment, and motion-safe visual effects.

## §4. How to run / develop

<!--
Concrete commands. Install, build, test, lint, run locally, deploy if applicable.
Should be copy-pasteable. If a command requires setup (env vars, accounts), say so.
-->

```bash
npm install
npm run build
npm run dev
```

## §5. Public/private repo boundary

<!--
What MUST NOT cross from this repo into the public `anchorage` repo (or vice versa).
Common: secrets, customer data, internal strategy, proprietary orchestrator logic.
Per `anchorage-internal/AGENTS.md` §5 — agents must not move code across this boundary without explicit approval.
-->

- This private website repo may describe internal systems at a capability level, but must not publish secrets, credentials, private keys, `.env` contents, private implementation details, proprietary orchestrator code, customer data, or unreleased strategy from `anchorage-internal`.
- Public snippets must come from public repositories or already-public documentation unless a maintainer explicitly approves otherwise.

## §6. Agent operating notes

<!--
Repo-specific guidance for coding agents. What patterns to reuse, what to avoid, what tests are non-negotiable.
General agent policy lives in `anchorage-internal/coding-agent-operating-policy.md` — do not duplicate it here.
-->

- Keep content facts grounded in analyzed repositories. Do not invent technologies, status, contact channels, customers, metrics, or maturity claims.
- Prefer static, performant UI primitives. Avoid adding 3D/runtime-heavy dependencies unless the performance budget and visual value are clear.
- Run `npm run build` before shipping changes.
- Keep `data/site.ts` as the first place to update portfolio content; avoid scattering repository facts across components.

## §7. Issue & branch conventions

- Branches follow `issue-N-<short-slug>` so that the `anchorage-build` plugin can auto-fetch issue context. Looser shapes (`N-foo`, `feat/issue-N`, `feat/N-foo`) are also recognized.
- If a branch has no issue number, the agent will ask the user whether the work belongs to an issue — answer explicitly. Spikes and exploration are valid answers; silence is not.
- Issues use the template in `anchorage-internal/agent-issue-template.md`.
- Every substantive PR ships with a `CHANGELOG.md` entry and (if it touches docs) an `AGENTS.md` update.

## §8. Shipping discipline (inherited by all agents)

> Both Claude and Codex MUST follow this ritual before considering any substantive change "done." The agent invokes it on its own — the user does not have to ask.

Before committing a substantive change:

1. **Run the ritual.** Invoke `bin/ship.sh` (the canonical engine). Claude can also auto-trigger via the `ship` skill or `/ship` slash command. Codex invokes the script directly.
2. **Phase 1 — Pre-flight.** `bin/sync-agents-md.sh` reports `AGENTS.md` / `SOUL.md` / `CHANGELOG.md` health. Resolve any issues before continuing.
3. **Phase 2 — CHANGELOG entry.** If `[unreleased]` has no entry covering this change, append one with `bin/changelog-append.sh`. Intent in outcome language; reason cites issue / ADR / runbook / incident; no AI co-authors.
4. **Phase 3 — Architecture sensitivity.** If `ship.sh` flags arch-sensitive paths (public API, build config, CI, new top-level modules, internals architecture/protocol), **draft a Proposed ADR** at `anchorage-internal/adr/NNNN-short-title.md` *before* the change lands. Default toward writing one — the user's role is to approve/edit/reject, not to decide whether one is needed.
5. **Phase 4 — Post-flight.** Walk the checklist printed by `ship.sh`: internals coherence, ADR/runbook drafts approved, CHANGELOG cites the right ID, commit message is human-authored.

**Hard rules during shipping:**

- Commit messages are human-authored. No `Co-Authored-By: Claude/Codex/GPT/AI/Anthropic/OpenAI` — the git hooks (`prepare-commit-msg`, `commit-msg`) will strip and reject these, but don't write them.
- CHANGELOG entry is committed in the same commit as the change.
- Internals updates are committed with the code that requires them, not in a follow-up.

## §9. Related docs

- Org-level: `anchorage-internal/AGENTS.md`
- Architecture: `anchorage-internal/architecturev0.1.md`
- Protocol: `anchorage-internal/protocol-specv0.1.md`
- Coding policy: `anchorage-internal/coding-agent-operating-policy.md`
- This repo's north star: `SOUL.md`
- This repo's history: `CHANGELOG.md`
