# SOUL.md — AnchorageLabs/anchorage-web

> The north-star file. Locked schema — sections are not optional and not negotiable.
> If a PR contradicts SOUL.md, the PR is wrong (or SOUL.md needs an explicit, dated revision).

**Last updated:** 2026-05-11

---

## Mission
Make Anchorage Labs legible as a serious developer-first software organization through a precise, technically credible, and maintainable public web presence.
<!--
One sentence. The reason this repo exists. Outcome language, not implementation.
Bad: "implement an event bus." Good: "agents in different orchestrators can coordinate without a shared runtime."
-->



## North-star metric

<!--
ONE measurable thing whose movement tells you whether this repo is succeeding.
Must be observable without subjective judgment. Include current value if known.
Examples: "p95 plan→merge latency for issues labeled `agent-eligible`", "% of issues an agent closes without human edits".
-->

- **Metric:** Number of confirmed Anchorage Labs public projects represented with accurate status, stack, links, and safe code/context.
- **Current:** 4 public projects represented (`anchorage`, `envy`, `cartographer`, `chary`).
- **Target (90d):** Every active public Anchorage Labs repo has an accurate landing-page representation within one week of meaningful status changes.

## Non-goals

<!--
What this repo will NOT do, even if asked. Bullet form, blunt.
This section protects against scope creep — agents must refuse changes that pull the repo toward these.
-->

- This repo will not host proprietary orchestrator code or internal strategy documents.
- This repo will not expose secrets, `.env` values, credentials, private keys, private implementation details, or customer data.
- This repo will not claim technologies, maturity, users, contact channels, or product status that cannot be confirmed from repository context or maintainer input.

## Out-of-scope

<!--
Adjacent problems that are tempting but belong elsewhere. Cite where they DO live.
-->

- Product documentation for the `anchorage` protocol belongs in a dedicated docs repo, not in this marketing portfolio.
- Internal strategy, ADRs, operating policy, and architectural source-of-truth documents belong in `anchorage-internal`.
- Infrastructure implementation belongs in the appropriate private infrastructure or orchestrator repositories.

## Principles

<!--
The trade-off rules that decide ambiguous calls. 3–7 bullets. Each one a tension, not a slogan.
Example: "Prefer protocol stability over feature velocity — once shipped, breaking changes need an ADR."
-->

- Prefer technical credibility over marketing breadth; fewer accurate claims are better than a generic software-company narrative.
- Prefer static, fast, inspectable UI over animation-heavy presentation when there is a trade-off.
- Keep public/private boundaries explicit; private systems can be described as capabilities, not copied as implementation.
- Keep content centralized and reviewable so repository facts do not drift from source context.

---

## Revision policy

Changes to Mission, North-star metric, Non-goals, or Out-of-scope require:
1. An ADR in `anchorage-internal/adr/`
2. Explicit approval from both maintainers (Valentin + Sol)
3. A `CHANGELOG.md` entry citing the ADR

Principles can be revised more freely but each revision still gets a CHANGELOG entry.
