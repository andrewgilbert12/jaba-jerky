# Jaba Jerky

Website for Jaba Jerky, plant-based jerky made from tofu. Built with [Astro](https://astro.build).

## Getting started

Requires Node.js 22+.

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # serve the production build locally
```

## Project structure

```
public/             static assets served as-is (favicon, images)
src/
  components/       shared UI (Header, Footer)
  data/             site config, FAQ entries, placeholder product catalog
  layouts/          BaseLayout wraps every page
  pages/            one file per route
    index.astro     /
    about.astro     /about
    faq.astro       /faq
    shop.astro      /shop (e-commerce placeholder)
    404.astro
  styles/global.css design tokens and shared styles
```

- **FAQ entries** live in `src/data/faq.ts`, so add or edit questions there.
- **Nav links, site name, and contact email** live in `src/data/site.ts`.

## TODO

- [ ] Replace placeholder copy (About story, team bios, FAQ nutrition answer).
- [ ] Logo, brand fonts, and product photography.
- [ ] Set `site` in `astro.config.mjs` once the domain is known.
- [ ] **E-commerce**: choose a provider (Shopify, Stripe, Snipcart, ...), then add
      product detail pages, cart, checkout, and shipping/returns policy pages.
      See the notes at the top of `src/pages/shop.astro`.
- [ ] Hosting/deploy (Netlify, Vercel, Cloudflare Pages, etc.).
