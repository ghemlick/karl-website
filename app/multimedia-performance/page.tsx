import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WorkEntry } from "@/components/WorkEntry";
import { worksByCategory } from "@/content/works";

export const metadata: Metadata = {
  title: "Performance Art",
  description: "Performance art and multimedia work by Karl Ronneburg.",
};

export default function PerformancePage() {
  const items = worksByCategory("performance");

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader title="Performance Art and Multimedia" />
      <div>
        {items.map((work) => (
          <WorkEntry key={work.slug} work={work} />
        ))}
      </div>
    </div>
  );
}
