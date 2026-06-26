"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, site } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-linen/90 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3" aria-label="Pathfinder Therapy home">
          <span className="relative grid h-11 w-11 place-items-center rounded-full bg-ink text-linen">
            <span className="absolute h-5 w-7 rounded-[50%] border border-linen/50" />
            <span className="h-2 w-2 rounded-full bg-clay" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold tracking-[0.08em] text-ink">
              PATHFINDER
            </span>
            <span className="block text-sm text-ink/65">Therapy</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active ? "text-ink" : "text-ink/64 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/contact">{site.bookingLabel}</ButtonLink>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white/70 text-ink lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-ink/10 bg-linen lg:hidden">
          <Container className="grid gap-3 py-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-2 py-3 text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/contact" className="mt-2" onClick={() => setOpen(false)}>
              {site.bookingLabel}
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
