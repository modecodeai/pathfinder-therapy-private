import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SplitSection } from "@/components/ContentSections";
import { createMetadata } from "@/lib/metadata";
import { pageSummaries } from "@/data/site";

const summary = pageSummaries["/trauma-therapy"];

export const metadata = createMetadata({
  title: summary.title,
  description: summary.description,
  path: "/trauma-therapy"
});

export default function TraumaTherapyPage() {
  return (
    <>
      <PageHero
        eyebrow="Trauma"
        title="Trauma therapy for people who learned to survive first."
        description={summary.description}
        secondaryCta={{ href: "/about", label: "About the approach" }}
      />
      <section className="bg-linen py-16 sm:py-24">
        <Container className="space-y-16">
          <SplitSection
            title="When coping has become the cost."
            points={[
              "Support for shock, complex trauma, relational trauma and long-term stress.",
              "A paced approach that does not require telling everything immediately.",
              "Suitable for clients whose lives look functional while their systems remain on alert."
            ]}
          >
            <p>
              Trauma can live in the body, in relationships, in work, in sleep and in the quiet
              expectation that something will go wrong. You may have adapted so well that other people
              miss the strain it takes to keep going.
            </p>
            <p>
              Therapy offers a place to understand the impact of what happened, how you learned to
              manage it and how to build more room for choice, steadiness and connection now.
            </p>
          </SplitSection>
          <SplitSection
            title="For veterans seeking private therapy."
            reverse
            points={[
              "Confidential private therapy in an independent setting.",
              "Space for transition, identity, relationships and the after-effects of service.",
              "Work that respects strength while making room for vulnerability."
            ]}
          >
            <p>
              Some veterans come to therapy because life after service has exposed patterns that were
              once useful and are now painful. Others want a private space to work through trauma,
              anger, guilt, loss, anxiety or the difficulty of feeling fully at home in civilian life.
            </p>
          </SplitSection>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
