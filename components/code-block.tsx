type CodeBlockProps = {
  file: string;
  code: string;
  compact?: boolean;
};

const keywordPattern = /\b(export|function|return|const|let|if|else|for|while|type|interface|def|class|from|import|async|await|true|false|readonly|unknown|string|number)\b/g;
const keywordTestPattern = /\b(export|function|return|const|let|if|else|for|while|type|interface|def|class|from|import|async|await|true|false|readonly|unknown|string|number)\b/;
const stringPattern = /("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|`[^`]*`)/g;
const stringTestPattern = /^("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|`[^`]*`)$/;
const commentPattern = /(\/\/.*|#.*)$/;

function highlightLine(line: string) {
  const comment = line.match(commentPattern);
  const code = comment ? line.slice(0, comment.index) : line;
  const parts = code.split(stringPattern).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => {
        if (stringTestPattern.test(part)) {
          return <span key={`${part}-${index}`} className="text-signal-green">{part}</span>;
        }
        const keywordParts = part.split(keywordPattern).filter(Boolean);
        return keywordParts.map((keywordPart, nestedIndex) =>
          keywordTestPattern.test(keywordPart) ? (
            <span key={`${keywordPart}-${index}-${nestedIndex}`} className="text-cyan-200">{keywordPart}</span>
          ) : (
            <span key={`${keywordPart}-${index}-${nestedIndex}`}>{keywordPart}</span>
          ),
        );
      })}
      {comment ? <span className="text-slate-500">{comment[0]}</span> : null}
    </>
  );
}

export function CodeBlock({ file, code, compact = false }: CodeBlockProps) {
  const lines = code.split("\n");

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#030712]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="font-mono text-xs text-cyan-100">{file}</span>
        <span className="rounded-full bg-cyan-300/10 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-200">safe</span>
      </div>
      <pre className={`${compact ? "max-h-56" : "max-h-[38rem]"} overflow-auto p-4 text-left font-mono text-xs leading-6 text-slate-300 sm:text-sm`}>
        <code>
          {lines.map((line, index) => (
            <span key={`${file}-${index}`} className="block">
              <span className="mr-4 select-none text-slate-700">{String(index + 1).padStart(2, "0")}</span>
              {highlightLine(line)}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
