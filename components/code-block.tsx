"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

type CodeBlockProps = {
  code: string;
  title?: string;
  lang?: string;
  icons?: ReactNode;
};

export function CodeBlock({ code, title, lang = "bash", icons }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked — no-op */
    }
  }

  return (
    <div className="group/code overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--terminal)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div className="flex items-center gap-2">
          {icons ? (
            <span className="flex items-center gap-2 text-[#d7e6ea]/75">{icons}</span>
          ) : (
            <>
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </>
          )}
          <span className="ml-1.5 font-mono text-[11px] text-[#d7e6ea]/45">
            {title ?? lang}
          </span>
        </div>
        <button
          type="button"
          onClick={copy}
          aria-label="Copy code"
          className="flex items-center gap-1.5 rounded-md border border-white/10 px-2 py-1 font-mono text-[11px] text-[#d7e6ea]/60 transition-colors hover:border-white/25 hover:text-[#d7e6ea]"
        >
          {copied ? <Check size={13} className="text-[var(--accent)]" /> : <Copy size={13} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-6 text-[#d7e6ea]/90">
        <code>{code}</code>
      </pre>
    </div>
  );
}
