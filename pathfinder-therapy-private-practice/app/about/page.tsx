import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SplitSection } from "@/components/ContentSections";
import { createMetadata } from "@/lib/metadata";
import { pageSummaries } from "@/data/site";

const summary = pageSummaries["/about"];

export const metadata = createMetadata({
  title: summary.title,
  description: summary.description,
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A private therapy practice for people ready to stop only coping."
        description={summary.description}
        secondaryCta={{ href: "/fees", label: "View fees" }}
      />
      <section className="bg-linen py-16 sm:py-24">
        <Container className="space-y-16">
          <SplitSection
            title="For capable people carrying more than they show."
            points={[
              "Private therapy for adults and couples in Lisbon and online.",
              "A strong fit for English-speaking expats, professionals and remote workers.",
              "Support for trauma, anxiety, identity, relationship patterns and major transitions."
            ]}
          >
            <p>
              Pathfinder Therapy is built for clients who may look composed from the outside while
              living with a quieter strain inside. You may be high functioning, responsible and used
              to being relied on, yet aware that old ways of managing no longer feel sustainable.
            </p>
            <p>
              The work is confidential, relational and carefully paced. It is not about forcing a
              breakthrough. It is about developing enough safety, clarity and trust to understand what
              has been shaping your life and what might become possible next.
            </p>
          </SplitSection>
          <SplitSection
            title="A grounded, trauma-informed approach."
            reverse
            points={[
              "Respect for the coping strategies that once protected you.",
              "Attention to body, emotion, story, context and relationship.",
              "A collaborative pace that does not rush disclosure or insight."
            ]}
          >
            <p>
              Trauma-informed therapy recognises that symptoms often make sense in context. Anxiety,
              avoidance, overwork, shutdown, conflict or the need to stay in control can be signs of
              nervous system wisdom rather than personal failure.
            </p>
            <p>
              Therapy gives you a place to understand those patterns with compassion and precision, so
              you can develop more choice in the present.
            </p>
          </SplitSection>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
