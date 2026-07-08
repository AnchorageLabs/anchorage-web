"use client";

import { ArgentinaFlag, UsaFlag } from "@/components/flags";
import { useLang } from "@/components/language-provider";

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
      title={lang === "en" ? "Español" : "English"}
      className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-2)] transition hover:-translate-y-0.5"
    >
      <span className="block h-3.5 w-5 overflow-hidden rounded-[3px] border border-black/20 shadow-sm">
        {lang === "es" ? (
          <ArgentinaFlag className="h-full w-full" />
        ) : (
          <UsaFlag className="h-full w-full" />
        )}
      </span>
    </button>
  );
}
