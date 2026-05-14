# Nick's Personal Website

This is a static personal website built with [Astro](https://astro.build/) and deployed with GitHub Pages.

## Local Development

```sh
npm install
npm run dev
```

Astro will print the local development URL.

## Build

```sh
npm run build
npm run preview
```

The production site is generated into `dist/`. That directory is build output and should not be committed.

## Updating Content

Most site content is editable without touching page layout code:

- Profile and homepage summary: `src/data/profile.js`
- Experience entries: `src/content/experience/*.md`
- Research entries: `src/content/research/*.md`
- Interests entries: `src/content/interests/*.md`
- Static files: `public/files/`
- Images: `public/images/`

Each Markdown file uses frontmatter for ordering and display metadata, followed by regular Markdown content.

## Deployment

Deployment is handled by `.github/workflows/pages.yml`.

On every push to `main`, GitHub Actions installs dependencies, runs `npm run build`, uploads `dist/`, and deploys it to GitHub Pages. In the repository settings, configure GitHub Pages to use **GitHub Actions** as the publishing source.
