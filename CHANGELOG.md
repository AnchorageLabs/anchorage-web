# CHANGELOG — AnchorageLabs/anchorage-labs-web

All substantive changes to this repo are recorded here. Format derived from Keep a Changelog, adapted for AnchorageLabs build discipline.

> **Required for every substantive PR.** Append entries with `bin/changelog-append.sh` (run from this repo). Do not edit history once a release is cut.

## Entry format

```
### YYYY-MM-DD — <one-line intent>

**Intent:** <outcome language; what changes for users / the system, not what code moved>

**Files touched:**
- path/to/file.ts
- path/to/other.md

**Reason:** <issue #N / ADR-NNN / runbook / incident date / written constraint>

**Author:** <git user.name>
```

**Hard rules:**
- No AI co-authors (no `Claude`, `Codex`, `GPT-*`). Authorship is human.
- Reason must cite a source — never just "cleanup" or "refactor".
- Entries are committed alongside the change they describe.

---

## [unreleased]

### 2026-05-11 — Establish the Anchorage Labs portfolio landing with repository bootstrap discipline

**Intent:** Establish the Anchorage Labs portfolio landing with repository bootstrap discipline

**Files touched:**
- AGENTS.md
- SOUL.md
- CHANGELOG.md
- .claude/settings.local.json
- .codex/config.toml
- .githooks/prepare-commit-msg
- .githooks/commit-msg
- app/page.tsx
- app/layout.tsx
- app/globals.css
- components/code-block.tsx
- components/code-showcase.tsx
- components/footer.tsx
- components/hero-visual.tsx
- components/project-card.tsx
- components/section.tsx
- components/terminal-panel.tsx
- data/site.ts
- package.json
- package-lock.json
- next.config.ts
- postcss.config.mjs
- tailwind.config.ts
- tsconfig.json
- README.md
- .gitignore

**Reason:** User request to create a private AnchorageLabs portfolio website; ADR-0020 for bootstrap discipline

**Author:** Sol Soletti


<!-- New entries go here, newest first. The /ship command and bin/changelog-append.sh insert under this header. -->

---

## Releases

<!--
When cutting a release, rename `[unreleased]` to `[vX.Y.Z] — YYYY-MM-DD`
and start a new empty `[unreleased]` section above it.
-->
