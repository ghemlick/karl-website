import Image from "next/image";
import Link from "next/link";
import { homeLinks, site } from "@/content/site";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <section className="relative overflow-hidden bg-ink/5">
        <Image
          src="/images/home-portrait.jpg"
          alt={`${site.fullName} in the studio`}
          width={1080}
          height={1800}
          priority
          className="aspect-[16/10] w-full object-cover object-[50%_18%] sm:aspect-[16/9]"
        />
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8">
          <h1 className="w-fit bg-paper px-3 py-1 text-5xl font-semibold tracking-tight sm:text-7xl">
            {site.name.toUpperCase()}
          </h1>
          <ul className="hidden max-w-xs flex-col gap-2 sm:flex">
            {homeLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block bg-paper px-2 py-1 text-sm tracking-[0.14em] uppercase transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
        {site.fullName}, {site.tagline.toLowerCase()} based in {site.location}.
      </p>
    </div>
  );
}
