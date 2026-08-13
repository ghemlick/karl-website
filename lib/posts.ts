import fs from "node:fs";
import path from "node:path";

export type PostCategory = "Poems" | "Streams" | "Thoughts";

export type Post = {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  category: PostCategory;
  body: string;
};

const postsDir = path.join(process.cwd(), "content/posts");

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw.trim() };

  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    data[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }

  return { data, body: match[2].trim() };
}

export function getPosts(): Post[] {
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data, body } = parseFrontmatter(raw);
    return {
      slug: data.slug ?? file.replace(/\.md$/, ""),
      title: data.title ?? file,
      date: data.date ?? "",
      updated: data.updated,
      category: (data.category as PostCategory) ?? "Thoughts",
      body,
    };
  });

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

export const postCategories: PostCategory[] = ["Poems", "Streams", "Thoughts"];
