"use client";

import { useState } from "react";
import { site } from "@/content/site";

export function MailingListForm() {
  const [status, setStatus] = useState<"idle" | "done">("idle");
  const username = site.buttondownUsername;

  if (username) {
    return (
      <form
        action={`https://buttondown.com/api/emails/embed-subscribe/${username}`}
        method="post"
        className="flex max-w-md flex-col gap-3 sm:flex-row"
      >
        <label className="sr-only" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="Email address"
          className="flex-1 border border-line px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <button
          type="submit"
          className="bg-ink px-4 py-2 text-xs font-medium tracking-[0.14em] text-paper uppercase transition-colors hover:bg-accent"
        >
          Subscribe
        </button>
      </form>
    );
  }

  if (status === "done") {
    return (
      <p className="text-sm text-muted">
        Thanks — email{" "}
        <a href={`mailto:${site.email}?subject=Mailing%20list`} className="underline">
          {site.email}
        </a>{" "}
        with the subject “mailing list” and Karl will add you.
      </p>
    );
  }

  return (
    <form
      className="flex max-w-md flex-col gap-3 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const email = new FormData(form).get("email");
        const address = typeof email === "string" ? email : "";
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
          "Mailing list",
        )}&body=${encodeURIComponent(`Please add ${address} to the mailing list.`)}`;
        setStatus("done");
      }}
    >
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        placeholder="Email address"
        className="flex-1 border border-line px-3 py-2 text-sm outline-none focus:border-accent"
      />
      <button
        type="submit"
        className="bg-ink px-4 py-2 text-xs font-medium tracking-[0.14em] text-paper uppercase transition-colors hover:bg-accent"
      >
        Subscribe
      </button>
    </form>
  );
}
