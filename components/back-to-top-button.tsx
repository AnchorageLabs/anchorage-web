"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 600;

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={`back-to-top-button fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-2)] text-[var(--ink)] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] backdrop-blur transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-[var(--accent)] focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent)] sm:bottom-4 sm:right-4 ${
        isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19V5m0 0l-7 7m7-7l7 7"
        />
      </svg>
    </button>
  );
}
