import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WorkDirectory } from "@/components/WorkDirectory";
import { worksByCategory } from "@/content/works";

export const metadata: Metadata = {
  title: "Compositions",
  description: "Original compositions and collaborations by Karl Ronneburg.",
};

export default function MusicPage() {
  const items = worksByCategory("composition");

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
      <PageHeader
        title="Music"
        subtitle="Original compositions and collaborations"
        className="mb-6"
      />
      <WorkDirectory works={items} compact noun="compositions" />
    </div>
  );
}
