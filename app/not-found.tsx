import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">That URL isn’t on the new site.</p>
      <Link href="/" className="mt-8 inline-block underline decoration-accent/50 hover:text-accent">
        Back home
      </Link>
    </div>
  );
}
