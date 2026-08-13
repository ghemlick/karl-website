import type { ReactNode } from "react";
import { socials } from "@/content/site";

const icons: Record<string, ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full fill-current">
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2zM17.2 6.4a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9z" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full fill-current">
      <path d="M23 12.2s0-3.2-.4-4.6a3 3 0 0 0-2.1-2.1C18.9 5 12 5 12 5s-6.9 0-8.5.5A3 3 0 0 0 1.4 7.6C1 9 1 12.2 1 12.2s0 3.2.4 4.6a3 3 0 0 0 2.1 2.1C5.1 19.4 12 19.4 12 19.4s6.9 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.3 3.3z" />
    </svg>
  ),
  SoundCloud: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full fill-current">
      <path d="M17.4 10.2a3.7 3.7 0 0 0-1.4.3 4.6 4.6 0 0 0-8.7 1.4H6.2A2.7 2.7 0 0 0 3.5 14.6 2.7 2.7 0 0 0 6.2 17h11.2a3.3 3.3 0 1 0 0-6.8z" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full fill-current">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1z" />
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full fill-current">
      <path d="M14.7 10.3 22 2h-1.7l-6.3 7.2L9 2H2.2l7.7 11.1L2.2 22H4l6.7-7.7L15 22h6.8l-7.1-11.7zM11.6 13.2l-.8-1.1L4.7 3.3h2.6l5 7.1.8 1.1 6.6 9.2h-2.6l-5.5-7.5z" />
    </svg>
  ),
};

export function SocialLinks({
  size = "md",
  includeTwitter = false,
}: {
  size?: "sm" | "md";
  includeTwitter?: boolean;
}) {
  const dim = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const items = includeTwitter
    ? socials
    : socials.filter((item) => item.name !== "Twitter");

  return (
    <ul className="flex items-center gap-3">
      {items.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="text-ink/80 transition-colors hover:text-accent"
            aria-label={item.name}
          >
            <span className={`block ${dim}`}>{icons[item.name]}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
