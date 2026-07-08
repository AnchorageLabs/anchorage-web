import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowUpFromLine,
  BrainCircuit,
  Check,
  CircleCheck,
  Download,
  KeyRound,
  Laptop,
  Plug,
  Search,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import { SiApple, SiGit, SiLinux } from "@icons-pack/react-simple-icons";
import { Callout } from "@/components/callout";
import { CodeBlock } from "@/components/code-block";
import { CursorGlow } from "@/components/cursor-glow";
import { Footer } from "@/components/footer";
import { GuideToc } from "@/components/guide-toc";
import { ScrollProgress } from "@/components/scroll-progress";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Cartographer — Developer setup | Anchorage Labs",
  description:
    "Install and wire up Cartographer for your org: CLI, shared graph, agent MCP plugins, and verification.",
};

const toc = [
  { id: "install", label: "Install the CLI" },
  { id: "auth", label: "Authenticate" },
  { id: "pull", label: "Pull the shared graph" },
  { id: "query", label: "Index & query" },
  { id: "push", label: "Push your changes" },
  { id: "mcp", label: "Agent plugins (MCP)" },
  { id: "verify", label: "Verification" },
  { id: "skill", label: "The Anchorage Skill" },
  { id: "llm", label: "Bring your own LLM" },
  { id: "troubleshooting", label: "Cheat sheet & fixes" },
];

function WindowsIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 5.1 10.3 4v8.05H3zM11.15 3.9 21 2.5v9.55h-9.85zM3 12.95h7.3V21L3 19.9zM11.15 12.95H21v9.55l-9.85-1.4z" />
    </svg>
  );
}

const macIcons = (
  <>
    <SiApple size={14} />
    <SiLinux size={14} />
    <SiGit size={14} />
  </>
);

function C({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-[var(--surface-2)] px-1.5 py-0.5 font-mono text-[0.85em] text-[var(--ink)]">
      {children}
    </code>
  );
}

const stepIcons: Record<string, LucideIcon> = {
  install: Download,
  auth: KeyRound,
  pull: ArrowDownToLine,
  query: Search,
  push: ArrowUpFromLine,
  mcp: Plug,
  verify: CircleCheck,
  skill: Sparkles,
  llm: BrainCircuit,
  troubleshooting: Wrench,
};

function Step({ n, id, title, children }: { n: number; id: string; title: string; children: ReactNode }) {
  const Icon = stepIcons[id] ?? Download;
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[var(--cartographer)] bg-[var(--cartographer-soft)] text-[var(--cartographer)]">
          <Icon size={22} strokeWidth={1.75} />
        </span>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--faint)]">
            Step {String(n).padStart(2, "0")}
          </p>
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]">{title}</h2>
        </div>
      </div>
      <div className="mt-5 space-y-4 text-[15px] leading-7 text-[var(--muted)]">{children}</div>
    </section>
  );
}

const th = "px-4 py-3 text-left font-mono text-[11px] font-semibold uppercase tracking-wide text-[var(--muted)]";
const td = "px-4 py-3 align-top text-sm text-[var(--muted)]";

