import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { microrhythmsPage } from "@/content/microrhythms";

export const metadata: Metadata = {
  title: "Microrhythms",
  description: "Karl Ronneburg's research into microrhythmic composition.",
};

export default function MicrorhythmsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader title={microrhythmsPage.title} />
      <p className="mb-8 whitespace-pre-wrap text-[15px] leading-7">{microrhythmsPage.body}</p>
      <ul className="mb-10 space-y-2 text-sm">
        {microrhythmsPage.scores.map((score) => (
          <li key={score.href}>
            <a href={score.href} className="underline decoration-accent/50 hover:text-accent">
              {score.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="space-y-10">
        {microrhythmsPage.images.map((image) => (
          <figure key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              width={1917}
              height={1030}
              className="h-auto w-full border border-line"
            />
            <figcaption className="mt-3 text-sm text-muted">{image.caption}</figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-10 text-sm">
        <Link href="/music" className="underline decoration-accent/50 hover:text-accent">
          Back to compositions
        </Link>
      </p>
    </div>
  );
}
