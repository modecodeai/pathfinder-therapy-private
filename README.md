# Pathfinder Therapy

Premium private-practice website for Pathfinder Therapy at `pathfindertherapy.com`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export for Cloudflare Pages

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The project uses `output: "export"` in `next.config.ts`, so the generated static site is written to `out/` for Cloudflare Pages.
