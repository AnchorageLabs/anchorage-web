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
    codeFile: "src/envy/cli.py",
    code: `def cmd_sync(args: argparse.Namespace) -> int:\n    settings = load_settings(args)\n    ensure_git_repo(settings.repo)\n    if args.pull:\n        run(["git", "pull", "--rebase"], cwd=settings.repo)\n    run(["git", "add", "."], cwd=settings.repo)`,
  },
  {
    name: "lighthouse",
    url: "https://github.com/AnchorageLabs/lighthouse",
    status: "Pre-v0 scaffold",
    accent: "cyan",
    summary:
      "An onboarding assistant that explains repositories, maps important folders, ranks beginner-friendly issues, and guides first-time contributors toward a first PR.",
    usefulFor: "Open source maintainers and new contributors who need faster, safer orientation inside unfamiliar codebases.",
    technologies: ["Shell", "CLI concept", "GitHub", "Markdown", "Mermaid"],
    codeFile: "README.md",
    code: `lighthouse explain AnchorageLabs/anchorage\n\n# expected report\n- repository summary\n- setup and verification commands\n- folder and package map\n- ranked beginner-friendly issues`,
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
    codeFile: "src/config.ts",
    code: `export async function loadConfig(): Promise<Config> {\n  const cwd = process.cwd();\n  const jsonPath = path.join(cwd, CONFIG_JSON);\n\n  if (fs.existsSync(jsonPath)) {\n    const raw = fs.readFileSync(jsonPath, "utf-8");\n    return { ...defaultConfig, ...JSON.parse(raw) };\n  }\n\n  return defaultConfig;\n}`,
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

export const showcases = [
  {
    title: "Protocol event stream validation",
    repo: "anchorage",
    file: "sdk/typescript/src/events/event-stream.ts",
    language: "typescript",
    code: `export function validateEventStream(\n  events: readonly ProtocolEvent[],\n  exitCode: number,\n  context: EventStreamValidationContext = {},\n): EventStreamValidationResult {\n  const errors: string[] = [];\n\n  if (events.length === 0) {\n    errors.push("event stream must contain at least one event");\n    return { ok: false, errors };\n  }\n\n  const terminalEvents = events.filter((event) =>\n    isTerminalEventType(event.type),\n  );\n\n  if (terminalEvents.length !== 1) {\n    errors.push("event stream must contain exactly one terminal event");\n  }\n\n  return errors.length > 0\n    ? { ok: false, errors }\n    : { ok: true, events: [...events] };\n}`,
  },
  {
    title: "Dotfiles restore safety",
    repo: "envy",
    file: "src/envy/cli.py",
    language: "python",
    code: `def backup_existing(target_path: Path, home_dir: Path, repo_root: Path, timestamp: str) -> Path:\n    relative = target_path.resolve().relative_to(home_dir.resolve())\n    backup_dest = repo_root / ".envy" / "backups" / timestamp / relative\n    backup_dest.parent.mkdir(parents=True, exist_ok=True)\n\n    if target_path.is_dir():\n        if backup_dest.exists():\n            shutil.rmtree(backup_dest)\n        shutil.copytree(target_path, backup_dest)\n    else:\n        shutil.copy2(target_path, backup_dest)\n\n    return backup_dest`,
  },
  {
    title: "Schema-backed boundaries",
    repo: "anchorage",
    file: "sdk/typescript/src/validation/validator.ts",
    language: "typescript",
    code: `export function validateWithSchema<T>(\n  schemaId: string,\n  value: unknown,\n): ValidationResult<T> {\n  const validate = ajv.getSchema(schemaId);\n  if (!validate) {\n    throw new Error(\`Schema not registered: \${schemaId}\`);\n  }\n\n  if (validate(value)) {\n    return { ok: true, value: value as T };\n  }\n\n  return { ok: false, errors: validate.errors ?? [] };\n}`,
  },
];

export const analysisSummary = [
  "Public/open source: anchorage, envy, lighthouse, chary.",
  "Private/internal: anchorage-internal and anchorage-orchestrator.",
  "Current stage: early development across the portfolio; anchorage is a pre-v0 reference implementation, lighthouse is a pre-v0 scaffold, envy is alpha, and chary is an early CLI scaffold.",
  "Confirmed technical direction: protocol-first automation, CLI tooling, GitHub-centered workflows, explicit validation, reproducible local execution, and contributor-facing developer tools.",
];
