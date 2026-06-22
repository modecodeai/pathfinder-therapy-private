import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { ServiceGrid } from "@/components/ServiceGrid";
import { createMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export const metadata = createMetadata({
  title: "Private Therapy in Lisbon and Online",
  description: site.description,
  path: "/"
});

const markers = [
  "English-speaking therapy in Lisbon and online",
  "For expats, professionals, entrepreneurs and remote workers",
  "Trauma-informed support for individuals and couples"
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-linen">
        <Image
          src="/images/pathfinder-therapy-lisbon-path.png"
          alt="A quiet natural path in warm morning light"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10" />
        <div aria-hidden="true" className="contour-lines absolute inset-x-0 bottom-0 h-44 opacity-30" />
        <Container className="relative grid min-h-[calc(100svh-5rem)] items-center py-20 lg:min-h-[740px]">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-sand/78">
              Pathfinder Therapy
            </p>
            <h1 className="serif text-balance text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Therapy for people who have spent their lives coping.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-linen/82 sm:text-xl">
              Private therapy in Lisbon and online for English-speaking clients navigating trauma,
              anxiety, identity, relationships and major life transitions.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="secondary" className="bg-linen">
                {site.bookingLabel}
              </ButtonLink>
              <ButtonLink href="/about" variant="ghost" className="text-linen decoration-sand/60 hover:decoration-linen">
                Learn about the practice
              </ButtonLink>
            </div>
            <ul className="mt-10 grid gap-3 text-sm text-linen/78 sm:grid-cols-3">
              {markers.map((marker) => (
                <li key={marker} className="flex gap-2">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none text-sand" />
                  <span>{marker}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-linen py-16 sm:py-24">
        <Container>
          <SectionIntro
            eyebrow="A different kind of steady"
            title="Private therapy for the life you are actually living."
          >
            <p>
              Pathfinder Therapy offers a calm, thoughtful space for people whose lives are outwardly
              capable but internally costly. Therapy can help make sense of what you have carried,
              what you have adapted around and what now needs room to change.
            </p>
          </SectionIntro>
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </Container>
      </section>

      <section className="bg-sand py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Approach</p>
            <h2 className="serif mt-4 text-balance text-3xl leading-tight text-ink sm:text-5xl">
              Warm enough to feel human. Clear enough to be useful.
            </h2>
          </div>
          <div className="space-y-5 text-pretty text-base leading-8 text-ink/70">
            <p>
              The work is collaborative, paced and grounded in respect for the strategies that helped
              you survive. There is space for complexity here: ambition and exhaustion, love and
              conflict, freedom and loneliness, competence and the private cost of keeping going.
            </p>
            <p>
              Sessions can support clients working with trauma, anxiety, relationship patterns,
              identity, transition, burnout and the emotional weight of building a life across cultures.
            </p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
