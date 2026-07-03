export const organization = {
  name: "Anchorage Labs",
  tagline: "The state layer of AI software engineering.",
  github: "https://github.com/AnchorageLabs",
  description:
    "Anchorage Labs builds the deterministic substrate that coding agents run on: a machine-queryable map of every repository, and a protocol-driven runtime that sequences agents from issue to merged, deployed change.",
};

export type Product = {
  id: string;
  name: string;
  kicker: string;
  tagline: string;
  accent: "cartographer" | "anchorage";
  visibility: string;
  status: string;
  license: string;
  url: string;
  summary: string;
  mission: string;
  capabilities: { title: string; description: string }[];
  guarantees: string[];
  terminal: { title: string; lines: { text: string; kind?: "cmd" | "out" | "ok" | "dim" }[] };
};

export const products: Product[] = [
  {
    id: "cartographer",
    name: "Cartographer",
    kicker: "The map",
    tagline: "Charts a repo before anyone sails it.",
    accent: "cartographer",
    visibility: "Open source",
    status: "v0.1",
    license: "Apache-2.0",
    url: "https://github.com/AnchorageLabs/anchorage-cartographer",
    summary:
      "Cartographer scans a repository and persists a symbolic, machine-queryable context artifact — stack, package manager, build/test/lint commands, entry points, architecture pattern, agent contracts, env var names — so coding agents and humans never re-discover a repo with ls, grep, and cat package.json.",
    mission: "Any agent can be productive in any repo within one file read.",
    capabilities: [
      {
        title: "Symbolic context artifact",
        description:
          "Nine closed namespaces (repo:, cmd:, run:, entry:, arch:, contract:, env:, infra:, graph:) with closed enums and three-valued semantics — a value, a checked-absent null, or an unknown symbol. One vocabulary across the CLI, the NDJSON facts stream, and the digest injected into task envelopes.",
      },
      {
        title: "Code-symbol index — zero LLM tokens",
        description:
          "tree-sitter parses ~25 languages into a persisted SQLite index, refreshed incrementally by content hash. Impact blast-radius, outline, refs, tests-for, HTTP routes, env reads, DB tables, and CODEOWNERS — all SQL lookups, no network, milliseconds.",
      },
      {
        title: "Shared graph — versioned like git",
        description:
          "Push the local index to a hosted org graph so every agent — Claude Code, Codex, Gemini, Copilot, Cursor, OpenCode, and the Anchorage runtime — queries the same fresh structure. Immutable snapshots with ancestry, a latest ref advanced by compare-and-swap, and lease-checked pushes.",
      },
    ],
    guarantees: [
      "Deterministic — same git tree yields a byte-identical context artifact.",
      "Never invents facts — declarations beat inference beat heuristics; undetectable means null.",
      "No secrets — env var names only, never values.",
    ],
    terminal: {
      title: "cartographer",
      lines: [
        { text: "$ cartographer scan .", kind: "cmd" },
        { text: "charted: anchorage -> .anchorage/repo-context.json", kind: "dim" },
        { text: "$ cartographer get cmd:test", kind: "cmd" },
        { text: "pnpm test", kind: "out" },
        { text: "$ cartographer impact buildRuntimePreview .", kind: "cmd" },
        { text: "refs  agents/runtime/src/index.ts  10,129,144,161", kind: "dim" },
        { text: "blast radius resolved — zero LLM tokens", kind: "ok" },
      ],
    },
  },
  {
    id: "anchorage",
    name: "Anchorage",
    kicker: "The runtime — protocol + orchestrator",
    tagline: "Turn a GitHub issue into a merged, deployed change.",
    accent: "anchorage",
    visibility: "Open-core protocol · private orchestrator",
    status: "pre-v0 reference",
    license: "Apache-2.0 (protocol)",
    url: "https://github.com/AnchorageLabs/anchorage",
    summary:
      "Anchorage is an open protocol, TypeScript SDK, reference CLI runner, and MCP/A2A adapters for end-to-end software automation — plus the private orchestrator that consumes it. The orchestrator sequences CLI-first Anchorage agents into durable, auditable workflows on AWS, from issue reading through PR, review, merge, and deploy.",
    mission:
      "Turn GitHub issues into completed software changes by reliably sequencing Anchorage-compatible agents through the workflow runtime.",
    capabilities: [
      {
        title: "Open-core protocol & SDK",
        description:
          "A wire-format spec, a TypeScript SDK, a reference runner (anchorage run <agent> < input.json), MCP and A2A adapters, and reference agents for issue reading, planning, coding, tests, PR opening, review, merge prep, and deploy observation — all Apache-2.0 so anyone can build agents that target an Anchorage-compatible orchestrator.",
      },
      {
        title: "Durable, AWS-native execution",
        description:
          "The private orchestrator sequences each step and persists durable run state — steps, signals, token metrics — in Postgres on RDS. issue-to-code, issue-to-merge (pr.open → ci.watch → pr.review → merge.prepare → issue.close), issue-to-deploy, and Notion-sourced flows, served from ECS Fargate with an HTTP API, worker, and trigger CLI.",
      },
      {
        title: "Plans, decomposition & image briefs",
        description:
          "Produce a reviewable plan and stop, or decompose it into a tracking epic plus dependency-ordered, cross-linked GitHub issues. Attach image briefs on vision-capable models. Inference runs on Amazon Bedrock, with pluggable providers — Anthropic, OpenAI, Moonshot/Kimi, and OpenAI-compatible gateways.",
      },
    ],
    guarantees: [
      "Explicit open-core boundary — public protocol, private orchestration.",
      "Protocol-first — agents coordinate through a validated wire format, not a shared runtime.",
      "Auditable — durable execution, event streams, and inspectable run state.",
    ],
    terminal: {
      title: "anchorage-runner",
      lines: [
        { text: "$ anchorage run issue-to-merge", kind: "cmd" },
        { text: "agent.started -> plan.create -> code.change -> test.run", kind: "dim" },
        { text: "pr.open -> ci.watch -> pr.review -> merge.prepare", kind: "dim" },
        { text: "issue.close  ✓  workflow complete", kind: "ok" },
      ],
    },
  },
];

