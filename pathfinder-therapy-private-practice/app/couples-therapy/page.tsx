import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SplitSection } from "@/components/ContentSections";
import { createMetadata } from "@/lib/metadata";
import { pageSummaries } from "@/data/site";

const summary = pageSummaries["/couples-therapy"];

export const metadata = createMetadata({
  title: summary.title,
  description: summary.description,
  path: "/couples-therapy"
});

export default function CouplesTherapyPage() {
  return (
    <>
      <PageHero
        eyebrow="Couples"
        title="Couples therapy for patterns you cannot resolve by trying harder."
        description={summary.description}
        secondaryCta={{ href: "/fees", label: "View fees" }}
      />
      <section className="bg-linen py-16 sm:py-24">
        <Container>
          <SplitSection
            title="A structured space for communication, repair and reconnection."
            points={[
              "For couples in Lisbon and online.",
              "Support with conflict cycles, distance, trust, intimacy and transition.",
              "Useful when both partners want a calmer way to understand what keeps happening."
            ]}
          >
            <p>
              Couples therapy is not about deciding who is right. It is about slowing down the pattern
              between you enough to understand what each person protects, fears, needs and repeats.
            </p>
            <p>
              Sessions can help couples work with conflict, disconnection, betrayal, life transitions,
              relocation stress, parenting pressure and the quiet erosion that happens when important
              things are left unsaid for too long.
            </p>
          </SplitSection>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
