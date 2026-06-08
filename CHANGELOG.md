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

### 2026-05-17 — Add floating "Back to top" button on long pages

**Intent:** Long pages now display a circular floating button fixed to the bottom-right corner that appears after scrolling past 600px. Clicking the button smoothly scrolls to the top of the page, or instantly if the user has enabled prefers-reduced-motion. The button uses the site's existing theme tokens (accent color, ink, shadow, border radius) and sketch-card styling, and is fully accessible with aria-label and keyboard focus support.

**Files touched:**
- components/back-to-top-button.tsx
- app/layout.tsx
- app/globals.css
- CHANGELOG.md

**Reason:** Issue #22 — add a "Back to top" button on long marketing pages to improve navigation.
### 2026-05-17 — Add footer ownership note

**Intent:** The footer now displays a single line of text "Built in the open by Anchorage Labs." positioned below the button group, providing a brief ownership and credit note while maintaining visual consistency with the existing footer styling.

**Files touched:**
- components/footer.tsx
- CHANGELOG.md

**Reason:** Issue #26 — add a short footer note with ownership credit.

**Author:** Anchorage Labs

### 2026-05-16 — Add subtle bracket anchor cues to section headings

**Intent:** Each major section heading (About, Owners, Open Source, Systems, Stack) now displays a small bracket-like accent marker in the top-left corner, improving scanability when scrolling the landing page. The bracket uses the existing accent color with reduced opacity to maintain the sketch-style aesthetic while providing a restrained visual cue that makes section boundaries easier to recognize at a glance.

**Files touched:**
- components/section.tsx
- CHANGELOG.md

**Reason:** Issue #18 — make section headings easier to scan with subtle anchor cues.

**Author:** Anchorage Labs

### 2026-05-15 — Improve project card scanability with clearer repo actions

**Intent:** The Open Source project cards now display a more prominent repository action button with filled background styling, larger text, and improved spacing. The button uses the card's accent color and provides stronger visual hierarchy, making the repository link more noticeable while maintaining the sketch-card aesthetic.

**Files touched:**
- components/project-card.tsx
- CHANGELOG.md

**Reason:** Issue #14 — improve project card scanability with clearer repo actions.

**Author:** Anchorage Labs

### 2026-05-14 — Add accent bar beneath each section title

**Intent:** Each section header (About, Owners, Open Source, Systems, Stack) now displays a short rounded lime accent bar between the title and the intro paragraph, giving section headers a clearer visual anchor tied to the site's accent color.

**Files touched:**
- components/section.tsx
- CHANGELOG.md

**Reason:** Issue #8 — add accent underline bar under section titles for minimal UX improvement.

**Author:**

### 2026-05-13 — Shift the portfolio toward a sketch-style technical identity

**Intent:** Give the landing page a hand-drawn visual direction with light/dark mode support, keep the technical 3D/network feel, and replace code-heavy project cards with clearer project summaries.

**Files touched:**
- app/globals.css
- app/layout.tsx
- app/page.tsx
- components/footer.tsx
- components/hero-visual.tsx
- components/owners-section.tsx
- components/project-card.tsx
- components/section.tsx
- components/terminal-panel.tsx
- components/theme-toggle.tsx
- data/site.ts
- tailwind.config.ts

**Reason:** User request on 2026-05-13 to explore a drawn/sketch visual style, remove the awkward code display, and add a light/dark mode switch.

**Author:** Sol Soletti

### 2026-05-11 — Add owner profiles to the Anchorage Labs portfolio

**Intent:** Add owner profiles to the Anchorage Labs portfolio

**Files touched:**
- app/page.tsx
- components/owners-section.tsx
- data/site.ts
- CHANGELOG.md

**Reason:** User request to include Sol Soletti and Valentin Torassa Colombero owner summaries from public profiles

**Author:** Sol Soletti


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
