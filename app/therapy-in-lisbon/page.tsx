import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SplitSection } from "@/components/ContentSections";
import { createMetadata } from "@/lib/metadata";
import { pageSummaries } from "@/data/site";

const summary = pageSummaries["/therapy-in-lisbon"];

export const metadata = createMetadata({
  title: summary.title,
  description: summary.description,
  path: "/therapy-in-lisbon"
});

export default function TherapyInLisbonPage() {
  return (
    <>
      <PageHero
        eyebrow="Lisbon"
        title="Private therapy in Lisbon for English-speaking clients."
        description={summary.description}
        secondaryCta={{ href: "/online-therapy", label: "Explore online therapy" }}
      />
      <section className="bg-linen py-16 sm:py-24">
        <Container>
          <SplitSection
            title="Therapy for the complexity of living abroad."
            points={[
              "In-person therapy for clients based in Lisbon.",
              "Support for expats, international professionals and couples.",
              "A calm private setting for work that needs depth and discretion."
            ]}
          >
            <p>
              Lisbon can offer beauty, possibility and reinvention. It can also intensify loneliness,
              uncertainty, relationship pressure and questions about who you are becoming away from
              familiar structures.
            </p>
            <p>
              In-person therapy offers a regular place to slow down, think clearly and work with the
              emotional patterns that travel with you, even when everything around you has changed.
            </p>
          </SplitSection>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
