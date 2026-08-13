export const site = {
  name: "Karl",
  fullName: "Karl Ronneburg",
  tagline: "Composer/Performer",
  location: "New York",
  description:
    "Karl Ronneburg is a composer, percussionist, dramaturg, and performance artist based in New York City.",
  url: "https://www.karl-allmusic.com",
  email: "karl.allmusic@gmail.com",
  mailingListProvider: "buttondown" as const,
  /** Set NEXT_PUBLIC_BUTTONDOWN_USERNAME to enable the live signup form. */
  buttondownUsername: process.env.NEXT_PUBLIC_BUTTONDOWN_USERNAME ?? "",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/music", label: "Compositions" },
  { href: "/percussion", label: "Percussion" },
  { href: "/multimedia-performance", label: "Performance Art" },
  { href: "/blog", label: "Text" },
  { href: "/contact", label: "Contact" },
] as const;

export const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/karl.allmusic/",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCE6QTljMUydu43sj9Q82nFQ",
  },
  {
    name: "SoundCloud",
    href: "https://soundcloud.com/karl-allmusic",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/karl.ronneburg",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/karl_allmusic",
  },
] as const;

export const homeLinks = [
  { href: "/about", label: "About" },
  { href: "/music", label: "Compositions" },
  { href: "/percussion", label: "Percussion" },
  { href: "/multimedia-performance", label: "Performance Art" },
  { href: "/blog", label: "Text" },
] as const;
