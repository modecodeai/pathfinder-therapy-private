import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { site } from "@/data/site";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  secondaryCta?: {
    href: string;
    label: string;
  };
};

export function PageHero({ eyebrow, title, description, secondaryCta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-linen">
      <div aria-hidden="true" className="contour-lines absolute inset-x-0 top-0 h-full opacity-60" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-clay">{eyebrow}</p>
          ) : null}
          <h1 className="serif text-balance text-4xl leading-[1.04] text-ink sm:text-5xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-ink/70 sm:text-xl">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">{site.bookingLabel}</ButtonLink>
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
