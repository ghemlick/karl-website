import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WorkEntry } from "@/components/WorkEntry";
import { worksByCategory } from "@/content/works";

export const metadata: Metadata = {
  title: "Compositions",
  description: "Original compositions and collaborations by Karl Ronneburg.",
};

export default function MusicPage() {
  const items = worksByCategory("composition");

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
      <PageHeader
        title="Music"
        subtitle="Original compositions and collaborations"
        className="mb-6"
      />
      <div>
        {items.map((work) => (
          <WorkEntry key={work.slug} work={work} compact />
        ))}
      </div>
    </div>
  );
}
