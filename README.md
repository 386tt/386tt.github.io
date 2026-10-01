# Shirone Blog

This site runs on [Shirone](https://github.com/LyraVoid/Shirone) — an
anime-inspired, Material 3 Expressive blog theme for Astro, installed as the
`shirones` npm package.

## Commands

```bash
pnpm install   # install dependencies (run once after init)
pnpm dev       # start the dev server at http://localhost:4321
pnpm build     # static build → dist/
pnpm preview   # preview the production build locally
```

## Project layout

| Path | What it is |
| --- | --- |
| `shirones/config/` | site configuration — URL, title, theme colour, sidebar, fonts (TypeScript, fully typed) |
| `shirones/config/data/` | friends, projects, skills, timeline, … |
| `shirones/content/` | your posts, moments and other collections |
| `src/components/` | drop a file here to override a theme component (mirrors the theme's `src/components/` tree) |
| `src/layouts/` | …same for layouts |
| `public/` | static assets (favicons, banners, images) |

## Updating the theme

```bash
npx shirones init            # report drift only
npx shirones init --update   # add missing files without replacement
npx shirones init --force    # replace the template after backing up the old copy
```

`--force` moves the previous `shirones/`, `public/` and project scaffold files
to `.shirones-backup/` before copying the installed template. See the package
documentation for the full configuration reference and component-override rules.
