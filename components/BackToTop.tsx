"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed right-4 bottom-4 z-50 border border-line bg-paper px-3 py-2 text-xs tracking-[0.16em] uppercase shadow-sm transition hover:border-accent hover:text-accent ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      Top
    </button>
  );
}
