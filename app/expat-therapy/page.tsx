import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SplitSection } from "@/components/ContentSections";
import { createMetadata } from "@/lib/metadata";
import { pageSummaries } from "@/data/site";

const summary = pageSummaries["/expat-therapy"];

export const metadata = createMetadata({
  title: summary.title,
  description: summary.description,
  path: "/expat-therapy"
});

export default function ExpatTherapyPage() {
  return (
    <>
      <PageHero
        eyebrow="Expat therapy"
        title="Therapy for the parts of expat life that rarely make the postcard."
        description={summary.description}
        secondaryCta={{ href: "/therapy-in-lisbon", label: "Therapy in Lisbon" }}
      />
      <section className="bg-linen py-16 sm:py-24">
        <Container>
          <SplitSection
            title="Belonging, distance, freedom and loss can all coexist."
            points={[
              "For English-speaking expats building a life in Portugal.",
              "Support with identity, loneliness, culture shock and relationship strain.",
              "A useful space for remote workers and entrepreneurs navigating pressure alone."
            ]}
          >
            <p>
              Moving country can be liberating and destabilising at the same time. You may have chosen
              the move and still feel grief, disorientation or pressure to justify the life you are
              building.
            </p>
            <p>
              Therapy can help you make sense of what the move has stirred up, what feels unresolved
              from before and how to create a more grounded relationship with where you are now.
            </p>
          </SplitSection>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
