import Image from "next/image";
import { Brain, Compass, Heart, ShieldCheck, Sparkles, Waypoints } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { createMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export const metadata = createMetadata({
  title: "Private Therapy in Lisbon and Online",
  description: site.description,
  path: "/"
});

const reasons = [
  {
    title: "Anxiety and overthinking",
    description: "When your mind keeps scanning, rehearsing or trying to stay ahead of everything.",
    icon: Brain
  },
  {
    title: "Relationships",
    description: "Patterns of conflict, distance, people-pleasing, mistrust or difficulty feeling close.",
    icon: Heart
  },
  {
    title: "Trauma and difficult experiences",
    description: "Experiences that still shape your body, emotions, choices or sense of safety.",
    icon: ShieldCheck
  },
  {
    title: "Life transitions",
    description: "Change, relocation, loss, career shifts or the unsettling space between chapters.",
    icon: Waypoints
  },
  {
    title: "Identity and self-understanding",
    description: "Questions about who you are, what you need and how you want to live.",
    icon: Sparkles
  },
  {
    title: "Feeling stuck or disconnected",
    description: "A sense that life is functioning on the surface, but something important is missing.",
    icon: Compass
  }
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
              Helping you understand yourself, your relationships, and the path ahead.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-linen/82 sm:text-xl">
              Private therapy in Lisbon and online for English-speaking clients seeking greater clarity,
              connection, and meaningful change.
            </p>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-linen/72">
              Life can sometimes leave us feeling stuck, disconnected, overwhelmed, or uncertain about
              what comes next. Therapy offers a space to explore your experiences, understand the
              patterns that shape your life, and move towards a more authentic and fulfilling way of
              being.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="secondary" className="bg-linen">
                {site.bookingLabel}
              </ButtonLink>
              <ButtonLink
                href="#why-people-come"
                variant="ghost"
                className="text-linen decoration-sand/60 hover:decoration-linen"
              >
                Learn more about therapy
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section id="why-people-come" className="bg-linen py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-clay">
              Therapy
            </p>
            <h2 className="serif text-balance text-3xl leading-tight text-ink sm:text-5xl">
              Why people come to therapy
            </h2>
            <p className="mt-5 text-pretty text-base leading-8 text-ink/68">
              People often begin therapy when the ways they have learned to cope no longer feel
              spacious enough for the life they want to live.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="min-h-56 rounded-lg border border-ink/10 bg-white/55 p-6 shadow-sm"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-sand text-slateleaf">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-8 text-xl font-semibold text-ink">{reason.title}</h3>
                  <p className="mt-4 text-pretty text-sm leading-7 text-ink/65">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-sand py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Understanding</p>
            <h2 className="serif mt-4 text-balance text-3xl leading-tight text-ink sm:text-5xl">
              Therapy is not about fixing you.
            </h2>
          </div>
          <div className="text-pretty text-lg leading-9 text-ink/72">
            <p>
              Many people come to therapy believing something is wrong with them. More often, therapy
              is about understanding how your experiences have shaped you, recognising patterns that
              no longer serve you, and discovering new possibilities for living, relating, and growing.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-linen py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Meet Brent</p>
            <h2 className="serif mt-4 text-balance text-3xl leading-tight text-ink sm:text-5xl">
              A therapist shaped by life, service, and the search for meaning.
            </h2>
          </div>
          <div className="space-y-5 text-pretty text-base leading-8 text-ink/70">
            <p>
              Brent is a psychotherapist in private practice living and practising in Portugal. His
              work is informed not only by clinical experience, but by a life that has included former
              military service and the personal work of navigating significant challenges, change, and
              questions of identity.
            </p>
            <p>
              He is especially interested in trauma, relationships, identity, and personal growth:
              the places where our past experiences meet the way we live, love, protect ourselves, and
              imagine the future. His approach is warm, grounded, and collaborative, offering space to
              pause, reflect, and find a way forward that feels more honest and alive.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="A space to pause, reflect, and find your bearings."
        text="Whether you are facing a specific difficulty or simply feel that something in life needs to change, therapy can provide the opportunity to understand yourself more fully and move forward with greater clarity."
      />
    </>
  );
}
