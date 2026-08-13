import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6">
        <p className="text-xs tracking-[0.16em] uppercase text-muted">
          Karl Ronneburg · New York
        </p>
        <SocialLinks includeTwitter />
      </div>
    </footer>
  );
}