export const principles = [
  {
    title: "Deterministic substrate",
    description:
      "Facts before guesses. The map is byte-identical for a given git tree, the index is zero-LLM SQL, and CI enforces freshness. Agents build on ground truth, not vibes.",
  },
  {
    title: "Inspectable by design",
    description:
      "Symbols, evidence trails, event streams, and durable run state. Every claim is checkable and every workflow step is auditable — legible to the humans on the loop.",
  },
  {
    title: "Open-core boundary",
    description:
      "The protocol, SDK, runner, and Cartographer engine are open source. Orchestration and strategy stay private. The line is explicit and never blurred.",
  },
];

export const owners = [
  {
    name: "Sol Soletti",
    role: "Co-founder",
    location: "Rosario, Santa Fe, Argentina",
    github: "https://github.com/solsolettidev",
    linkedin: "https://www.linkedin.com/in/solsoletti/",
    avatar: "https://avatars.githubusercontent.com/u/272352439?v=4",
    focus: "Developer tools, backend systems, Go, TypeScript, and product execution for developer-first software.",
    summary:
      "Sol co-founds Anchorage Labs and shapes the organization around practical developer tooling, open source products, and technically clear software systems. Public work spans TypeScript and Go across development-environment and microservices-oriented projects.",
    signals: ["Co-founder", "TypeScript", "Go", "Developer tooling", "Product"],
  },
  {
    name: "Valentin Torassa Colombero",
    role: "Co-founder",
    location: "Argentina",
    github: "https://github.com/ValentinTorassa",
    linkedin: "https://www.linkedin.com/in/valetorassa/",
    avatar: "https://avatars.githubusercontent.com/u/141514714?v=4",
    focus:
      "Infrastructure, automation, backend platforms, security tooling, Linux systems, containers, and AI-assisted developer workflows.",
    summary:
      "Valentin co-founds Anchorage Labs with public work spanning Python, TypeScript, Go, C#, Shell, Linux, Podman, MCP, and self-hosted tooling. A strong bias toward systems, operations, security, and developer-workflow automation.",
    signals: ["Co-founder", "Infrastructure", "Automation", "Linux", "Containers"],
  },
];

export const aws = {
  eyebrow: "Runs on AWS",
  title: "Engineered on AWS, provisioned as code.",
  intro:
    "The platform runs entirely on AWS. The orchestrator ships as containers on ECS Fargate, run state is durable in RDS Postgres, LLM inference is served from Amazon Bedrock, and every stack is defined and deployed with AWS CDK.",
  services: [
    { name: "Amazon Bedrock", role: "Managed LLM inference for planning, coding, and review agents." },
    { name: "ECS Fargate", role: "Serverless containers running the orchestrator and agent workers." },
    { name: "Amazon RDS · Postgres", role: "Durable run state — steps, signals, and token metrics." },
    { name: "Amazon ECR", role: "Private registry for orchestrator and agent images." },
    { name: "Amazon S3", role: "Artifact and workspace object storage." },
    { name: "Amazon VPC", role: "Isolated network boundary for compute and data." },
    { name: "CloudWatch", role: "Logs, metrics, and operational observability." },
    { name: "Secrets Manager / SSM", role: "Provider keys and config, injected at runtime." },
    { name: "AWS CDK · CloudFormation", role: "The whole platform as reviewable infrastructure code." },
  ],
};

export const stack = [
  "TypeScript",
  "Node.js 22",
  "pnpm",
  "AWS CDK",
  "ECS Fargate",
  "Amazon Bedrock",
  "RDS Postgres",
  "tree-sitter",
  "node:sqlite",
  "Python 3.11/3.12",
  "Next.js",
  "Docker",
  "GitHub Actions",
  "MCP / A2A",
];
