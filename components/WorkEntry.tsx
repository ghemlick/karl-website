import Link from "next/link";
import type { Work } from "@/content/works";
import { MediaEmbed } from "./MediaEmbed";

export function WorkEntry({ work, compact = false }: { work: Work; compact?: boolean }) {
  const allSpotify = work.media?.every((item) => item.type === "spotify");
  const media = work.media?.length ? (
    <div className={allSpotify ? "grid max-w-3xl gap-3 sm:grid-cols-2" : "space-y-5"}>
      {work.media.map((item, index) => (
        <MediaEmbed key={`${work.slug}-${index}`} media={item} />
      ))}
    </div>
  ) : null;

  const bodyClass = compact
    ? "whitespace-pre-wrap text-[15px] leading-5 text-ink/90"
    : "whitespace-pre-wrap text-[15px] leading-7 text-ink/90";

  return (
    <article
      id={work.slug}
      className={
        compact
          ? "scroll-mt-24 border-t border-line py-6 first:border-t-0 first:pt-0"
          : "scroll-mt-24 border-t border-line py-12 first:border-t-0 first:pt-0"
      }
    >
      {!work.mediaAfter && media ? (
        <div className={compact ? "mb-3" : "mb-6"}>{media}</div>
      ) : null}

      <div
        className={
          compact
            ? "grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]"
            : "grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]"
        }
      >
        <div className={compact ? "space-y-2" : "space-y-4"}>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{work.title}</h2>
            {work.subtitle ? (
              <p className="mt-1 text-sm text-muted">{work.subtitle}</p>
            ) : null}
          </div>
          {work.poem ? <p className={bodyClass}>{work.poem}</p> : null}
          {work.body ? <p className={bodyClass}>{work.body}</p> : null}
          {work.notes?.length ? (
            <ul className={compact ? "space-y-0.5 text-sm leading-5 text-muted" : "space-y-1 text-sm text-muted"}>
              {work.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          ) : null}
          {work.links?.length || work.scores?.length || work.wantSheetMusic ? (
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {work.links?.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="underline decoration-accent/50 hover:text-accent"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {work.scores?.map((score) => (
                <li key={score.href}>
                  <a
                    href={score.href}
                    className="underline decoration-accent/50 hover:text-accent"
                  >
                    {score.label}
                  </a>
                </li>
              ))}
              {work.wantSheetMusic ? (
                <li>
                  <Link href="/contact" className="underline decoration-accent/50 hover:text-accent">
                    Want the sheet music?
                  </Link>
                </li>
              ) : null}
            </ul>
          ) : null}
        </div>

        {work.credits?.length ? (
          <aside
            className={
              compact
                ? "text-sm leading-5 text-muted md:text-right"
                : "text-sm leading-6 text-muted md:text-right"
            }
          >
            {work.credits.map((line, index) => (
              <p key={`${work.slug}-credit-${index}`}>{line}</p>
            ))}
          </aside>
        ) : null}
      </div>

      {work.mediaAfter && media ? (
        <div className={compact ? "mt-3" : "mt-8"}>{media}</div>
      ) : null}
    </article>
  );
}
