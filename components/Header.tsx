"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/content/site";
import { SocialLinks } from "./SocialLinks";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-[0.22em] uppercase"
        >
          Karl
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Site">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[11px] font-medium tracking-[0.16em] uppercase transition-colors ${
                isActive(item.href)
                  ? "text-accent"
                  : "text-ink/80 hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <SocialLinks size="sm" />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5">
            <span className={`block h-px w-5 bg-ink transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-ink transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-sm tracking-[0.14em] uppercase ${
                  isActive(item.href) ? "text-accent" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>
      ) : null}
    </header>
  );
}
