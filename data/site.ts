export const organization = {
  name: "Anchorage Labs",
  github: "https://github.com/AnchorageLabs",
  description:
    "A developer-first software lab building open protocols, automation tooling, CLIs, and infrastructure primitives for modern engineering teams.",
};

export const openSourceProjects = [
  {
    name: "envy",
    url: "https://github.com/AnchorageLabs/envy",
    status: "Alpha CLI",
    accent: "green",
    summary:
      "A lightweight dotfiles CLI for backing up, restoring, syncing, and bootstrapping development environments across machines.",
    usefulFor: "Developers who want portable, git-backed workstation setup without adopting a heavy dotfiles framework.",
    technologies: ["Python 3.11+", "CLI", "TOML", "unittest", "GitHub Actions"],
  },
  {
    name: "cartographer",
    url: "https://github.com/AnchorageLabs/cartographer",
    status: "v0.1",
    accent: "cyan",
    summary:
      "A local-first code context-graph tool. Builds an incremental tree-sitter symbol index (repo map, find references, impact, locate change, tests-for) and exposes it to AI agents over an MCP server — so agents stop burning tokens re-reading the repo.",
    usefulFor: "Developers using AI coding tools (Claude Code, Cursor, Codex) who want their agent to query repo structure instead of grepping it.",
    technologies: ["TypeScript", "tree-sitter", "SQLite", "MCP", "Node.js"],
  },
  {
    name: "chary",
    url: "https://github.com/AnchorageLabs/chary",
    status: "Early CLI scaffold",
    accent: "violet",
    summary:
      "An automated changelog generator and commit diff registry designed to enforce changelog hygiene on pull requests.",
    usefulFor: "Teams that want release notes and change history to stay tied to merged PRs instead of manual bookkeeping.",
    technologies: ["TypeScript", "Node.js", "Commander", "Vitest", "ESLint", "Prettier"],
  },
];

export const owners = [
  {
    name: "Sol Soletti",
    role: "Co-founder, Anchorage Labs",
    location: "Rosario, Santa Fe, Argentina",
    github: "https://github.com/solsolettidev",
    linkedin: "https://www.linkedin.com/in/solsoletti/",
    avatar: "https://avatars.githubusercontent.com/u/272352439?v=4",
    focus: "Developer tools, backend systems, Go, TypeScript, and product execution for developer-first software.",
    summary:
      "Sol is a co-founder of Anchorage Labs and helps shape the organization around practical developer tooling, open source products, and technically clear software systems. Public GitHub activity confirms work across TypeScript and Go, including development-environment and microservices-oriented projects.",
    signals: ["Anchorage Labs co-founder", "TypeScript", "Go", "Developer tooling", "Backend systems"],
  },
  {
    name: "Valentin Torassa Colombero",
    role: "Co-founder, Anchorage Labs",
    location: "Argentina",
    github: "https://github.com/ValentinTorassa",
    linkedin: "https://www.linkedin.com/in/valetorassa/",
    avatar: "https://avatars.githubusercontent.com/u/141514714?v=4",
    focus:
      "Infrastructure, automation, backend platforms, security tooling, Linux systems, containers, and AI-assisted developer workflows.",
    summary:
      "Valentin is a co-founder of Anchorage Labs with public work spanning Python, TypeScript, Go, C#, Shell, PowerShell, Linux, Podman, MCP, automation, self-hosted tooling, and infrastructure experiments. His public repositories show a strong bias toward systems, operations, security, and developer workflow automation.",
    signals: ["Anchorage Labs co-founder", "Infrastructure", "Automation", "Python", "TypeScript", "Linux", "Containers"],
  },
];

export const internalSystems = [
  {
    name: "anchorage",
    visibility: "Public open-core",
    description:
      "Protocol, TypeScript SDK, reference CLI runner, MCP/A2A adapters, and reference agents for end-to-end software automation.",
  },
  {
    name: "anchorage-internal",
    visibility: "Private",
    description:
      "Strategy, operating principles, ADRs, and internal project context. Treated as private organizational infrastructure.",
  },
  {
    name: "anchorage-orchestrator",
    visibility: "Private",
    description:
      "A proprietary workflow layer that composes CLI-first Anchorage agents into auditable software delivery flows.",
  },
];

export const stack = [
  "TypeScript",
  "Node.js 22",
  "pnpm",
  "Python 3.11/3.12",
  "React",
  "Next.js",
  "Docker",
  "GitHub Actions",
  "CLIs",
  "APIs",
  "AJV / JSON Schema",
  "Vitest",
  "Jest",
  "unittest",
  "Biome",
  "ESLint",
  "Prettier",
  "Mermaid",
  "MCP / A2A adapters",
];

export const analysisSummary = [
  "Public/open source: anchorage, envy, cartographer, chary.",
  "Private/internal: anchorage-internal and anchorage-orchestrator.",
  "Current stage: early development across the portfolio; anchorage is a pre-v0 reference implementation, cartographer is a v0.1 code context-graph tool, envy is alpha, and chary is an early CLI scaffold.",
  "Confirmed technical direction: protocol-first automation, CLI tooling, GitHub-centered workflows, explicit validation, reproducible local execution, and contributor-facing developer tools.",
];
