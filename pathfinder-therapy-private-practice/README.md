# Pathfinder Therapy

Premium private-practice website for Pathfinder Therapy at `pathfindertherapy.com`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export for Cloudflare Pages

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The project uses `output: "export"` in `next.config.ts`, so the generated static site is written to `out/` for Cloudflare Pages.
