import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { site } from "@/data/site";

type CTASectionProps = {
  title?: string;
  text?: string;
};

export function CTASection({
  title = "A first conversation can help you find the right next step.",
  text = "Book a private consultation to talk through what is bringing you here, what you need from therapy and whether Pathfinder Therapy feels like a good fit."
}: CTASectionProps) {
  return (
    <section className="bg-slateleaf py-16 text-linen sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand/70">Begin</p>
          <h2 className="serif mt-4 text-balance text-3xl leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-5 text-pretty text-base leading-8 text-linen/74">{text}</p>
        </div>
        <ButtonLink href="/contact" variant="secondary" className="bg-linen">
          {site.bookingLabel}
        </ButtonLink>
      </Container>
    </section>
  );
}
