import type { Metadata } from "next";
import Image from "next/image";
import { LinkedBio } from "@/components/LinkedBio";
import {
  aboutCloser,
  aboutIntro,
  aboutItems,
  aboutLead,
  aboutQuotes,
} from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Karl Ronneburg is a composer, percussionist, dramaturg, and performance artist based in New York City.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="relative mb-12 overflow-hidden">
        <Image
          src="/images/about-portrait.jpg"
          alt="Karl Ronneburg outdoors"
          width={1200}
          height={1800}
          priority
          className="aspect-[16/9] w-full object-cover object-[50%_22%]"
        />
        <h1 className="absolute top-6 left-0 bg-paper px-3 py-1 text-4xl font-semibold tracking-tight sm:top-10 sm:text-6xl">
          ABOUT
        </h1>
      </section>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)]">
        <aside className="space-y-10">
          {aboutQuotes.map((item) => (
            <blockquote key={item.quote} className="text-right">
              <p className="font-serif text-2xl leading-snug text-accent italic">
                “{item.quote}”
              </p>
              <footer className="mt-3 text-sm text-muted">— {item.attribution}</footer>
            </blockquote>
          ))}
        </aside>

        <div className="space-y-5 text-[15px] leading-7">
          <p>{aboutIntro}</p>
          <p>{aboutLead}</p>
          <ul className="space-y-4">
            {aboutItems.map((item) => (
              <li key={item.text.slice(0, 40)}>— <LinkedBio item={item} /></li>
            ))}
          </ul>
          <p className="text-muted">({aboutCloser})</p>
        </div>
      </div>
    </div>
  );
}
