import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WorkEntry } from "@/components/WorkEntry";
import { worksByCategory } from "@/content/works";

export const metadata: Metadata = {
  title: "Percussion",
  description: "Notable performances, covers, and world premieres.",
};

export default function PercussionPage() {
  const items = worksByCategory("percussion");

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader
        title="Percussion"
        subtitle="Notable performances, covers, and world premieres"
      />
      <div>
        {items.map((work) => (
          <WorkEntry key={work.slug} work={work} />
        ))}
      </div>
    </div>
  );
}
