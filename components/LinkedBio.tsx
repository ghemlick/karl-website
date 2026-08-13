import type { ReactNode } from "react";
import type { BioItem } from "@/content/about";

export function LinkedBio({ item }: { item: BioItem }) {
  if (!item.links?.length) {
    return <>{item.text}</>;
  }

  const matches = item.links
    .map((link) => {
      const start = item.text.indexOf(link.label);
      return start === -1 ? null : { start, end: start + link.label.length, link };
    })
    .filter((match): match is { start: number; end: number; link: (typeof item.links)[number] } =>
      Boolean(match),
    )
    .sort((a, b) => a.start - b.start);

  const parts: ReactNode[] = [];
  let cursor = 0;
  matches.forEach((match, index) => {
    if (match.start > cursor) {
      parts.push(<span key={`t-${index}`}>{item.text.slice(cursor, match.start)}</span>);
    }
    parts.push(
      <a
        key={`l-${index}`}
        href={match.link.href}
        className="underline decoration-accent/60 hover:text-accent"
        target={match.link.href.startsWith("http") ? "_blank" : undefined}
        rel={match.link.href.startsWith("http") ? "noreferrer" : undefined}
      >
        {match.link.label}
      </a>,
    );
    cursor = match.end;
  });
  if (cursor < item.text.length) {
    parts.push(<span key="tail">{item.text.slice(cursor)}</span>);
  }
  return <>{parts}</>;
}
