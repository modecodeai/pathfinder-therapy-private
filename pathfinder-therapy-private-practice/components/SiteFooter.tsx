import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { footerNavigation, navigation, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-linen">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:py-16">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Pathfinder Therapy home">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-linen text-ink">
              <span className="h-2 w-2 rounded-full bg-clay" />
            </span>
            <span>
              <span className="block text-base font-semibold tracking-[0.08em]">PATHFINDER</span>
              <span className="block text-sm text-linen/70">Therapy</span>
            </span>
          </Link>
          <p className="mt-6 max-w-md text-sm leading-7 text-linen/72">
            Private therapy in Lisbon and online for English-speaking clients navigating trauma,
            anxiety, identity, relationships and major life transitions.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-linen"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            {site.email}
          </a>
        </div>

        <nav aria-label="Main pages" className="grid gap-3 text-sm">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-linen/50">Practice</h2>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-linen/74 transition hover:text-linen">
              {item.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Specialist pages" className="grid gap-3 text-sm">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-linen/50">Explore</h2>
          {footerNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-linen/74 transition hover:text-linen">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-linen/10 py-6 text-xs text-linen/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Pathfinder Therapy. All rights reserved.</p>
        <p>Private therapy in Lisbon and online.</p>
      </Container>
    </footer>
  );
}
