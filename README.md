# Benkyou

A fast, minimal, and flexible blog starter built with Astro and Tailwind CSS. It ships with search, dark mode, RSS, extended Markdown, and smooth page transitions.

## Features

- Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
- Smooth page animations powered by the View Transitions API (Astro Client Router)
- Full‑text search with [Pagefind](https://pagefind.app)
- Light/Dark mode toggle (saved in localStorage + respects system theme)
- Customizable theme color (live accent hue picker, persisted per user)
- Markdown Extended
  - [Expressive Code](https://expressive-code.com) for beautiful code blocks
  - Admonitions via GitHub alerts and remark directives (see usage below)
- RSS feed at `/rss.xml` and sitemap
- Content Collections with typed frontmatter can be configured in `src/content.config.ts`

## Project structure

```
astro.config.mjs
package.json
src/
	components/
	content/
		blog/
	layouts/
	pages/
	styles/
public/
```

Posts live under `src/content/blog` and are validated by a schema in `src/content.config.ts`.

## Getting started

Prerequisites: Node 18+ and pnpm.

- Install deps: `pnpm install`
- Start dev server: `pnpm dev` (opens at http://localhost:4321)
- Build for production: `pnpm build`
- Preview production build: `pnpm preview`

## Theme & UI

- Accent color: interactive hue picker stored in `localStorage` (`--accent-hue`).
- Dark/Light: toggled from the UI and synchronized across navigations.

## Search

Pagefind indexes built pages automatically during `pnpm build`. Only relevant content is indexed (blog pages) and common UI regions are excluded by selector.

## RSS

RSS feed is generated at `/rss.xml` via `@astrojs/rss`.

## Markdown extended

- Expressive Code
  Beautiful, themeable code blocks with copy buttons and optional line numbers.

- Admonitions (alerts)

## Configuration

- Site URL: set `PUBLIC_SITE_URL` env (fallbacks to `https://example.com`).
- Content schema: edit `src/content.config.ts` to add fields.
- Search scope: adjust Pagefind options in `astro.config.mjs`.

### Environment variables (.env)

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

### `src/consts.ts`

Shared site constants used across components:

## Commands

| Command         | Action                                     |
| --------------- | ------------------------------------------ |
| `pnpm dev`      | Start local dev server                     |
| `pnpm build`    | Build production site to `dist/`           |
| `pnpm preview`  | Preview the production build               |
| `pnpm lint`     | Lint source files                          |
| `pnpm format`   | Format the codebase with Prettier          |
| `pnpm check`    | Runs diagnostics type checking             |
| `pnpm new-blog` | Interactive script to scaffold a blog post |

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) to learn how to propose changes, coding conventions (Conventional Commits), and the checklist before opening a PR.

## License

MIT — see [LICENSE](./LICENSE).
