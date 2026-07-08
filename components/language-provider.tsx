"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { type Dict, type Lang, translations } from "@/data/i18n";

type LangContext = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const Ctx = createContext<LangContext>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("anchorage-lang");
    if (stored === "es" || stored === "en") {
      setLangState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    window.localStorage.setItem("anchorage-lang", l);
    document.documentElement.lang = l;
  }

  return <Ctx.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}

export function useT() {
  return useContext(Ctx).t;
}
