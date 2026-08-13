# Karl Ronneburg

Personal site for composer, percussionist, dramaturg, and performance artist Karl Ronneburg. This is a Next.js rebuild of [karl-allmusic.com](https://www.karl-allmusic.com), meant to replace the current Wix site.

## Local development

Node 22 is required (see `.nvmrc`).

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

All copy lives in the repo — no CMS.

| What | Where |
| --- | --- |
| Nav, email, socials | `content/site.ts` |
| About quotes and bio | `content/about.ts` |
| Compositions, percussion, performance works | `content/works.ts` |
| Microrhythms page | `content/microrhythms.ts` |
| Poems / text | `content/posts/*.md` |
| Photos | `public/images/` |
| Public scores | `public/scores/` |

After editing, commit and push. Vercel will rebuild.

Set `email` in `content/site.ts` to Karl’s public address before launch.

## Mailing list

The contact page includes a signup form.

- To use [Buttondown](https://buttondown.com), set `NEXT_PUBLIC_BUTTONDOWN_USERNAME` in Vercel (the username from your Buttondown URL).
- Until that is set, the form opens a mailto to the address in `content/site.ts`.
- Export the existing Wix subscriber list and import it into Buttondown (or Mailchimp) before cutover.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new). Framework preset: Next.js. Build command: `npm run build`.
3. Confirm a preview deploy looks right.
4. Add the production domain `www.karl-allmusic.com` (and apex `karl-allmusic.com`) in Vercel → Project → Settings → Domains.

## DNS cutover off Wix

Do this only after the Vercel production deploy is good.

1. In Vercel, add `karl-allmusic.com` and `www.karl-allmusic.com`. Vercel will show the records to create.
2. At the domain registrar (or in Wix Domains if the domain is still parked there):
   - **www:** CNAME to `cname.vercel-dns.com`
   - **apex (@):** A record to `76.76.21.21` (or the A/ALIAS values Vercel shows)
3. Remove Wix nameservers / pointing once those records are in place.
4. Wait for DNS (often minutes, sometimes up to 48 hours).
5. After the new site is live on the domain, cancel the Wix site plan.

Keep the Wix site unpublished-but-available until you have confirmed:

- Home, About, Compositions, Percussion, Performance Art, Text, and Contact
- Old URLs such as `/music`, `/blog`, `/post/...`, and `/multimedia-performance`
- Images, videos, and PDFs
- Email and mailing-list signup