export default function CartographerSetup() {
  return (
    <main className="relative min-h-screen overflow-hidden text-[var(--ink)]">
      <div className="backdrop" />
      <ScrollProgress />
      <CursorGlow />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--page-bg)_72%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 lg:px-8">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/anchoragelabs-icon-gradient-512.png" alt="Anchorage Labs" className="h-8 w-8 rounded-lg" width={32} height={32} />
            <span className="text-sm font-semibold tracking-tight text-[var(--ink)]">Anchorage Labs</span>
            <span className="text-[var(--faint)]">/</span>
            <span className="hidden text-sm text-[var(--muted)] sm:inline">Cartographer setup</span>
          </a>
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href="https://app.anchoragelabs.dev"
              className="btn btn-primary !hidden px-4 py-2 text-sm sm:!inline-flex"
            >
              Open app
              <span aria-hidden>↗</span>
            </a>
            <a href="/" className="btn btn-ghost px-4 py-2 text-sm">
              <ArrowLeft size={15} />
              <span className="hidden sm:inline">Back to site</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-10 pt-28 lg:px-8 lg:pt-32">
        <div className="aurora" />
        <div className="relative">
          <div className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cartographer)] glow-dot text-[var(--cartographer)]" />
            Private beta · invite-only
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
            Cartographer <span className="text-gradient">developer setup</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Cartographer builds an incremental tree-sitter symbol index of a repo and serves it to your agent
            as tools — one call answers <span className="text-[var(--ink)]">&ldquo;where is X used / what do I open to change it&rdquo;</span> instead
            of a grep-and-read loop. Most queries are zero-token, and the org&rsquo;s shared graph is versioned like git.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            <CodeBlock
              title="macOS · Linux · Git Bash"
              icons={macIcons}
              code="curl -fsSL https://api.anchoragelabs.dev/cli/install.sh | sh"
            />
            <CodeBlock
              title="Windows PowerShell"
              icons={<WindowsIcon />}
              code="irm https://api.anchoragelabs.dev/cli/install.ps1 | iex"
            />
          </div>
          <p className="mt-4 max-w-2xl font-mono text-xs leading-5 text-[var(--faint)]">
            Measured on a real repo: a &ldquo;where/impact&rdquo; question costs ~103k tokens via
            grep-and-read vs ~300 via one Cartographer call.
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 lg:grid-cols-[220px_1fr] lg:px-8">
        <GuideToc items={toc} />

        <div className="min-w-0 space-y-16">
          {/* 1 */}
          <Step n={1} id="install" title="Install the CLI">
            <p>
              <span className="font-semibold text-[var(--ink)]">Prerequisite: Node 22+</span> — the bundle is pure
              JS + WASM run by <em>your</em> Node. No native binaries, no repo access, no pnpm, no build.
            </p>
            <CodeBlock title="macOS · Linux · Git Bash · WSL" icons={macIcons} code="curl -fsSL https://api.anchoragelabs.dev/cli/install.sh | sh" />
            <CodeBlock title="Windows PowerShell" icons={<WindowsIcon />} code="irm https://api.anchoragelabs.dev/cli/install.ps1 | iex" />
            <Callout tone="warn">
              <C>install.sh</C> is a POSIX-sh script — it does <strong>not</strong> run in PowerShell. Use{" "}
              <C>install.ps1</C> there (needs Windows 10+ for the built-in <C>tar.exe</C>), or run the sh installer
              inside Git Bash / WSL.
            </Callout>
            <p>
              What the installers do: verify the download against the release&rsquo;s published sha256, install to{" "}
              <C>~/.cartographer/current</C> (versioned dirs, previous installs kept), and put a <C>cartographer</C>{" "}
              launcher on your PATH (<C>~/.local/bin</C> on Unix; a <C>cartographer.cmd</C> shim + user-PATH entry on
              Windows — open a <strong>new</strong> terminal after the Windows install).
            </p>
            <CodeBlock code="cartographer --help    # verify the install" />
          </Step>

          {/* 2 */}
          <Step n={2} id="auth" title="Authenticate">
            <p>One token authenticates the CLI, the shared graph, and the hosted MCP:</p>
            <ol className="ml-1 space-y-2">
              <li className="flex gap-3">
                <span className="font-mono text-[var(--cartographer)]">1.</span>
                Open <C>https://api.anchoragelabs.dev</C> → <strong>Sign in with GitHub</strong> (org-gated — you must
                be an approved org member).
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-[var(--cartographer)]">2.</span>
                <span>
                  <strong>Account → reveal token.</strong> Copy it and export it:
                </span>
              </li>
            </ol>
            <CodeBlock
              title="shell profile"
              code={'export ANCHORAGE_API_TOKEN=anch_yourname_xxxxxxxx\n# Windows PowerShell:  $env:ANCHORAGE_API_TOKEN = "anch_yourname_xxxxxxxx"'}
            />
            <Callout tone="secret">
              <strong>Keep it out of code and chat.</strong> Shell profile or a secret manager — never commit it,
              never paste it into a conversation. Revealing again rotates it.
            </Callout>
          </Step>

          {/* 3 */}
          <Step n={3} id="pull" title="Pull the shared graph before you start">
            <CodeBlock
              code={"cd <your-repo>\ncartographer pull        # org's latest graph for this repo → local index\ncartographer status      # three axes: your tree / your index / the hosted head"}
            />
            <p>
              <C>status</C> tells you where you stand against the org graph:{" "}
              <span className="text-[var(--accent)]">FRESH</span> (in sync),{" "}
              <span className="text-[var(--accent)]">AHEAD</span> (you have unpushed structure),{" "}
              <span className="text-[var(--accent)]">BEHIND</span> (pull),{" "}
              <span className="text-[var(--accent)]">DIVERGED</span> (pull, re-index, push). Working on a repo you
              haven&rsquo;t cloned? Pull it anyway:
            </p>
            <CodeBlock
              code={"cartographer pull --out ~/graphs/aleph --repo your-org/aleph\ncartographer impact getUser ~/graphs/aleph --shared   # query with NO source tree"}
            />
            <p>
              (<C>--shared</C> serves the pulled snapshot as-is — a normal query would rescan the empty dir and prune
              it.)
            </p>
          </Step>

          {/* 4 */}
          <Step n={4} id="query" title="Index and query locally">
            <CodeBlock
              code={"cartographer init                    # first time in a repo: facts + symbol index\ncartographer watch                   # keep the index current while you edit\ncartographer impact startRun         # blast radius: defs, refs, dependents, tests\ncartographer refs startRun           # definitions + every reference\ncartographer tests-for src/store.ts  # which tests cover this file\ncartographer log                     # org graph history: who pushed what, when\ncartographer graph-diff <idA> <idB>  # structural delta between two snapshots"}
            />
            <p>
              Every query delta-refreshes the index first, so results always reflect your working tree. The index is a
              gitignored SQLite file (<C>.anchorage/index/symbols.db</C>) — nothing leaves your machine until you push.
            </p>
          </Step>

          {/* 5 */}
          <Step n={5} id="push" title="Push after you change code">
            <CodeBlock code={"cartographer push        # snapshot your index → org graph `latest`"} />
            <p>
              Push is <strong>safe by default</strong>: it&rsquo;s an immutable snapshot plus a compare-and-swap ref
              advance. If a teammate (or the Anchorage worker) pushed since you last synced, you get a{" "}
              <strong>409 naming the current head</strong> — never a silent overwrite:
            </p>
            <CodeBlock
              code={"push rejected: your-org/x latest advanced to g8c1e… (commit 4fa1b2c9, by …)\nfix: cartographer pull   # then re-index and push\n    or: cartographer push --force-with-lease=g8c1e…"}
            />
            <p>Re-pushing identical content is a no-op (&ldquo;up to date&rdquo;, zero bytes uploaded).</p>
          </Step>

          {/* 6 */}
          <Step n={6} id="mcp" title="Install the agent plugins (MCP)">
            <p>Two servers, one token:</p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-[var(--cartographer)]">
                  <Server size={17} strokeWidth={1.9} />
                </span>
                <span>
                  <strong className="text-[var(--ink)]">Hosted MCP</strong> — <C>https://mcp.anchoragelabs.dev/mcp</C>.
                  Zero install. Tools: <C>graph_lookup</C>, <C>graph_log</C>, plus the Anchorage run tools
                  (<C>submit_run</C>, <C>wait_for_run</C>, <C>review_pr</C>, …).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-[var(--cartographer)]">
                  <Laptop size={17} strokeWidth={1.9} />
                </span>
                <span>
                  <strong className="text-[var(--ink)]">Local MCP</strong> — the installed CLI serves your checkout
                  with the full 10-tool set (<C>repo_map</C>, <C>find_references</C>, <C>impact</C>,{" "}
                  <C>locate_change</C>, <C>tests_for</C>, <C>symbol_outline</C>, <C>repo_facts</C>,{" "}
                  <C>repo_context</C>, <C>context_for_task</C>, <C>graph_status</C>). Start it with:
                </span>
              </li>
            </ul>
            <CodeBlock
              code={"CARTOGRAPHER_MCP_DEV_TOKEN=pick-a-secret cartographer mcp --port 3100\n# your agent then sends:  Authorization: Bearer pick-a-secret"}
            />
            <p>
              Below: exact install per agent. <C>{"${ANCHORAGE_API_TOKEN}"}</C> must be exported in the environment the
              agent starts from. For the local server, swap the URL for <C>http://localhost:3100/mcp</C> and the token
              for your <C>CARTOGRAPHER_MCP_DEV_TOKEN</C>.
            </p>

            <h3 className="pt-2 text-base font-semibold text-[var(--ink)]">Claude Code</h3>
            <p>
              Create (or extend) <C>.mcp.json</C> at the repo root — or <C>~/.claude.json</C> for all projects:
            </p>
            <CodeBlock
              title=".mcp.json"
              lang="json"
              code={'{\n  "mcpServers": {\n    "anchorage": {\n      "type": "http",\n      "url": "https://mcp.anchoragelabs.dev/mcp",\n      "headers": { "Authorization": "Bearer ${ANCHORAGE_API_TOKEN}" }\n    }\n  }\n}'}
            />

            <h3 className="pt-2 text-base font-semibold text-[var(--ink)]">claude.ai (web)</h3>
            <p>
              Settings → <strong>Connectors</strong> → Add custom connector → <C>https://mcp.anchoragelabs.dev/mcp</C>.
              The browser opens a <strong>Connect Anchorage</strong> page — paste your API token once (OAuth handles
              the rest).
            </p>

            <h3 className="pt-2 text-base font-semibold text-[var(--ink)]">Cursor</h3>
            <p>
              <C>~/.cursor/mcp.json</C> (global) or <C>.cursor/mcp.json</C> (per repo):
            </p>
            <CodeBlock
              title="mcp.json"
              lang="json"
              code={'{\n  "mcpServers": {\n    "anchorage": {\n      "url": "https://mcp.anchoragelabs.dev/mcp",\n      "headers": { "Authorization": "Bearer ${ANCHORAGE_API_TOKEN}" }\n    }\n  }\n}'}
            />

            <h3 className="pt-2 text-base font-semibold text-[var(--ink)]">Codex</h3>
            <p>
              <C>~/.codex/config.toml</C> — newer Codex speaks HTTP MCP directly:
            </p>
            <CodeBlock
              title="config.toml"
              lang="toml"
              code={'[mcp_servers.anchorage]\nurl = "https://mcp.anchoragelabs.dev/mcp"\nhttp_headers = { Authorization = "Bearer ${ANCHORAGE_API_TOKEN}" }'}
            />

            <h3 className="pt-2 text-base font-semibold text-[var(--ink)]">Gemini CLI</h3>
            <p>
              <C>~/.gemini/settings.json</C>:
            </p>
            <CodeBlock
              title="settings.json"
              lang="json"
              code={'{\n  "mcpServers": {\n    "anchorage": {\n      "httpUrl": "https://mcp.anchoragelabs.dev/mcp",\n      "headers": { "Authorization": "Bearer ${ANCHORAGE_API_TOKEN}" }\n    }\n  }\n}'}
            />

            <h3 className="pt-2 text-base font-semibold text-[var(--ink)]">GitHub Copilot (VS Code)</h3>
            <p>
              <C>.vscode/mcp.json</C> in the workspace (the <C>inputs</C> entry prompts once for the token and stores
              it outside the repo — never hard-code it here):
            </p>
            <CodeBlock
              title=".vscode/mcp.json"
              lang="json"
              code={'{\n  "inputs": [\n    { "type": "promptString", "id": "anchorage-token",\n      "description": "Anchorage client token", "password": true }\n  ],\n  "servers": {\n    "anchorage": {\n      "type": "http",\n      "url": "https://mcp.anchoragelabs.dev/mcp",\n      "headers": { "Authorization": "Bearer ${input:anchorage-token}" }\n    }\n  }\n}'}
            />

            <h3 className="pt-2 text-base font-semibold text-[var(--ink)]">OpenCode</h3>
            <p>
              <C>opencode.json</C> (repo) or <C>~/.config/opencode/opencode.json</C>:
            </p>
            <CodeBlock
              title="opencode.json"
              lang="json"
              code={'{\n  "mcp": {\n    "anchorage": {\n      "type": "remote",\n      "url": "https://mcp.anchoragelabs.dev/mcp",\n      "enabled": true,\n      "headers": { "Authorization": "Bearer ${ANCHORAGE_API_TOKEN}" }\n    }\n  }\n}'}
            />

            <h3 className="pt-2 text-base font-semibold text-[var(--ink)]">Any stdio-only agent (fallback)</h3>
            <p>
              Bridge stdio ↔ HTTP with <C>mcp-remote</C>:
            </p>
            <CodeBlock
              lang="json"
              code={'{\n  "mcpServers": {\n    "anchorage": {\n      "command": "npx",\n      "args": ["-y", "mcp-remote", "https://mcp.anchoragelabs.dev/mcp",\n               "--header", "Authorization: Bearer ${ANCHORAGE_API_TOKEN}"]\n    }\n  }\n}'}
            />

            <h3 className="pt-2 text-base font-semibold text-[var(--ink)]">Support matrix</h3>
            <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
              <table className="w-full border-collapse">
                <thead className="bg-[var(--surface-2)]">
                  <tr>
                    <th className={th}>Agent / editor</th>
                    <th className={th}>Native HTTP MCP</th>
                    <th className={th}>Config file</th>
                    <th className={th}>Token</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {[
                    ["Claude Code", "yes", ".mcp.json", "ANCHORAGE_API_TOKEN"],
                    ["claude.ai (web)", "connector + OAuth", "Settings → Connectors", "pasted once"],
                    ["Cursor", "yes", "~/.cursor/mcp.json", "ANCHORAGE_API_TOKEN"],
                    ["Codex", "version-dependent", "~/.codex/config.toml", "ANCHORAGE_API_TOKEN"],
                    ["Gemini CLI", "yes (httpUrl)", "~/.gemini/settings.json", "ANCHORAGE_API_TOKEN"],
                    ["GitHub Copilot (VS Code)", "yes", ".vscode/mcp.json", "prompted input"],
                    ["OpenCode", "yes (remote)", "opencode.json", "ANCHORAGE_API_TOKEN"],
                    ["Anything stdio-only", "via mcp-remote", "agent-specific", "same"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className={`${td} font-medium text-[var(--ink)]`}>{row[0]}</td>
                      <td className={td}>
                        {row[1] === "yes" ? (
                          <span className="inline-flex items-center gap-1.5 text-[var(--accent)]">
                            <Check size={15} strokeWidth={2.5} /> Yes
                          </span>
                        ) : (
                          <span className="font-mono text-xs">{row[1]}</span>
                        )}
                      </td>
                      <td className={`${td} font-mono text-xs`}>{row[2]}</td>
                      <td className={`${td} font-mono text-xs`}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout tone="info">
              <strong>Sanity-check prompt</strong> (works in every agent): &ldquo;Call <C>graph_lookup</C> for{" "}
              <C>&lt;a symbol you know&gt;</C> in <C>&lt;owner/repo&gt;</C> and report the graphId and commit sha the
              answer came from.&rdquo; A wired setup names a <C>graph.graphId</C> (<C>g</C> + 32 hex) and a commit; a
              broken one falls back to grep.
            </Callout>
          </Step>

          {/* 7 */}
          <Step n={7} id="verify" title="One-command verification">
            <CodeBlock code="cartographer status --json   # with ANCHORAGE_API_TOKEN exported" />
            <p>
              Healthy output has <C>&quot;fresh&quot;: true</C> (tree vs index) <strong>and</strong> a{" "}
              <C>&quot;remote&quot;: {"{"} &quot;freshness&quot;: &quot;fresh&quot; | &quot;ahead&quot; | … {"}"}</C>{" "}
              block (index vs org graph). If the <C>remote</C> block is missing, your token isn&rsquo;t exported.
            </p>
          </Step>

          {/* 8 */}
          <Step n={8} id="skill" title="Give your agents the Anchorage Skill">
            <p>
              Installing the plugin gives agents the tools; the <strong>skill</strong> makes them use the graph
              instead of grepping. Paste the contents of <C>anchorage-agent-skill.md</C> into each agent&rsquo;s
              instructions:
            </p>
            <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
              <table className="w-full border-collapse">
                <thead className="bg-[var(--surface-2)]">
                  <tr>
                    <th className={th}>Agent</th>
                    <th className={th}>Where to paste</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {[
                    ["Claude Code / Codex / OpenCode", "CLAUDE.md / AGENTS.md at the repo root"],
                    ["Cursor", ".cursor/rules"],
                    ["Gemini CLI", "GEMINI.md"],
                    ["GitHub Copilot", ".github/copilot-instructions.md"],
                    ["Reviewers / custom prompts", "the reviewer system prompt"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className={`${td} font-medium text-[var(--ink)]`}>{row[0]}</td>
                      <td className={`${td} font-mono text-xs`}>{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              The skill is Cartographer-scoped: sync-before-work, graph-before-grep tool selection, mandatory{" "}
              <C>impact</C> / <C>tests_for</C> before changing public symbols, 409/lease recovery, version-stamped
              answers, and honesty/fallback rules.
            </p>
          </Step>

          {/* 9 */}
          <Step n={9} id="llm" title="Bring your own LLM (optional)">
            <p>
              Core queries are zero-token. Two optional commands call a model: <C>cartographer narrate</C>{" "}
              (plain-language repo summary) and <C>cartographer map --llm</C> (architecture claims). Configure your own
              key:
            </p>
            <CodeBlock
              code={"export ANCHORAGE_LLM_PROVIDER=anthropic      # anthropic · openai · openai-compatible · bedrock\nexport ANCHORAGE_LLM_API_KEY=sk-ant-...       # your own key — BYO, never shared\nexport ANCHORAGE_LLM_MODEL=claude-sonnet-4-6"}
            />
          </Step>

          {/* 10 */}
          <Step n={10} id="troubleshooting" title="Cheat sheet & troubleshooting">
            <p>
              <strong className="text-[var(--ink)]">Daily:</strong> <C>pull</C> → work (<C>impact</C> / <C>refs</C> /{" "}
              <C>tests-for</C>, agent tools) → <C>push</C>. Keep <C>cartographer watch</C> running during long sessions.
            </p>
            <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
              <table className="w-full border-collapse">
                <thead className="bg-[var(--surface-2)]">
                  <tr>
                    <th className={th}>Symptom</th>
                    <th className={th}>Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {[
                    ["401 from server / MCP", "Token rotated or you're not an org member — re-reveal at the deck, re-export."],
                    ['claude.ai connector: "Authorization … failed"', "Remove + re-add the connector, paste your CURRENT token in the Connect page."],
                    ["Push rejected with 409", "Someone pushed first — cartographer pull, re-index, push (or --force-with-lease=<head>)."],
                    ["Empty results after pull", "Add --shared (a tree-less snapshot must not be rescanned)."],
                    ["Stale local index", "cartographer refresh"],
                    ["cartographer: command not found (Unix)", "Add ~/.local/bin to PATH."],
                    ["cartographer not found (Windows)", "Open a NEW terminal (PATH was updated at install)."],
                    ["checksum MISMATCH at install", "Do not install; retry, then report in #cartographer."],
                    ["hosted graph_lookup empty for a repo", "That repo's graph hasn't been pushed yet — cartographer log --repo owner/name shows history."],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className={`${td} font-medium text-[var(--ink)]`}>{row[0]}</td>
                      <td className={td}>{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Callout tone="info">
              Full per-client integration docs live at <C>docs/integrations/</C>. Questions → <C>#cartographer</C>.
            </Callout>
          </Step>
        </div>
      </div>

      <Footer />
    </main>
  );
}
