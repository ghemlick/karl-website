import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.body.slice(0, 160) };
}

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-xs tracking-[0.12em] text-muted uppercase">
        <Link href="/blog" className="hover:text-accent">
          Text
        </Link>
        {" / "}
        {post.category}
      </p>
      <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{post.title}</h1>
      <p className="mt-4 text-sm text-muted">
        {formatDate(post.date)}
        {post.updated ? ` · Updated ${formatDate(post.updated)}` : ""}
      </p>
      <div className="mt-10 whitespace-pre-wrap text-[17px] leading-8">{post.body}</div>
    </article>
  );
}
