import type { Metadata } from "next";
import Image from "next/image";
import { MailingListForm } from "@/components/MailingListForm";
import { PageHeader } from "@/components/PageHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Karl Ronneburg about music, lessons, and collaborations.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader title="Contact" />
      <div className="space-y-6 text-[15px] leading-7">
        <p>
          Please get in touch if you want to talk music, ideas, thoughts, dreams, or
          anything else! I also teach private composition and percussion lessons in-person
          (NYC) and online, and would love to hear from you. If you&apos;d like to stay
          up-to-date with my various endeavors, join my mailing list below!
        </p>
        <p>
          Thanks so much,
          <br />
          Karl
        </p>
        <p>
          <a href={`mailto:${site.email}`} className="text-lg underline decoration-accent/50 hover:text-accent">
            {site.email}
          </a>
        </p>
      </div>

      <section className="mt-12 border-t border-line pt-10">
        <h2 className="mb-4 text-sm tracking-[0.16em] uppercase">Mailing list</h2>
        <p className="mb-5 text-sm text-muted">
          Join my mailing list for concerts, updates, and more!
        </p>
        <MailingListForm />
      </section>

      <div className="mt-12">
        <SocialLinks includeTwitter />
      </div>

      <Image
        src="/images/performance-1.jpg"
        alt="Performance still"
        width={1280}
        height={720}
        className="mt-12 w-full"
      />
    </div>
  );
}
