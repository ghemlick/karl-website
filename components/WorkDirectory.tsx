"use client";

import { useId, useState } from "react";
import { groupWorksByGenre, workMatchesQuery, type Work } from "@/content/works";
import { WorkEntry } from "./WorkEntry";

export function WorkDirectory({
  works,
  compact = false,
  noun = "works",
}: {
  works: Work[];
  compact?: boolean;
  noun?: string;
}) {
  const searchId = useId();
  const [query, setQuery] = useState("");
  const matches = works.filter((work) => workMatchesQuery(work, query));
  const groups = groupWorksByGenre(matches);
  const searching = query.trim().length > 0;

  return (
    <div className="md:grid md:grid-cols-[16.5rem_minmax(0,1fr)] md:items-start md:gap-10">
      <aside className="mb-8 border-b border-line bg-paper pb-6 md:sticky md:top-20 md:mb-0 md:max-h-[calc(100vh-6rem)] md:overflow-y-auto md:border-b-0 md:pb-0">
        <div className="flex items-end justify-between gap-3">
          <label htmlFor={searchId} className="text-xs tracking-[0.16em] text-muted uppercase">
            Directory
          </label>
          <p className="text-xs text-muted" aria-live="polite">
            {searching
              ? `${matches.length} of ${works.length}`
              : `${works.length} ${noun}`}
          </p>
        </div>
        <input
          id={searchId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={`Search ${noun}`}
          autoComplete="off"
          spellCheck={false}
          className="mt-3 w-full border border-line bg-paper px-3 py-2 text-sm outline-none placeholder:text-muted/70 focus:border-accent"
        />

        <nav className="mt-5" aria-label={`${noun} directory`}>
          {groups.length > 0 ? (
            <div className="space-y-5">
              {groups.map((group) => (
                <section key={group.id} aria-labelledby={`genre-${group.id}`}>
                  <h2
                    id={`genre-${group.id}`}
                    className="text-xs font-medium tracking-[0.16em] text-accent uppercase"
                  >
                    {group.label}
                  </h2>
                  <ul className="mt-1.5">
                    {group.works.map((work) => (
                      <li key={work.slug}>
                        <a
                          href={`#${work.slug}`}
                          className="block text-sm leading-5 text-ink/85 hover:text-accent"
                        >
                          {work.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted">No {noun} match that search.</p>
          )}
        </nav>
      </aside>

      <div>
        {matches.length > 0 ? (
          matches.map((work) => (
            <WorkEntry key={work.slug} work={work} compact={compact} />
          ))
        ) : (
          <p className="text-sm text-muted">Try a title, collaborator, genre, or keyword.</p>
        )}
      </div>
    </div>
  );
}
