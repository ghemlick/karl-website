import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { getPosts, postCategories } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Text",
  description: "Poems, streams, and thoughts by Karl Ronneburg.",
};

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const selected = postCategories.find(
    (item) => item.toLowerCase() === category?.toLowerCase(),
  );
  const posts = getPosts().filter((post) =>
    selected ? post.category === selected : true,
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader title="Text" />
      <nav className="mb-10 flex flex-wrap gap-5 text-xs tracking-[0.16em] uppercase" aria-label="Categories">
        <Link href="/blog" className={!selected ? "text-accent" : "text-muted hover:text-accent"}>
          All Posts
        </Link>
        {postCategories.map((item) => (
          <Link
            key={item}
            href={`/blog?category=${item}`}
            className={selected === item ? "text-accent" : "text-muted hover:text-accent"}
          >
            {item}
          </Link>
        ))}
      </nav>
      <div className="space-y-14">
        {posts.map((post) => (
          <article key={post.slug} className="border border-line p-6 sm:p-8">
            <p className="text-xs tracking-[0.12em] text-muted uppercase">
              {formatDate(post.date)}
              {post.updated ? ` · Updated ${formatDate(post.updated)}` : ""}
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                {post.title}
              </Link>
            </h2>
            <p className="mt-5 whitespace-pre-wrap text-[15px] leading-7 text-ink/90">
              {post.body.split("\n\n").slice(0, 2).join("\n\n")}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm underline decoration-accent/50 hover:text-accent"
            >
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
