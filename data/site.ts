export const organization = {
  name: "Anchorage Labs",
  tagline: "The state layer of AI software engineering.",
  github: "https://github.com/AnchorageLabs",
  description:
    "A deterministic map of every repository, and a runtime that takes an issue to a merged, deployed change.",
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
      "Scans a repository into a symbolic, machine-queryable context artifact — so agents and humans never re-discover a repo with ls, grep, and cat.",
    mission: "Any agent productive in any repo within one file read.",
    capabilities: [
      {
        title: "Symbolic context artifact",
        description: "Nine closed namespaces, closed enums, three-valued semantics. One vocabulary everywhere.",
      },
      {
        title: "Code-symbol index — zero LLM tokens",
        description: "tree-sitter over ~25 languages into SQLite. Impact, refs, routes, env, tests — pure SQL, milliseconds.",
      },
      {
        title: "Shared graph, versioned like git",
        description: "Push a hosted org graph so every agent queries the same fresh structure. Immutable, lease-checked snapshots.",
      },
    ],
    guarantees: [
      "Deterministic — same tree, byte-identical output.",
      "Never invents facts — undetectable means null.",
      "No secrets — env names only.",
    ],
    terminal: {
      title: "cartographer",
      lines: [
        { text: "$ cartographer scan .", kind: "cmd" },
        { text: "charted: anchorage -> .anchorage/repo-context.json", kind: "dim" },
        { text: "$ cartographer impact buildRuntimePreview .", kind: "cmd" },
        { text: "refs  agents/runtime/src/index.ts  10,129,144", kind: "dim" },
        { text: "blast radius resolved — zero LLM tokens", kind: "ok" },
      ],
    },
  },
  {
    id: "anchorage",
    name: "Anchorage",
    kicker: "The runtime — protocol + orchestrator",
    tagline: "Issue in, merged and deployed change out.",
    accent: "anchorage",
    visibility: "Open-core · private orchestrator",
    status: "pre-v0",
    license: "Apache-2.0 (protocol)",
    url: "https://github.com/AnchorageLabs/anchorage",
    summary:
      "An open protocol, SDK, runner, and adapters for end-to-end software automation — plus the private orchestrator that sequences agents from issue to deploy.",
    mission: "Turn issues into completed changes by reliably sequencing agents.",
    capabilities: [
      {
        title: "Open-core protocol & SDK",
        description: "Wire spec, TypeScript SDK, CLI runner, MCP/A2A adapters, and reference agents — all Apache-2.0.",
      },
      {
        title: "Durable, AWS-native execution",
        description: "Runs sequenced and persisted in RDS Postgres, served from ECS Fargate. issue-to-code, -merge, -deploy.",
      },
      {
        title: "Plans & decomposition",
        description: "Plan and stop, or split into cross-linked GitHub issues. Inference on Amazon Bedrock, providers pluggable.",
      },
    ],
    guarantees: [
      "Explicit open-core boundary.",
      "Protocol-first — a validated wire format, not a shared runtime.",
      "Auditable — durable, inspectable run state.",
    ],
    terminal: {
      title: "anchorage-runner",
      lines: [
        { text: "$ anchorage run issue-to-merge", kind: "cmd" },
        { text: "plan.create -> code.change -> test.run", kind: "dim" },
        { text: "pr.open -> ci.watch -> pr.review -> merge.prepare", kind: "dim" },
        { text: "issue.close  ✓  workflow complete", kind: "ok" },
      ],
    },
  },
];

export const principles = [
  { title: "Deterministic substrate", description: "Facts before guesses. Byte-identical maps, zero-LLM indexes." },
  { title: "Inspectable by design", description: "Symbols, evidence trails, and durable run state you can audit." },
  { title: "Open-core boundary", description: "Protocol, SDK, and the map are open. Orchestration stays private." },
];

export const aws = {
  eyebrow: "Runs on AWS",
  title: "Engineered on AWS, provisioned as code.",
  intro:
    "Containers on ECS Fargate, durable state in RDS Postgres, inference on Amazon Bedrock — every stack defined with AWS CDK.",
  services: [
    { name: "Amazon Bedrock", role: "Managed LLM inference for the agents." },
    { name: "ECS Fargate", role: "Serverless containers for orchestrator and workers." },
    { name: "Amazon RDS · Postgres", role: "Durable run state, steps, and metrics." },
    { name: "Amazon ECR", role: "Private registry for images." },
    { name: "Amazon S3", role: "Artifact and workspace storage." },
    { name: "Amazon VPC", role: "Isolated network boundary." },
    { name: "CloudWatch", role: "Logs, metrics, observability." },
    { name: "Secrets Manager / SSM", role: "Keys and config at runtime." },
    { name: "AWS CDK · CloudFormation", role: "Infrastructure as reviewable code." },
  ],
};

export const owners = [
  {
    name: "Sol Soletti",
    role: "Co-founder",
    location: "Rosario, Argentina",
    github: "https://github.com/solsolettidev",
    linkedin: "https://www.linkedin.com/in/solsoletti/",
    avatar: "https://avatars.githubusercontent.com/u/272352439?v=4",
    focus: "Developer tools, backend systems, Go, TypeScript, product.",
    summary: "Shapes Anchorage Labs around practical developer tooling and clear software systems. Public work across TypeScript and Go.",
    signals: ["Co-founder", "TypeScript", "Go", "Dev tooling", "Product"],
  },
  {
    name: "Valentin Torassa Colombero",
    role: "Co-founder",
    location: "Argentina",
    github: "https://github.com/ValentinTorassa",
    linkedin: "https://www.linkedin.com/in/valetorassa/",
    avatar: "https://avatars.githubusercontent.com/u/141514714?v=4",
    focus: "Infrastructure, automation, Linux, containers, security tooling.",
    summary: "Public work spanning Python, TypeScript, Go, Linux, and self-hosted tooling. Strong bias toward systems and automation.",
    signals: ["Co-founder", "Infrastructure", "Automation", "Linux", "AWS"],
  },
];

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
  "Python",
  "Next.js",
  "Docker",
  "GitHub Actions",
  "MCP / A2A",
];
