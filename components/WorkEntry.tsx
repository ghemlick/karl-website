import Link from "next/link";
import type { Work } from "@/content/works";
import { MediaEmbed } from "./MediaEmbed";

export function WorkEntry({ work }: { work: Work }) {
  return (
    <article className="border-t border-line py-12 first:border-t-0 first:pt-0">
      {work.media?.length ? (
        <div className="mb-6 space-y-4">
          {work.media.map((item, index) => (
            <MediaEmbed key={`${work.slug}-${index}`} media={item} />
          ))}
        </div>
      ) : null}

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{work.title}</h2>
            {work.subtitle ? (
              <p className="mt-1 text-sm text-muted">{work.subtitle}</p>
            ) : null}
          </div>
          {work.poem ? (
            <p className="whitespace-pre-wrap text-[15px] leading-7 text-ink/90">
              {work.poem}
            </p>
          ) : null}
          {work.body ? (
            <p className="whitespace-pre-wrap text-[15px] leading-7 text-ink/90">
              {work.body}
            </p>
          ) : null}
          {work.notes?.length ? (
            <ul className="space-y-1 text-sm text-muted">
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
          <aside className="text-sm leading-6 text-muted md:text-right">
            {work.credits.map((line, index) => (
              <p key={`${work.slug}-credit-${index}`}>{line}</p>
            ))}
          </aside>
        ) : null}
      </div>
    </article>
  );
}
