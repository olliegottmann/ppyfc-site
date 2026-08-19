# ppyfc.com — Prampram Youth FC website

The public website for Prampram Youth FC. This repo replaces the original
Lovable-generated site, whose source was not accessible. The design was rebuilt
from the deployed site so the club owns the code outright.

Not to be confused with `prampram-platform`, the private staff-only player
management system. This repo is the public marketing site and holds no player
data.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS
- React Router (client-side routing)
- No backend, no database, no third-party services beyond Google Analytics

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Where things live

| What | Where |
| --- | --- |
| All page text, bios, club history | `src/data/content.ts` |
| Photo gallery list | `src/data/photos.ts` (generated) |
| Images | `public/` |
| Colours and fonts | `tailwind.config.js` |
| Page layouts | `src/pages/` |
| Header, footer, forms | `src/components/` |

### Editing text

Almost all copy lives in `src/data/content.ts`. Change it there rather than in
the page components.

### Adding photos

Drop images into `public/photos/`, then run:

```bash
npm run photos
```

That regenerates `src/data/photos.ts`. Commit both the images and the
regenerated file.

## Club colours

Taken from the original site (the Ghana flag palette):

| Token | Hex | Use |
| --- | --- | --- |
| `ghanafc-primary` | `#b91c1c` | red — header bar, footer, buttons |
| `ghanafc-secondary` | `#166534` | green — role titles, accents |
| `ghanafc-accent` | `#eab308` | gold — headings on dark backgrounds |
| `ghanafc-dark` | `#1f2937` | body text |
| `ghanafc-light` | `#f3f4f6` | hover backgrounds |

## Known gaps

These were inherited from the original site and still need decisions:

- **Sponsorship is arranged by email.** No payment processor is connected, so
  `src/data/payment.ts` is disabled and choosing a player opens an email to the
  club. Donations were removed from the site entirely in favour of the
  per-player sponsorship model.
- **Newsletter signups are not stored.** The form opens an email to the club.
  Connecting Mailchimp, Buttondown or similar would fix this properly.
- **No privacy, terms or cookie policy pages.** The cookie banner refers to a
  Cookie Policy that does not exist.
- **Gallery images are unoptimised** — 14 MB of full-size WhatsApp exports.
  They lazy-load now, but generating thumbnails would help a lot on mobile
  data, which matters for visitors in Ghana.
- **Next season countdown date** is set in `src/pages/MyPrampram.tsx`
  (`NEXT_SEASON_START`) and needs the real date.

## Deployment

Deployed on Vercel, which builds from `main` automatically. `vercel.json`
rewrites all routes to `index.html` so client-side routing works on refresh.
