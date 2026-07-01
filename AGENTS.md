# AGENTS.md

## Cursor Cloud specific instructions

Pathfinder Therapy private-practice marketing website: Next.js 15 (App Router) + TypeScript + Tailwind, static export for Cloudflare Pages.

Important structural caveat:

- The runnable app lives in the nested subfolder `pathfinder-therapy-private-practice/`, **not** the repository root. The root-level `app/` and `components/` are a stale/incomplete copy: their components import `@/data/site`, but the root only has `site.ts` (no `data/`), so `next dev` and `tsc` fail at the repo root with `Cannot find module '@/data/site'`.
- Always work from the nested folder: `cd pathfinder-therapy-private-practice`.

Standard commands (run from the nested folder):

- Dev server: `pnpm dev` (port 3000 by default).
- Typecheck: `pnpm run typecheck` (`tsc --noEmit`) — this is the reliable check.
- Build: `pnpm build`.

Non-obvious caveats:

- `pnpm run lint` runs `next lint`, which is interactive/unconfigured here and will hang waiting for setup input. Prefer `pnpm run typecheck` for automated checks.
