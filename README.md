# So I Quit — Landing Page

Marketing landing page for [So I Quit](https://github.com/emachado88/so-i-quit),
the offline-first habit tracker. Built with **Nuxt 4** +
**Tailwind CSS v4**, deployed as a static site to **GitHub Pages**.

- Live: <https://emachado88.github.io/soiquit/>
- App repo: <https://github.com/emachado88/so-i-quit>

## Structure

- `app/components/` — one component per section (Hero, HowItWorks,
  SignatureFeatures, HabitsMarquee, FAQ, …); `mock/` holds the CSS phone
  mockups of the real app UI (kept static on purpose — they mirror the app).
- `app/assets/css/main.css` — brand tokens (`@theme`), **kept in sync with the
  app repo's** `app/assets/css/main.css`.
- `public/icon.svg` — app icon copied from the app repo's `assets/`.

## Local dev

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static build → dist/
npm run preview    # serve dist/
```

The GitHub Pages base path is `/soiquit/`. With a custom domain,
build with `NUXT_APP_BASE_URL=/`:

```bash
NUXT_APP_BASE_URL=/ npm run generate
```

## Deploy

`.github/workflows/pages.yml` builds and deploys on every push to `master`
and on `workflow_dispatch`. Pages source must be **GitHub Actions**
(Settings → Pages).

## Notes

- Store badge links (`StoreBadges.vue`) are placeholders (`#`) until the
  App Store / Google Play listings are live — swap in the real URLs there and
  in the header CTA.
- Single page, EN copy for now. If i18n comes later, add `@nuxtjs/i18n`
  following the app repo's locale setup.
